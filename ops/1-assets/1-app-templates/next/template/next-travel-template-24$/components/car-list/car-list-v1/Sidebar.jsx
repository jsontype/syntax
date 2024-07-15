import Map from "../sidebar/Map";
import LocationFilters from "../sidebar/LocationFilters";
import PirceSlider from "../sidebar/PirceSlider";
import CategorieFilters from "../sidebar/CategorieFilters";
import SupplierFilters from "../sidebar/SupplierFilters";
import SpecificationsFilter from "../sidebar/SpecificationsFilter";
import MileageFilter from "../sidebar/MileageFilter";
import TransmissionFilter from "../sidebar/TransmissionFilter";
import FuelPolicyFilter from "../sidebar/FuelPolicyFilter";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border position-relative">
        <Map />
      </div>
      {/* End find map */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Location (Heathrow Airport)</h5>
        <div className="sidebar-checkbox">
          <LocationFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Location filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Car Category</h5>
        <div className="sidebar-checkbox">
          <CategorieFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Category filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Price filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Supplier</h5>
        <div className="sidebar-checkbox">
          <SupplierFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Supplier filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Car Specifications</h5>
        <div className="sidebar-checkbox">
          <SpecificationsFilter />
        </div>
      </div>
      {/* End Specifications filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Mileage/Kilometres</h5>
        <div className="sidebar-checkbox">
          <MileageFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Kilometres filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Transmission</h5>
        <div className="sidebar-checkbox">
          <TransmissionFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Transmission filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Fuel Policy</h5>
        <div className="sidebar-checkbox">
          <FuelPolicyFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Fuel Policy filter */}
    </>
  );
};

export default Sidebar;
