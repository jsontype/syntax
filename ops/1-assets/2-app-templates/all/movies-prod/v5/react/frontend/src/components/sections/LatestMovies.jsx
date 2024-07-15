import { Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { latestMovie } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const LatestMovies = (props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("home.latest_movies")}
        list={latestMovie}
        className="latest-block streamit-block"
        slidesPerView="6"
        paddingY={props.paddingY}
      // loop={true}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
};

LatestMovies.DisplayName = LatestMovies;
export default LatestMovies;
