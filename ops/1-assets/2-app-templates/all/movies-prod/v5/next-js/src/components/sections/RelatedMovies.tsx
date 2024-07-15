import React, { Fragment, memo, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

const RelatedMovies = memo(() => {
  const [title] = useState("Related Movies");
  const [RelatedMovies] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={RelatedMovies}
        className="related-movie-block"
        slidesPerView={5}
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

RelatedMovies.displayName = "RelatedMovies";
export default RelatedMovies;
