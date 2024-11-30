import { z } from 'zod'
export const skillsScheme = z.object({
    name: z.string().minLength(5),
    category_id: z.string().uuid(),
})
