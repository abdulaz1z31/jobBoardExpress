import { z } from 'zod'

export const registerSchema = z.object({
    email: z
        .string()
        .min(5, { message: 'Email not valid' })
        .email('Email not valid'),
    password: z.string().min(8),
})
