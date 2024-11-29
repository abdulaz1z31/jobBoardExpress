import { z } from 'zod'

export const applicationSchema = z.object({
    user_id: z.uuid(),
    job_id: z.uuid(),
    resume_url: z.string().min(10),
    cover_letter: z.string().min(10),
    status: z.enum([
        'submitted',
        'reviewed',
        'interviewing',
        'hired',
        'rejected',
    ]),
})
