import React, { Fragment, memo, useEffect } from "react";

import { useInView } from "react-intersection-observer";

// component
import SectionSlider from "../slider/section-slider";
import CardShimmer from "../card/shimmer/card-shimmer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getUpcommingAsync } from "../../../../store/media/actions";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/media/selectors";

const UpcomingSection = memo(() => {
  // selector
  const upcoming = useSelector(SettingSelector.upcomming);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      dispatch(getUpcommingAsync());
    }
  }, [inView]);
  return (
    <Fragment>
      <div ref={ref}>
        {upcoming.length === 0 ? (
          <CardShimmer title="Upcoming" />
        ) : (
          <div id="iq-favorites">
            <SectionSlider
              title="Upcoming"
              data={upcoming}
              link="/movies/"
              view_all="/view-all/movies/upcoming/action"
            />
          </div>
        )}
      </div>
    </Fragment>
  );
});

UpcomingSection.displayName = "UpcomingSection";
export default UpcomingSection;
