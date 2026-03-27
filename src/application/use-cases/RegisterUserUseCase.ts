import type { UserModel } from '../../domain/models/UserModel';

export interface RegisterUserUseCase {
  execute(user: UserModel): UserModel;
}
