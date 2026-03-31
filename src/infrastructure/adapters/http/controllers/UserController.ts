import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RegisterUserUseCase } from '../../../../application/use-cases/RegisterUserUseCase';
import type { GetAllUsersUseCase } from '../../../../application/use-cases/GetAllUsersUseCase';
import type { DeleteUserUseCase } from '../../../../application/use-cases/DeleteUserUseCase';
import { dtoToModel, modelToResponseDTO } from '../mappers/UserMapper';
import type { RegisterUserDTO } from '../dtos/RegisterUserDTO';
import type { UUIDParamDTO } from '../dtos/UUIDParamDTO';

export class UserController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  register = async (request: FastifyRequest<{ Body: RegisterUserDTO }>, reply: FastifyReply) => {
    const user = dtoToModel(request.body);
    const result = await this.registerUserUseCase.execute(user);

    return reply.status(201).send(modelToResponseDTO(result));
  };

  getAll = async (request: FastifyRequest, reply: FastifyReply) => {
    const users = await this.getAllUsersUseCase.execute();
    const result = users.map((user) => modelToResponseDTO(user));

    return reply.status(200).send(result);
  };

  delete = async (request: FastifyRequest<{ Params: UUIDParamDTO }>, reply: FastifyReply) => {
    const { id } = request.params;
    await this.deleteUserUseCase.execute(id);
    return reply.status(204).send();
  };
}
