import type { FastifyRequest, FastifyReply } from 'fastify';
import type { AuthenticateUserUseCase } from '../../../../application/use-cases/AuthenticateUserUseCase';
import type { LoginDTO } from '../dtos/LoginDTO';

export class AuthController {
  constructor(private readonly authenticateUserUseCase: AuthenticateUserUseCase) {}

  login = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as LoginDTO;
    const result = await this.authenticateUserUseCase.execute({ email, password });
    return reply.status(200).send(result);
  };
}
