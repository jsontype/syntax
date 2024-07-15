import DateSearch from "../common/DateSearch";
import GuestSearch from "../common/GuestSearch";
import LocationSearch from "../common/LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -col-5 border-light bg-white px-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30">
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Pickup Location */}

          <LocationSearch />
          {/* End Drop off location  */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Pick up</h4>
              <DateSearch />
            </div>
          </div>
          {/* End Pick Up Date */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Drop off</h4>
              <DateSearch />
            </div>
          </div>
          {/* EndDrop off Date */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item">
            <button className="mainSearch__submit button -dark-1 py-20 px-35 col-12 rounded-4 bg-yellow-1 text-dark-1">
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
