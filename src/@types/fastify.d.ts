import { UserRole } from '../domain/models/UserModel';

declare module 'fastify' {
  interface FastifyRequest {
    user?: {
      id: string;
      role: UserRole;
    };
  }
}
