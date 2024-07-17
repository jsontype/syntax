import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cruiseData from "../../../data/cruise";
import Link from "next/link";

const CruiseProperties = () => {
  return (
    <>
      {cruiseData.slice(0, 5).map((item) => (
        <div
          className="col-12"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="w-250 md:w-1/1 rounded-4">
                  <div className="cardImage ">
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
                            <div className="ratio ratio-1:1">
                              <div className="cardImage__content">
                                <Image
                                  width={300}
                                  height={300}
                                  className="rounded-4 col-12 js-lazy"
                                  src={slide}
                                  alt="image"
                                />
                              </div>

                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                              {/* End .cardImage__wishlist */}
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* End .cardImage__content */}
                </div>
                {/* End cartImage */}
              </div>
              {/* End .col-auto */}

              <div className="col-md">
                <div className="text-14 text-light-1">{item?.ship}</div>
                <h3 className="text-18 lh-16 fw-500 mt-5">
                  {item?.title}
                  <br className="md:d-none" /> Mediterranean
                </h3>
                <div className="row y-gap-15 pt-30">
                  <div className="col-auto">
                    <div className="text-14">Sailing Date</div>
                    <div className="text-14 text-light-1">{item?.date}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-14">Departs</div>
                    <div className="text-14 text-light-1">{item?.departs}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-14">Ports ({item?.portsNumber})</div>
                    <div className="text-14 text-light-1">
                      {item?.portsName}...
                    </div>
                  </div>
                </div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <i className="icon-star text-yellow-1 text-10" />
                  </div>
                  <div className="col-auto">
                    <div className="text-14 lh-13 text-light-1">
                      <span className="text-15 fw-500 text-dark-1">
                        {item?.ratings}
                      </span>{" "}
                      {item?.numberOfReviews} reviews
                    </div>
                  </div>
                </div>
                <div className="text-14 text-light-1 mt-40">From</div>
                <div className="text-22 lh-12 fw-600 mt-5">
                  US${item?.price}
                </div>
                <div className="text-14 text-light-1 mt-5">per adult</div>
                <Link
                  href={`/cruise/cruise-single/${item.id}`}
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-24"
                >
                  View Detail <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
              {/* End .col-md-auto */}
            </div>
            {/* End .row */}
          </div>
          {/* End border-top */}
        </div>
      ))}
    </>
  );
};

export default CruiseProperties;
