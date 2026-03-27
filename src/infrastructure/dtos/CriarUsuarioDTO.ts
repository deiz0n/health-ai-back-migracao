import z from 'zod';

export const CriarUsuarioSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(3, 'O nome deve conter no mínimo 3 caracteres'),
  sobrenome: z.string().min(3, 'O sobrenome deve conter no mínimo 3 caracteres'),
  email: z.email('Email inválido').nonempty('O campo email é obrigatório'),
  senha: z.string().nonempty('O campo senha é obrigatório'),
  crm: z
    .string()
    .regex(/^\d{4,6}-[A-Z]{2}$/, 'CRM inválido. Use o formato 00000-AA')
    .optional(),
  cpf: z.string().optional(),
});

export type CriarUsuarioDTO = z.infer<typeof CriarUsuarioSchema>;
