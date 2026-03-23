import type { MedicoModel } from '../../domain/MedicoModel';

export interface RegistrarMedicoUseCase {
  execute(model: MedicoModel): MedicoModel;
}
