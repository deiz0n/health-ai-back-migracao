import fastify from 'fastify';
import 'dotenv/config';

const app = fastify({ logger: true });

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
