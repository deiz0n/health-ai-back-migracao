import type { UserModel } from '../../domain/models/UserModel';

export interface FindUserByIdUseCase {
  execute(id: string): UserModel;
}
