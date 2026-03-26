import fastify from 'fastify';
import 'dotenv/config';
import { DrizzleUsuarioRepository } from './infrastructure/adapters/persistence/DrizzleUsuarioRepository';
import { ExcluirUsuarioUseCase } from './application/use-cases/ExcluirUsuarioUseCase';
import { ListarUsuariosUseCase } from './application/use-cases/ListarUsuariosUseCase';
import { RegistrarUsuarioUseCase } from './application/use-cases/RegistrarUsuarioUseCase';
import { UsuarioRestController } from './infrastructure/http/UsuarioRestController';
import { usuarioRoutes } from './infrastructure/http/usuarioRoutes';
import { globalErrorHandler } from './infrastructure/http/globalErroHandler';

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

globalErrorHandler(app);

const usuarioRepository = new DrizzleUsuarioRepository();

const excluirUsuarioUseCase = new ExcluirUsuarioUseCase(usuarioRepository);
const listarUsuariosUseCase = new ListarUsuariosUseCase(usuarioRepository);
const registrarUsuarioUseCase = new RegistrarUsuarioUseCase(usuarioRepository);

const usuarioController = new UsuarioRestController(
  excluirUsuarioUseCase,
  listarUsuariosUseCase,
  registrarUsuarioUseCase,
);

app.register(async (instance) => {
  await usuarioRoutes(instance, usuarioController);
});

const start = async () => {
  try {
    const port = Number(process.env.HEALTH_AI_API_PORT);
    await app.listen({ port: port || 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
