import type { MedicoModel } from '../../domain/MedicoModel';

export interface ListarTodosMedicosUseCase {
  execute(): MedicoModel[];
}
