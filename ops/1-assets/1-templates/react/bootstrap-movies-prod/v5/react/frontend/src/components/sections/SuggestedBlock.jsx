import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { suggested } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const SuggestedBlock = memo((props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("home.suggested_block")}
        list={suggested}
        className="suggested-block streamit-block"
        slidesPerView="6"
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

SuggestedBlock.DisplayName = "SuggestedBlock";
export default SuggestedBlock;
