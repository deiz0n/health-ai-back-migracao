import { UserModel, UserRole } from '../../../../domain/models/UserModel';
import type { RegisterUserDTO } from '../dtos/RegisterUserDTO';
import { UserResponseDTO } from '../dtos/UserResponseDTO';
import type { UserInsert, UserSelect } from '../../persistence/entities/UserEntity';

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

export const dtoToModel = (user: RegisterUserDTO): UserModel => {
  return new UserModel(
    user.fullName,
    user.email,
    user.password,
    user.role as UserRole,
    user.address ?? undefined,
    user.crm ?? undefined,
    user.cpf ?? undefined,
  );
};

export const modelToResponseDTO = (user: UserModel): UserResponseDTO => {
  return new UserResponseDTO(
    user.id!,
    user.fullName,
    user.email,
    user.role,
    user.createdAt ?? undefined,
    user.updatedAt ?? undefined,
  );
};
