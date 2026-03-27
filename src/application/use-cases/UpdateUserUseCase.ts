import type { UserModel } from '../../domain/models/UserModel';

export interface UpdateUserUseCase {
  execute(id: string, user: UserModel): UserModel;
}
