import { memo, useRef } from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const modules = [Autoplay, Navigation];

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const SectionSlider = memo(
  ({

    children,
    title,
    list,
    slidesPerView = 6,
    loop = false,
    spaceBetween = 0,
    className = "",
    link,
    viewAll,
    wrapperClass,
    paddingY = "",
    slideSmall = 2,
    slideMedium = 3,
    cardClass = true,
    swiperClass
  }) => {
    const slider = useRef(null);

    const initSwiper = (swiper) => {
      addCustomClassToVisibleSlides(swiper);
    };

    const addCustomClassToVisibleSlides = (swiper) => {
      if (slider.current) {
        if (swiper) {
          slider.current
            .querySelectorAll(".swiper-slide")
            .forEach((separateSlide) => separateSlide.classList.remove("last"));

          const swiperSlide = slider.current.querySelectorAll(
            ".swiper-slide-visible"
          );

          const lastVisibleSlide = swiperSlide[swiperSlide.length - 1];

          setTimeout(() => {
            if (lastVisibleSlide) {
              lastVisibleSlide.classList.add("swiper-active", "last");
            }
          }, 0);
        }
      }
    };

    return (
      <div className={className}>
        <Container fluid>
          <div className={`overflow-hidden ${cardClass ? "card-style-slider" : ''}`} ref={slider}>
            <div className={`d-flex align-items-center justify-content-between px-md-3 px-1 mb-4 ${paddingY}`}>
              <h5 className="main-title text-capitalize mb-0">{title}</h5>
              {viewAll === false ? "" : <Link
                to={link ? link : "/view-all"}
                className="text-primary iq-view-all text-decoration-none"
              >
                View All
              </Link>}
            </div>
            <Swiper
              className={`position-relative swiper swiper-card ${wrapperClass ? 'wrapper-class' : ''} ${swiperClass}`}
              slidesPerView={slidesPerView}
              loop={loop}
              watchSlidesProgress
              spaceBetween={spaceBetween}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: slideSmall,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: slideSmall,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: slideMedium,
                  spaceBetween: 0,
                },
                1025: {
                  slidesPerView: slidesPerView,
                  spaceBetween: 0,
                },
                1500: {
                  slidesPerView: slidesPerView,
                  spaceBetween: 0,
                },
              }}
              onSwiper={initSwiper}
              onSlideChange={initSwiper}
              modules={modules}
            >
              {list.map((data, index) => (
                <SwiperSlide tag="li" key={index + generateUUID() + "slider"}>
                  {children(data)}
                </SwiperSlide>
              ))}
              <div className="swiper-button swiper-button-next"></div>
              <div className="swiper-button swiper-button-prev"></div>
            </Swiper>
          </div>
        </Container>
      </div>
    );
  }
);

SectionSlider.displayName = "SectionSlider";

export default SectionSlider;
