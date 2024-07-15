import DateSearch from "../common/DateSearch";
import LocationSearch from "./LocationSearch";
import LocationSearch2 from "./LocationSearch2";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch bg-white pr-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 bg-light-2 rounded-4">
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location */}

          <LocationSearch2 />
          {/* End Location */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <h4 className="text-15 fw-500 ls-2 lh-16">Departure Month</h4>
            <DateSearch />
          </div>
          {/* End check-in-out */}

          <div className="button-item">
            <button className="mainSearch__submit button -dark-1 size-60 col-12 rounded-4 bg-blue-1 text-white">
              <i className="icon-search text-20" />
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
