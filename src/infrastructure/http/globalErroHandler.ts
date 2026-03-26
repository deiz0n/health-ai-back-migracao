import type { FastifyInstance } from 'fastify';
import { UsuarioExistenteError } from '../../application/errors/UsuarioExistenteError';
import { UsuarioNaoEncontradoError } from '../../application/errors/UsuarioNaoEncontradoError';

export const globalErrorHandler = (app: FastifyInstance) => {
  app.setErrorHandler((error, request, reply) => {
    if (error instanceof UsuarioExistenteError)
      return reply.status(409).send({ erro: error.message });

    if (error instanceof UsuarioNaoEncontradoError)
      return reply.status(404).send({ erro: error.message });
  });
};
