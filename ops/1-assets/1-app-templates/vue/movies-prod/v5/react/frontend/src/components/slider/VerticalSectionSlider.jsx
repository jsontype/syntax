import { Fragment, memo, useEffect, useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// the hook
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

const VerticalSectionSlider = memo(({ sliderData, containerFluid }) => {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  const themeSchemeDirection = useSelector(theme_scheme_direction);

  return (
    <Fragment>
      <div className="verticle-slider section-padding-bottom">
        <div className={containerFluid}>
          <div className="slider">
            <div className="slider-flex position-relative">
              <div className="slider--col position-relative">
                <div className="vertical-slider-prev swiper-button"><i className="iconly-Arrow-Up-2 icli"></i></div>
                <div className="slider-thumbs" data-swiper="slider-thumbs">
                  <div
                    className="swiper-container"
                    data-swiper="slider-thumbs-inner"
                  >
                    <Swiper
                      spaceBetween={24}
                      slidesPerView={3}
                      dir={themeSchemeDirection}
                      navigation={{
                        nextEl: ".vertical-slider-next",
                        prevEl: ".vertical-slider-prev",
                      }}
                      loop={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      thumbs={{
                        swiper:
                          thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                      }}
                      direction="vertical"
                      className="swiper-wrapper top-ten-slider-nav"
                    >
                      {sliderData.map((data) => (
                        <SwiperSlide
                          key={data.title + "tranding-thumb"}
                          tag="li"
                          className="swiper-slide swiper-bg"
                        >
                          <div className="block-images position-relative">
                            <div className="img-box slider--image">
                              <img
                                src={data.image}
                                className="img-fluid"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <Link to="/shows-details">{t(data.title)}</Link>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="text-body">
                                  {data.movieTime}
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="slider-next btn-verticle">
                      <i className="ri-arrow-down-s-line vertical-aerrow"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="vertical-slider-next swiper-button"
                  tabIndex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-b130b4e10e1468117"
                >
                  <i className="iconly-Arrow-Down-2 icli"></i>
                </div>
              </div>
              <div className="slider-images" data-swiper="slider-images">
                <Swiper
                  dir={themeSchemeDirection}
                  spaceBetween={10}
                  modules={[FreeMode, Navigation, Thumbs]}
                  effect="fade"
                  className="swiper-container responsive-swiper-vertical"
                  loop={true}
                  watchSlidesProgress={true}
                  onSwiper={setThumbsSwiper}
                  breakpoints={{
                    675:{
                      direction: "horizontal"
                    },
                    1025:{
                      direction: "vertical"
                    }
                  }}
                >
                  {sliderData.map((data) => (
                    <SwiperSlide
                      key={data.title + "tranding-main"}
                      tag="li"
                      className="swiper-slide"
                    >
                      <div className="slider--image block-images">
                        <img src={data.image} loading="lazy" alt="" />
                      </div>
                      <div className="description">
                        <div className="block-description">
                          <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                            <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                              <Link
                                to="/view-all"
                                className="text-white text-decoration-none"
                              >
                                {t("home.comedy")}
                              </Link>
                            </li>
                            <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                              <Link
                                to="/view-all"
                                className="text-white text-decoration-none"
                              >
                                {t("home.romance")}
                              </Link>
                            </li>
                            <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                              <Link
                                to="/view-all"
                                className="text-white text-decoration-none"
                              >
                                {t("home.action")}
                              </Link>
                            </li>
                          </ul>
                          <h2 className="iq-title mb-3">
                            <Link to="/shows-details">{t(data.title)}</Link>
                          </h2>
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="slider-ratting d-flex align-items-center">
                              <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                              <span className="text-white ms-2 font-size-14 fw-500">
                                4.3/5
                              </span>
                            </div>
                            <span className="text-body">{data.movieTime}</span>
                          </div>
                          <p className="mt-0 mb-3 line-count-2">
                            {t("ott_home.content_here")}
                          </p>
                          <div className="iq-button">
                            <Link
                              to="/movies-detail"
                              className="btn text-uppercase position-relative"
                            >
                              <span className="button-text">
                                {t("ott_home.play_now")}
                              </span>
                              <i className="fa-solid fa-play"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

VerticalSectionSlider.displayName = "VerticalSectionSlider";
export default VerticalSectionSlider;
