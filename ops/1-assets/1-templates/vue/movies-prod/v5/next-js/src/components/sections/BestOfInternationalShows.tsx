import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { latestMovie } from "../../StaticData/data";

const BestOfInternationalShows = memo(()=> {
  const [title] = useState("Best Of InternationalShows");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={latestMovie}
        className="recommended-block section-top-spacing streamit-block"
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

BestOfInternationalShows.displayName = 'BestOfInternationalShows';
export default BestOfInternationalShows;
