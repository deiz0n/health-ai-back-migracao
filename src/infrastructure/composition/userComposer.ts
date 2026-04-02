import { DeleteUserService } from '../../application/services/DeleteUserService';
import { GetAllUsersService } from '../../application/services/GetAllUsersService';
import { RegisterUserService } from '../../application/services/RegisterUserService';
import { UserController } from '../adapters/http/controllers/UserController';
import { UserRepositoryAdapter } from '../adapters/persistence/repositories/UserRepositoryAdapter';
import { BcryptHasherAdapter } from '../adapters/auth/BcryptHasherAdapter';

const repository = new UserRepositoryAdapter();
const passwordHasher = new BcryptHasherAdapter();

export const userController = new UserController(
  new RegisterUserService(repository, passwordHasher),
  new GetAllUsersService(repository),
  new DeleteUserService(repository),
);
