const AppBlock = () => {
  return (
    <>
      <h2 className="text-30 lh-15">Download the App</h2>
      <p className="text-dark-1 pr-40 lg:pr-0 mt-15 sm:mt-5">
        Book in advance or last-minute with GoTrip. Receive instant
        confirmation. Access your booking info offline.
      </p>

      <div className="row items-center pt-30 sm:pt-10">
        <div className="col-auto">
          <div className="d-flex items-center px-20 py-10 rounded-8 border-white-15 text-white bg-dark-3">
            <div className="icon-apple text-24" />
            <div className="ml-20">
              <div className="text-14">Download on the</div>
              <div className="text-15 lh-1 fw-500">Apple Store</div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="d-flex items-center px-20 py-10 rounded-8 border-white-15 text-white bg-dark-3">
            <div className="icon-play-market text-24" />
            <div className="ml-20">
              <div className="text-14">Get in on</div>
              <div className="text-15 lh-1 fw-500">Google Play</div>
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default AppBlock;
