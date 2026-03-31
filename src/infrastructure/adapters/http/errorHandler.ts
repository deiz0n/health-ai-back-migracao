import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { ResourceAlreadyExistsError } from '../../../application/errors/ResourceAlreadyExistsError';
import { ResourceNotFoundError } from '../../../application/errors/ResourceNotFoundError';
import { ErrorDTO } from './dtos/ErrorDTO';

export const errorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
  if (error instanceof ResourceNotFoundError)
    return reply
      .status(404)
      .send(new ErrorDTO(404, 'Recurso não encontrado', 'NOT_FOUND', error.message));

  if (error instanceof ResourceAlreadyExistsError)
    return reply
      .status(409)
      .send(new ErrorDTO(409, 'Recurso já existente', 'CONFLICT', error.message));

  if (error.validation)
    return reply
      .status(400)
      .send(new ErrorDTO(400, 'Dados inválidos', 'BAD_REQUEST', error.message));

  console.error(error);
  return reply
    .status(500)
    .send(new ErrorDTO(500, 'Erro interno do servidor', 'INTERNAL_SERVER_ERROR', error.message));
};
