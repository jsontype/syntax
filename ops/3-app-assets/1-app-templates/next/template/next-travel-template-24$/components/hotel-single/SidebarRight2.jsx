import Map from "./Map";

const SidebarRight2 = () => {
  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="mb-15">
        <Map />
      </div>
      {/* End map */}

      <div className="row y-gap-10">
        <div className="col-12">
          <div className="d-flex items-center">
            <i className="icon-award text-20 text-blue-1" />
            <div className="text-14 fw-500 ml-10">
              Exceptional location - Inside city center
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex items-center">
            <i className="icon-pedestrian text-20 text-blue-1" />
            <div className="text-14 fw-500 ml-10">Exceptional for walking</div>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="border-top-light mt-15 mb-15" />
      <div className="text-15 fw-500">Popular landmarks</div>
      <div className="d-flex justify-between pt-10">
        <div className="text-14">Royal Pump Room Museum</div>
        <div className="text-14 text-light-1">0.1 km</div>
      </div>

      <div className="d-flex justify-between pt-5">
        <div className="text-14">Harrogate Turkish Baths</div>
        <div className="text-14 text-light-1">0.1 km</div>
      </div>
      <button className="d-block text-14 fw-500 underline text-blue-1 mt-10">
        Show More
      </button>
    </div>
  );
};

export default SidebarRight2;
