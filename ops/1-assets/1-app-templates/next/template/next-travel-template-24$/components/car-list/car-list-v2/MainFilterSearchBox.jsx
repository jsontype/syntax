import DateSearch from "../common/DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="col-12">
        <div className="px-20 py-10 bg-white border-light rounded-4">
          <LocationSearch />
          {/* End Pickup Location */}
        </div>
        {/* End border-light */}
      </div>
      {/* End coll-12 */}

      <div className="col-12">
        <div className="px-20 py-10 bg-white border-light rounded-4">
          <LocationSearch />
          {/* End Drop off location  */}
        </div>
        {/* End border-light */}
      </div>
      {/* End coll-12 */}

      <div className="col-12">
        <div className="px-20 py-10 bg-white border-light rounded-4">
          <div className="searchMenu-date  js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Pick up</h4>
              <DateSearch />
            </div>
          </div>
          {/* End Pick Up Date */}
        </div>
        {/* End border-light */}
      </div>
      {/* End coll-12 */}

      <div className="col-12">
        <div className="px-20 py-10 bg-white border-light rounded-4">
          <div className="searchMenu-date  js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Drop off</h4>
              <DateSearch />
            </div>
          </div>
          {/* EndDrop off Date */}
        </div>
        {/* End border-light */}
      </div>
      {/* End coll-12 */}

      <div className="col-12">
        <div className="px-20 py-10 bg-white border-light rounded-4">
          <GuestSearch />
          {/* End guest */}
        </div>
        {/* End border-light */}
      </div>
      {/* End coll-12 */}

      <div className="col-12">
        <button className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1">
          <i className="icon-search text-20 mr-10" />
          Search
        </button>
      </div>
      {/* End search button_item */}
    </>
  );
};

export default MainFilterSearchBox;
