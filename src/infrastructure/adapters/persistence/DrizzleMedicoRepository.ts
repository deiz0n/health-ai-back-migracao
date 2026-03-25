import { eq } from 'drizzle-orm';
import type { IMedicoRepository } from '../../../application/ports/IMedicoRepository';
import { MedicoModel } from '../../../domain/MedicoModel';
import { db } from '../../database';
import { medicoSchema } from './MedicoSchema';

export class DrizzleMedicoRepository implements IMedicoRepository {
  async excluir(medicoId: string): Promise<void> {
    await db.delete(medicoSchema).where(eq(medicoSchema.id, medicoId));
  }

  async listarTodos(): Promise<MedicoModel[]> {
    const resultado = await db.select().from(medicoSchema);

    return resultado.map(
      (medico) =>
        new MedicoModel(
          medico.id,
          medico.nome,
          medico.sobrenome,
          medico.crm,
          medico.email,
          medico.createdAt.toDateString(),
          medico.updatedAt.toISOString(),
        ),
    );
  }

  async buscarPorId(medicoId: string): Promise<MedicoModel | null> {
    const resultado = await db.select().from(medicoSchema).where(eq(medicoSchema.id, medicoId));

    if (resultado.length === 0) return null;

    const model = resultado[0]!;

    return new MedicoModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }

  async buscarPorCpf(cpf: string): Promise<MedicoModel | null> {
    const resultado = await db.select().from(medicoSchema).where(eq(medicoSchema.cpf, cpf));

    if (resultado.length === 0) return null;

    const model = resultado[0]!;

    return new MedicoModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }

  async buscarPorEmail(email: string): Promise<MedicoModel | null> {
    const resultado = await db.select().from(medicoSchema).where(eq(medicoSchema.email, email));

    if (resultado.length === 0) return null;

    const model = resultado[0]!;

    return new MedicoModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }

  async buscarPorCrm(crm: string): Promise<MedicoModel | null> {
    const resultado = await db.select().from(medicoSchema).where(eq(medicoSchema.crm, crm));

    if (resultado.length === 0) return null;

    const model = resultado[0]!;

    return new MedicoModel(
      model.id,
      model.nome,
      model.sobrenome,
      model.crm,
      model.email,
      model.createdAt.toDateString(),
      model.updatedAt.toISOString(),
    );
  }

  async salvar(medico: MedicoModel): Promise<MedicoModel> {
    const resultado = await db
      .insert(medicoSchema)
      .values({
        nome: medico.nome,
        sobrenome: medico.sobrenome,
        email: medico.email,
        senha: medico.senha ?? '',
        crm: medico.crm,
        cpf: medico.cpf ?? null,
      })
      .returning();

    const model = resultado[0]!;

    return new MedicoModel(
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
