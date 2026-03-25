import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../adapters/persistence/UsuarioSchema';
import 'dotenv/config';

if (!process.env.DATABASE_URL) throw new Error('A variável DATABASE_URL não está definida');

const client = postgres(process.env.DATABASE_URL);

export const db = drizzle(client, { schema });
