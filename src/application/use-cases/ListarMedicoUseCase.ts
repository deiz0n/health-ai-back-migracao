import type { MedicoModel } from '../../domain/MedicoModel';

export interface ListarMedicoUseCase {
  execute(medicoId: string): MedicoModel;
}
