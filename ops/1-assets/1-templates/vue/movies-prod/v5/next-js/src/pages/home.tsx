import { memo } from "react";

// hero slider
import HomeHeroSlider from "@/components/slider/HomeHeroSlider";

// sections
import ContinueWatching from "@/components/sections/ContinueWatching";
import UpcomingMovies from "@/components/sections/UpcomingMovies";
import LatestMovies from "@/components/sections/LatestMovies";
import VerticalSectionSlider from "@/components/slider/VerticalSectionSlider";
import TrendingSlider from "@/components/sections/Trending";
import SuggestedBlock from "@/components/sections/SuggestedBlock";
import RecommendedTVShow from "@/components/sections/RecommendedTVShow";
import ParallexSection from "@/components/sections/ParallexSection";

//static data
import { verticleLatestMovies } from "@/StaticData/data";

import { useEnterExit } from "@/utilities/usePage";

const Home = memo(() => {
  useEnterExit()
  return (
    <>

      <HomeHeroSlider />
      <ContinueWatching />
      <UpcomingMovies />
      <LatestMovies />
      <VerticalSectionSlider sliderData={verticleLatestMovies} />
      <SuggestedBlock />
      <ParallexSection />
      <TrendingSlider />
      <RecommendedTVShow />

    </>
  );
});

Home.displayName = "Home";
export default Home;
