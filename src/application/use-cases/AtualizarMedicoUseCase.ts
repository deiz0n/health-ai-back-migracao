import type { MedicoModel } from '../../domain/MedicoModel';

export interface AtualizarMedicoUseCase {
  execute(medicoId: string, model: MedicoModel): MedicoModel;
}
