import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RegistrarUsuarioUseCase } from '../../application/use-cases/RegistrarUsuarioUseCase';
import { UsuarioModel } from '../../domain/UsuarioModel';
import type { ExcluirUsuarioUseCase } from '../../application/use-cases/ExcluirUsuarioUseCase';
import type { ListarUsuariosUseCase } from '../../application/use-cases/ListarUsuariosUseCase';
import { CriarUsuarioSchema } from '../dtos/CriarUsuarioDTO';
import { dtoToModel } from '../utils/UsuarioMapper';
import { UUIDParamsSchema } from '../dtos/UUIDParamsDTO';

export class UsuarioRestController {
  constructor(
    private excluirUsuario: ExcluirUsuarioUseCase,
    private listarUsuarios: ListarUsuariosUseCase,
    private registrarUsuario: RegistrarUsuarioUseCase,
  ) {}

  async excluir(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const { id } = UUIDParamsSchema.parse(request.params);
    await this.excluirUsuario.execute(id);
    return reply.status(204).send();
  }

  async listarTodos(request: FastifyRequest, reply: FastifyReply) {
    const usuarios = await this.listarUsuarios.execute();
    return reply.status(200).send(usuarios);
  }

  async registrar(request: FastifyRequest<{ Body: UsuarioModel }>, reply: FastifyReply) {
    const dadosValidados = CriarUsuarioSchema.parse(request.body);
    const usuario = await this.registrarUsuario.execute(dtoToModel(dadosValidados));
    return reply.status(201).send(usuario);
  }
}
