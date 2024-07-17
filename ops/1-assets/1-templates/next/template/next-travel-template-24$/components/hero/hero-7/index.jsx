import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {
  return (
    <>
      <section className="masthead -type-7">
        <div className="masthead-slider js-masthead-slider-7">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".hero7-next-active",
              prevEl: ".hero7-prev-active",
            }}
          >
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/bg.png" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places at exclusive deals
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/bg.png" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places at exclusive deals
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="masthead-slider__nav -prev js-prev">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-prev-active">
              <i className="icon-arrow-left" />
            </button>
          </div>
          {/* End prev navigation */}

          <div className="masthead-slider__nav -next js-next">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-next-active">
              <i className="icon-arrow-right" />
            </button>
          </div>
          {/* End next navigation */}
        </div>
        {/* End slider */}

        <MainFilterSearchBox />
        {/* End tab-filter */}
      </section>
      {/* End section */}
    </>
  );
};

export default index;
