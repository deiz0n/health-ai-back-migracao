import { eq } from 'drizzle-orm';
import type { IUsuarioRepositoryPort } from '../../../application/ports/IUsuarioRepositoryPort';
import { UsuarioModel } from '../../../domain/UsuarioModel';
import { db } from '../../database';
import { usuarioSchema } from './UsuarioSchema';
import { rowToModel } from '../../utils/UsuarioMapper';

export class DrizzleUsuarioRepository implements IUsuarioRepositoryPort {
  async excluir(usuarioId: string): Promise<void> {
    await db.delete(usuarioSchema).where(eq(usuarioSchema.id, usuarioId));
  }

  async listarTodos(): Promise<UsuarioModel[]> {
    const resultado = await db.select().from(usuarioSchema);
    return resultado.map((usuario) => new UsuarioModel(rowToModel(usuario)));
  }

  async buscarPorId(usuarioId: string): Promise<UsuarioModel | null> {
    const resultado = await db.select().from(usuarioSchema).where(eq(usuarioSchema.id, usuarioId));
    if (resultado.length === 0) return null;
    return new UsuarioModel(rowToModel(resultado[0]!));
  }

  async buscarPorCpf(cpf: string): Promise<UsuarioModel | null> {
    const resultado = await db.select().from(usuarioSchema).where(eq(usuarioSchema.cpf, cpf));
    if (resultado.length === 0) return null;
    return new UsuarioModel(rowToModel(resultado[0]!));
  }

  async buscarPorEmail(email: string): Promise<UsuarioModel | null> {
    const resultado = await db.select().from(usuarioSchema).where(eq(usuarioSchema.email, email));
    if (resultado.length === 0) return null;
    return new UsuarioModel(rowToModel(resultado[0]!));
  }

  async buscarPorCrm(crm: string): Promise<UsuarioModel | null> {
    const resultado = await db.select().from(usuarioSchema).where(eq(usuarioSchema.crm, crm));
    if (resultado.length === 0) return null;
    return new UsuarioModel(rowToModel(resultado[0]!));
  }

  async salvar(usuario: UsuarioModel): Promise<UsuarioModel> {
    const resultado = await db
      .insert(usuarioSchema)
      .values({
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email,
        senha: usuario.senha ?? '',
        crm: usuario.crm,
        cpf: usuario.cpf ?? undefined,
      })
      .returning();

    return new UsuarioModel(rowToModel(resultado[0]!));
  }
}
