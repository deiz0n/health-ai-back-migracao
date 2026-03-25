import fastify from 'fastify';
import 'dotenv/config';
import { DrizzleMedicoRepository } from './infrastructure/adapters/persistence/DrizzleMedicoRepository';
import { ExcluirMedicoUseCase } from './application/use-cases/ExcluirMedicoUseCase';
import { ListarTodosMedicosUseCase } from './application/use-cases/ListarTodosMedicosUseCase';
import { RegistrarMedicoUseCase } from './application/use-cases/RegistrarMedicoUseCase';
import { MedicoRestController } from './infrastructure/http/MedicoRestController';
import { medicoRoutes } from './infrastructure/http/medicoRoutes';

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

const medicoRepository = new DrizzleMedicoRepository();

const excluirMedicoUseCase = new ExcluirMedicoUseCase(medicoRepository);
const listarMedicosUseCase = new ListarTodosMedicosUseCase(medicoRepository);
const registrarMedicoUseCase = new RegistrarMedicoUseCase(medicoRepository);

const medicoController = new MedicoRestController(
  excluirMedicoUseCase,
  listarMedicosUseCase,
  registrarMedicoUseCase,
);

app.register(async (instance) => {
  await medicoRoutes(instance, medicoController);
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
