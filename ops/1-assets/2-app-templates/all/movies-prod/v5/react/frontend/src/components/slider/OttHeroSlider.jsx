import React, { memo, Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// react-router-dom
import { Link } from "react-router-dom";

// components
import CustomButton from "../CustomButton";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

// img
import ott1 from "/assets/images/movies/ott1.webp";
import ott2 from "/assets/images/movies/ott2.webp";
import ott3 from "/assets/images/movies/ott3.webp";
import logo from "/assets/images/movies/imdb-logo.svg";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";

const OttHeroSlider = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [active, setActive] = useState(false);
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      if (themeSchemeDirection == 'rtl') {
        const wrapperclass = document.getElementsByClassName('swiper-wrapper');
        wrapperclass[0].classList.add('swiper-rtl-wrapper');
        const classaccess = document.getElementsByClassName('swiper-rtl-wrapper')
        //  console.log(classaccess)
        classaccess[0].childNodes.forEach(element => {
          if (element.classList.contains('swiper-slide-active')) {
            document.getElementById("iq-small-rtl-swiper").parentElement.removeAttribute("class")
            document.getElementById("iq-small-rtl-swiper").parentElement.classList.add('swiper-wrapper', 'swiper-rtl-wrapper')
            switch (element.getAttribute('data-swiper-small-slide-index')) {
              case 'small-one':
                element.parentNode.classList.add('iq-small-rtl')
                break;
              case 'small-two':
                element.parentNode.classList.add('iq-small-rtl-one')
                break;
              case 'small-three':
                element.parentNode.classList.add('iq-small-rtl-two')
                break;
            }

          }

        });
        wrapperclass[1].classList.add('swiper-rtl-wrapper');
        classaccess[1].childNodes.forEach(element => {
          if (element.classList.contains('swiper-slide-active')) {
            document.getElementById("1").parentElement.removeAttribute("class")
            document.getElementById("1").parentElement.classList.add('swiper-wrapper', 'swiper-rtl-wrapper')
            switch (parseInt(element.getAttribute('data-swiper-slide-index'))) {
              case 0:
                element.parentNode.classList.add('iq-rtl')
                break;
              case 1:
                element.parentNode.classList.add('iq-rtl-one')
                break;
              case 2:
                element.parentNode.classList.add('iq-rtl-two')
                break;
            }

          }

        });
      }

      return () => {
        if (document.getElementById("1")) {
          document.getElementById("1").parentElement.removeAttribute("class")
          document.getElementById("1").parentElement.classList.add('swiper-wrapper')
        }
        if (document.getElementById("iq-small-rtl-swiper")) {
          document.getElementById("iq-small-rtl-swiper").parentElement.removeAttribute("class")
          document.getElementById("iq-small-rtl-swiper").parentElement.classList.add('swiper-wrapper')
        }
      }
    }
  }, [active, themeSchemeDirection])
  return (
    <Fragment>
      <div className="iq-banner-thumb-slider">
        <div className="slider">
          <div className="position-relative slider-bg d-flex justify-content-end">
            <div className="position-relative my-auto">
              <div
                className="horizontal_thumb_slider"
                data-swiper="slider-thumbs-ott"
              >
                <div className="banner-thumb-slider-nav">
                  <Swiper
                    dir={themeSchemeDirection}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    autoplay={{
                      delay: 1000,
                      // disableOnInteraction: true,
                    }}
                    direction="horizontal"
                    navigation={{
                      prevEl: ".slider-prev",
                      nextEl: ".slider-next",
                    }}
                    spaceBetween={24}
                    loop={true}
                    slidesPerView={2}
                    breakpoints={{
                      0: {
                        direction: "horizontal",
                        slidesPerView: 1,
                      },
                      768: {
                        direction: "horizontal",
                        slidesPerView: 2,
                      },
                    }}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="swiper-horizontal swiper-container mb-0"
                    id="responsive-rtl-swiper"
                  >
                    <SwiperSlide className="swiper-bg" id="iq-small-rtl-swiper" data-swiper-small-slide-index="small-one">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img
                            src={ott1}
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                          <div className="block-description">
                            <h6 className="iq-title fw-500 mb-0">
                              {t("ott_home.the_hunter")}
                            </h6>
                            <span className="fs-12">2 hr 6 minute</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-bg" id="iq-small-rtl-swiper" data-swiper-small-slide-index="small-two">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img
                            src={ott2}
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                          <div className="block-description">
                            <h6 className="iq-title fw-500 mb-0">
                              {t("ott_home.the_mandalorian")}
                            </h6>
                            <span className="fs-12">2 hr 14 minute</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-bg" id="iq-small-rtl-swiper" data-swiper-small-slide-index="small-three">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img
                            src={ott3}
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                          <div className="block-description">
                            <h6 className="iq-title fw-500 mb-0">
                              {t("ott_home.better_call_saul")}
                            </h6>
                            <span className="fs-12">2 hr 55 minute</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="slider-prev swiper-button" onClick={() => setActive(!active)}>
                    <i className="iconly-Arrow-Left-2 icli"></i>
                  </div>
                  <div className="slider-next swiper-button" onClick={() => setActive(!active)}>
                    <i className="iconly-Arrow-Right-2 icli"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-images iq-rtl-thumb-swiper" data-swiper="slider-images-ott">
              <Swiper
                dir={themeSchemeDirection}
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                modules={[Navigation, Thumbs]}
                watchSlidesProgress={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }} data-swiper-slide-index="0"
                breakpoints={{
                  0: {
                    allowTouchMove: true
                  },
                  768: {
                    allowTouchMove: true
                  },
                  1025: {
                    allowTouchMove: false
                  },
                  1500: {
                    allowTouchMove: false
                  },
                }}
                allowTouchMove={false}
                loop={true}
                className="swiper-container"
                id="iq-rtl-thumb-swiper"
              >
                <SwiperSlide className="p-0" id="1" data-swiper-slide-index="0">
                  <div className="slider--image block-images">
                    <img src={ott1} loading="lazy" alt="banner" />
                  </div>
                  <div className="description">
                    <div className="row align-items-center h-100">
                      <div className="col-lg-6 col-md-12">
                        <div className="slider-content">
                          <div className="d-flex align-items-center RightAnimate mb-3">
                            <span className="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">
                              Pg
                            </span>
                            <ul className="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  to="/view-all"
                                  className="text-decoration-none"
                                >
                                  {t("ott_home.adventure")}
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  to="/view-all"
                                  className="text-decoration-none"
                                >
                                  {t("ott_home.thriller")}
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  to="/view-all"
                                  className="text-decoration-none"
                                >
                                  {t("ott_home.drama")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                            {t("ott_home.the_hunter")}
                          </h1>
                          <p className="line-count-3 RightAnimate-two">
                            {t("ott_home.after_death")}
                          </p>
                          <div className="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
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
                              <span className="ms-2">
                                <img
                                  src={logo}
                                  alt="imdb logo"
                                  className="img-fluid"
                                />
                              </span>
                            </div>
                            <span className="font-size-14 fw-500">
                              2 Hr : 6 Mins
                            </span>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              {t("ott_home.genres")}:{" "}
                              <Link
                                to="/view-all"
                                className="text-decoration-none ms-1"
                              >
                                {t("ott_home.drama")}
                              </Link>
                            </div>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              {t("ott_home.starting")}:{" "}
                              <Link
                                to="/cast-detail"
                                className="text-decoration-none ms-1"
                              >
                                {t("ott_home.jeffrey_silver")}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <CustomButton
                          buttonTitle={t("ott_home.stream_now")}
                          link="/movies-detail"
                          linkButton="false"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-0" id="1" data-swiper-slide-index="1">
                  <div className="slider--image block-images">
                    <img src={ott2} loading="lazy" alt="banner" />
                  </div>
                  <div className="description">
                    <div className="row align-items-center h-100">
                      <div className="col-lg-6 col-md-12">
                        <div className="slider-content">
                          <div className="d-flex align-items-center RightAnimate mb-3">
                            <span className="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">
                              NC-17
                            </span>
                            <ul className="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  to="/view-all"
                                  className="text-decoration-none"
                                >
                                  {t("ott_home.animation")}
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  to="/view-all"
                                  className="text-decoration-none"
                                >
                                  {t("ott_home.sci_fi")}
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  to="/view-all"
                                  className="text-decoration-none"
                                >
                                  {t("ott_home.action")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                            {t("ott_home.the_mandalorian")}
                          </h1>
                          <p className="line-count-3 RightAnimate-two">
                            {t("ott_home.after_galactic")}
                          </p>
                          <div className="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
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
                            <span className="font-size-14 fw-500">
                              2 Hr : 14 Mins
                            </span>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              {t("ott_home.genres")}:{" "}
                              <Link
                                to="/view-all"
                                className="text-decoration-none ms-1"
                              >
                                {t("ott_home.sci_fi")}
                              </Link>
                            </div>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              {t("ott_home.starting")}:{" "}
                              <Link
                                to="/cast-detail"
                                className="text-decoration-none ms-1"
                              >
                                {t("ott_home.james_chinlund")}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <CustomButton
                          buttonTitle={t("ott_home.stream_now")}
                          link="/movies-detail"
                          linkButton="false"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-0" id="1" data-swiper-slide-index="2">
                  <div className="slider--image block-images">
                    <img src={ott3} loading="lazy" alt="banner" />
                  </div>
                  <div className="description">
                    <div className="row align-items-center h-100">
                      <div className="col-lg-6 col-md-12">
                        <div className="slider-content">
                          <div className="d-flex align-items-center RightAnimate mb-3">
                            <span className="badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3">
                              G
                            </span>
                            <ul className="p-0 mb-0 list-inline d-flex flex-wrap align-items-center movie-tag">
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  to="/view-all"
                                  className="text-decoration-none"
                                >
                                  {t("ott_home.history")}
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  to="/view-all"
                                  className="text-decoration-none"
                                >
                                  {t("ott_home.action")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                            {t("ott_home.better_call_saul")}
                          </h1>
                          <p className="line-count-3 RightAnimate-two">
                            {t("ott_home.ex_jimmy")}
                          </p>
                          <div className="d-flex flex-wrap align-items-center gap-3 RightAnimate-three">
                            <div className="slider-ratting d-flex align-items-center">
                              <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                <li>
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            </div>
                            <span className="font-size-14 fw-500">
                              2 Hr : 55 Mins
                            </span>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              {t("ott_home.genres")}:{" "}
                              <Link
                                to="/view-all"
                                className="text-decoration-none ms-1"
                              >
                                {t("ott_home.horror")}
                              </Link>
                            </div>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              {t("ott_home.starting")}:{" "}
                              <Link
                                to="/cast-detail"
                                className="text-decoration-none ms-1"
                              >
                                {t("ott_home.brenda_chapman")}
                              </Link>
                              <span className="text-body">,</span>
                              <Link
                                to="/cast-detail"
                                className="text-decoration-none ms-1"
                              >
                                {t("ott_home.caleb_deschannelr")}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <CustomButton
                          buttonTitle={t("ott_home.stream_now")}
                          link="/movies-detail"
                          linkButton="false"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

OttHeroSlider.displayName = OttHeroSlider;
export default OttHeroSlider;
