import Router from "next/router";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import LocationSearch2 from "./LocationSearch2";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch bg-white px-20 py-20 lg:px-20 lg:pt-5 lg:pb-20">
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location */}

          <LocationSearch2 />
          {/* End check-in-out */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item">
            <button
              className="mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
              onClick={() => Router.push("/cruise/cruise-list-v1")}
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
