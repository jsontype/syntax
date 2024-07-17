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
            <div className="text-center">
              <div className="mb-40">
                <img src="/img/misc/quote-2.svg" alt="quote" />
              </div>

              <div className="text-22 md:text-18 fw-600 text-white">
                {item.text}
              </div>

              <div className="text-white mt-40 sm:mt-30">
                <h5 className="text-15 lh-15 fw-500">{item.name}</h5>
                <div className="text-14"> {item.designation}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* start navigation and pagination */}

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover text-white js-review-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End .col prev */}
        <div className="col-auto">
          <div className="pagination -dots text-border js-review-pag" />
        </div>
        {/* End .col pagination */}
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover text-white js-review-next">
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
