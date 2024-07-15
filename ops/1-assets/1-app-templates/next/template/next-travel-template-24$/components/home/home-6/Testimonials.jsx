import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css/thumbs";
import { testimonial2 } from "../../../data/testimonialData";

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
      >
        {testimonial2.slice(0, 5).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonials -type-2 text-center">
              <div className="mb-40">
                <img src="/img/misc/quote.svg" alt="quote" />
              </div>
              <div className="text-22 md:text-18 fw-600 text-dark-1">
                {item.text}
              </div>
              <div className="mt-40">
                <h5 className="text-17 lh-15 fw-500">{item.name}</h5>
                <div>{item.designation}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pt-60 lg:pt-40">
        <div className="pagination -avatars row x-gap-40 y-gap-40 justify-center ">
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={5}
            modules={[Thumbs]}
          >
            {testimonial2.slice(0, 5).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="pagination__item">
                  <img src={item.avatar} alt="image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
