import React, { memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import PersonalityCard from "../cards/PersonalityCard";

//function
import { generateImgPath } from "../../StaticData/data";

const YourFavouritePersonality = memo(() => {
  const [title] = useState("your favourite personality");
  const [personality] = useState([
    {
      image: generateImgPath("/assets/images/cast/01.webp"),
      title: "John Abraham",
      category: "actor",
    },
    {
      image: generateImgPath("/assets/images/cast/02.webp"),
      title: "Leena burton",
      category: "actress",
    },
    {
      image: generateImgPath("/assets/images/cast/03.webp"),
      title: "Lorina williams",
      category: "actress",
    },
    {
      image: generateImgPath("/assets/images/cast/04.webp"),
      title: "Davina decorous",
      category: "actress",
    },
    {
      image: generateImgPath("/assets/images/cast/05.webp"),
      title: "Thomas bailey",
      category: "producer",
    },
    {
      image: generateImgPath("/assets/images/cast/06.webp"),
      title: "Kelly Reilly",
      category: "actress",
    },
    {
      image: generateImgPath("/assets/images/cast/07.webp"),
      title: "smith Jonas",
      category: "director",
    },
    {
      image: generateImgPath("/assets/images/cast/08.webp"),
      title: "angel louis",
      category: "producer",
    },
    {
      image: generateImgPath("/assets/images/cast/09.webp"),
      title: "Millar joseph",
      category: "actor",
    },
    {
      image: generateImgPath("/assets/images/cast/10.webp"),
      title: "mark wilson",
      category: "actor",
    },
    {
      image: generateImgPath("/assets/images/cast/11.webp"),
      title: "Kelley walker",
      category: "director",
    },
    {
      image: generateImgPath("/assets/images/cast/12.webp"),
      title: "Amy Sedaris",
      category: "actor",
    },
  ]);
  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={personality}
        className="streamit-block"
        slidesPerView={11}
        link="/cast/all-personality"
      >
        {(data) => (
          <PersonalityCard
            image={data.image}
            category={data.category}
            title={data.title}
            categoryLink="#"
            // link="/cast/detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

YourFavouritePersonality.displayName = "YourFavouritePersonality";
export default YourFavouritePersonality;
