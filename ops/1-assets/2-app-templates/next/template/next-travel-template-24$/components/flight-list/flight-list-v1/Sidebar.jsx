import Stops from "../sidebar/Stops";
import Airlines from "../sidebar/Airlines";
import Alliance from "../sidebar/Alliance";
import DepartingFrom from "../sidebar/DepartingFrom";
import PirceSlider from "../sidebar/PirceSlider";
import ArrivingAt from "../sidebar/ArrivingAt";
import Cabin from "../sidebar/Cabin";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Stops</h5>
        <div className="sidebar-checkbox">
          <Stops />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Cabin</h5>
        <div className="sidebar-checkbox">
          <Cabin />
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
        <h5 className="text-18 fw-500 mb-10">Airlines</h5>
        <div className="sidebar-checkbox">
          <Airlines />
        </div>
      </div>
      {/* End style filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Alliance</h5>
        <div className="sidebar-checkbox">
          <Alliance />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End CruiseStyle filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Departing from</h5>
        <div className="sidebar-checkbox">
          <DepartingFrom />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Port filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Arriving at</h5>
        <div className="sidebar-checkbox">
          <ArrivingAt />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Port filter */}
    </>
  );
};

export default Sidebar;
