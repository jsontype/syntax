import { Fragment } from "react";

//hero-slider
import TvShowHeroSlider from "../../components/slider/TvShowHeroSlider";

//sections
import TVPopularShows from "../../components/sections/TVPopularShows";
import BestOfInternationalShows from "../../components/sections/BestOfInternationalShows";
import ShowsWeRecommend from "../../components/sections/ShowsWeRecommend";

const TvShowsPage = () => {
  return (
    <Fragment>
      <TvShowHeroSlider />
      <TVPopularShows slideMedium={2} paddingY="my-4" />
      <BestOfInternationalShows slideMedium={2} paddingY="my-4" />
      <ShowsWeRecommend slideMedium={2} paddingY="my-4" />
    </Fragment>
  );
};

TvShowsPage.DisplayName = TvShowsPage;
export default TvShowsPage;
