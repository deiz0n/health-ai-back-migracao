import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RegistrarMedicoUseCase } from '../../application/use-cases/RegistrarMedicoUseCase';
import type { MedicoModel } from '../../domain/MedicoModel';
import type { ExcluirMedicoUseCase } from '../../application/use-cases/ExcluirMedicoUseCase';
import type { ListarTodosMedicosUseCase } from '../../application/use-cases/ListarTodosMedicosUseCase';

export class MedicoRestController {
  constructor(
    private excluirMedico: ExcluirMedicoUseCase,
    private listarMedicos: ListarTodosMedicosUseCase,
    private registrarMedico: RegistrarMedicoUseCase,
  ) {}

  async excluir(request: FastifyRequest<{ Params: { medicoId: string } }>, reply: FastifyReply) {
    const { medicoId } = request.params;
    await this.excluirMedico.execute(medicoId);
    return reply.status(204).send();
  }

  async listarTodos(request: FastifyRequest, reply: FastifyReply) {
    const medicos = await this.listarMedicos.execute();
    return reply.status(200).send(medicos);
  }

  async registrar(request: FastifyRequest<{ Body: MedicoModel }>, reply: FastifyReply) {
    const medico = await this.registrarMedico.execute(request.body);
    return reply.status(201).send(medico);
  }
}
