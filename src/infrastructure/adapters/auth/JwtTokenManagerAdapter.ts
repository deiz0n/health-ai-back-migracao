import { InvalidTokenError } from '../../../application/errors/InvalidTokenError';
import type { TokenManagerPort } from '../../../application/ports/TokenManagerPort';
import jwt from 'jsonwebtoken';

export class JwtTokenManagerAdapter implements TokenManagerPort {
  private readonly secret = process.env.HEALTH_AI_API_JWT_SECRET!;

  generate(payload: any, expiresIn: string = '1d'): string {
    return jwt.sign(payload, this.secret, { expiresIn });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      throw new InvalidTokenError('Token inválido ou expirado.');
    }
  }
}
