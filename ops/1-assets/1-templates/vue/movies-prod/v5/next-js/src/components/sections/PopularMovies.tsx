import { useState, Fragment, memo } from "react";

//componets
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { populerSlider } from "../../StaticData/data";



const PopularMovies = memo(()=> {
  const [title] = useState("Popular Movies");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={populerSlider}
        className="popular-movies-block streamit-block"
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

PopularMovies.displayName = 'PopularMovies';
export default PopularMovies;
