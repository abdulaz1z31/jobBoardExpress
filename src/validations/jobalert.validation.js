import { z } from 'zod'
export const jobalertScheme = z.object({
    job_id: z.number(),
    user_id: z.number(),
})
