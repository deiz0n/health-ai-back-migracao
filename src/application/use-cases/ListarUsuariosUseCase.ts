import type { UsuarioModel } from '../../domain/UsuarioModel';
import type { IUsuarioRepositoryPort } from '../ports/IUsuarioRepositoryPort';

export class ListarUsuariosUseCase {
  constructor(private repository: IUsuarioRepositoryPort) {}

  public execute(): Promise<UsuarioModel[]> {
    return this.repository.listarTodos();
  }
}
