import type { LoginDTO } from '../../infrastructure/adapters/http/dtos/LoginDTO';
import type { TokenResponseDTO } from '../../infrastructure/adapters/http/dtos/TokenResponseDTO';

export interface AuthenticateUserUseCase {
  execute(credentials: LoginDTO): Promise<TokenResponseDTO>;
}
