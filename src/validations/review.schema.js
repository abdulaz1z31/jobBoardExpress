import { z } from 'zod'

export const reviewSchema = z.object({
    company_id: z.uuid(),
    user_id: z.uuid(),
    rating: z.number(),
    comment: z.string().min(10),
    status: z.enum([
        'submitted',
        'reviewed',
        'interviewing',
        'hired',
        'rejected',
    ]),
})
