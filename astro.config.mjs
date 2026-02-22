// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { rehypePrettyCode } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
// 개발(astro dev) 시 base='/' 로 로컬에서 바로 접근. 빌드 시 BASE_PATH 또는 '/my_blog' 사용
const isDev = process.env.NODE_ENV !== 'production';
const base = isDev ? '' : (process.env.BASE_PATH ?? '/my_blog');
export default defineConfig({
  site: 'https://cursorkdykd12-debug.github.io',
  base: base || '/',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: true,
        },
      ],
    ],
  },
  output: 'static',
});
