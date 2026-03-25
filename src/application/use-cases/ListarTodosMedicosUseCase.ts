import type { MedicoModel } from '../../domain/MedicoModel';
import type { IMedicoRepository } from '../ports/IMedicoRepository';

export class ListarTodosMedicosUseCase {
  constructor(private repository: IMedicoRepository) {}

  public execute(): Promise<MedicoModel[]> {
    return this.repository.listarTodos();
  }
}
