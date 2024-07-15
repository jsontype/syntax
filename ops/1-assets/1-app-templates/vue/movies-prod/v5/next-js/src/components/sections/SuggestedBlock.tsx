import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { suggested } from "../../StaticData/data";

const SuggestedBlock = memo(() => {
  const [title] = useState("Suggested Block");

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={suggested}
        className="suggested-block streamit-block"
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
});

SuggestedBlock.displayName = 'SuggestedBlock';
export default SuggestedBlock;
