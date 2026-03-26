import { pgTable, uuid, timestamp, varchar } from 'drizzle-orm/pg-core';

export const usuarioSchema = pgTable('tb_usuario', {
  id: uuid('id').primaryKey().defaultRandom(),

  nome: varchar('nome').notNull(),

  sobrenome: varchar('sobrenome').notNull(),

  email: varchar('email').notNull().unique(),

  senha: varchar('senha').notNull(),

  crm: varchar('crm').notNull().unique(),

  cpf: varchar('cpf').unique(),

  createdAt: timestamp('created_at').defaultNow().notNull(),

  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
