import { Fragment, memo } from "react";

// hero slider
import MovieHeroSlider from "../../components/slider/MovieHeroSlider";

// section
import PopularMovies from "../../components/sections/PopularMovies";
import SpecialsLatestMovies from "../../components/sections/Specials&LatestMovies";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";

const MoviesPage = memo(() => {
  return (
    <Fragment>
      <MovieHeroSlider />
      <PopularMovies showViewAllLink={true} paddingY="my-4" />
      <SpecialsLatestMovies paddingY="my-4" />
      <MoviesRecommendedForYou slides="6" paddingY="my-4" />
    </Fragment>
  );
});

MoviesPage.displayName = "MoviesPage";
export default MoviesPage;
