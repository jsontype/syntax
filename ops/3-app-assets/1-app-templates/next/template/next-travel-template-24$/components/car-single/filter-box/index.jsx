import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";

const index = () => {
  return (
    <>
      <div className="col-12">
        <LocationSearch />
        {/* End Pickup Location */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <LocationSearch />
        {/* End Drop off location  */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Pick up</h4>
            <DateSearch />
          </div>
        </div>
        {/* End Pick Up Date */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Drop off</h4>
            <DateSearch />
          </div>
        </div>
        {/* EndDrop off Date */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <GuestSearch />
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <button
          className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon-search text-20 mr-10" />
          Book Now
        </button>

        {/* End search button_item */}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
