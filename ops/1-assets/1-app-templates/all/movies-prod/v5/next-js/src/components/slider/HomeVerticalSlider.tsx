import React, { memo, Fragment, useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";

// react-router-dom
// import { Link } from "react-router-dom";
import Link from "next/link";

// component
// import VerticalShimmer from "../card/shimmer/vertical-card-shimmer";
import VerticalShimmer from "../shimmer/VerticalCard";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getLatestMoviesAsync } from "@/store/media/actions";

// swiper-react
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Navigation,
  Thumbs,
  FreeMode,
  Controller,
} from "swiper";

// Import selectors & action from setting store
import * as SettingSelector from "@/store/media/selectors";
import { AnyAction } from "@reduxjs/toolkit";

SwiperCore.use([EffectFade, Navigation, Thumbs, FreeMode, Controller]);

const HomeVerticalSlider = memo(() => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const latestMovies = useSelector(SettingSelector.latestMovies);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(getLatestMoviesAsync() as unknown as AnyAction);
    }
  }, [inView]);

  return (
    <Fragment>
      <>
        {" "}
        <h4 className="main-title ms-3">Top 10 in United States</h4>
        <div ref={ref}>
          {latestMovies.length === 0 ? (
            <VerticalShimmer />
          ) : (
            <div className="slider--col position-relative">
              <div className="slider-prev btn-verticle">
                <i id="prev" className="ri-arrow-up-s-line vertical-aerrow"></i>
              </div>
              <div className="slider-thumbs" data-swiper="slider-thumbs">
                <div
                  className="swiper-container "
                  data-swiper="slider-thumbs-inner"
                >
                  <Swiper
                    tag="ul"
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={24}
                    navigation={{
                      prevEl: "#next",
                      nextEl: "#prev",
                    }}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="swiper-wrapper top-ten-slider-nav"
                    direction={"vertical"}
                    // thumbs={{
                    //   swiper:
                    //     thumbsSwiper && !thumbsSwiper.destroyed
                    //       ? thumbsSwiper
                    //       : null,
                    // }}
                    thumbs={{ swiper: thumbsSwiper }}
                  >
                    {latestMovies.map((item:any, index:any) => {
                      return (
                        <SwiperSlide
                          key={index}
                          tag="li"
                          className="swiper-slide swiper-bg"
                        >
                          <div className="block-images position-relative">
                            <div className="img-box slider--image">
                              <img
                                src={item.thumbnail}
                                className="img-fluid"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <Link href={`/movies/${item.title}`}>
                                  {item.title}
                                </Link>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2">
                                <span className="badge bg-secondary p-2 me-2">
                                  {item.certificate}
                                </span>
                                <span className="text-white">
                                  {item.duration}
                                </span>
                              </div>
                              <div className="hover-buttons">
                                <Link
                                  href='/movies/detail'
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play me-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </Link>
                              </div>
                            </div>
                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <Link
                                        href="#"
                                        className="share-ico"
                                        tabIndex={0}
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </Link>
                                      <Link
                                        href="#"
                                        className="share-ico"
                                        tabIndex={0}
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </Link>
                                      <Link
                                        href="#"
                                        className="share-ico iq-copy-link"
                                        tabIndex={0}
                                      >
                                        <i className="ri-links-fill"></i>
                                      </Link>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">2+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <div className="slider-next btn-verticle">
                    <i
                      id="next"
                      className="ri-arrow-down-s-line vertical-aerrow"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="slider-images" data-swiper="slider-images">
          <Swiper
            tag="ul"
            loop={true}
            spaceBetween={10}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Controller]}
            direction={"vertical"}
            className="swiper-container"
            // onSwiper={setThumbsSwiper}
          >
            {latestMovies.map((item:any, index:any) => {
              return (
                <SwiperSlide key={index} tag="li" className="swiper-slide">
                  <div className="slider--image block-images">
                    <img src={item.thumbnail} loading="lazy" alt="" />
                  </div>
                  <div className="description">
                    <div className="block-description">
                      <h6 className="iq-title">
                        <Link href={`/movies/${item.slug}`}>{item.title}</Link>
                      </h6>
                      <div className="movie-time d-flex align-items-center my-2">
                        <span className="text-white">{item.duration}</span>
                      </div>
                      <div className="hover-buttons">
                        <Link
                          href="/movies/detail"
                          role="button"
                          className="btn btn-hover iq-button"
                        >
                          <i className="fa fa-play me-1" aria-hidden="true"></i>
                          Play Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
    </Fragment>
  );
});
export default HomeVerticalSlider;
