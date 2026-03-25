import { MedicoNaoEncontradoError } from '../errors/MedicoNaoEncontradoError';
import type { IMedicoRepository } from '../ports/IMedicoRepository';

export class ExcluirMedicoUseCase {
  constructor(private repository: IMedicoRepository) {}

  public async execute(medicoId: string): Promise<void> {
    const medico = await this.repository.buscarPorId(medicoId);

    if (!medico)
      throw new MedicoNaoEncontradoError(`O medico com id ${medicoId} não foi encontrado`);

    await this.repository.excluir(medicoId);
  }
}
