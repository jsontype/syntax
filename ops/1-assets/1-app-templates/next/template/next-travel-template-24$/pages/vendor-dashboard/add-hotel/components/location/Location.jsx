const Location = () => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Location</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Real address</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Map Latitude</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Map Longitude</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Map Zoom</label>
        </div>
      </div>
      <div className="col-lg12">
        <div className="d-flex ratio ratio-4:1 mt-10">
          <div className="d-flex px-20 py-20 bg-light-2 h-full w-1/1 absolute rounded-4">
            <div className>
              <div className="form-input bg-white">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Search by name...
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
