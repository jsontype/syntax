import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cruiseData from "../../data/cruise";
import isTextMatched from "../../utils/isTextMatched";

const Cruise3 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-car-next",
          prevEl: ".js-popular-car-prev",
        }}
        pagination={{
          el: ".js-car-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {cruiseData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              key={item?.id}
              data-aos="fade"
              data-aos-delay={item?.delayAnimation}
            >
              <Link
                href={`/cruise/cruise-single/${item.id}`}
                className="cruiseCard -type-1 rounded-4 "
              >
                <div className="cruiseCard__image position-relative">
                  <div className="carCard__image">
                    <div className="cardImage ratio ratio-6:5">
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
                                width={300}
                                height={300}
                                className="rounded-4 col-12 js-lazy"
                                src={slide}
                                alt="image"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                    {/* End cartImage */}

                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12" />
                      </button>
                    </div>

                    <div className="cardImage__leftBadge">
                      <div
                        className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase  ${
                          isTextMatched(item?.tag, "best seller")
                            ? "bg-blue-1 text-white"
                            : ""
                        }`}
                      >
                        {item?.tag}
                      </div>
                    </div>
                  </div>

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>

                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                        isTextMatched(item?.tag, "cruise only")
                          ? "bg-dark-1 text-white"
                          : ""
                      } ${
                        isTextMatched(item?.tag, "best seller")
                          ? "bg-blue-1 text-white"
                          : ""
                      }  ${
                        isTextMatched(item?.tag, "top rated")
                          ? "bg-yellow-1 text-dark-1"
                          : ""
                      }`}
                    >
                      {item.tag}
                    </div>
                  </div>
                </div>
                {/* End .tourCard__image */}

                <div className="cruiseCard__content mt-10">
                  <div className="text-14 lh-14 text-light-1 mb-5">
                    {item?.ship}
                  </div>
                  <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>{item?.title}</span>
                  </h4>
                  <p className="text-light-1 lh-14 text-14 mt-5" />
                  <div className="row y-gap-10 justify-between items-center">
                    <div className="col-auto">
                      <div className="text-14 text-dark-1 fw-500">
                        Sailing Date
                      </div>
                      <div className="text-14 text-light-1">{item?.date}</div>
                    </div>
                    <div className="col-auto">
                      <div className="text-14 text-dark-1 fw-500">Departs</div>
                      <div className="text-14 text-light-1">{item.departs}</div>
                    </div>
                    <div className="col-auto">
                      <div className="text-14 text-dark-1 fw-500">
                        Ports ({item.portsNumber})
                      </div>
                      <div className="text-14 text-light-1">
                        {item?.portsName}...
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row y-gap-20 justify-between items-center pt-5">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="icon-star text-yellow-1 text-10 mr-5" />
                        <div className="text-14 text-light-1">
                          <span className="text-15 text-dark-1 fw-500">
                            {item?.ratings}
                          </span>
                          {item?.numberOfReviews} reviews
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From{" "}
                        <span className="text-16 fw-500 text-dark-1">
                          US${item?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-car-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-car-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-car-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default Cruise3;
