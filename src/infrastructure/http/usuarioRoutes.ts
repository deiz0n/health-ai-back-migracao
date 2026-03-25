import type { FastifyInstance } from 'fastify';
import type { UsuarioRestController } from './UsuarioRestController';
import type { UsuarioModel } from '../../domain/UsuarioModel';

export async function usuarioRoutes(app: FastifyInstance, medicoController: UsuarioRestController) {
  app.delete<{ Params: { usuarioId: string } }>('/usuarios/:usuarioId', async (request, reply) => {
    return medicoController.excluir(request, reply);
  });

  app.get('/usuarios', async (request, reply) => {
    return medicoController.listarTodos(request, reply);
  });

  app.post<{ Body: UsuarioModel }>('/usuarios', async (request, reply) => {
    return medicoController.registrar(request, reply);
  });
}
