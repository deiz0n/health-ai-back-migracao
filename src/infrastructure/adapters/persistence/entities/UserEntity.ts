import { pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { UserRole } from '../../../../domain/models/UserModel';

const roleValues = Object.values(UserRole) as [string, ...string[]];

const userRoleEnum = pgEnum('user_role', roleValues);

export const userEntity = pgTable('tb_user', {
  id: uuid('id').primaryKey().defaultRandom(),
  fullName: varchar('full_name').notNull(),
  email: varchar('email').notNull().unique(),
  password: varchar('senha').notNull(),
  role: userRoleEnum('role').default(UserRole.PATIENT),
  address: text('address'),
  crm: varchar('crm').unique(),
  cpf: varchar('cpf').unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type UserInsert = typeof userEntity.$inferInsert;
export type UserSelect = typeof userEntity.$inferSelect;
