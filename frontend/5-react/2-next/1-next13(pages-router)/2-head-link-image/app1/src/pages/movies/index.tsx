import { GetServerSideProps } from 'next'
import Image from 'next/image'

type Movie = {
  id: number
  title: string
  url: string
  background_image: string
}

type Props = {
  movies: Movie[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  const json = await res.json()

  return {
    props: {
      movies: json.data.movies,
    },
  }
}

export default function SSR({ movies }: Props) {
  return (
    <div>
      <h1>SSR: 무비 리스트</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <a href={movie.url}>{movie.title}</a>
          <Image src={movie.background_image} alt={movie.title} width={300} height={169} />
        </div>
      ))}
    </div>
  )
}
