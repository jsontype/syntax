import DateSearch from "../common/DateSearch";
import GuestSearch from "../common/GuestSearch";
import LocationSearch from "../common/LocationSearch";
import FilterSelect from "../flight-list-v1/FilterSelect";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="row y-gap-20 items-center">
        <FilterSelect />
      </div>
      {/* End .row */}

      <div className="mainSearch -col-5 border-light rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 mt-15">
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location Flying From */}

          <LocationSearch />
          {/* End Location Flying To */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Depart</h4>
              <DateSearch />
            </div>
          </div>
          {/* End Depart */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Return</h4>
              <DateSearch />
            </div>
          </div>
          {/* End Return */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item">
            <button className="mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-3 text-white">
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
