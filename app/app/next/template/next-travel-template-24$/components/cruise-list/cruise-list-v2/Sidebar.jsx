import CabinType from "../sidebar/CabinType";
import OthersFilter from "../sidebar/OthersFilter";
import CruiseLength from "../sidebar/CruiseLength";
import CruiseStyle from "../sidebar/CruiseStyle";
import Port from "../sidebar/Port";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "./MainFilterSearchBox";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search Cruise</h5>

          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox />
          </div>
        </div>
      </div>
      {/* End search rentals */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Cabin type</h5>
        <div className="sidebar-checkbox">
          <CabinType />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Other</h5>
        <div className="sidebar-checkbox">
          <OthersFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}

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
        <h5 className="text-18 fw-500 mb-10">Cruise length</h5>
        <div className="sidebar-checkbox">
          <CruiseLength />
        </div>
      </div>
      {/* End style filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Cruise Style</h5>
        <div className="sidebar-checkbox">
          <CruiseStyle />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End CruiseStyle filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Port</h5>
        <div className="sidebar-checkbox">
          <Port />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Port filter */}
    </>
  );
};

export default Sidebar;
