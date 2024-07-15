import { Fragment } from "react";

//hero-slider
import VideoHeroSlider from "../../components/slider/VideoHeroSlider";

//sections
import PopularVideos from "../../components/sections/PopularVideos";
import SpecialsLatestVideos from "../../components/sections/Specials&LatestVideos";
import VideosRecommendedForYou from "../../components/sections/VideosRecommendedForYou";

const VideosPage = () => {
  return (
    <Fragment>
      <VideoHeroSlider />
      <PopularVideos slideMedium={2} paddingY="my-4" />
      <SpecialsLatestVideos slideMedium={2} paddingY="my-4" />
      <VideosRecommendedForYou slideMedium={2} paddingY="my-4" />
    </Fragment>
  );
};

VideosPage.DisplayName = VideosPage;
export default VideosPage;
