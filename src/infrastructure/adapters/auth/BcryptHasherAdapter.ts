import type { PasswordHasherPort } from '../../../application/ports/PasswordHasherPort';
import 'dotenv/config';
import bcrypt from 'bcrypt';

export class BcryptHasherAdapter implements PasswordHasherPort {
  saltRounds = Number(process.env.SALT_ROUND) ?? 10;

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
