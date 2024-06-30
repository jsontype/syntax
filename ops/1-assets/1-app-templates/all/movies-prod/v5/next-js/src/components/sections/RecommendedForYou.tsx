import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";
import { Fragment, memo, useState } from "react";
import { recommendedforYou } from "../../StaticData/data";
const RecommendedForYou = memo(() => {
  const [title] = useState("Recommended For You");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={recommendedforYou}
        className="recommended-block streamit-block"
        slidesPerView={6}
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

RecommendedForYou.displayName = 'RecommendedForYou';
export default RecommendedForYou;
