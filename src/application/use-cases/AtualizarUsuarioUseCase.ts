import type { UsuarioModel } from '../../domain/UsuarioModel';

export interface AtualizarUsuarioUseCase {
  execute(medicoId: string, model: UsuarioModel): UsuarioModel;
}
