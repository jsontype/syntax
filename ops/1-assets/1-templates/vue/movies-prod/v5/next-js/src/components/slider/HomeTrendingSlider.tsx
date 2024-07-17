import React, { Fragment, useEffect, useState } from 'react'

import { useInView } from "react-intersection-observer";

// react-bootstrap
import { Container, Row, Nav, Tab } from "react-bootstrap";

// react-router-dom
import Link from 'next/link';

// shimmer-card
import TrendingShimer from '@/components/shimmer/Trending';

// img
import logo from "/assets/images/logo.png";
import trendinglabel from "/assets/images/trending/trending-label.png";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getTrendingSliderAsync } from "@/store/media/actions";

// Import selectors & action from setting store
import * as SettingSelector from "@/store/media/selectors";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, FreeMode } from "swiper";
import { AnyAction } from '@reduxjs/toolkit';
import Image from 'next/image';

SwiperCore.use([EffectFade, Navigation, Thumbs, FreeMode]);



const HomeTrendingslider = () => {
  const trendingSlider = useSelector(SettingSelector.trendingSlider);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(getTrendingSliderAsync() as unknown as AnyAction);
    }
  }, [inView]);

  return (
    <Fragment>
      <div ref={ref}>

        {trendingSlider.length === 0 ? (
          <TrendingShimer />
        ) : (
          <section>
            <Container fluid>
              <Row className="m-0 p-0">
                <div id="iq-trending" className="s-margin iq-tvshow-tabs iq-rtl-direction iq-trending-tabs">

                  <div className="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 className="main-title">Trending</h4>
                  </div>
                  <div className="trending-contens position-relative ">
                    <div
                      id="gallery-top"
                      className="gallery-thumbs"
                      data-swiper="gallery-top"
                    >
                      <Swiper
                        tag="ul"
                        // thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        thumbs={{ swiper: thumbsSwiper }}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        navigation={{
                          prevEl: "#prev4",
                          nextEl: "#next4",
                        }}
                        slidesPerView={5}
                        spaceBetween={20}
                        breakpoints={{
                          320: { slidesPerView: 1 },
                          550: { slidesPerView: 2 },
                          991: { slidesPerView: 3 },
                          1400: { slidesPerView: 4 },
                          1500: { slidesPerView: 5 },
                        }}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        loop={true}
                        className="swiper-wrapper list-inline p-0 m-0  trending-slider-nav align-items-center"
                      >
                        {trendingSlider.map((item:any, index:any) => {
                          return (
                            <SwiperSlide tag="li" key={index} className="swiper-slide">
                              <Link href="#">
                                <div className="movie-swiper position-relative">
                                  <img
                                    src={item.thumbnail}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </Link>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                    <div id="gallery-bottom" className="swiper trending-tab-slider" data-swiper="gallery-bottom">
                      <Swiper
                        tag="ul"
                        // onSwiper={setThumbsSwiper}
                        slidesPerView={1}
                        freeMode={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        watchSlidesProgress={true}
                        loop={true}
                        id="trending-slider"
                        className="swiper-wrapper  list-inline p-0 m-0 d-flex align-items-center trending-slider">
                        {trendingSlider.map((item:any, index:any) => {
                          return (
                            <SwiperSlide tag="li" key={index} className="swiper-slide swiper-bg slider-big-img-1">
                              <div
                                className="tranding-block position-relative"
                                style={{ backgroundImage: `url(${item.thumbnail})` }}
                              >
                                <Tab.Container
                                  defaultActiveKey="trending-data1"
                                >
                                  <div className="tab-title-info position-relative iq-ltr-direction">
                                    <Nav
                                      as="ul"
                                      variant="pills"
                                      className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                    >
                                      <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="" eventKey="trending-data1">
                                          Overview
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="" eventKey="trending-data2">
                                          Episodes
                                        </Nav.Link>
                                      </Nav.Item>

                                    </Nav>
                                  </div>
                                  <Tab.Content className="trending-content">
                                    <Tab.Pane
                                      eventKey="trending-data1"
                                      className="overlay-tab show fade"
                                    >
                                      <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                        <Link href="#" tabIndex={0}>
                                          <div className="res-logo">
                                            <div className="channel-logo">
                                              <Image
                                                src={logo}
                                                className="c-logo"
                                                alt="streamit"
                                              />
                                            </div>
                                          </div>
                                        </Link>
                                        <h1 className="trending-text big-title text-uppercase">
                                          {item.title}
                                        </h1>
                                        <div className="d-flex align-items-center text-white text-detail">
                                          <span className="badge bg-secondary p-3">
                                            18+
                                          </span>
                                          <span className="ms-3">{item.season_type}</span>
                                          <span className="trending-year">
                                            {item.date}
                                          </span>
                                        </div>
                                        <div className="d-flex align-items-center series mb-4">
                                          <Link href="#">
                                            <Image
                                              src={trendinglabel}
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </Link>
                                          <span className="text-gold ms-3">
                                            {item.ranking}
                                          </span>
                                        </div>
                                        <p className="trending-dec">
                                          {item.detail}
                                        </p>
                                        <div className="p-btns">
                                          <div className="d-flex align-items-center p-0">
                                            <Link
                                              href='/tv-shows/detail'
                                              className="btn btn-hover me-2"
                                              tabIndex={0}
                                            >
                                              <i
                                                className="fa fa-play me-2"
                                                aria-hidden="true"
                                              ></i>
                                              Play Now
                                            </Link>
                                            <Link
                                              href="#"
                                              className="btn btn-link"
                                              tabIndex={0}
                                            >
                                              <i className="ri-add-line"></i>My List
                                            </Link>
                                          </div>
                                        </div>
                                        <div className="trending-list mt-4">
                                          <div className="text-primary title">
                                            Starring:
                                            {item.cast.map((item:any, index:any) => {
                                              return (
                                                <Link className='text-capitalize ms-2' key={index} href="cast/detail">{item},</Link>
                                              )
                                            })}
                                          </div>
                                          <div className="text-primary title">
                                            Genres:
                                            {item.geners.map((item:any, index:any) => {
                                              return (
                                                <Link className='text-capitalize ms-2' key={index} href="/view-all">{item},</Link>
                                              )
                                            })}
                                          </div>
                                          <div className="text-primary title">
                                            This Is:
                                            <span className="text-body text-capitalize ms-2">
                                              Violent, Forceful
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane
                                      eventKey="trending-data2"
                                      className=" show fade"
                                    >
                                      <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                        <Link href="#" tabIndex={0}>
                                          <div className="res-logo">
                                            <div className="channel-logo">
                                              <Image
                                                src={logo}
                                                className="c-logo"
                                                alt="streamit"
                                              />
                                            </div>
                                          </div>
                                        </Link>
                                        <h1 className="trending-text big-title text-uppercase">
                                          {item.title}
                                        </h1>
                                        <div className="d-flex align-items-center text-white text-detail">
                                          <span className="ms-3">{item.season_type}</span>
                                          <span className="trending-year">
                                            {item.date}
                                          </span>
                                        </div>
                                        <div className="show-movie">
                                          <h4 className="ms-4 mb-2">Latest Episodes</h4>
                                          <div className="animated fadeInUp">
                                            <div className="row episodes list-inline p-0 mb-0 iq-rtl-direction ms-4">
                                              {item.latest_episodes.map((item1:any, index:any) => {
                                                return (
                                                  <div className="e-item col-lg-3 col-sm-12 col-md-6" key={index}>
                                                    <div className="block-image position-relative">
                                                      <Link
                                                        href="/tv-shows/episode"
                                                      >
                                                        <img
                                                          src={item1.thumbnail}
                                                          className="img-fluid img-zoom"
                                                          alt="showImg-"
                                                          loading="lazy"
                                                        />
                                                      </Link>
                                                      <div className="episode-play-info">
                                                        <div className="episode-play">
                                                          <Link
                                                            href="/tv-shows/episode"
                                                          >
                                                            <i className="ri-play-fill"></i>
                                                          </Link>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="epi-desc p-3">
                                                      <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <span className="text-white rel-date text-capitalize">
                                                          {item1.created}
                                                        </span>
                                                        <span className="text-primary run-time">
                                                          {item1.duration}
                                                        </span>
                                                      </div>
                                                      <Link
                                                        href="/tv-shows/episode"
                                                      >
                                                        <h5 className="epi-name text-white mb-0">{item1.title}</h5>
                                                      </Link>
                                                    </div>
                                                  </div>
                                                );
                                              })}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Tab.Container>
                              </div>
                            </SwiperSlide>
                          );
                        })}
                        <div
                          id="next4"
                          className="swiper-arrow swiper-button-next"
                        ></div>
                        <div
                          id="prev4"
                          className="swiper-arrow swiper-button-prev"
                        ></div>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </section>
        )
        }
      </div>
    </Fragment>
  )
}

export default HomeTrendingslider