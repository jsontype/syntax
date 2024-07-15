import { memo, Fragment } from "react";
// hero slider
import OttHeroSlider from "../../components/slider/OttHeroSlider";

// sections
import ContinueWatching from "../../components/sections/ContinueWatching";
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch";
import VerticalSectionSlider from "../../components/slider/VerticalSectionSlider";
import OnlyOnStreamit from "../../components/sections/OnlyOnStreamit";
import YourFavouritePersonality from "../../components/sections/YourFavouritePersonality";
import PopularMovies from "../../components/sections/PopularMovies";
import TabSlider from "../../components/sections/TabSlider";
import RecommendedForYou from "../../components/sections/RecommendedForYou";
import TopPicsForYou from "../../components/sections/TopPicsForYou";
import GenreSlider from "../../components/sections/GenreSlider";

//static data
import { ottVerticleLatestMovies } from "../../StaticData/data";

const HomePage = memo(() => {
  return (
    <Fragment>
      <OttHeroSlider />
      <ContinueWatching slidesPerView={5} />
      <TopTenMoviesToWatch />
      <OnlyOnStreamit />
      <VerticalSectionSlider sliderData={ottVerticleLatestMovies} />
      <YourFavouritePersonality paddingY="my-4" />
      <PopularMovies paddingY="my-4" />
      <TabSlider />
      <GenreSlider />
      <RecommendedForYou paddingY="my-4" />
      <TopPicsForYou paddingY="my-4" />
    </Fragment>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
