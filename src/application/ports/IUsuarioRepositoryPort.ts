import type { UsuarioModel } from '../../domain/UsuarioModel';

export interface IUsuarioRepositoryPort {
  excluir(usuarioId: string): Promise<void>;
  listarTodos(): Promise<UsuarioModel[]>;
  buscarPorId(usuarioId: string): Promise<UsuarioModel | null>;
  buscarPorCpf(cpf: string): Promise<UsuarioModel | null>;
  buscarPorEmail(email: string): Promise<UsuarioModel | null>;
  buscarPorCrm(crm: string): Promise<UsuarioModel | null>;
  salvar(usuario: UsuarioModel): Promise<UsuarioModel>;
}
