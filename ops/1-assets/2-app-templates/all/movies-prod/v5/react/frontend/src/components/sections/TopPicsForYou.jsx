import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { topPics } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const TopPicsForYou = memo(() => {
  const { t } = useTranslation();
  const [topTen] = useState(topPics);

  return (
    <Fragment>
      <SectionSlider
        title={t("ott_home.top_pics")}
        list={topTen}
        className="recommended-block streamit-block"
        slidesPerView="6"
        // loop={true}
        paddingY="my-4"
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

TopPicsForYou.displayName = "TopPicsForYou";
export default TopPicsForYou;
