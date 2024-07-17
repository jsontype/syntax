import React, { Fragment, useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

// react-bootstrap
import { Container, Row, Nav, Tab } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

// shimmer-card
import TrendingShimer from "../card/shimmer/trending-shimmer";

// img
import logo from "/assets/images/logo.png";
import trendinglabel from "/assets/images/trending/trending-label.png";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getTrendingSliderAsync } from "../../../../store/media/actions";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/media/selectors";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Thumbs, FreeMode } from "swiper";

// the hook
import { useTranslation } from "react-i18next";

SwiperCore.use([EffectFade, Navigation, Thumbs, FreeMode]);

const HomeTrendingslider = () => {
  const { t } = useTranslation();
  const trendingSlider = useSelector(SettingSelector.trendingSlider);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(getTrendingSliderAsync());
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
                <div
                  id="iq-trending"
                  className="s-margin iq-tvshow-tabs iq-rtl-direction iq-trending-tabs"
                >
                  <div className="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 className="main-title">{t("home.trending")}</h4>
                  </div>
                  <div className="trending-contens position-relative ">
                    <div
                      id="gallery-top"
                      className="gallery-thumbs"
                      data-swiper="gallery-top"
                    >
                      <Swiper
                        tag="ul"
                        thumbs={{
                          swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                              ? thumbsSwiper
                              : null,
                        }}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
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
                        {trendingSlider.map((item, index) => {
                          return (
                            <SwiperSlide
                              tag="li"
                              key={index}
                              className="swiper-slide"
                            >
                              <Link to="#">
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
                    <div
                      id="gallery-bottom"
                      className="swiper trending-tab-slider"
                      data-swiper="gallery-bottom"
                    >
                      <Swiper
                        tag="ul"
                        onSwiper={setThumbsSwiper}
                        slidesPerView={1}
                        freeMode={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        watchSlidesProgress={true}
                        navigation={{
                          prevEl: "#prev4",
                          nextEl: "#next4",
                        }}
                        loop={true}
                        id="trending-slider"
                        className="swiper-wrapper  list-inline p-0 m-0 d-flex align-items-center trending-slider"
                      >
                        {trendingSlider.map((item, index) => {
                          return (
                            <SwiperSlide
                              tag="li"
                              key={index}
                              className="swiper-slide swiper-bg slider-big-img-1"
                            >
                              <div
                                className="tranding-block position-relative"
                                style={{
                                  backgroundImage: `url(${item.thumbnail})`,
                                }}
                              >
                                <Tab.Container
                                  defaultActiveKey="trending-data1"
                                  className="trending-custom-tab"
                                >
                                  <div className="tab-title-info position-relative iq-ltr-direction">
                                    <Nav
                                      as="ul"
                                      variant="pills"
                                      className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                    >
                                      <Nav.Item as="li" className="nav-item">
                                        <Nav.Link
                                          to=""
                                          eventKey="trending-data1"
                                        >
                                          {t("home.overview")}
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li" className="nav-item">
                                        <Nav.Link
                                          to=""
                                          eventKey="trending-data2"
                                        >
                                          {t("home.episodes")}
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
                                        <Link to="#" tabIndex="0">
                                          <div className="res-logo">
                                            <div className="channel-logo">
                                              <img
                                                src={logo}
                                                className="c-logo"
                                                alt="streamit"
                                              />
                                            </div>
                                          </div>
                                        </Link>
                                        <h1 className="trending-text big-title text-uppercase">
                                          {t(item.title)}
                                        </h1>
                                        <div className="d-flex align-items-center text-white text-detail">
                                          <span className="badge bg-secondary p-3">
                                            18+
                                          </span>
                                          <span className="ms-3">
                                            {item.season_type}
                                          </span>
                                          <span className="trending-year">
                                            {item.date}
                                          </span>
                                        </div>
                                        <div className="d-flex align-items-center series mb-4">
                                          <Link to="#">
                                            <img
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
                                          {t(item.detail)}
                                        </p>
                                        <div className="p-btns">
                                          <div className="d-flex align-items-center p-0">
                                            <Link
                                              to="/shows-details"
                                              className="btn btn-hover me-2"
                                              tabIndex="0"
                                            >
                                              <i
                                                className="fa fa-play me-2"
                                                aria-hidden="true"
                                              ></i>
                                              {t("ott_home.play_now")}
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-link"
                                              tabIndex="0"
                                            >
                                              <i className="ri-add-line"></i>My
                                              List
                                            </Link>
                                          </div>
                                        </div>
                                        <div className="trending-list mt-4">
                                          <div className="text-primary title">
                                            {t("home.starring")}:
                                            {item.cast.map((item, index) => {
                                              return (
                                                <Link
                                                  className="text-capitalize ms-2"
                                                  key={index}
                                                  to={`/cast-detail/movies/${item}`}
                                                >
                                                  {t(item)},
                                                </Link>
                                              );
                                            })}
                                          </div>
                                          <div className="text-primary title">
                                            {t("home.geners")}:
                                            {item.geners.map((item, index) => {
                                              return (
                                                <Link
                                                  className="text-capitalize ms-2"
                                                  key={index}
                                                  to={`/view-all/tv-show/genre/${item}`}
                                                >
                                                  {t(item)},
                                                </Link>
                                              );
                                            })}
                                          </div>
                                          <div className="text-primary title">
                                            {t("home.this_is")}:
                                            <span className="text-body text-capitalize ms-2">
                                              {t("home.violent_forceful")}
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
                                        <Link to="#" tabIndex="0">
                                          <div className="res-logo">
                                            <div className="channel-logo">
                                              <img
                                                src={logo}
                                                className="c-logo"
                                                alt="streamit"
                                              />
                                            </div>
                                          </div>
                                        </Link>
                                        <h1 className="trending-text big-title text-uppercase">
                                          {t(item.title)}
                                        </h1>
                                        <div className="d-flex align-items-center text-white text-detail">
                                          <span className="ms-3">
                                            {item.season_type}
                                          </span>
                                          <span className="trending-year">
                                            {item.date}
                                          </span>
                                        </div>
                                        <div className="show-movie">
                                          <h4 className="ms-4 mb-2">
                                            {t("episode_page.latest_episodes")}
                                          </h4>
                                          <div className="animated fadeInUp">
                                            <div className="row episodes list-inline p-0 mb-0 iq-rtl-direction ms-4">
                                              {item.latest_episodes.map(
                                                (item1, index) => {
                                                  return (
                                                    <div
                                                      className="e-item col-lg-3 col-sm-12 col-md-6"
                                                      key={index}
                                                    >
                                                      <div className="block-image position-relative">
                                                        <Link
                                                          to={`/tv-shows/latest-episode/${item.slug}/${item.number}`}
                                                        >
                                                          <img
                                                            src={
                                                              item1.thumbnail
                                                            }
                                                            className="img-fluid img-zoom"
                                                            alt="showImg-"
                                                            loading="lazy"
                                                          />
                                                        </Link>
                                                        <div className="episode-play-info">
                                                          <div className="episode-play">
                                                            <Link
                                                              to={`/tv-shows/latest-episode/${item.slug}/${item1.number}`}
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
                                                          to={`/tv-shows/latest-episode/${item.slug}/${item1.number}`}
                                                        >
                                                          <h5 className="epi-name text-white mb-0">
                                                            {t(item1.title)}
                                                          </h5>
                                                        </Link>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
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
        )}
      </div>
    </Fragment>
  );
};

export default HomeTrendingslider;
