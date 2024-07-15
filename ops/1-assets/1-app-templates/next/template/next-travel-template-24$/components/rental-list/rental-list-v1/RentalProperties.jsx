import rentalssData from "../../../data/rentals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const RentalProperties = () => {
  return (
    <>
      {rentalssData.map((item) => (
        <div className="col-12" key={item?.id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage w-250 md:w-1/1 rounded-4">
                  <div className="cardImage-slider rounded-4  custom_inside-slider">
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
                          <div className=" ratio ratio-1:1">
                            <div className="cardImage__content">
                              <Image
                                width={250}
                                height={250}
                                className="rounded-4 col-12 js-lazy"
                                src={slide}
                                alt="image"
                              />
                            </div>
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12"></i>
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  {/* End image */}
                </div>
              </div>
              {/* End .col */}

              <div className="col-md">
                <div className="d-flex flex-column h-full justify-between">
                  <div>
                    <p className="text-14 lh-14 mb-5">{item?.location}</p>
                    <h3 className="text-18 lh-16 fw-500">
                      {item?.title}
                      <br /> Garden
                    </h3>
                    <div className="row x-gap-5 items-center pt-5">
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          {item?.guest} guests
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="size-3 rounded-full bg-light-1" />
                      </div>
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          {item?.bedroom} bedroom
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="size-3 rounded-full bg-light-1" />
                      </div>
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          {item?.bed} bed
                        </div>
                      </div>
                    </div>
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
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                    <div className="text-14 lh-14 text-light-1">
                      {item.numberOfReviews} reviews
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                      {item.ratings}
                    </div>
                  </div>
                </div>
                <div className="text-14 text-light-1 mt-40 md:mt-20">From</div>
                <div className="text-22 lh-12 fw-600 mt-5">US${item.price}</div>
                <div className="text-14 text-light-1 mt-5">per adult</div>
                <Link
                  href={`/rental/rental-single/${item.id}`}
                  className="button -md -dark-1 bg-blue-1 text-white mt-24"
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

export default RentalProperties;
