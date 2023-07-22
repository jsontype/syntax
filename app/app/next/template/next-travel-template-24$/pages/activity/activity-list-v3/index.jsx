import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import MainFilterSearchBox from "../../../components/activity-list/activity-list-v3/MainFilterSearchBox";
import TopHeaderFilter from "../../../components/activity-list/activity-list-v3/TopHeaderFilter";
import TourProperties from "../../../components/activity-list/activity-list-v3/ActivityProperties";
import DropdownSelelctBar from "../../../components/activity-list/common/DropdownSelelctBar";
import MapPropertyFinder from "../../../components/activity-list/common/MapPropertyFinder";
import Pagination from "../../../components/activity-list/common/Pagination";

const index = () => {
  return (
    <>
      <Seo pageTitle="Activity List v3" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="halfMap">
        <div className="halfMap__content">
          <MainFilterSearchBox />

          <div className="row x-gap-10 y-gap-10 pt-20">
            <DropdownSelelctBar />
          </div>
          {/* End .row */}

          <div className="row y-gap-10 justify-between items-center pt-20">
            <TopHeaderFilter />
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-20">
            <TourProperties />
          </div>
          {/* End .row */}

          <Pagination />
          {/* End Pagination */}
        </div>
        {/* End .halfMap__content */}

        <div className="halfMap__map">
          <div className="map">
            <MapPropertyFinder />
          </div>
        </div>
        {/* End halfMap__map */}
      </section>
      {/* End halfMap content */}
    </>
  );
};

export default index;
