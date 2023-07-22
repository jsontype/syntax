import DateSearch from "./DateSearch";
import LocationSearch from "./LocationSearch";
import LocationSearch2 from "./LocationSearch2";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="col-12">
        <LocationSearch />
        {/* End Location */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <LocationSearch2 />
        {/* End col-12 cruiseline selection */}
      </div>

      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Departure Month</h4>

            <div className="text-15 text-light-1 ls-2 lh-16">
              <DateSearch />
            </div>
          </div>
        </div>
        {/* End Departure Month */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <button className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
          <i className="icon-search text-20 mr-10" />
          Search
        </button>
      </div>
      {/* End col-12 search button_item */}
    </>
  );
};

export default MainFilterSearchBox;
