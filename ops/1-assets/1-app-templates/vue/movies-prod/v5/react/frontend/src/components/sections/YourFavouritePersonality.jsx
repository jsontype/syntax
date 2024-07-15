import React, { memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import PersonalityCard from "../cards/PersonalityCard";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const YourFavouritePersonality = memo((props) => {
  const { t } = useTranslation();
  const [personality] = useState([
    {
      image: generateImgPath("/assets/images/cast/01.webp"),
      title: "ott_home.john_abraham",
      category: "detail_page.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/02.webp"),
      title: "ott_home.leena_burton",
      category: "ott_home.actress",
    },
    {
      image: generateImgPath("/assets/images/cast/03.webp"),
      title: "ott_home.lorina_williams",
      category: "ott_home.actress",
    },
    {
      image: generateImgPath("/assets/images/cast/04.webp"),
      title: "ott_home.davina_decorous",
      category: "ott_home.actress",
    },
    {
      image: generateImgPath("/assets/images/cast/05.webp"),
      title: "ott_home.thomas_bailey",
      category: "ott_home.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/06.webp"),
      title: "ott_home.kelly_reilly",
      category: "ott_home.actress",
    },
    {
      image: generateImgPath("/assets/images/cast/07.webp"),
      title: "ott_home.smith_jonas",
      category: "ott_home.director",
    },
    {
      image: generateImgPath("/assets/images/cast/08.webp"),
      title: "ott_home.angel_louis",
      category: "ott_home.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/09.webp"),
      title: "ott_home.millar_joseph",
      category: "detail_page.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/10.webp"),
      title: "ott_home.mark_wilson",
      category: "detail_page.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/11.webp"),
      title: "ott_home.kelley_walker",
      category: "ott_home.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/12.webp"),
      title: "ott_home.amy_sedaris",
      category: "detail_page.actor",
    },
  ]);
  return (
    <Fragment>
      <SectionSlider
        title={t("ott_home.personality")}
        list={personality}
        className="streamit-block"
        slidesPerView={11}
        link="/cast-view-all"
        // loop={true}
        slideMedium={4}
        paddingY={props.paddingY}
      >
        {(data) => (
          <PersonalityCard
            image={data.image}
            category={t(data.category)}
            title={t(data.title)}
            categoryLink="#"
            link="/cast-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

YourFavouritePersonality.displayName = "YourFavouritePersonality";
export default YourFavouritePersonality;
