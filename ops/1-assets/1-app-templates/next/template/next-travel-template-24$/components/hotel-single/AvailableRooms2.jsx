import Image from "next/image";

const AvailableRooms2 = ({ hotel }) => {
  const demoContent = [
    {
      id: 1,
      marginTop: "mt-0",
      items: [
        { id: 1, marginTop: "mt-0" },
        { id: 2, marginTop: "mt-20" },
        { id: 3, marginTop: "mt-20" },
      ],
    },
    {
      id: 2,
      marginTop: "mt-30",
      items: [
        { id: 1, marginTop: "mt-0" },
        { id: 2, marginTop: "mt-20" },
        { id: 3, marginTop: "mt-20" },
      ],
    },
  ];
  return (
    <>
      {demoContent.map((item) => (
        <div
          className={`bg-blue-2 rounded-4 px-30 py-30 sm:px-20 sm:py-20 ${item.marginTop}`}
          key={item.id}
        >
          <div className="row y-gap-30">
            <div className="col-xl-auto">
              <div className="ratio ratio-1:1 col-12 col-md-4 col-xl-12">
                <Image
                  width={180}
                  height={180}
                  src="/img/backgrounds/1.png"
                  alt="image"
                  className="img-ratio rounded-4"
                />
              </div>
              {/* image */}

              <div>
                <div className="text-18 fw-500 mt-10">Standard Twin Room</div>
                <div className="y-gap-5 pt-5">
                  <div className="d-flex items-center">
                    <i className="icon-no-smoke text-20 mr-10" />
                    <div className="text-15">Non-smoking rooms</div>
                  </div>
                  <div className="d-flex items-center">
                    <i className="icon-wifi text-20 mr-10" />
                    <div className="text-15">Free WiFi</div>
                  </div>
                  <div className="d-flex items-center">
                    <i className="icon-parking text-20 mr-10" />
                    <div className="text-15">Parking</div>
                  </div>
                  <div className="d-flex items-center">
                    <i className="icon-kitchen text-20 mr-10" />
                    <div className="text-15">Kitchen</div>
                  </div>
                </div>
                <a
                  href="#"
                  className="d-block text-15 fw-500 underline text-blue-1 mt-15"
                >
                  Show Room Information
                </a>
              </div>
            </div>
            {/* End col-xl-atuo */}

            <div className="col-xl">
              {item.items.map((singleItem) => (
                <div
                  className={`bg-white rounded-4 px-30 py-30 ${singleItem.marginTop}`}
                  key={singleItem.id}
                >
                  <div className="row y-gap-30">
                    <div className="col-lg col-md-6">
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-5">
                        <div className="d-flex items-center text-green-2">
                          <i className="icon-check text-12 mr-10" />
                          <div className="text-15">Pay at the hotel</div>
                        </div>
                        <div className="d-flex items-center text-green-2">
                          <i className="icon-check text-12 mr-10" />
                          <div className="text-15">
                            Pay nothing until March 30, 2022
                          </div>
                        </div>
                        <div className="d-flex items-center text-green-2">
                          <i className="icon-check text-12 mr-10" />
                          <div className="text-15">
                            Free cancellation before April 1, 2022
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-lg-auto col-md-6 border-left-light lg:border-none">
                      <div className="px-40 lg:px-0">
                        <div className="text-15 fw-500 mb-20">Sleeps</div>
                        <div className="d-flex items-center text-light-1">
                          <div className="icon-man text-24" />
                          <div className="icon-man text-24" />
                        </div>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-lg-auto col-md-6 border-left-light lg:border-none">
                      <div className="px-40 lg:px-0">
                        <div className="text-15 fw-500 mb-20">Select Rooms</div>
                        <div className="dropdown js-dropdown js-price-1-active">
                          <select
                            style={{ minWidth: "160px" }}
                            className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14"
                          >
                            <option value="1" defaultValue>
                              1 (US$ 3,120)
                            </option>
                            <option value="2">2 (US$ 3,120)</option>
                            <option value="3"> 3 (US$ 3,120)</option>
                            <option value="4"> 4 (US$ 3,120)</option>
                            <option value="5"> 5 (US$ 3,120)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-lg-auto col-md-6 border-left-light lg:border-none text-right lg:text-left">
                      <div className="pl-40 lg:pl-0">
                        <div className="text-14 lh-14 text-light-1 mb-5">
                          3 rooms for
                        </div>
                        <div className="text-20 lh-14 fw-500">
                          US${hotel?.price}
                        </div>
                        <a
                          href="#"
                          className="button h-50 px-35 -dark-1 bg-blue-1 text-white mt-10"
                        >
                          Reserve <div className="icon-arrow-top-right ml-15" />
                        </a>
                      </div>
                    </div>
                    {/* End .col */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AvailableRooms2;
