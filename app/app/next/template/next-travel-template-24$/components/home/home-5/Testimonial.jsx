import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { testimonial3 } from "../../../data/testimonialData";

const Testimonial = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        className="overflow-visible"
        navigation={{
          nextEl: ".js-review-next",
          prevEl: ".js-review-prev",
        }}
        pagination={{
          el: ".js-review-pag",
          clickable: true,
        }}
      >
        {testimonial3.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonials -type-2 text-center">
              <div className="testimonials__image mb-24 md:mb-20">
                <img src="/img/testimonials/2/quote.svg" alt="quote" />
                <img src={item.avatar} alt="avatar" />
              </div>
              <h4 className="text-16 fw-500 text-blue-1">{item.meta}</h4>
              <div className="fw-500 text-dark-1 mt-20">{item.text}</div>
              <div className="testimonials__author mt-40">
                <h5 className="text-15 lh-14 fw-500">{item.name}</h5>
                <div className="text-14 text-light-1 mt-5">
                  {item.designation}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* start navigation and pagination */}
      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-review-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End .col prev */}
        <div className="col-auto">
          <div className="pagination -dots text-border js-review-pag" />
        </div>
        {/* End .col pagination */}
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-review-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End .col next */}
      </div>
      {/* start navigation and pagination */}
    </>
  );
};

export default Testimonial;
