const CabinType = () => {
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">Inside</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">92</div>
        </div>
      </div>
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">Outside</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">45</div>
        </div>
      </div>
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">Suite</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">21</div>
        </div>
      </div>
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">Balcony</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">78</div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default CabinType;
