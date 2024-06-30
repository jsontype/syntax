import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";
import { Fragment, memo, useState } from "react";
import { recommendedforYou } from "../../StaticData/data";
// the hook
import { useTranslation } from "react-i18next";

const RecommendedForYou = memo((props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("ott_home.recommended_for_you")}
        list={recommendedforYou}
        className="recommended-block streamit-block"
        slidesPerView="6"
        // loop={true}
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

RecommendedForYou.displayName = "RecommendedForYou";
export default RecommendedForYou;
