import { z } from 'zod';

export const CategorizationResponseSchema = z.object({
  category: z.string(),
  answer: z.string(),
});

export type CategorizationResponse = z.infer<typeof CategorizationResponseSchema>;