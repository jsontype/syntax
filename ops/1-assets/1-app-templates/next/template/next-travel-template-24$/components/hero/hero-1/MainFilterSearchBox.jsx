import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  return (
    <>
      <div className="tabs__controls d-flex x-gap-30 y-gap-20 justify-center sm:justify-start js-tabs-controls">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${
              tab?.name === currentTab ? "is-tab-el-active" : ""
            }`}
            onClick={() => dispatch(addCurrentTab(tab?.name))}
          >
            {tab?.name}
          </button>
        ))}
      </div>

      <div className="position-relative mt-30 md:mt-20 js-tabs-content">
        <div className="mainSearch -w-900 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100">
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
                className="mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white"
                onClick={() => Router.push("/hotel/hotel-list-v1")}
              >
                <i className="icon-search text-20 mr-10" />
                Search
              </button>
            </div>
            {/* End search button_item */}
          </div>
        </div>
        {/* End .mainSearch */}
      </div>
      {/* End serarchbox tab-content */}
    </>
  );
};

export default MainFilterSearchBox;
