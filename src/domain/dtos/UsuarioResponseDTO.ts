import type { UsuarioModel } from '../UsuarioModel';

export class UsuarioResponseDTO {
  id: string;
  nome: string;
  sobrenome: string;
  crm: string;
  createdAt: string;
  updatedAt: string;

  constructor(usuario: UsuarioModel) {
    ((this.id = usuario.id),
      (this.nome = usuario.nome),
      (this.sobrenome = usuario.sobrenome),
      (this.crm = usuario.crm),
      (this.createdAt = usuario.createdAt!.toISOString()),
      (this.updatedAt = usuario.updatedAt!.toISOString()));
  }
}
