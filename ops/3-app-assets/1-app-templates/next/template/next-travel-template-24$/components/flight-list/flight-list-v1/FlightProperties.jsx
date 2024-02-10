import flightsData from "../../../data/flights";

const FlightProperties = () => {
  return (
    <>
      {flightsData.map((item) => (
        <div className="js-accordion" key={item.id}>
          <div className="py-30 px-30 bg-white rounded-4 base-tr mt-30">
            <div className="row y-gap-30 justify-between">
              <div className="col">
                <div className="row y-gap-10 items-center">
                  <div className="col-sm-auto">
                    <img
                      className="size-40"
                      src="/img/flightIcons/1.png"
                      alt="image"
                    />
                  </div>
                  <div className="col">
                    <div className="row x-gap-20 items-end">
                      <div className="col-auto">
                        <div className="lh-15 fw-500">14:00</div>
                        <div className="text-15 lh-15 text-light-1">SAW</div>
                      </div>
                      <div className="col text-center">
                        <div className="flightLine">
                          <div />
                          <div />
                        </div>
                        <div className="text-15 lh-15 text-light-1 mt-10">
                          Nonstop
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="lh-15 fw-500">22:00</div>
                        <div className="text-15 lh-15 text-light-1">STN</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="text-15 text-light-1 px-20 md:px-0">
                      4h 05m
                    </div>
                  </div>
                </div>
                <div className="row y-gap-10 items-center pt-30">
                  <div className="col-sm-auto">
                    <img
                      className="size-40"
                      src="/img/flightIcons/2.png"
                      alt="image"
                    />
                  </div>
                  <div className="col">
                    <div className="row x-gap-20 items-end">
                      <div className="col-auto">
                        <div className="lh-15 fw-500">14:00</div>
                        <div className="text-15 lh-15 text-light-1">SAW</div>
                      </div>
                      <div className="col text-center">
                        <div className="flightLine">
                          <div />
                          <div />
                        </div>
                        <div className="text-15 lh-15 text-light-1 mt-10">
                          Nonstop
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="lh-15 fw-500">22:00</div>
                        <div className="text-15 lh-15 text-light-1">STN</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="text-15 text-light-1 px-20 md:px-0">
                      4h 05m
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-auto">
                <div className="d-flex items-center h-full">
                  <div className="pl-30 border-left-light h-full md:d-none" />
                  <div>
                    <div className="text-right md:text-left mb-10">
                      <div className="text-18 lh-16 fw-500">US$934</div>
                      <div className="text-15 lh-16 text-light-1">16 deals</div>
                    </div>
                    <div className="accordion__button">
                      <button
                        className="button -dark-1 px-30 h-50 bg-blue-1 text-white"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.selectId}`}
                      >
                        View Deal <div className="icon-arrow-top-right ml-15" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-md-auto */}
            </div>
            {/* End .row */}

            <div className=" collapse" id={item.selectId}>
              <div className="border-light rounded-4 mt-30">
                <div className="py-20 px-30">
                  <div className="row justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 text-dark-1">
                        Depart • Sat, Mar 26
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="text-14 text-light-1">4h 05m</div>
                    </div>
                  </div>
                </div>
                <div className="py-30 px-30 border-top-light">
                  <div className="row y-gap-10 justify-between">
                    <div className="col-auto">
                      <div className="d-flex items-center mb-15">
                        <div className="w-28 d-flex justify-center mr-15">
                          <img src="/img/flights/1.png" alt="image" />
                        </div>
                        <div className="text-14 text-light-1">
                          Pegasus Airlines 1169
                        </div>
                      </div>
                      <div className="relative z-0">
                        <div className="border-line-2" />
                        <div className="d-flex items-center">
                          <div className="w-28 d-flex justify-center mr-15">
                            <div className="size-10 border-light rounded-full bg-white" />
                          </div>
                          <div className="row">
                            <div className="col-auto">
                              <div className="lh-14 fw-500">8:25 am</div>
                            </div>
                            <div className="col-auto">
                              <div className="lh-14 fw-500">
                                Istanbul Sabiha Gokcen (SAW)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex items-center mt-15">
                          <div className="w-28 d-flex justify-center mr-15">
                            <img src="/img/flights/plane.svg" alt="image" />
                          </div>
                          <div className="text-14 text-light-1">4h 05m</div>
                        </div>
                        <div className="d-flex items-center mt-15">
                          <div className="w-28 d-flex justify-center mr-15">
                            <div className="size-10 border-light rounded-full bg-border" />
                          </div>
                          <div className="row">
                            <div className="col-auto">
                              <div className="lh-14 fw-500">9:30 am</div>
                            </div>
                            <div className="col-auto">
                              <div className="lh-14 fw-500">
                                London Stansted (STN)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-right md:text-left">
                      <div className="text-14 text-light-1">Economy</div>
                      <div className="text-14 mt-15 md:mt-5">
                        Airbus A320neo (Narrow-body jet)
                        <br />
                        Wi-Fi available
                        <br />
                        USB outlet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-light rounded-4 mt-20">
                <div className="py-20 px-30">
                  <div className="row justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 text-dark-1">
                        Depart • Sat, Mar 26
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="text-14 text-light-1">4h 05m</div>
                    </div>
                  </div>
                </div>
                <div className="py-30 px-30 border-top-light">
                  <div className="row y-gap-10 justify-between">
                    <div className="col-auto">
                      <div className="d-flex items-center mb-15">
                        <div className="w-28 d-flex justify-center mr-15">
                          <img src="/img/flights/1.png" alt="image" />
                        </div>
                        <div className="text-14 text-light-1">
                          Pegasus Airlines 1169
                        </div>
                      </div>
                      <div className="relative z-0">
                        <div className="border-line-2" />
                        <div className="d-flex items-center">
                          <div className="w-28 d-flex justify-center mr-15">
                            <div className="size-10 border-light rounded-full bg-white" />
                          </div>
                          <div className="row">
                            <div className="col-auto">
                              <div className="lh-14 fw-500">8:25 am</div>
                            </div>
                            <div className="col-auto">
                              <div className="lh-14 fw-500">
                                Istanbul Sabiha Gokcen (SAW)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex items-center mt-15">
                          <div className="w-28 d-flex justify-center mr-15">
                            <img src="/img/flights/plane.svg" alt="image" />
                          </div>
                          <div className="text-14 text-light-1">4h 05m</div>
                        </div>
                        <div className="d-flex items-center mt-15">
                          <div className="w-28 d-flex justify-center mr-15">
                            <div className="size-10 border-light rounded-full bg-border" />
                          </div>
                          <div className="row">
                            <div className="col-auto">
                              <div className="lh-14 fw-500">9:30 am</div>
                            </div>
                            <div className="col-auto">
                              <div className="lh-14 fw-500">
                                London Stansted (STN)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-right md:text-left">
                      <div className="text-14 text-light-1">Economy</div>
                      <div className="text-14 mt-15 md:mt-5">
                        Airbus A320neo (Narrow-body jet)
                        <br />
                        Wi-Fi available
                        <br />
                        USB outlet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End collapase content */}
          </div>
          {/* End bg-white */}
        </div>
      ))}
    </>
  );
};

export default FlightProperties;
