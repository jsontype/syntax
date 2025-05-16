import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://yts.mx/api/v2/list_movies.json')
  const data = await response.json()
  return {
    props: {
      movies: data.data.movies
    }
  }
}

export default function Home({ movies }: { movies: Movie[] }) {
  return (
    <div>
      <h1>무비 리스트</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>
              <Link href={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </h2>
            <p>
              <Image src={movie.large_cover_image} alt={movie.title} width={500} height={750} />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
