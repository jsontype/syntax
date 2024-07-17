import Map from "../sidebar/Map";
import TypePlace from "../sidebar/TypePlace";
import AminitesFilter from "../sidebar/AminitesFilter";
import GuestRatingFilters from "../sidebar/GuestRatingFilters";
import PirceSlider from "../sidebar/PirceSlider";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border position-relative">
        <Map />
      </div>
      {/* End find map */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Type of Place</h5>
        <div className="sidebar-checkbox">
          <div className="row y-gap-5 items-center">
            <TypePlace />
          </div>
        </div>
      </div>
      {/* End deals filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Guest Rating</h5>
        <div className="sidebar-checkbox">
          <GuestRatingFilters />
        </div>
      </div>
      {/* End Guest Rating */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Aminities</h5>
        <div className="sidebar-checkbox">
          <AminitesFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}
    </>
  );
};

export default Sidebar;
