import Image from "next/image";

const AvailableRooms = ({ hotel }) => {
  return (
    <>
      <div className="border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20">
        <div className="row y-gap-20">
          <div className="col-12">
            <h3 className="text-18 fw-500 mb-15">Standard Twin Room</h3>
            <div className="roomGrid">
              <div className="roomGrid__header">
                <div>Room Type</div>
                <div>Benefits</div>
                <div>Sleeps</div>
                <div>Price for 5 nights</div>
                <div>Select Rooms</div>
                <div />
              </div>
              {/* End .roomGrid__header */}

              <div className="roomGrid__grid">
                <div>
                  <div className="ratio ratio-1:1">
                    <Image
                      width={180}
                      height={180}
                      src="/img/backgrounds/1.png"
                      alt="image"
                      className="img-ratio rounded-4"
                    />
                  </div>
                  {/* End image */}
                  <div className="y-gap-5 mt-20">
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
                  {/* End room features */}
                  <a
                    href="#"
                    className="d-block text-15 fw-500 underline text-blue-1 mt-15"
                  >
                    Show Room Information
                  </a>
                </div>
                {/* End roomgrid inner */}

                <div className="y-gap-30">
                  <div className="roomGrid__content">
                    <div>
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-8">
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

                    <div>
                      <div className="d-flex items-center text-light-1">
                        <div className="icon-man text-24" />
                        <div className="icon-man text-24" />
                      </div>
                    </div>

                    <div>
                      <div className="text-18 lh-15 fw-500">
                        US${hotel?.price}
                      </div>
                      <div className="text-14 lh-18 text-light-1">
                        Includes taxes and charges
                      </div>
                    </div>

                    <div>
                      <div className="dropdown js-dropdown js-price-1-active">
                        <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
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
                  {/* End romm Grid horizontal content */}

                  <div className="roomGrid__content">
                    <div>
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-8">
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
                    <div>
                      <div className="d-flex items-center text-light-1">
                        <div className="icon-man text-24" />
                        <div className="icon-man text-24" />
                      </div>
                    </div>
                    <div>
                      <div className="text-18 lh-15 fw-500">
                        US${hotel?.price}
                      </div>
                      <div className="text-14 lh-18 text-light-1">
                        Includes taxes and charges
                      </div>
                    </div>
                    <div>
                      <div className="dropdown js-dropdown js-price-1-active">
                        <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
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
                  {/* End romm Grid horizontal content */}

                  <div className="roomGrid__content">
                    <div>
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-8">
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
                    <div>
                      <div className="d-flex items-center text-light-1">
                        <div className="icon-man text-24" />
                        <div className="icon-man text-24" />
                      </div>
                    </div>
                    <div>
                      <div className="text-18 lh-15 fw-500">
                        US${hotel?.price}
                      </div>
                      <div className="text-14 lh-18 text-light-1">
                        Includes taxes and charges
                      </div>
                    </div>
                    <div>
                      <div className="dropdown js-dropdown js-price-1-active">
                        <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
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
                  {/* End romm Grid horizontal content */}
                </div>
                {/* End price features */}

                <div>
                  <div className="text-14 lh-1">3 rooms for</div>
                  <div className="text-22 fw-500 lh-17 mt-5">
                    US${hotel?.price}
                  </div>
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-10"
                  >
                    Reserve <div className="icon-arrow-top-right ml-15" />
                  </a>
                  <div className="text-15 fw-500 mt-30">
                    You&lsquo;ll be taken to the next step
                  </div>
                  <ul className="list-disc y-gap-4 pt-5">
                    <li className="text-14">Confirmation is immediate</li>
                    <li className="text-14">No registration required</li>
                    <li className="text-14">No booking or credit card fees!</li>
                  </ul>
                </div>
                {/* End right price info */}
              </div>
            </div>
            {/* End .roomGrid */}
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End standard twin room */}

      <div className="border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20 mt-20">
        <div className="row y-gap-20">
          <div className="col-12">
            <h3 className="text-18 fw-500 mb-15">Deluxe King Room</h3>
            <div className="roomGrid">
              <div className="roomGrid__header">
                <div>Room Type</div>
                <div>Benefits</div>
                <div>Sleeps</div>
                <div>Price for 5 nights</div>
                <div>Select Rooms</div>
                <div />
              </div>
              {/* End .roomGrid__header */}

              <div className="roomGrid__grid">
                <div>
                  <div className="ratio ratio-1:1">
                    <Image
                      width={180}
                      height={180}
                      src="/img/backgrounds/1.png"
                      alt="image"
                      className="img-ratio rounded-4"
                    />
                  </div>
                  {/* End image */}
                  <div className="y-gap-5 mt-20">
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
                  {/* End room features */}
                  <a
                    href="#"
                    className="d-block text-15 fw-500 underline text-blue-1 mt-15"
                  >
                    Show Room Information
                  </a>
                </div>
                {/* End roomgrid inner */}

                <div className="y-gap-30">
                  <div className="roomGrid__content">
                    <div>
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-8">
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

                    <div>
                      <div className="d-flex items-center text-light-1">
                        <div className="icon-man text-24" />
                        <div className="icon-man text-24" />
                      </div>
                    </div>

                    <div>
                      <div className="text-18 lh-15 fw-500">
                        US${hotel?.price}
                      </div>
                      <div className="text-14 lh-18 text-light-1">
                        Includes taxes and charges
                      </div>
                    </div>

                    <div>
                      <div className="dropdown js-dropdown js-price-1-active">
                        <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
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
                  {/* End romm Grid horizontal content */}

                  <div className="roomGrid__content">
                    <div>
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-8">
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
                    <div>
                      <div className="d-flex items-center text-light-1">
                        <div className="icon-man text-24" />
                        <div className="icon-man text-24" />
                      </div>
                    </div>
                    <div>
                      <div className="text-18 lh-15 fw-500">
                        US${hotel?.price}
                      </div>
                      <div className="text-14 lh-18 text-light-1">
                        Includes taxes and charges
                      </div>
                    </div>
                    <div>
                      <div className="dropdown js-dropdown js-price-1-active">
                        <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
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
                  {/* End romm Grid horizontal content */}

                  <div className="roomGrid__content">
                    <div>
                      <div className="text-15 fw-500 mb-10">
                        Your price includes:
                      </div>
                      <div className="y-gap-8">
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
                    <div>
                      <div className="d-flex items-center text-light-1">
                        <div className="icon-man text-24" />
                        <div className="icon-man text-24" />
                      </div>
                    </div>
                    <div>
                      <div className="text-18 lh-15 fw-500">
                        US${hotel?.price}
                      </div>
                      <div className="text-14 lh-18 text-light-1">
                        Includes taxes and charges
                      </div>
                    </div>
                    <div>
                      <div className="dropdown js-dropdown js-price-1-active">
                        <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
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
                  {/* End romm Grid horizontal content */}
                </div>
                {/* End price features */}

                <div>
                  <div className="text-14 lh-1">3 rooms for</div>
                  <div className="text-22 fw-500 lh-17 mt-5">
                    US${hotel?.price}
                  </div>
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-10"
                  >
                    Reserve <div className="icon-arrow-top-right ml-15" />
                  </a>
                  <div className="text-15 fw-500 mt-30">
                    You&lsquo;ll be taken to the next step
                  </div>
                  <ul className="list-disc y-gap-4 pt-5">
                    <li className="text-14">Confirmation is immediate</li>
                    <li className="text-14">No registration required</li>
                    <li className="text-14">No booking or credit card fees!</li>
                  </ul>
                </div>
                {/* End right price info */}
              </div>
            </div>
            {/* End .roomGrid */}
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End standard twin room */}
    </>
  );
};

export default AvailableRooms;
