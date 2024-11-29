import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().min(5).email('Email not valid'),
    password: z.string().min(4),
})
