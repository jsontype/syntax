import Router from "next/router";
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div
        className="mainSearch -w-900 bg-white px-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 shadow-2 mt-40 is-in-view"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-offset="0"
      >
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
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
            <button
              className="mainSearch__submit button -blue-1 py-20 px-35 col-12 rounded-100 bg-dark-4 text-white"
              onClick={() => Router.push("/rental/rental-list-v1")}
            >
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
