import React, { Fragment, memo , useState} from 'react'

//components
import SectionSlider from '../slider/SectionSlider';
import CardStyle from '../cards/CardStyle';

//static data
import { sectionSliders } from "../../StaticData/data";

const RelatedVideos = memo(() => {
  const [title] = useState("Related Videos");
  const [RelatedVideos] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={RelatedVideos}
        className="streamit-block"
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

RelatedVideos.displayName = "RelatedVideos"
export default RelatedVideos