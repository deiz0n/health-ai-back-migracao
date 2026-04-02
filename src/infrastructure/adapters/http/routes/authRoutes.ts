import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { loginSchema } from '../dtos/LoginDTO';
import { authController } from '../../../composition/authComposer';

export const authRoutes: FastifyPluginAsyncZod = async (app) => {
  app.post('/auth/login', { schema: { body: loginSchema } }, authController.login);
};
