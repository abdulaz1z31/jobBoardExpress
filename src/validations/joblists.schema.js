import { z } from 'zod'
export const joblistingScheme = z.object({
    title: z.string(),
    description: z.string(),
    company_id: z.string().uuid(),
    category_id: z.string().uuid(),
    location: z.string(),
    salaryRange: z.object({
        min: z.number().nonnegative(),
        max: z
            .number()
            .nonnegative()
            .refine((val, ctx) => val >= ctx.parent.min, {
                message: 'Max must be greater than or equal to Min',
            }),
    }),
    employmentType: z.enum([
        'full_time',
        'part_time',
        'contract',
        'temporary',
        'intership',
    ]),
    requirements: z.object({
        education: z.string(),
        skills: z.array(z.string()),
    }),
    status: z.enum(['open', 'closed']).default('open'),
    postedBy: z.string().uuid(),
})
