import carsData from "../../../data/cars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const CarPropertes = () => {
  return (
    <>
      {carsData.slice(0, 5).map((item) => (
        <div className="col-12" key={item?.id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="relative d-flex">
                  <div className="cardImage ratio ratio-1:1 w-200 md:w-1/1 rounded-4">
                    <div className="cardImage__content">
                      <div className="custom_inside-slider">
                        <Swiper
                          className="mySwiper"
                          modules={[Pagination, Navigation]}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                        >
                          {item?.slideImg?.map((slide, i) => (
                            <SwiperSlide key={i}>
                              <Image
                                width={250}
                                height={250}
                                className="rounded-4 col-12 js-lazy"
                                src={slide}
                                priority
                                alt="image"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                    {/* End image */}

                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>
                  </div>
                  {/* End image ratio */}
                </div>
                {/* End relative */}
              </div>
              {/* End .col */}

              <div className="col-md">
                <div className="row x-gap-5 items-center">
                  <div className="col-auto">
                    <div className="text-14 text-light-1">{item?.location}</div>
                  </div>
                  <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1" />
                  </div>
                  <div className="col-auto">
                    <div className="text-14 text-light-1">SUV</div>
                  </div>
                </div>
                <h3 className="text-18 lh-16 fw-500 mt-5">
                  Mercedes-Benz E-Class{" "}
                  <span className="text-15 text-light-1">or similar</span>
                </h3>

                <div className="col-lg-9 mt-20">
                  <div className="row y-gap-5">
                    <div className="col-sm-6">
                      <div className="d-flex items-center">
                        <i className="icon-user-2" />
                        <div className="text-14 ml-10">{item?.seat}</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex items-center">
                        <i className="icon-luggage" />
                        <div className="text-14 ml-10">{item?.luggage}</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex items-center">
                        <i className="icon-transmission" />
                        <div className="text-14 ml-10">
                          {item?.transmission}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex items-center">
                        <i className="icon-speedometer" />
                        <div className="text-14 ml-10">{item?.speed}</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex items-center">
                        <i className="icon-transmission" />
                        <div className="text-14 ml-10">Air conditioning</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex items-center">
                        <i className="icon-speedometer" />
                        <div className="text-14 ml-10">Full to full</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                    <div className="text-14 lh-14 text-light-1">
                      {item?.numberOfReviews} reviews
                    </div>
                  </div>
                  {/* End col */}
                  <div className="col-auto">
                    <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">
                      {item?.ratings}
                    </div>
                  </div>
                  {/* End col */}
                </div>
                {/* End .row */}

                <div className="text-22 lh-12 fw-600 mt-40 md:mt-32">
                  US${item?.price}
                </div>
                <div className="text-14 text-light-1 mt-5">Total</div>
                <Link
                  href={`/car/car-single/${item.id}`}
                  className="button py-10 px-20 bg-dark-1 -yellow-1 text-white mt-15"
                >
                  View Detail <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
              {/* End col-md-auto */}
            </div>
            {/* End .row */}
          </div>
        </div>
      ))}
    </>
  );
};

export default CarPropertes;
