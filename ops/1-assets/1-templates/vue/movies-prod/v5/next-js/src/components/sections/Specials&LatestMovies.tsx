import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { spacialLatestMovie } from "../../StaticData/data";

const SpecialsLatestMovies = memo(() => {
  const [title] = useState("Specials & Latest Movies");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={spacialLatestMovie}
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

SpecialsLatestMovies.displayName = 'SpecialsLatestMovies';
export default SpecialsLatestMovies;
