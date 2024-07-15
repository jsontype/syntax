import Image from "next/image";
import Link from "next/link";
import flightsData from "../../data/flights";

const Flights = () => {
  return (
    <>
      {flightsData.slice(0, 4).map((item) => (
        <div
          className="col-12"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <div className="px-20 py-20 rounded-4 border-light">
            <div className="row y-gap-30 justify-between xl:justify-">
              {item?.flightList?.map((flight) => (
                <div className="col-xl-4 col-lg-6" key={flight.id}>
                  <div className="row y-gap-10 items-center">
                    <div className="col-sm-auto">
                      <Image
                        width={40}
                        height={40}
                        className="size-40"
                        src={flight?.avatar}
                        alt="image"
                      />
                    </div>
                    <div className="col">
                      <div className="row x-gap-20 items-end">
                        <div className="col-auto">
                          <div className="lh-15 fw-500">
                            {flight.departureTime}
                          </div>
                          <div className="text-15 lh-15 text-light-1">
                            {flight.arrivalAirport}
                          </div>
                        </div>
                        <div className="col text-center">
                          <div className="flightLine">
                            <div />
                            <div />
                          </div>
                          <div className="text-15 lh-15 text-light-1 mt-10">
                            {flight.duration}
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="lh-15 fw-500">
                            {flight.arrivalTime}
                          </div>
                          <div className="text-15 lh-15 text-light-1">
                            {flight.departureAirport}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-auto">
                <div className="d-flex items-center">
                  <div className="text-right mr-24">
                    <div className="lh-15 fw-500">US${item?.price}</div>
                    <div className="text-15 lh-15 text-light-1">
                      {item?.deals} deals
                    </div>
                  </div>
                  <Link
                    href="/flight/flight-list-v1"
                    className="button -outline-blue-1 px-30 h-50 text-blue-1"
                  >
                    View Deal <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End px-20 */}
        </div>
      ))}
    </>
  );
};

export default Flights;
