import type { InferSelectModel } from 'drizzle-orm';
import { UsuarioModel } from '../../domain/UsuarioModel';
import type { usuarioSchema } from '../adapters/persistence/UsuarioSchema';
import type { CriarUsuarioDTO } from '../dtos/CriarUsuarioDTO';

type UsuarioRow = InferSelectModel<typeof usuarioSchema>;

export const rowToModel = (usuario: UsuarioRow): UsuarioModel => {
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

export const dtoToModel = (usuario: CriarUsuarioDTO) => {
  return {
    id: usuario.id ?? '',
    nome: usuario.nome,
    sobrenome: usuario.sobrenome,
    email: usuario.email,
    senha: usuario.senha,
    crm: usuario.crm ?? '',
    cpf: usuario.cpf ?? '',
  };
};
