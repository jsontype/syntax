import { MoviesProps } from '../../common/types'

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.large_cover_image} alt={movie.title} />
          <div>{movie.title} ({movie.year})</div>
          <div>Rating: {movie.rating} / 10</div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
