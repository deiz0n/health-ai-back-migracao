import { AuthenticateUserService } from '../../application/services/AuthenticateUserService';
import { BcryptHasherAdapter } from '../adapters/auth/BcryptHasherAdapter';
import { JwtTokenManagerAdapter } from '../adapters/auth/JwtTokenManagerAdapter';
import { AuthController } from '../adapters/http/controllers/AuthController';
import { UserRepositoryAdapter } from '../adapters/persistence/repositories/UserRepositoryAdapter';

const repository = new UserRepositoryAdapter();

const passwordHasher = new BcryptHasherAdapter();
const tokenManager = new JwtTokenManagerAdapter();

const authenticateUserService = new AuthenticateUserService(
  repository,
  passwordHasher,
  tokenManager,
);

export const authController = new AuthController(authenticateUserService);
