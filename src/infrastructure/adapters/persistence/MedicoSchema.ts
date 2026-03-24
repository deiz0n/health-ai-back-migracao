import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const medicoSchema = pgTable('tb_medico', {
  id: serial('id').primaryKey(),

  nome: varchar('nome').notNull(),

  sobrenome: varchar('sobrenome').notNull(),

  email: varchar('email').notNull().unique(),

  senha: varchar('senha').notNull(),

  crm: varchar('crm').notNull().unique(),

  cpf: varchar('cpf').unique(),

  createdAt: timestamp('created_at').defaultNow().notNull(),

  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
