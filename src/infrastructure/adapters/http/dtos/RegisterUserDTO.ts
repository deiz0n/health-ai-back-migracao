import z from 'zod';
import { UserRole } from '../../../../domain/models/UserModel';

export const registerUserSchema = z.object({
  fullName: z.string().min(10, 'O nome completo precisa conter ao menos 10 caracteres').nonempty(),
  email: z.email('Email inválido').nonempty(),
  password: z.string().min(6, 'A senha precisa conter ao menos 6 caracteres'),
  role: z.enum(Object.values(UserRole)),
  address: z.string().optional(),
  crm: z.string().optional(),
  cpf: z.string().optional(),
});

export type RegisterUserDTO = z.infer<typeof registerUserSchema>;
