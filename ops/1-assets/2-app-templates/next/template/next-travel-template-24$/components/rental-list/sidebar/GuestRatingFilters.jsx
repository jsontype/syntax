const GuestRatingFilters = () => {
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-radio ">
            <div className="radio  d-flex items-center">
              <input type="radio" name="name" />
              <div className="radio__mark">
                <div className="radio__icon" />
              </div>
              <div className="ml-10">Any</div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="text-15 text-light-1">92</div>
        </div>
      </div>
      {/* End .row */}

      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-radio">
            <div className="radio d-flex items-center">
              <input type="radio" name="name" />
              <div className="radio__mark">
                <div className="radio__icon" />
              </div>
              <div className="ml-10">Wonderful 4.5+</div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="text-15 text-light-1">45</div>
        </div>
      </div>
      {/* End .row */}

      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-radio">
            <div className="radio d-flex items-center">
              <input type="radio" name="name" />
              <div className="radio__mark">
                <div className="radio__icon" />
              </div>
              <div className="ml-10">Very good 4+</div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="text-15 text-light-1">21</div>
        </div>
      </div>
      {/* End .row */}

      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-radio">
            <div className="radio d-flex items-center">
              <input type="radio" name="name" />
              <div className="radio__mark">
                <div className="radio__icon" />
              </div>
              <div className="ml-10">Good 3.5+ </div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="text-15 text-light-1">78</div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default GuestRatingFilters;
