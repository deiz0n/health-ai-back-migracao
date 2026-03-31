import { eq } from 'drizzle-orm';
import type { UserRepositoryPort } from '../../../../application/ports/UserRepositoryPort';
import { UserModel } from '../../../../domain/models/UserModel';
import { db } from '../../../database';
import { insertToModel, selectToModel } from '../../http/mappers/UserMapper';
import { userEntity, type UserInsert } from '../entities/UserEntity';

export class UserRepositoryAdapter implements UserRepositoryPort {
  async save(user: UserModel): Promise<UserModel> {
    const data: UserInsert = {
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      role: user.role,
      address: user.address,
      crm: user.crm,
      cpf: user.cpf,
    };

    const [result] = await db.insert(userEntity).values(data).returning();

    return insertToModel(result!);
  }

  async getAll(): Promise<UserModel[]> {
    const users = await db.select().from(userEntity);
    return users.map((user) => selectToModel(user));
  }

  async findById(id: string): Promise<UserModel | null> {
    const [result] = await db.select().from(userEntity).where(eq(userEntity.id, id));
    return result ? selectToModel(result) : null;
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const [result] = await db.select().from(userEntity).where(eq(userEntity.email, email));
    return result ? selectToModel(result) : null;
  }

  async findByCpf(cpf: string): Promise<UserModel | null> {
    const [result] = await db.select().from(userEntity).where(eq(userEntity.cpf, cpf));
    return result ? selectToModel(result) : null;
  }

  async findByCrm(crm: string): Promise<UserModel | null> {
    const [result] = await db.select().from(userEntity).where(eq(userEntity.crm, crm));
    return result ? selectToModel(result) : null;
  }

  async delete(id: string): Promise<void> {
    await db.delete(userEntity).where(eq(userEntity.id, id));
  }
}
