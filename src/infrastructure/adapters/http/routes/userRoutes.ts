import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { registerUserSchema } from '../dtos/RegisterUserDTO';
import { uuidParamSchema } from '../dtos/UUIDParamDTO';
import { userController } from '../../../composition/userComposer';
import { ensureAuthenticated } from '../middlewares/authMiddleware';

export const userRoutes: FastifyPluginAsyncZod = async (app) => {
  app.post('/users', { schema: { body: registerUserSchema } }, userController.register);
  app.get('/users', { preHandler: [ensureAuthenticated] }, userController.getAll);
  app.delete(
    '/users/:id',
    { schema: { params: uuidParamSchema }, preHandler: [ensureAuthenticated] },
    userController.delete,
  );
};
