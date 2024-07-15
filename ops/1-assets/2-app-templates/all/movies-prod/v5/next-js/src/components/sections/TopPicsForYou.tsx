import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { topPics } from "../../StaticData/data";

const TopPicsForYou = memo(() => {
  const [title] = useState("Top Pics For You");
  const [topTen] = useState(topPics);

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={topTen}
        className="recommended-block streamit-block"
        slidesPerView={6}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            watchlistLink="/play-list"
            link="/movies/detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
})

TopPicsForYou.displayName = 'TopPicsForYou';
export default TopPicsForYou;
