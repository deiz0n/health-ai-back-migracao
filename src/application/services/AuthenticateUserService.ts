import type { LoginDTO } from '../../infrastructure/adapters/http/dtos/LoginDTO';
import { TokenResponseDTO } from '../../infrastructure/adapters/http/dtos/TokenResponseDTO';

import { InvalidCredentialsError } from '../errors/InvalidCredentialsError';
import type { PasswordHasherPort } from '../ports/PasswordHasherPort';
import type { TokenManagerPort } from '../ports/TokenManagerPort';
import type { UserRepositoryPort } from '../ports/UserRepositoryPort';
import type { AuthenticateUserUseCase } from '../use-cases/AuthenticateUserUseCase';

export class AuthenticateUserService implements AuthenticateUserUseCase {
  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly passwordHasher: PasswordHasherPort,
    private readonly tokenManager: TokenManagerPort,
  ) {}

  async execute(credentials: LoginDTO): Promise<TokenResponseDTO> {
    const user = await this.userRepository.findByEmail(credentials.email);
    if (!user) throw new InvalidCredentialsError();

    const isPasswordValid = await this.passwordHasher.compare(credentials.password, user.password);
    if (!isPasswordValid) throw new InvalidCredentialsError();

    const token = this.tokenManager.generate({ sub: user.id });

    return new TokenResponseDTO(token);
  }
}
