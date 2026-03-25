import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RegistrarUsuarioUseCase } from '../../application/use-cases/RegistrarUsuarioUseCase';
import type { UsuarioModel } from '../../domain/UsuarioModel';
import type { ExcluirUsuarioUseCase } from '../../application/use-cases/ExcluirUsuarioUseCase';
import type { ListarUsuariosUseCase } from '../../application/use-cases/ListarUsuariosUseCase';

export class UsuarioRestController {
  constructor(
    private excluirUsuario: ExcluirUsuarioUseCase,
    private listarUsuarios: ListarUsuariosUseCase,
    private registrarUsuario: RegistrarUsuarioUseCase,
  ) {}

  async excluir(request: FastifyRequest<{ Params: { usuarioId: string } }>, reply: FastifyReply) {
    const { usuarioId } = request.params;
    await this.excluirUsuario.execute(usuarioId);
    return reply.status(204).send();
  }

  async listarTodos(request: FastifyRequest, reply: FastifyReply) {
    const usuarios = await this.listarUsuarios.execute();
    return reply.status(200).send(usuarios);
  }

  async registrar(request: FastifyRequest<{ Body: UsuarioModel }>, reply: FastifyReply) {
    const usuario = await this.registrarUsuario.execute(request.body);
    return reply.status(201).send(usuario);
  }
}
