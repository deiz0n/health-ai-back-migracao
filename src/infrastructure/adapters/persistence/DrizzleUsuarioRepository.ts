import { eq } from 'drizzle-orm';
import type { IUsuarioRepositoryPort } from '../../../application/ports/IUsuarioRepositoryPort';
import { UsuarioModel } from '../../../domain/UsuarioModel';
import { db } from '../../database';
import { UsuarioSchema } from './UsuarioSchema';

export class DrizzleUsuarioRepository implements IUsuarioRepositoryPort {
  async excluir(usuarioId: string): Promise<void> {
    await db.delete(UsuarioSchema).where(eq(UsuarioSchema.id, usuarioId));
  }

  async listarTodos(): Promise<UsuarioModel[]> {
    const resultado = await db.select().from(UsuarioSchema);

    return resultado.map(
      (usuario) =>
        new UsuarioModel(
          usuario.id,
          usuario.nome,
          usuario.sobrenome,
          usuario.crm,
          usuario.email,
          usuario.createdAt.toDateString(),
          usuario.updatedAt.toISOString(),
        ),
    );
  }

  async buscarPorId(usuarioId: string): Promise<UsuarioModel | null> {
    const resultado = await db.select().from(UsuarioSchema).where(eq(UsuarioSchema.id, usuarioId));

    if (resultado.length === 0) return null;

    const model = resultado[0]!;

    return new UsuarioModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }

  async buscarPorCpf(cpf: string): Promise<UsuarioModel | null> {
    const resultado = await db.select().from(UsuarioSchema).where(eq(UsuarioSchema.cpf, cpf));

    if (resultado.length === 0) return null;

    const model = resultado[0]!;

    return new UsuarioModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }

  async buscarPorEmail(email: string): Promise<UsuarioModel | null> {
    const resultado = await db.select().from(UsuarioSchema).where(eq(UsuarioSchema.email, email));

    if (resultado.length === 0) return null;

    const model = resultado[0]!;

    return new UsuarioModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }

  async buscarPorCrm(crm: string): Promise<UsuarioModel | null> {
    const resultado = await db.select().from(UsuarioSchema).where(eq(UsuarioSchema.crm, crm));

    if (resultado.length === 0) return null;

    const model = resultado[0]!;

    return new UsuarioModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }

  async salvar(usuario: UsuarioModel): Promise<UsuarioModel> {
    const resultado = await db
      .insert(UsuarioSchema)
      .values({
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email,
        senha: usuario.senha ?? '',
        crm: usuario.crm,
        cpf: usuario.cpf ?? null,
      })
      .returning();

    const model = resultado[0]!;

    return new UsuarioModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }
}
