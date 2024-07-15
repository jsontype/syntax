import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const MoviesRecommendedForYou = memo((props) => {
  const { t } = useTranslation();

  const recommended = t(props.title) || t("form.movies_recommended")

  return (
    <Fragment>
      <SectionSlider
        title={recommended}
        list={recommendedforYou}
        className="recommended-block"
        slidesPerView={props.slides}
        wrapperClass={true}
        viewAll={props.viewAll}
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
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
});

MoviesRecommendedForYou.displayName = "MoviesRecommendedForYou";
export default MoviesRecommendedForYou;
