import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.any(),      // 暂时改成 any，不管什么格式都放行
        category: z.string(),
        styleTag: z.string(),
        tags: z.array(z.any()), // 暂时改成 any
        description: z.string().optional(),
    }),
});

export const collections = {
    'posts': postsCollection,
};