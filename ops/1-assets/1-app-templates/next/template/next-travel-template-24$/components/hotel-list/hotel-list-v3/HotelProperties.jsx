import { hotelsData } from "../../../data/hotels";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const HotelProperties = () => {
  return (
    <>
      {hotelsData.slice(0, 4).map((item) => (
        <div className="col-12" key={item?.id}>
          <div className="border-top-light pt-20">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-200 md:w-1/1 rounded-4">
                  <div className="cardImage__content custom_inside-slider">
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
                            width={200}
                            height={200}
                            src={slide}
                            alt="image"
                            className="w-100"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  {/* End image */}

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md">
                <h3 className="text-16 lh-17 fw-500">
                  {item?.title}
                  <br className="lg:d-none" /> {item?.location}
                </h3>

                <div className="d-flex x-gap-5 items-center pt-10">
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                </div>

                <div className="row x-gap-10 y-gap-10 pt-20">
                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Breakfast
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      WiFi
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Spa
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Bar
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                    <div className="text-14 lh-14 text-light-1">
                      3,014 reviews
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                      {item?.ratings}
                    </div>
                  </div>
                </div>
                {/* End .row */}

                <div className="text-14 text-light-1 mt-70 lg:mt-50 md:mt-24">
                  8 nights
                  <span className="text-22 lh-12 fw-600 text-dark-1 ml-5">
                    US${item?.price}
                  </span>
                </div>

                <Link
                  href={`/hotel/hotel-single-v2/${item.id}`}
                  className="button py-10 px-20 -dark-1 bg-blue-1 text-white mt-10"
                >
                  See Availability{" "}
                  <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End broder-top-light */}
        </div>
        // End .col-12
      ))}
    </>
  );
};

export default HotelProperties;
