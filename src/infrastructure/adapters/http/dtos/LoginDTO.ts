import z from 'zod';

export const loginSchema = z.object({
  email: z.email('Email inválido').nonempty('O campo email é obrigatório'),
  password: z.string().nonempty('O campo senha é obrigatório'),
});

export type LoginDTO = z.infer<typeof loginSchema>;
