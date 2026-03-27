import z from 'zod';

export const UUIDParamsSchema = z.object({
  id: z.uuid('ID inválido'),
});

export type UUIDParamsDTO = z.infer<typeof UUIDParamsSchema>;
