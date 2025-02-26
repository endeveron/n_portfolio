import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters',
  }),
  email: z.string().email({
    message: 'Please provide a valid email',
  }),
  message: z.string().min(20, {
    message: 'Message must be at least 20 characters',
  }),
});

export type TContactFormData = z.infer<typeof contactFormSchema>;
