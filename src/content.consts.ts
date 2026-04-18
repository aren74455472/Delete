// 1. 总览
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        category: z.string(),
        styleTag: z.string(), // 指定哪个标签决定这篇文章的样式
        tags: z.array(z.string()), // 依然可以有多个普通标签
        description: z.string().optional(),
    }),
});

export const collections = { 'posts': postsCollection };

// 2. 标签配置：标签自己的字体和颜色
export const TAG_CONFIG = {
    'CP相关': { color: '#FFB7B7', font: 'serif' },
    '汉化': { color: '#D1BBFF', font: 'monospace' },
    '日记': { color: '#B2F2BB', font: 'cursive' },

    'default': { color: '#E9ECEF', font: 'inherit' }
};

// 3. 板块配置：首页四个大卡片的颜色
export const HERO_SECTIONS = [
    {
        id: 'creation',
        title: 'Creation',
        chinese: '创作',
        desc: '产出 / 约稿',
        color: '#ff6b6b',
        link: '/creation'
    },
    {
        id: 'daily',
        title: 'Daily',
        chinese: '日常',
        desc: '游戏 / 日记',
        color: '#51cf66',
        link: '/daily'
    },
    {
        id: 'media',
        title: 'Media',
        chinese: '照片',
        desc: '音乐剧 / COS / 旅游',
        color: '#339af0',
        link: '/media'
    },
    {
        id: 'projects',
        title: 'Projects',
        chinese: '项目',
        desc: '汉化 / 网页开发',
        color: '#cc5de8',
        link: '/projects'
    }
];