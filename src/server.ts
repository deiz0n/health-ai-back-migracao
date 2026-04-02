import fastify from 'fastify';
import { errorHandler } from './infrastructure/adapters/http/errorHandler';
import { userRoutes } from './infrastructure/adapters/http/routes/userRoutes';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import 'dotenv/config';
import { authRoutes } from './infrastructure/adapters/http/routes/authRoutes';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  },
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler);

import cors from '@fastify/cors';

app.register(cors, {
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

app.register(userRoutes, { prefix: '/api' });
app.register(authRoutes, { prefix: '/api' });

const port = Number(process.env.HEALTH_AI_API_PORT ?? 3000);
const host = process.env.HEALTH_AI_API_HOST ?? 'localhost';

app.listen({ port: port, host: host });
