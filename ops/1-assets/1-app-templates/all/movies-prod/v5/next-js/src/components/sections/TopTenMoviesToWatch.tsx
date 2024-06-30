import React, { memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import TopTenCard from "../cards/TopTenCard";

//function
import { generateImgPath } from "../../StaticData/data";

const TopTenMoviesToWatch = memo(() => {
  const [title] = useState("top ten movies to watch");
  const [topTen] = useState([
    {
      image: generateImgPath("/assets/images/top-ten-number/01.webp"),
      count: 1,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/02.webp"),
      count: 2,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/03.webp"),
      count: 3,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/04.webp"),
      count: 4,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/05.webp"),
      count: 5,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/06.webp"),
      count: 6,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/07.webp"),
      count: 7,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/08.webp"),
      count: 8,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/09.webp"),
      count: 9,
    },
    {
      image: generateImgPath("/assets/images/top-ten-number/10.webp"),
      count: 10,
    },
  ]);

  return (
    <Fragment>
      <SectionSlider title={title} list={topTen} className="top-ten-block">
        {(data) => (
          <TopTenCard
            imagePath={data.image}
            countValue={data.count}
            link="/movies/detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TopTenMoviesToWatch.displayName = "TopTenMoviesToWatch";
export default TopTenMoviesToWatch;
