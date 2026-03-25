import type { UsuarioModel } from '../../domain/UsuarioModel';

export interface ListarUsuarioUseCase {
  execute(medicoId: string): UsuarioModel;
}
