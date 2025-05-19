import { getNews } from '@/lib/api'
import Link from 'next/link'

export default async function Home() {
  const news = await getNews()

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">News</h1>
        <Link href="/ask" className="text-blue-500 hover:underline">
          Ask
        </Link>
      </div>
      <div className="space-y-4">
        {news.map((item) => (
          <article key={item.id} className="border p-4 rounded-lg hover:bg-gray-50 group">
            <Link href={`/news/${item.id}`} className="block">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors">{item.title}</h2>
              <div className="text-sm text-gray-600">
                <span>{item.points} points</span>
                <span className="mx-2">•</span>
                <span>by {item.user}</span>
                <span className="mx-2">•</span>
                <span>{item.time_ago}</span>
                <span className="mx-2">•</span>
                <span>{item.comments_count} comments</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
