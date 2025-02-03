import { z } from 'zod';

export const getImageRequestSchema = z.object({
    params: z.object({
        id: z.string(),
    }),
});

export const getEventRequestSchema = z.object({
    params: z.object({
        id: z.string(),
    }),
});

export const getEventsRequestSchema = z.object({
    params: z.object({
    }),
});

