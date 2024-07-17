import { Fragment, memo, useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

//react fs-lightbox
import FsLightbox from "fslightbox-react";

// Redux Selector / {t("home.action")}
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

//utilites
import { useEnterExit } from "../../utilities/usePage";

const HomeHeroSlider = memo(() => {
  useEnterExit();
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);
  return (
    <Fragment>
      <Swiper
        key={themeSchemeDirection}
        dir={themeSchemeDirection}
        navigation={{
          prevEl: ".swiper-banner-button-prev",
          nextEl: ".swiper-banner-button-next",
        }}
        id="home-banner-slider"
        className="iq-main-slider banner-home-swiper overflow-hidden mb-0 wrapper-class"
        modules={[Navigation]}
        loop={true}
      // wrapperClass="m-0 p-0"
      >
        <SwiperSlide className="slide s-bg-1 p-0">
          <div className="banner-home-swiper-image">
            <img
              src={generateImgPath("/assets/images/movies/banner1.webp")}
              alt="banner-home-swiper-image"
            />
          </div>
          <div className="container-fluid position-relative h-100">
            <div className="slider-inner h-100">
              <div className="row align-items-center iq-ltr-direction h-100">
                <div className="col-lg-7 col-md-12">
                  <h1 className="texture-text big-font-5 letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                    {t("home.another_danger")}
                  </h1>
                  <div className="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                    <div className="slider-ratting d-flex align-items-center">
                      <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-half" aria-hidden="true"></i>
                        </li>
                      </ul>
                      <span className="text-white ms-2 font-size-14 fw-500">
                        4.3/5
                      </span>
                      <span className="ms-2">
                        <img
                          src={generateImgPath("/assets/images/movies/imdb-logo.svg")}
                          alt="imdb logo"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">
                      {t("home.action")}
                    </span>
                    <span className="font-size-14 fw-500 time">
                      2 Hr : 6 Mins
                    </span>
                  </div>
                  <p className="line-count-3 RightAnimate-two">
                    {t("home.piracy_robbery")}
                  </p>
                  <div className="trending-list RightAnimate-three">
                    <div className="text-primary genres fw-500">
                      {t("home.geners")}:
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.action")}{" "}
                      </Link>
                    </div>
                    <div className="text-primary tag fw-500">
                      {t("home.tag")}:
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.action")},{" "}
                      </Link>
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.adventure")},{" "}
                      </Link>
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.horror")}{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="RightAnimate-four">
                    <div className="iq-button">
                      <Link
                        to="/movies-detail"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">
                          {t("ott_home.play_now")}
                        </span>{" "}
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                  <Link to="#" className="video-open playbtn" tabIndex="0">
                    <svg
                      onClick={() => setToggler(!toggler)}
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="80px"
                      height="80px"
                      viewBox="0 0 213.7 213.7"
                      enableBackground="new 0 0 213.7 213.7"
                      xmlSpace="preserve"
                    >
                      <polygon
                        className="triangle"
                        fill="none"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeiterlimit="10"
                        points="73.5,62.5 148.5,105.8 73.5,149.1 "
                      ></polygon>
                      <circle
                        className="circle"
                        fill="none"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeiterlimit="10"
                        cx="106.8"
                        cy="106.8"
                        r="103.3"
                      ></circle>
                    </svg>{" "}
                    <span
                      className="w-trailor"
                      onClick={() => setToggler(!toggler)}
                    >
                      {t("home.watch_trailer")}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide s-bg-1 p-0">
          <div className="banner-home-swiper-image">
            <img
              src={generateImgPath("/assets/images/movies/banner2.webp")}
              alt="banner-home-swiper-image"
            />
          </div>
          <div className="container-fluid position-relative h-100">
            <div className="slider-inner h-100">
              <div className="row align-items-center iq-ltr-direction h-100">
                <div className="col-lg-7 col-md-12">
                  <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                    {t("home.bumblebee")}
                  </h1>
                  <div className="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                    <div className="slider-ratting d-flex align-items-center">
                      <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-half" aria-hidden="true"></i>
                        </li>
                      </ul>
                      <span className="text-white ms-2 font-size-14 fw-500">
                        4.3/5
                      </span>
                      <span className="ms-2">
                        <img
                          src={generateImgPath("/assets/images/movies/imdb-logo.svg")}
                          alt="imdb logo"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">
                      {t("home.action")}
                    </span>
                    <span className="font-size-14 fw-500 time">
                      2 Hr : 6 Mins
                    </span>
                  </div>
                  <p className="line-count-3 RightAnimate-two">
                    {t("home.optimus_autobot")}
                  </p>
                  <div className="trending-list RightAnimate-three">
                    <div className="text-primary genres fw-500">
                      {t("home.geners")}:
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.action")}{" "}
                      </Link>
                    </div>
                    <div className="text-primary tag fw-500">
                      {t("home.tag")}:
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.action")},{" "}
                      </Link>
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.adventure")},{" "}
                      </Link>
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.horror")}{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="RightAnimate-four">
                    <div className="iq-button">
                      <Link
                        to="/movies-detail"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">
                          {t("ott_home.play_now")}
                        </span>{" "}
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                  <Link to="#" className="video-open playbtn">
                    <svg
                      onClick={() => setToggler(!toggler)}
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="80px"
                      height="80px"
                      viewBox="0 0 213.7 213.7"
                      enableBackground="new 0 0 213.7 213.7"
                      xmlSpace="preserve"
                    >
                      <polygon
                        className="triangle"
                        fill="none"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeiterlimit="10"
                        points="73.5,62.5 148.5,105.8 73.5,149.1 "
                      ></polygon>
                      <circle
                        className="circle"
                        fill="none"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeiterlimit="10"
                        cx="106.8"
                        cy="106.8"
                        r="103.3"
                      ></circle>
                    </svg>{" "}
                    <span
                      className="w-trailor"
                      onClick={() => setToggler(!toggler)}
                    >
                      {t("home.watch_trailer")}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide s-bg-1 p-0">
          <div className="banner-home-swiper-image">
            <img
              src={generateImgPath("/assets/images/movies/banner3.webp")}
              alt="banner-home-swiper-image"
            />
          </div>
          <div className="container-fluid position-relative h-100">
            <div className="slider-inner h-100">
              <div className="row align-items-center iq-ltr-direction h-100">
                <div className="col-lg-7 col-md-12">
                  <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                    {t("home.another_danger")}
                  </h1>
                  <div className="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                    <div className="slider-ratting d-flex align-items-center">
                      <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-half" aria-hidden="true"></i>
                        </li>
                      </ul>
                      <span className="text-white ms-2 font-size-14 fw-500">
                        4.3/5
                      </span>
                      <span className="ms-2">
                        <img
                          src={generateImgPath("/assets/images/movies/imdb-logo.svg")}
                          alt="imdb logo"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">
                      {t("home.action")}
                    </span>
                    <span className="font-size-14 fw-500 time">
                      2 Hr : 6 Mins
                    </span>
                  </div>
                  <p className="line-count-3 RightAnimate-two">
                    {t("home.piracy_act_robbery")}
                  </p>
                  <div className="trending-list RightAnimate-three">
                    <div className="text-primary genres fw-500">
                      {t("home.geners")}:
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.action")}{" "}
                      </Link>
                    </div>
                    <div className="text-primary tag fw-500">
                      {t("home.tag")}:
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.action")},{" "}
                      </Link>
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.adventure")},{" "}
                      </Link>
                      <Link
                        to="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        {t("home.horror")}{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="RightAnimate-four">
                    <div className="iq-button">
                      <Link
                        to="/movies-detail"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">
                          {t("ott_home.play_now")}
                        </span>{" "}
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                  <Link to="#" className="video-open playbtn" tabIndex="0">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
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
                        strokeiterlimit="10"
                        points="73.5,62.5 148.5,105.8 73.5,149.1 "
                      ></polygon>
                      <circle
                        className="circle"
                        fill="none"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeiterlimit="10"
                        cx="106.8"
                        cy="106.8"
                        r="103.3"
                      ></circle>
                    </svg>{" "}
                    <span
                      className="w-trailor"
                      onClick={() => setToggler(!toggler)}
                    >
                      {t("home.watch_trailer")}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div
          className="swiper-banner-button-prev swiper-nav"
          id="swiper-banner-button-prev"
        >
          <i></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44"
            height="44"
            fill="none"
            stroke="currentColor"
          >
            <circle r="20" cy="22" cx="22"></circle>
          </svg>
        </div>
        <div
          className="swiper-banner-button-next swiper-nav"
          id="swiper-banner-button-next"
        >
          <i></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44"
            height="44"
            fill="none"
            stroke="currentColor"
          >
            <circle r="20" cy="22" cx="22"></circle>
          </svg>
        </div>
      </Swiper>
      <FsLightbox
        toggler={toggler}
        sources={["/assets/images/video/trailer.mp4"]}
      />
    </Fragment>
  );
});

HomeHeroSlider.displayName = "HomeHeroSlider";
export default HomeHeroSlider;
