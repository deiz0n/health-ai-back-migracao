import type { FastifyInstance } from 'fastify';
import { registerUserSchema } from '../dtos/RegisterUserDTO';
import { uuidParamSchema } from '../dtos/UUIDParamDTO';
import { userController } from '../../../composition/userComposer';

export const userRoutes = (app: FastifyInstance) => {
  app.post('/users', { schema: { body: registerUserSchema } }, userController.register);
  app.get('/users', userController.getAll);
  app.delete('/users/:id', { schema: { params: uuidParamSchema } }, userController.delete);
};
