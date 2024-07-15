import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

const VideosRecommendedForYou = memo(() => {
  const [title] = useState("Videos Recommended For You");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={recommendedforYou}
        className="recommended-block streamit-block"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            watchlistLink="/play-list"
            link="/movies/detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
})

VideosRecommendedForYou.displayName = 'VideosRecommendedForYou';
export default VideosRecommendedForYou;
