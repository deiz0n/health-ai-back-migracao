import { UserModel, UserRole } from '../../domain/models/UserModel';
import type { UserInsert, UserSelect } from '../adapters/persistence/entities/UserEntity';

export const selectToModel = (user: UserSelect): UserModel => {
  return new UserModel(
    user.fullName,
    user.email,
    user.password,
    user.role as UserRole,
    user.address ?? undefined,
    user.crm ?? undefined,
    user.cpf ?? undefined,
    user.createdAt?.toISOString(),
    user.updatedAt?.toISOString(),
    user.id,
  );
};

export const insertToModel = (user: UserInsert): UserModel => {
  return new UserModel(
    user.fullName,
    user.email,
    user.password,
    user.role as UserRole,
    user.address ?? undefined,
    user.crm ?? undefined,
    user.cpf ?? undefined,
    user.createdAt?.toISOString(),
    user.updatedAt?.toISOString(),
    user.id,
  );
};
