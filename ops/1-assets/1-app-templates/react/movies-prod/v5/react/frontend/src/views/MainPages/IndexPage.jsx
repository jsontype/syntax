import { memo } from "react";

// hero slider
import HomeHeroSlider from "../../components/slider/HomeHeroSlider";

// sections
import ContinueWatching from "../../components/sections/ContinueWatching";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import LatestMovies from "../../components/sections/LatestMovies";
import VerticalSectionSlider from "../../components/slider/VerticalSectionSlider";
import TrendingSlider from "../../components/sections/Trending";
import SuggestedBlock from "../../components/sections/SuggestedBlock";
import RecommendedTVShow from "../../components/sections/RecommendedTVShow";
import ParallexSection from "../../components/sections/ParallexSection";

//static data
import { verticleLatestMovies, latestMovie } from "../../StaticData/data";

const HomePage = memo(() => {
  const showViewAllLink = true;
  return (
    <>
      <HomeHeroSlider />

      <ContinueWatching slidesPerView={4} />

      <UpcomingMovies paddingY="my-4" />

      <LatestMovies sliderData={latestMovie} paddingY="my-4" />

      <VerticalSectionSlider sliderData={verticleLatestMovies} containerFluid="container-fluid" />

      <SuggestedBlock paddingY="my-4" />

      <ParallexSection />

      <TrendingSlider />

      <RecommendedTVShow paddingY='my-4' />
    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
