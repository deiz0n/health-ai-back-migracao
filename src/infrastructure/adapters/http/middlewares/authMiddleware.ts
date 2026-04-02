import type { FastifyReply, FastifyRequest } from 'fastify';
import { JwtTokenManagerAdapter } from '../../auth/JwtTokenManagerAdapter';
import { InvalidTokenError } from '../../../../application/errors/InvalidTokenError';

const tokenManager = new JwtTokenManagerAdapter();

export const ensureAuthenticated = async (request: FastifyRequest, reply: FastifyReply) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new InvalidTokenError('Token não fornecido.');

  const [, token] = authHeader.split(' ');

  const decoded = tokenManager.verify(token!) as any;
  request.user = { id: decoded.sub as string, role: decoded.role };
};
