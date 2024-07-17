import { Fragment, memo, useEffect } from "react";

//react-bootstrap
import { Nav, Tab } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//static data
import { generateImgPath, tabSlider } from "../../StaticData/data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";

const TabSlider = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);

  return (
    <Fragment>
      <div className="tab-slider">
        <div className="slider">
          <Swiper
            key={themeSchemeDirection}
            dir={themeSchemeDirection}
            watchSlidesProgress={true}
            className="wrapper-class position-relative swiper swiper-card wrapper-class custom-tab-slider"
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
          >
            {tabSlider.map((data) => (
              <SwiperSlide
                tag="li"
                className="tab-slider-banner p-0"
                key={data.image}
              >
                <div className="tab-slider-banner-images">
                  <img src={data.image} alt="tab-slider-background" />
                </div>
                <div className="block-images position-relative w-100">
                  <div className="container-fluid">
                    <div className="row align-items-center min-vh-100 h-100 my-4">
                      <div className="col-md-5 col-lg-5 col-xxl-5">
                        <div className="tab-left-details">
                          <div className="d-flex align-items-center gap-3 mb-4">
                            <Link to="">
                              <img
                                src={generateImgPath("/assets/images/movies/trending-label.webp")}
                                className="img-fluid"
                                alt=""
                              />
                            </Link>
                            <h5 className="text-gold">
                              <span className="text-primary">#4</span>{" "}
                              {t(data.movieTime)}
                            </h5>
                          </div>
                          <h1 className="mb-2 fw-500 text-capitalize texture-text">
                            {t(data.title)}
                          </h1>
                          <p className="mb-0 font-size-14 line-count-2">
                            {t("ott_home.sds")}
                          </p>
                          <ul className="d-flex align-items-center list-inline gap-2 movie-tag p-0 mt-3 mb-40">
                            <li className="font-size-18">Nov 2022</li>
                            <li className="font-size-18">
                              {t("detail_page.season")} 1
                            </li>
                          </ul>
                          <div className="iq-button">
                            <Link
                              to="/movies-detail"
                              className="btn text-uppercase position-relative"
                            >
                              <span className="button-text">
                                {t("ott_home.stream_now")}
                              </span>{" "}
                              <i className="fa-solid fa-play"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 col-lg-2 col-xxl-3"></div>
                      <div className="col-md-6 col-lg-5 col-xxl-4 mt-5 mt-md-0">
                        <div className="tab-block">
                          <h4 className="tab-title text-capitalize mb-0">
                            {t("ott_home.all_episode")}
                          </h4>
                          <div className="tab-bottom-bordered border-0 trending-custom-tab">
                            <Tab.Container
                              id="left-tabs-example"
                              defaultActiveKey="0season"
                            >
                              <Nav
                                variant="pills"
                                className="nav nav-tabs nav-pills mb-3 overflow-x-scroll"
                              >
                                {data.seasons.map((episodes, index) => (
                                  <Nav.Item key={"nav" + index}>
                                    <Nav.Link eventKey={index + "season"}>
                                      {t(episodes.title)}
                                    </Nav.Link>
                                  </Nav.Item>
                                ))}
                              </Nav>
                              <Tab.Content className="tab-content trending-content">
                                {data.seasons.map((episodes, index) => (
                                  <Tab.Pane
                                    eventKey={index + "season"}
                                    key={index + "season"}
                                  >
                                    <ul className="list-inline m-0 p-0">
                                      {episodes.episodes.map((episode, episodeIndex) => (
                                        <li
                                          className="d-flex align-items-center gap-3"
                                          key={episode.title + "ep"}
                                        >
                                          <div className="image-box flex-shrink-0">
                                            <img
                                              src={episode.image}
                                              alt="image-icon"
                                              className="img-fluid rounded"
                                            />
                                          </div>
                                          <div className="image-details">
                                            <h6 className="mb-1 text-capitalize">
                                              <span className="text-primary">
                                                E{episodeIndex + 1}
                                              </span>{" "}
                                              - {t(episode.title)}
                                            </h6>
                                            <small>
                                              45 {t("countdown.minute")}
                                            </small>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  </Tab.Pane>
                                ))}
                              </Tab.Content>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="joint-arrows">
              <div className="swiper-button swiper-button-next"></div>
              <div className="swiper-button swiper-button-prev"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
});

TabSlider.displayName = "TabSlider";
export default TabSlider;
