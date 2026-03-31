import z from 'zod';

export const uuidParamSchema = z.object({
  id: z.uuid('O id informado possui formato inválido'),
});

export type UUIDParamDTO = z.infer<typeof uuidParamSchema>;
