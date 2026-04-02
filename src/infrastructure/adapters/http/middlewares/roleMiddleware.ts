import type { FastifyReply, FastifyRequest } from 'fastify';
import { ForbiddenAccessError } from '../../../../application/errors/ForbiddenAccessError';
import type { UserRole } from '../../../../domain/models/UserModel';

export const ensureRole = (allowedRoles: UserRole[]) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const userRole = request.user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) throw new ForbiddenAccessError();
  };
};
