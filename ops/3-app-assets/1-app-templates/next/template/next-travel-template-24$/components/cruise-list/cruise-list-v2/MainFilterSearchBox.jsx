import DateSearch from "../common/DateSearch";
import LocationSearch from "./LocationSearch";
import LocationSearch2 from "./LocationSearch2";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="col-12">
        <div className="px-20 py-10 bg-white rounded-4">
          <LocationSearch />
          {/* End Location */}
        </div>
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="px-20 py-10 bg-white rounded-4">
          <LocationSearch2 />
          {/* End Location */}
        </div>
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="px-20 py-10 bg-white rounded-4">
          <div className="searchMenu-date  js-form-dd js-calendar">
            <h4 className="text-15 fw-500 ls-2 lh-16">Departure Month</h4>
            <DateSearch />
          </div>
          {/* End check-in-out */}
        </div>
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <button className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
          <i className="icon-search text-20 mr-10" />
          Search
        </button>
      </div>
      {/* End search button_item */}
    </>
  );
};

export default MainFilterSearchBox;
