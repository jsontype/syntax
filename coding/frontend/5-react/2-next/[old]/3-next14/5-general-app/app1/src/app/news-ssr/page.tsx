import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  url: string;
  points: number;
  user: string;
  time_ago: string;
  comments_count: number;
  type: string;
  domain: string;
}

async function fetchNews() {
  const response = await fetch('https://api.hnpwa.com/v0/news.json');
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await response.json();
  return data;
}

export default async function NewsList() {
  const news = await fetchNews();

  return (
    <div>
      <div className="news-list">
        {news.map((newsItem: NewsItem) => (
          <div key={newsItem.id} className="news-card">
            <Link href={newsItem.url}>
              <h2 className="text-lg font-bold hover:opacity-80">{newsItem.title}</h2>
            </Link>
            <p>User ID: {newsItem.user}</p>
            <p>Points: {newsItem.points}</p>
            <p>Comments: {newsItem.comments_count}</p>
            <p>Time Ago: {newsItem.time_ago}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
