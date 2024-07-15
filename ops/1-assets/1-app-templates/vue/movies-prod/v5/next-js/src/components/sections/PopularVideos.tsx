import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { populerSlider } from "../../StaticData/data";

const PopularVideos = memo(()=> {
  const [title] = useState("Popular Videos");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={populerSlider}
        className="recommended-block section-top-spacing"
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

PopularVideos.displayName = 'PopularVideos';
export default PopularVideos;
