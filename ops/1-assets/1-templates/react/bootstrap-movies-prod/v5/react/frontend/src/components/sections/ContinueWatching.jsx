import { Fragment, memo, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import ContinueWatchCard from "../cards/ContinueWatchCard";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ContinueWatching = memo((props) => {
  const { t } = useTranslation();
  const [watching, setWatching] = useState([
    {
      image: generateImgPath("/assets/images/continue-watch/01.webp"),
      value: 50,
      leftTime: "70 of 230 m",
    },
    {
      image: generateImgPath("/assets/images/continue-watch/02.webp"),
      value: 90,
      leftTime: "120 of 130 m",
    },
    {
      image: generateImgPath("/assets/images/continue-watch/03.webp"),
      value: 60,
      leftTime: "60 of 134 m",
    },
    {
      image: generateImgPath("/assets/images/continue-watch/04.webp"),
      value: 30,
      leftTime: "60 of 134 m",
    },
    {
      image: generateImgPath("/assets/images/continue-watch/05.webp"),
      value: 95,
      leftTime: "45 of 157 m",
    },
    {
      image: generateImgPath("/assets/images/continue-watch/06.webp"),
      value: 100,
      leftTime: "70 of 230 m",
    },
  ]);
  return (
    <Fragment>
      <SectionSlider
        title={t("ott_home.continue_watching")}
        list={watching}
        className="continue-watching-block section-padding-top"
        slidesPerView={props.slidesPerView}
        viewAll={false}
        wrapperClass={true}
      >
        {(data) => (
          <ContinueWatchCard
            imagePath={data.image}
            progressValue={data.value}
            dataLeftTime={data.leftTime}
            link="/movies-detail"
          ></ContinueWatchCard>
        )}
      </SectionSlider>
    </Fragment>
  );
});

ContinueWatching.displayName = ContinueWatching;

export default ContinueWatching;
