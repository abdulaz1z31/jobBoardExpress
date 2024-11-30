import { z } from 'zod'
export const categoriesScheme = z.object({
    name: z.string().minLength(5),
    description: z.string().minLength(5),
})
