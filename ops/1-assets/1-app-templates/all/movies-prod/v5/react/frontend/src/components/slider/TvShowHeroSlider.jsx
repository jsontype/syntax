import { Fragment, memo, useState } from "react";

//react-bootstrap
import { Col, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

//react fs-lightbox
import FsLightbox from "fslightbox-react";

//img
import img1 from "/assets/images/tv-show/banner-1.webp";
import img2 from "/assets/images/tv-show/banner-2.webp";
import img3 from "/assets/images/tv-show/banner-3.webp";

// the hook
import { useTranslation } from "react-i18next";

//utilites
import { useEnterExit } from "../../utilities/usePage";
import { generateImgPath } from "../../StaticData/data";


const TvShowHeroSlider = memo(() => {
  useEnterExit();
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);

  const video = generateImgPath("/assets/images/video/trailer.mp4");

  return (
    <Fragment>
      <section className="banner-container">
        <div className="movie-banner">
          <div id="banner-detail-slider" className="banner-container">
            <Swiper
              key={themeSchemeDirection}
              dir={themeSchemeDirection}
              navigation={{
                prevEl: ".swiper-banner-button-prev",
                nextEl: ".swiper-banner-button-next",
              }}
              slidesPerView={1.2}
              modules={[Navigation]}
              loop={true}
              centeredSlides={true}
              className="swiper-banner-container"
            >
              <SwiperSlide className="p-0">
                <div className="movie-banner-image">
                  <img src={img1} alt="movie-banner-image" />
                </div>
                <div className="shows-content h-100">
                  <Row className="row align-items-center h-100">
                    <Col lg="7" md="12">
                      <h1
                        className="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two"
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.6"
                      >
                        {t("header.vikingr")}
                      </h1>
                      <div
                        className="flex-wrap align-items-center fadeInLeft animated"
                        data-animation-in="fadeInLeft"
                        style={{ opacity: 1 }}
                      >
                        <div className="slider-ratting d-flex align-items-center gap-3">
                          <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i
                                className="fa fa-star-half"
                                aria-hidden="true"
                              ></i>
                            </li>
                          </ul>
                          <span className="text-white">3.5(lmdb)</span>
                        </div>
                        <div className="d-flex flex-wrap align-items-center gap-3 movie-banner-time">
                          <span className="badge bg-secondary p-2">
                            <i className="fa fa-eye"></i>{" "}
                            PG
                          </span>
                          <span className="font-size-6">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="trending-time font-normal">
                            {" "}
                            1hr : 44mins{" "}
                          </span>
                          <span className="font-size-6">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="trending-year font-normal">
                            {" "}
                            Feb 2018{" "}
                          </span>
                        </div>
                        <p
                          className="movie-banner-text line-count-3"
                          data-animation-in="fadeInUp"
                          data-delay-in="1.2"
                        >
                          {t("home.dinosaurs_group")}
                        </p>
                      </div>
                      <div
                        className="iq-button"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <Link
                          to="/shows-details"
                          className="btn text-uppercase position-relative"
                        >
                          <span className="button-text">
                            {t("detail_page.play_now")}
                          </span>{" "}
                          <i className="fa-solid fa-play"></i>
                        </Link>
                      </div>
                    </Col>
                    <Col
                      lg="5"
                      md="12"
                      className="trailor-video iq-slider d-none d-lg-block"
                    >
                      <Link to="#" className="video-open playbtn" tabIndex="0">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="80px"
                          height="80px"
                          viewBox="0 0 213.7 213.7"
                          enableBackground="new 0 0 213.7 213.7"
                          xmlSpace="preserve"
                          onClick={() => setToggler(!toggler)}
                        >
                          <polygon
                            className="triangle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="73.5,62.5 148.5,105.8 73.5,149.1 "
                          ></polygon>
                          <circle
                            className="circle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="106.8"
                            cy="106.8"
                            r="103.3"
                          ></circle>
                        </svg>
                        <span
                          className="w-trailor"
                          onClick={() => setToggler(!toggler)}
                        >
                          {t("home.watch_trailer")}
                        </span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-0">
                <div className="movie-banner-image">
                  <img src={img2} alt="movie-banner-image" />
                </div>
                <div className="shows-content h-100">
                  <div className="row align-items-center h-100">
                    <Col lg="7" md="12">
                      <h1
                        className="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two"
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.6"
                      >
                        {t("header.the_boys")}
                      </h1>
                      <div
                        className="flex-wrap align-items-center fadeInLeft animated"
                        data-animation-in="fadeInLeft"
                        style={{ opacity: 1 }}
                      >
                        <div className="slider-ratting d-flex align-items-center gap-3">
                          <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i
                                className="fa fa-star-half"
                                aria-hidden="true"
                              ></i>
                            </li>
                          </ul>
                          <span className="text-white">3.5(lmdb)</span>
                        </div>
                        <div className="d-flex flex-wrap align-items-center gap-3 movie-banner-time">
                          <span className="badge bg-secondary p-2">
                            <i className="fa fa-eye"></i>{" "}G
                          </span>
                          <span className="font-size-6">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="trending-time font-normal">
                            2hr : 42mins{" "}
                          </span>
                          <span className="font-size-6">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="trending-year font-normal">
                            {" "}
                            Nov 2017{" "}
                          </span>
                        </div>
                        <p
                          className="movie-banner-text line-count-3"
                          data-animation-in="fadeInUp"
                          data-delay-in="1.2"
                        >
                          {t("home.brutal_emperor")}
                        </p>
                      </div>
                      <div
                        className="iq-button"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <Link
                          to="/shows-details"
                          className="btn text-uppercase position-relative"
                        >
                          <span className="button-text">
                            {t("detail_page.play_now")}
                          </span>{" "}
                          <i className="fa-solid fa-play"></i>
                        </Link>
                      </div>
                    </Col>
                    <Col
                      lg="5"
                      md="12"
                      className="trailor-video iq-slider d-none d-lg-block"
                    >
                      <Link to="#" className="video-open playbtn" tabIndex="0">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="80px"
                          height="80px"
                          viewBox="0 0 213.7 213.7"
                          enableBackground="new 0 0 213.7 213.7"
                          xmlSpace="preserve"
                          onClick={() => setToggler(!toggler)}
                        >
                          <polygon
                            className="triangle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="73.5,62.5 148.5,105.8 73.5,149.1 "
                          ></polygon>
                          <circle
                            className="circle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="106.8"
                            cy="106.8"
                            r="103.3"
                          ></circle>
                        </svg>
                        <span
                          className="w-trailor"
                          onClick={() => setToggler(!toggler)}
                        >
                          {t("home.watch_trailer")}
                        </span>
                      </Link>
                    </Col>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-0">
                <div className="movie-banner-image">
                  <img src={img3} alt="movie-banner-image" />
                </div>
                <div className="shows-content h-100">
                  <div className="row align-items-center h-100">
                    <Col lg="7" md="12">
                      <h1
                        className="texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two"
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.6"
                      >
                        {t("header.breaking_bad")}
                      </h1>
                      <div
                        className="flex-wrap align-items-center fadeInLeft animated"
                        data-animation-in="fadeInLeft"
                        style={{ opacity: 1 }}
                      >
                        <div className="slider-ratting d-flex align-items-center gap-3">
                          <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fas fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i
                                className="fa fa-star-half"
                                aria-hidden="true"
                              ></i>
                            </li>
                          </ul>
                          <span className="text-white">3.5(lmdb)</span>
                        </div>
                        <div className="d-flex flex-wrap align-items-center gap-3 movie-banner-time">
                          <span className="badge bg-secondary p-2">
                            <i className="fa fa-eye"></i>
                            {" "}PG-13
                          </span>
                          <span className="font-size-6">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="trending-time font-normal">
                            {" "}
                            2hr : 12mins{" "}
                          </span>
                          <span className="font-size-6">
                            <i className="fa-solid fa-circle"></i>
                          </span>
                          <span className="trending-year font-normal">
                            {" "}
                            Dec 2018{" "}
                          </span>
                        </div>
                        <p
                          className="movie-banner-text line-count-3"
                          data-animation-in="fadeInUp"
                          data-delay-in="1.2"
                        >
                          {t("home.jumbo_also")}
                        </p>
                      </div>
                      <div
                        className="iq-button"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <Link
                          to="/shows-details"
                          className="btn text-uppercase position-relative"
                        >
                          <span className="button-text">
                            {t("detail_page.play_now")}
                          </span>{" "}
                          <i className="fa-solid fa-play"></i>
                        </Link>
                      </div>
                    </Col>
                    <Col
                      lg="5"
                      md="12"
                      className="trailor-video iq-slider d-none d-lg-block"
                    >
                      <Link to="#" className="video-open playbtn" tabIndex="0">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="80px"
                          height="80px"
                          viewBox="0 0 213.7 213.7"
                          enableBackground="new 0 0 213.7 213.7"
                          xmlSpace="preserve"
                          onClick={() => setToggler(!toggler)}
                        >
                          <polygon
                            className="triangle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="73.5,62.5 148.5,105.8 73.5,149.1 "
                          ></polygon>
                          <circle
                            className="circle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="106.8"
                            cy="106.8"
                            r="103.3"
                          ></circle>
                        </svg>
                        <span
                          className="w-trailor"
                          onClick={() => setToggler(!toggler)}
                        >
                          {t("home.watch_trailer")}
                        </span>
                      </Link>
                    </Col>
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-banner-button-next">
                <i className="iconly-Arrow-Right-2 icli arrow-icon"></i>
              </div>
              <div className="swiper-banner-button-prev">
                <i className="iconly-Arrow-Left-2 icli arrow-icon"></i>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <FsLightbox
        toggler={toggler}
        sources={[video]}
      />
    </Fragment>
  );
});

TvShowHeroSlider.displayName = TvShowHeroSlider;
export default TvShowHeroSlider;
