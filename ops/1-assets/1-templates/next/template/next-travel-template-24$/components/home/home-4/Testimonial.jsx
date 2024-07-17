import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { testimonial2 } from "../../../data/testimonialData";

const Testimonial = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        className="overflow-visible"
        navigation={{
          nextEl: ".js-hm4tm-next-active",
          prevEl: ".js-hm4tm-prev-active",
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
            slidesPerView: 3,
          },
        }}
      >
        {testimonial2.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40"
              key={item.id}
              data-aos="fade"
              data-aos-delay={item.dealyAnimation}
            >
              <h4 className="text-16 fw-500 text-blue-1 mb-20">{item.meta}</h4>
              <p className="testimonials__text lh-18 fw-500 text-dark-1">
                {item.text}
              </p>
              <div className="pt-20 mt-28 border-top-light">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <Image
                      width={60}
                      height={60}
                      src={item.avatar}
                      alt="image"
                      className="size-60"
                    />
                  </div>
                  <div className="col-auto">
                    <div className="text-15 fw-500 lh-14">{item.name}</div>
                    <div className="text-14 lh-14 text-light-1 mt-5">
                      {item.designation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-hm4tm-prev-active">
        <i className="icon icon-chevron-left text-12" />
      </button>
      {/* End js-prev */}

      <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-hm4tm-next-active">
        <i className="icon icon-chevron-right text-12" />
      </button>
      {/* End js-next */}
    </>
  );
};

export default Testimonial;
