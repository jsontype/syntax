import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { tourCategories1 } from "../../../data/tourCategories";

const TourCategories = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-tour-type-next",
          prevEl: ".js-tour-type-prev",
        }}
        pagination={{
          el: ".js-tour-type-pag",
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
            slidesPerView: 5,
          },
        }}
      >
        {tourCategories1.slice(0, 8).map((item) => (
          <SwiperSlide key={item.id}>
            <div data-aos="fade" data-aos-delay={item.dealyAimation}>
              <Link
                href="/tour/tour-list-v2"
                className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4"
              >
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i
                    className={`${item.icon} text-60 sm:text-40 text-blue-1`}
                  ></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">
                    {item.name}
                  </h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">
                    {item.tourNumber} Tours From ${item.price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TourCategories;
