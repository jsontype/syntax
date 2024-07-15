import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { testimonial3 } from "../../../data/testimonialData";

const Testimonial = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{
          el: ".js-review-pag",
          clickable: true,
        }}
      >
        {testimonial3.slice(0, 4).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonials -type-2 ">
              <img src="/img/misc/quote.svg" alt="quote" className="mb-35" />
              <div className="text-22 md:text-18 fw-600 text-dark-1">
                {item.text}
              </div>
              <div className="d-flex items-center mt-35">
                <img src={item.avatar} alt="image" className="size-70" />
                <div className="ml-20">
                  <h5 className="text-15 lh-11 fw-500">{item.name}</h5>
                  <div className="text-14 lh-11 mt-5">{item.designation}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* start navigation and pagination */}
      <div className="d-flex x-gap-15 items-center  pt-40 sm:pt-20">
        <div className="col-auto">
          <div className="pagination -dots text-border js-review-pag " />
        </div>
        {/* End .col pagination */}
      </div>
      {/* start navigation and pagination */}
    </>
  );
};

export default Testimonial;
