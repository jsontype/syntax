import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { destinations10 } from "../../../data/desinations";

const TopDestinations = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible"
        modules={[Navigation]}
        navigation={{
          nextEl: ".js-top-desti-next_active",
          prevEl: ".js-top-desti-prev_active",
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
            slidesPerView: 5,
          },
        }}
      >
        {destinations10.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href="/tour/tour-list-v2"
              className="citiesCard -type-3 d-block h-full rounded-4 "
            >
              <div className="citiesCard__image ratio ratio-1:1">
                <img className="col-12 js-lazy" src={item.img} alt="image" />
              </div>
              <div className="citiesCard__content px-30 py-30">
                <h4 className="text-26 fw-600 text-white text-capitalize">
                  {item.location}
                </h4>
                <div className="text-15 text-white">
                  {item.numberOfProperties} properties
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Start naviation button for next prev slide */}
      <button className="section-slider-nav -prev flex-center bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none  js-top-desti-prev_active">
        <i className="icon icon-chevron-left text-12" />
      </button>
      <button className="section-slider-nav -next flex-center bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none  js-top-desti-next_active">
        <i className="icon icon-chevron-right text-12" />
      </button>
      {/* End navigation button for next prev  slide */}
    </>
  );
};

export default TopDestinations;
