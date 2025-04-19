import { GetStaticProps } from 'next'

import Link from 'next/link'

type Movie = {
  id: number
  title: string
  url: string
  large_cover_image: string
}

type Props = {
  movies: Movie[]
}

// 서버 컴포넌트
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://yts.mx/api/v2/list_movies.json')
  const data = await response.json()
  return {
    props: {
      movies: data.data.movies,
    },
  }
}

export default function CSR({ movies }: Props) {
  const render = movies.map((movie) => (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <p>
        <Link href={movie.url}>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
          />
        </Link>
      </p>
    </div>
  ))

  return (
    <div>
      <h1>SSG 페이지</h1>
      <div>{render}</div>
    </div>
  )
}
