import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { userEntity } from './../adapters/persistence/entities/UserEntity';
import 'dotenv/config';

if (!process.env.DATABASE_URL) throw new Error('A variável DATABASE_URL não está definida');

const client = postgres(process.env.DATABASE_URL);

export const db = drizzle(client, { schema: { userEntity } });
