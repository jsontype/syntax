import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { latestMovie } from "../../StaticData/data";

const SpecialsLatestVideos = memo(() => {
  const [title] = useState("Specials Latest Videos");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={latestMovie}
        className="latest-block streamit-block"
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

SpecialsLatestVideos.displayName = 'SpecialsLatestVideos';
export default SpecialsLatestVideos;
