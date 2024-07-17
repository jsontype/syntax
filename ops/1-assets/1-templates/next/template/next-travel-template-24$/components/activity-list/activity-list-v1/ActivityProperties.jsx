import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ActivitiesData from "../../../data/activity";
import Link from "next/link";

const ActivityProperties = () => {
  return (
    <>
      {ActivitiesData.slice(4, 9).map((item) => (
        <div
          className="col-12"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
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
                  {/* End .cardImage__content */}

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>
                  {/* End .cardImage__wishlist */}
                </div>
                {/* End cartImage */}
              </div>
              {/* End .col-auto */}
              <div className="col-md">
                <p className="text-14 lh-14 mb-5">{item?.duration}+ hours</p>
                <h3 className="text-18 lh-16 fw-500">
                  {item?.title}
                  <br /> or E-Bike
                </h3>
                <p className="text-14 lh-14 mt-5">{item?.location}</p>
                <div className="text-14 lh-15 fw-500 mt-20">
                  Taking safety measures
                </div>
                <div className="text-14 text-green-2 fw-500 lh-15 mt-5">
                  Free cancellation
                </div>
              </div>
              {/* End .col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="d-flex x-gap-5 items-center justify-end md:justify-start">
                  <i className="icon-star text-10 text-yellow-1" />
                  <div className="text-15 fw-500 ml-5">{item?.ratings}</div>
                  <div className="text-14 text-light-1">
                    {item?.numberOfReviews} reviews
                  </div>
                </div>
                <div className="text-14 text-light-1 mt-50 md:mt-20">From</div>
                <div className="text-22 lh-12 fw-600 mt-5">
                  US${item?.price}
                </div>
                <div className="text-14 text-light-1 mt-5">per adult</div>
                <Link
                  href={`/activity/activity-single/${item.id}`}
                  className="button -md -dark-1 bg-blue-1 text-white mt-24"
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

export default ActivityProperties;
