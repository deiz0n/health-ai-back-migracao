import type { FastifyInstance } from 'fastify';
import { ZodError } from 'zod';
import { UsuarioExistenteError } from '../../application/errors/UsuarioExistenteError';
import { UsuarioNaoEncontradoError } from '../../application/errors/UsuarioNaoEncontradoError';

export const globalErrorHandler = (app: FastifyInstance) => {
  app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
      const erros = error.issues.map((issue) => ({
        campo: issue.path.join('.'),
        mensagem: issue.message,
      }));
      return reply.status(400).send({ erro: 'Dados inválidos', detalhes: erros });
    }

    if (error instanceof UsuarioExistenteError)
      return reply.status(409).send({ erro: error.message });

    if (error instanceof UsuarioNaoEncontradoError)
      return reply.status(404).send({ erro: error.message });

    if (error instanceof ZodError) return reply.status(400).send({ erro: error.message });

    return reply.status(500).send({ erro: 'Erro interno do servidor' });
  });
};
