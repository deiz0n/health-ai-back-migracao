import { DeleteUserService } from '../../application/services/DeleteUserService';
import { GetAllUsersService } from '../../application/services/GetAllUsersService';
import { RegisterUserService } from '../../application/services/RegisterUserService';
import { UserController } from '../adapters/http/controllers/UserController';
import { UserRepositoryAdapter } from '../adapters/persistence/repositories/UserRepositoryAdapter';

const repository = new UserRepositoryAdapter();

export const userController = new UserController(
  new RegisterUserService(repository),
  new GetAllUsersService(repository),
  new DeleteUserService(repository),
);
