import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { testimonial1 } from "../../../data/testimonialData";

const Testimonial = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          el: ".js-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar]}
      >
        {testimonial1.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="row items-center x-gap-30 y-gap-20">
              <div className="col-auto">
                <Image width={80} height={80} src={item.avatar} alt="image" />
              </div>
              <div className="col-auto">
                <h5 className="text-16 text-white fw-500">{item.name}</h5>
                <div className="text-15 text-white lh-15">
                  {item.designation}
                </div>
              </div>
            </div>
            <p className="text-18 fw-400 text-white mt-30 sm:mt-20">
              {item.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* start scroll pagination */}
      <div className="d-flex items-center mt-60 sm:mt-20 js-testimonials-slider-pag">
        <div className="text-white fw-500 js-current">01</div>
        <div className="slider-scrollbar -light bg-white-10 ml-20 mr-20 w-max-300  js-scrollbar" />
        <div className="text-white fw-500 js-all">03</div>
      </div>
      {/* end scroll pagination */}
    </>
  );
};

export default Testimonial;
