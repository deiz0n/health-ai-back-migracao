import type { FastifyInstance } from 'fastify';
import type { MedicoRestController } from './MedicoRestController';
import type { MedicoModel } from '../../domain/MedicoModel';

export async function medicoRoutes(app: FastifyInstance, medicoController: MedicoRestController) {
  app.delete<{ Params: { medicoId: string } }>('/medicos/:medicoId', async (request, reply) => {
    return medicoController.excluir(request, reply);
  });

  app.get('/medicos', async (request, reply) => {
    return medicoController.listarTodos(request, reply);
  });

  app.post<{ Body: MedicoModel }>('/medicos', async (request, reply) => {
    return medicoController.registrar(request, reply);
  });
}
