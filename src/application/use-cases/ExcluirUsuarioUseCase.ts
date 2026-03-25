import { UsuarioNaoEncontradoError } from '../errors/UsuarioNaoEncontradoError';
import type { IUsuarioRepositoryPort } from '../ports/IUsuarioRepositoryPort';

export class ExcluirUsuarioUseCase {
  constructor(private repository: IUsuarioRepositoryPort) {}

  public async execute(usuarioId: string): Promise<void> {
    const usuario = await this.repository.buscarPorId(usuarioId);

    if (!usuario)
      throw new UsuarioNaoEncontradoError(`O usuário com id ${usuarioId} não foi encontrado`);

    await this.repository.excluir(usuarioId);
  }
}
