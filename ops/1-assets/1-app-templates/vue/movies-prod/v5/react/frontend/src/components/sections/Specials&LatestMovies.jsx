import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { spacialLatestMovie } from "../../StaticData/data";
// the hook
import { useTranslation } from "react-i18next";

const SpecialsLatestMovies = memo((props) => {
  const { t } = useTranslation();
  const [title] = useState(t("home.specials_latest_movies"));

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={spacialLatestMovie}
        className="recommended-block streamit-block"
        paddingY={props.paddingY}
      // loop={true}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

SpecialsLatestMovies.displayName = "SpecialsLatestMovies";
export default SpecialsLatestMovies;
