import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { destinations4 } from "../../../data/desinations";
import Link from "next/link";

const Travellers = () => {
  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: ".dtl-next-active",
          prevEl: ".dtl-prev-active",
        }}
        breakpoints={{
          540: {
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
            slidesPerView: 6,
          },
        }}
      >
        {destinations4.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href="#"
              className="citiesCard -type-2"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              <div className="citiesCard__image rounded-4 ratio ratio-1:1">
                <img
                  className="img-ratio rounded-4 js-lazy"
                  src={item.img}
                  alt="image"
                />
              </div>
              <div className="citiesCard__content mt-10">
                <h4 className="text-18 lh-13 fw-500 text-dark-1">
                  {item.location}
                </h4>
                <div className="text-14 text-light-1">
                  {item.properties} travellers
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none dtl-prev-active">
        <i className="icon icon-chevron-left text-12" />
      </button>
      <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none dtl-next-active">
        <i className="icon icon-chevron-right text-12" />
      </button>
    </>
  );
};

export default Travellers;
