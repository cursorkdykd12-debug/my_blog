import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** post.id (예: "2026/02/22/test-post")에서 URL 경로 구성요소 추출 */
export function parsePostId(id: string): { year: string; month: string; day: string; slug: string } {
  const parts = id.split('/');
  return {
    year: parts[0] ?? '',
    month: parts[1] ?? '',
    day: parts[2] ?? '',
    slug: parts.slice(3).join('/') || parts[3] || id,
  };
}

/** base 경로를 포함한 URL 생성 (GitHub Pages 등 서브경로 배포용) */
export function withBase(path: string, base: string = ''): string {
  if (!base || base === '/') return path.startsWith('/') ? path : `/${path}`;
  const b = base.replace(/\/$/, '');
  const p = path.startsWith('/') ? path.slice(1) : path;
  return `${b}/${p}`;
}

/** 블로그 글 상세 페이지 URL 생성 */
export function getPostUrl(id: string, basePath = ''): string {
  const { year, month, day, slug } = parsePostId(id);
  return withBase(`/blog/${year}/${month}/${day}/${slug}/`, basePath);
}

export function getPostsByMonth(posts: BlogPost[]) {
  const byMonth = new Map<string, BlogPost[]>();
  for (const post of posts) {
    const key = `${post.data.pubDate.getFullYear()}-${String(post.data.pubDate.getMonth() + 1).padStart(2, '0')}`;
    const list = byMonth.get(key) ?? [];
    list.push(post);
    byMonth.set(key, list);
  }
  // 정렬: 최신 월 먼저
  return Array.from(byMonth.entries()).sort(([a], [b]) => b.localeCompare(a));
}

export function formatMonthKey(key: string): string {
  const [year, month] = key.split('-');
  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  return `${year}년 ${monthNames[parseInt(month, 10) - 1]}`;
}

export function getAllTags(posts: BlogPost[]): { tag: string; count: number }[] {
  const map = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      map.set(tag, (map.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(map.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllCategories(posts: BlogPost[]): { category: string; count: number }[] {
  const map = new Map<string, number>();
  for (const post of posts) {
    const cat = post.data.category;
    map.set(cat, (map.get(cat) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}
