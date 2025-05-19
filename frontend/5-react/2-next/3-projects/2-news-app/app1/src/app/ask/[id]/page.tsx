import { getNewsItem } from '@/lib/api';
import Link from 'next/link';

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const news = await getNewsItem(params.id);

  return (
    <main className="container mx-auto p-4">
      <Link href="/ask" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Ask
      </Link>
      <article className="mt-4">
        <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
        <div className="text-gray-600 mb-6">
          <span>{news.points} points</span>
          <span className="mx-2">•</span>
          <span>by {news.user}</span>
          <span className="mx-2">•</span>
          <span>{news.time_ago}</span>
        </div>
        {news.url && (
          <div className="mb-6">
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {news.domain}
            </a>
          </div>
        )}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Comments ({news.comments_count})</h2>
          {/* 댓글 기능은 추후 구현 */}
        </div>
      </article>
    </main>
  );
} 