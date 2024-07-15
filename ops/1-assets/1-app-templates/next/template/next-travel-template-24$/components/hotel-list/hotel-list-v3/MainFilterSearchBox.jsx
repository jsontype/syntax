import DateSearch from "../common/DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch bg-white pr-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 bg-light-2 rounded-4">
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 -left js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Check in - Check out
              </h4>
              <DateSearch />
            </div>
          </div>
          {/* End check-in-out */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item">
            <button className="mainSearch__submit button -dark-1 size-60 lg:w-1/1 col-12 rounded-4 bg-blue-1 text-white">
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
