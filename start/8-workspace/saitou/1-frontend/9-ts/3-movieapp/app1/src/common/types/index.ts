export interface Movie {
  title: string
  rating: number
  year: number
  large_cover_image: string
}

export interface MoviesProps {
  movies: Movie[]
}
