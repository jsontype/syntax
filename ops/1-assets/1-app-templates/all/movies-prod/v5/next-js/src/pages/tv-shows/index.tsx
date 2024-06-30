import { memo, Fragment } from "react";

//hero-slider
import TvShowHeroSlider from "@/components/slider/TvShowHeroSlider";

//sections
import TVPopularShows from "@/components/sections/TVPopularShows";
import BestOfInternationalShows from "@/components/sections/BestOfInternationalShows";
import ShowsWeRecommend from "@/components/sections/ShowsWeRecommend";

import { useEnterExit } from "@/utilities/usePage";

const TvShows = memo(() => {
  useEnterExit()
  return (
    <Fragment>
      <TvShowHeroSlider />
      <TVPopularShows />
      <BestOfInternationalShows />
      <ShowsWeRecommend />
    </Fragment>
  );
});

TvShows.displayName = "TvShows";
export default TvShows;
