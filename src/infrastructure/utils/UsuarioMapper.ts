import type { InferSelectModel } from 'drizzle-orm';
import { UsuarioModel } from '../../domain/UsuarioModel';
import type { usuarioSchema } from '../adapters/persistence/UsuarioSchema';

type UsuarioRow = InferSelectModel<typeof usuarioSchema>;

export const toModel = (usuario: UsuarioRow): UsuarioModel => {
  return {
    id: usuario.id,
    nome: usuario.nome,
    sobrenome: usuario.sobrenome,
    crm: usuario.crm,
    email: usuario.email,
    senha: usuario.senha,
    cpf: usuario.cpf ?? undefined,
    createdAt: usuario.createdAt,
    updatedAt: usuario.updatedAt,
  };
};
