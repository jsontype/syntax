import { Fragment, memo, useState } from "react";

// NExt-Link
import Link from "next/link";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

//react fs-lightbox
import FsLightbox from "fslightbox-react";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

const HomeHeroSlider = memo(() => {
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);
  return (
    <Fragment>
      <Swiper
        key={String(themeSchemeDirection)}
        dir={String(themeSchemeDirection)}
        navigation={{
          prevEl: ".home-banner-slider-prev",
          nextEl: ".home-banner-slider-next",
        }}
        id="home-banner-slider"
        className="iq-main-slider banner-home-swiper overflow-hidden mb-0"
        modules={[Navigation]}
        loop={true}
      >
        <SwiperSlide className="slide s-bg-1 p-0">
          <div className="banner-home-swiper-image">
            <img
              src="/assets/images/movies/banner1.webp"
              alt="banner-home-swiper-image"
            />
          </div>
          <div className="container-fluid position-relative h-100">
            <div className="slider-inner h-100">
              <div className="row align-items-center iq-ltr-direction h-100">
                <div className="col-lg-7 col-md-12">
                  <h1 className="texture-text big-font-5 letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                    another danger
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
                          src="/assets/images/movies/imdb-logo.svg"
                          alt="imdb logo"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">
                      action
                    </span>
                    <span className="font-size-14 fw-500 time">
                      2 Hr : 6 Mins
                    </span>
                  </div>
                  <p className="line-count-3 RightAnimate-two">
                    Piracy is an act of robbery or criminal violence by ship or
                    boat-borne attackers upon another ship or a coastal area,
                    typically with the goal of stealing cargo and other valuable
                    items or properties.
                  </p>
                  <div className="trending-list RightAnimate-three">
                    <div className="text-primary genres fw-500">
                      Genres:
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Action{" "}
                      </Link>
                    </div>
                    <div className="text-primary tag fw-500">
                      Tag:
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Action,{" "}
                      </Link>
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Adventure,{" "}
                      </Link>
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Horror{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="RightAnimate-four">
                    <div className="iq-button">
                      <Link
                        href="/movies/detail"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">play now</span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                  <Link href="#" className="video-open playbtn" tabIndex={0}>
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
                      className="w-trailor text-uppercase"
                      onClick={() => setToggler(!toggler)}
                    >
                      WATCH TRAILER
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
              src="/assets/images/movies/banner2.webp"
              alt="banner-home-swiper-image"
            />
          </div>
          <div className="container-fluid position-relative h-100">
            <div className="slider-inner h-100">
              <div className="row align-items-center iq-ltr-direction h-100">
                <div className="col-lg-7 col-md-12">
                  <h1 className="texture-text big-font-5 letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                    Bumblebee
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
                          src="/assets/images/movies/imdb-logo.svg"
                          alt="imdb logo"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">
                      action
                    </span>
                    <span className="font-size-14 fw-500 time">
                      2 Hr : 6 Mins
                    </span>
                  </div>
                  <p className="line-count-3 RightAnimate-two">
                    Optimus Prime sends Autobot scout B-127 to Earth to form a
                    base where they can regroup. Later, the scout befriends a
                    girl named Charlie, who names him Bumblebee.
                  </p>
                  <div className="trending-list RightAnimate-three">
                    <div className="text-primary genres fw-500">
                      Genres:
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Action{" "}
                      </Link>
                    </div>
                    <div className="text-primary tag fw-500">
                      Tag:
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Action,{" "}
                      </Link>
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Adventure,{" "}
                      </Link>
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Horror{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="RightAnimate-four">
                    <div className="iq-button">
                      <Link
                        href="/movies/detail"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">play now</span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                  <Link href="#" className="video-open playbtn">
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
                      className="w-trailor text-uppercase"
                      onClick={() => setToggler(!toggler)}
                    >
                      Watch Trailer
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
              src="/assets/images/movies/banner3.webp"
              alt="banner-home-swiper-image"
            />
          </div>
          <div className="container-fluid position-relative h-100">
            <div className="slider-inner h-100">
              <div className="row align-items-center iq-ltr-direction h-100">
                <div className="col-lg-7 col-md-12">
                  <h1 className="texture-text big-font-5 letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">
                    another danger
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
                          src="/assets/images/movies/imdb-logo.svg"
                          alt="imdb logo"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">
                      action
                    </span>
                    <span className="font-size-14 fw-500 time">
                      2 Hr : 6 Mins
                    </span>
                  </div>
                  <p className="line-count-3 RightAnimate-two">
                    Piracy is an act of robbery or criminal violence by ship or
                    boat-borne attackers upon another ship or a coastal area,
                    typically with the goal of stealing cargo and other valuable
                    items or properties.
                  </p>
                  <div className="trending-list RightAnimate-three">
                    <div className="text-primary genres fw-500">
                      Genres:
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Action{" "}
                      </Link>
                    </div>
                    <div className="text-primary tag fw-500">
                      Tag:
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Action,{" "}
                      </Link>
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Adventure,{" "}
                      </Link>
                      <Link
                        href="/view-all"
                        className="fw-normal text-white text-decoration-none ms-2"
                      >
                        {" "}
                        Horror{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="RightAnimate-four">
                    <div className="iq-button">
                      <Link
                        href="/movies/detail"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">play now</span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                  <Link href="#" className="video-open playbtn" tabIndex={0}>
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
                      className="w-trailor text-uppercase"
                      onClick={() => setToggler(!toggler)}
                    >
                      Watch Trailer
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div
          className="swiper-banner-button-prev swiper-nav home-banner-slider-prev"
          id="home-banner-slider-prev"
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
          className="swiper-banner-button-next swiper-nav home-banner-slider-next"
          id="home-banner-slider-next"
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
})

HomeHeroSlider.displayName = "HomeHeroSlider"
export default HomeHeroSlider