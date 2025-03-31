import Image from 'next/image';
import Link from 'next/link';

// 서버 클라이언트는 렌더링후의 로딩이 없으므로 Loading...의 표시도 필요없음

interface Movie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: string[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

interface YTSResponse {
  status: string;
  status_message: string;
  data: {
    movie_count: number;
    limit: number;
    page_number: number;
    movies: Movie[];
  };
}

async function fetchMovies() {
  const response = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data: YTSResponse = await response.json();
  return data.data.movies;
}

async function MovieList() {
  const movies = await fetchMovies();
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link href={`/movie-ssr/${movie.id}`}>
            <Image
              src={movie.medium_cover_image}
              alt={movie.title}
              width={200}
              height={300}
              className="hover:opacity-80"
            />
            <h2 className="hover:opacity-80">{movie.title}</h2>
          </Link>
          <p>Rating: {movie.rating}</p>
          <p>Year: {movie.year}</p>
          <p>Genres: {movie.genres.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <MovieList />
  );
}
