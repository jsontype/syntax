import React from "react"

type MovieListItemProps = {
  id: number
  url: string
  title: string
  large_cover_image: string
}

type MovieListProps = {
  movies: MovieListItemProps[]
}

export default function MovieList({ movies }: MovieListProps) {
  const render = movies.map((item) => {
    return (
      <div key={item.id}>
        <div>
          <a href={item.url}>{item.title}</a>
        </div>
        <img src={item.large_cover_image} alt={item.title} />
      </div>
    )
  })

  return (
    <>
      <div>{render}</div>
    </>
  )
}
