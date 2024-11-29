import { z } from 'zod'
export const joblistingScheme = z.object({
    title: z.string(),
    description: z.string(),
    company_id: z.number(),
    category_id: z.number(),
    location: z.string(),
    salaryRange: z.object({
        min: z.number().nonnegative(),
        max: z
            .number()
            .nonnegative()
            .refine((val, ctx) => val >= ctx.parent.min, {
                message: 'Max must be greater than or equal to Min',
            }),
        currency: z.string().optional(),
    }),
    employmentType: z.enum([
        'full_time',
        'part_time',
        'contract',
        'temporary',
        'intership',
    ]),
    requirements: z.record(z.any()),
    status: z.enum(['open', 'closed']).default('open'),
})
