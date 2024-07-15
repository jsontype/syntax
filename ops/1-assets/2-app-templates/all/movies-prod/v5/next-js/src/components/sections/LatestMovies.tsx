import { Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "@/components/cards/CardStyle";

//static data
import { latestMovie } from "@/StaticData/data";

const LatestMovies = () => {
  const [title] = useState("Latest Movies");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={latestMovie}
        className="latest-block streamit-block"
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
};

LatestMovies.DisplayName = LatestMovies;
export default LatestMovies;
