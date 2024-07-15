import React, { Fragment, useState, useEffect } from "react";

// next link
import Link from "next/link";

// next image
import Image from "next/image";

// components
import CustomButton from "../CustomButton";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";

SwiperCore.use([Navigation, Thumbs]);

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

const OttHeroSlider = () => {
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [render, setRender] = useState(true)
  useEffect(() => {
    setRender(false)
    setTimeout(() => {
      setRender(true)
    }, 100);
    return () => { };
  }, []);

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
                    key={String(themeSchemeDirection)}
                    dir={String(themeSchemeDirection)}
                    tag="ul"
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
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
                    className="swiper-horizontal swiper-container mb-0"
                  >
                    <SwiperSlide className="swiper-bg">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <Image
                            src="/assets/images/movies/ott1.webp"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                          <div className="block-description ps-3">
                            <h6 className="iq-title fw-500 mb-0">The Hunter</h6>
                            <span className="fs-12">2 hr 6 minute</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-bg">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <Image
                            src="/assets/images/movies/ott2.webp"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                          <div className="block-description ps-3">
                            <h6 className="iq-title fw-500 mb-0"> The Mandalorian </h6>
                            <span className="fs-12">2 hr 14 minute</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-bg">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <Image
                            src="/assets/images/movies/ott3.webp"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                          <div className="block-description ps-3">
                            <h6 className="iq-title fw-500 mb-0">Better call saul</h6>
                            <span className="fs-12">2 hr 55 minute</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="slider-prev swiper-button">
                    <i className="iconly-Arrow-Left-2 icli"></i>
                  </div>
                  <div className="slider-next swiper-button">
                    <i className="iconly-Arrow-Right-2 icli"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-images" data-swiper="slider-images-ott">
              <Swiper
                key={String(themeSchemeDirection)}
                dir={String(themeSchemeDirection)}
                tag="ul"
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                watchSlidesProgress={true}
                allowTouchMove={false}
                loop={true}
                className="swiper-container"
              >
                <SwiperSlide className="p-0">
                  <div className="slider--image block-images">
                    <Image src="/assets/images/movies/ott1.webp" loading="lazy" alt="banner" width={0}
                      height={0}
                      sizes="100vw" />
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
                                  href="/view-all"
                                  className="text-decoration-none"
                                >
                                  Adventure
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  href="/view-all"
                                  className="text-decoration-none"
                                >
                                  Thriller
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  href="/view-all"
                                  className="text-decoration-none"
                                >
                                  Drama
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                            The Hunter
                          </h1>
                          <p className="line-count-3 RightAnimate-two">
                            After the death of their father, two siblings fight
                            for the throne, thereby causing a civil war known as
                            the Dance of the Dragons. Rhaenyra tries to hold the
                            realm together as the tension rises following a
                            tragic loss. Meanwhile, Daemon prepares for war.
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
                                <Image
                                  src="/assets/images/movies/imdb-logo.svg"
                                  alt="imdb logo"
                                  className="img-fluid"
                                  width={50}
                                  height={50}
                                  sizes="100vw"
                                />
                              </span>
                            </div>
                            <span className="font-size-14 fw-500">
                              2 Hr : 6 Mins
                            </span>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              genres:{" "}
                              <Link
                                href="/view-all"
                                className="text-decoration-none ms-1"
                              >
                                Drama
                              </Link>
                            </div>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              Starting:{" "}
                              <Link
                                href="/cast/detail"
                                className="text-decoration-none ms-1"
                              >
                                Jeffrey Silver
                              </Link>
                            </div>
                          </div>
                        </div>
                        <CustomButton
                          buttonTitle="Stream Now "
                          link="/movies/detail"
                          linkButton="false"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-0">
                  <div className="slider--image block-images">
                    <Image src="/assets/images/movies/ott2.webp" loading="lazy" alt="banner" width={0}
                      height={0}
                      sizes="100vw" />
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
                                  href="/view-all"
                                  className="text-decoration-none"
                                >
                                  Animation
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  href="/view-all"
                                  className="text-decoration-none"
                                >
                                  Sci-Fi
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  href="/view-all"
                                  className="text-decoration-none"
                                >
                                  Action
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                            The Mandalorian
                          </h1>
                          <p className="line-count-3 RightAnimate-two">
                            After the fall of the Galactic Empire, a lone
                            gunfighter makes his way through the outer reaches
                            of the lawless galaxy he show follows the adventures
                            of a lone Mandalorian bounty hunter, Din Djarin, as
                            he navigates the outer reaches of the galaxy, far
                            from the authority of the New Republic.
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
                              genres:{" "}
                              <Link
                                href="/view-all"
                                className="text-decoration-none ms-1"
                              >
                                Sci-Fi
                              </Link>
                            </div>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              Starting:{" "}
                              <Link
                                href="/cast/detail"
                                className="text-decoration-none ms-1"
                              >
                                James Chinlund
                              </Link>
                            </div>
                          </div>
                        </div>
                        <CustomButton
                          buttonTitle="Stream Now "
                          link="/movies/detail"
                          linkButton="false"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-0">
                  <div className="slider--image block-images">
                    <Image src="/assets/images/movies/ott3.webp" loading="lazy" alt="banner" width={0}
                      height={0}
                      sizes="100vw" />
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
                                  href="/view-all"
                                  className="text-decoration-none"
                                >
                                  History
                                </Link>
                              </li>
                              <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                <Link
                                  href="/view-all"
                                  className="text-decoration-none"
                                >
                                  Action
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two">
                            Better call saul
                          </h1>
                          <p className="line-count-3 RightAnimate-two">
                            Ex-con artist Jimmy McGill turns into a small-time
                            attorney and goes through a series of trials and
                            tragedies, as he transforms into his alter ego Saul
                            Goodman, a morally challenged criminal lawyer.
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
                              genres:{" "}
                              <Link
                                href="/view-all"
                                className="text-decoration-none ms-1"
                              >
                                horror
                              </Link>
                            </div>
                            <div className="text-primary font-size-14 fw-500 text-capitalize">
                              Starting:{" "}
                              <Link
                                href="/cast/detail"
                                className="text-decoration-none ms-1"
                              >
                                Brenda Chapman
                              </Link>
                              <span className="text-body">,</span>
                              <Link
                                href="/cast/detail"
                                className="text-decoration-none ms-1"
                              >
                                Caleb Deschannelr
                              </Link>
                            </div>
                          </div>
                        </div>
                        <CustomButton
                          buttonTitle="Stream Now "
                          link="/movies/detail"
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
};
export default OttHeroSlider;
