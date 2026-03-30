import type { UserModel } from '../../domain/models/UserModel';

export interface GetAllUsersUseCase {
  execute(): Promise<UserModel[]>;
}
