import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//data
import { upcommingMovie } from "../../StaticData/data";

const UpcomingMovies = memo(() => {
  const [title] = useState("Upcoming Movies");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={upcommingMovie}
        className="upcomimg-block streamit-block"
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
});

UpcomingMovies.displayName = "UpcomingMovies"
export default UpcomingMovies;
