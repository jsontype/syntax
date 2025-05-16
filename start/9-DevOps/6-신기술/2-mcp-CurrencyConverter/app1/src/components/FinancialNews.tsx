import React, { useState, useEffect } from 'react';
import { newsService } from '../services/api';
import { NewsArticle, NewsResponse } from '../types';

interface FinancialNewsProps {
  currencyCode?: string;
}

const FinancialNews: React.FC<FinancialNewsProps> = ({ currencyCode }) => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyCode]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);

      let data: NewsResponse;

      // 통화 코드가 있으면 해당 통화 관련 뉴스 가져오기
      if (currencyCode) {
        data = await newsService.getCurrencyNews(currencyCode);
      }
      // 검색어가 있으면 해당 키워드 검색
      else if (query.trim()) {
        data = await newsService.getNewsByKeyword(query);
      }
      // 기본은 금융 뉴스
      else {
        data = await newsService.getFinancialNews();
      }

      setNews(data.articles || []);
    } catch (err) {
      setError('뉴스를 불러오는 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchNews();
  };

  // 날짜 포맷 변환
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="financial-news">
      <h2>
        {currencyCode
          ? `${currencyCode} 관련 최신 뉴스`
          : '금융 최신 뉴스'}
      </h2>

      {!currencyCode && (
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="키워드로 뉴스 검색"
          />
          <button type="submit" disabled={loading}>
            {loading ? '검색 중...' : '검색'}
          </button>
        </form>
      )}

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading-indicator">뉴스를 불러오는 중...</div>
      ) : news.length > 0 ? (
        <div className="news-list">
          {news.slice(0, 6).map((article, index) => (
            <div key={index} className="news-card">
              {article.urlToImage && (
                <div className="news-image">
                  <img src={article.urlToImage} alt={article.title} />
                </div>
              )}
              <div className="news-content">
                <h3>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>
                <div className="news-source">
                  {article.source.name} • {formatDate(article.publishedAt)}
                </div>
                {article.description && (
                  <p className="news-description">{article.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-news">관련 뉴스가 없습니다.</div>
      )}

      {/* NewsAPI 출처 표시 */}
      <div className="news-attribution">
        <small>Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a></small>
      </div>
    </div>
  );
};

export default FinancialNews; 