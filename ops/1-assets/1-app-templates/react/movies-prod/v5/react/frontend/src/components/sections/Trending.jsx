import { Fragment, memo, useState, useEffect } from "react";

//react-bootstrap
import { Container, Row, Tab, Nav } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//componemts
import EpisodeCard from "../cards/EpisodeCard";

//function
import { generateImgPath } from "../../StaticData/data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

//react fslight-box
import FsLightbox from "fslightbox-react";

// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../choice";
import { useLocation } from "react-router-dom";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

const Trending = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [toggler, setToggler] = useState(false);
  const [swiperindex, setswiperindex] = useState(false)

  const options1 = [
    { value: `${t("episode_page.seasons")}1`, label: `${t("episode_page.seasons")}1` },
    { value: `${t("episode_page.seasons")}2`, label: `${t("episode_page.seasons")}2` },
    { value: `${t("episode_page.seasons")}3`, label: `${t("episode_page.seasons")}3` },
  ];

  const [trendingSlider] = useState([
    {
      image: generateImgPath("/assets/images/movies/ott1.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/ott2.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/ott3.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/banner1.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/banner2.webp"),
    },
    {
      image: generateImgPath("/assets/images/movies/banner3.webp"),
    },
  ]);

  const [episode] = useState([
    {
      image: generateImgPath("/assets/images/tv-show/episodes/01.webp"),
      showEpisod: "S01E01",
      episodDate: `${t("detail_page.october")} 1, 2022`,
      episodTime: "45min",
      episodTitle: "detail_page.episode1",
    },
    {
      image: generateImgPath("/assets/images/tv-show/episodes/02.webp"),
      showEpisod: "S01E02",
      episodDate: `${t("detail_page.october")}  8, 2022`,
      episodTime: "35min",
      episodTitle: "detail_page.episode2",
    },
    {
      image: generateImgPath("/assets/images/tv-show/episodes/03.webp"),
      showEpisod: "S01E03",
      episodDate: `${t("detail_page.october")}  15, 2022`,
      episodTime: "36min",
      episodTitle: "detail_page.episode3",
    },
    {
      image: generateImgPath("/assets/images/tv-show/episodes/04.webp"),
      showEpisod: "S01E04",
      episodDate: `${t("detail_page.october")}  22, 2022`,
      episodTime: "41min",
      episodTitle: "detail_page.episode4",
    },
    {
      image: generateImgPath("/assets/images/tv-show/episodes/05.webp"),
      showEpisod: "S01E05",
      episodDate: `${t("detail_page.october")} 22, 2022`,
      episodTime: "41min",
      episodTitle: "detail_page.episode5",
    },
  ]);

  return (
    <Fragment>
      <section className="tranding-tab-slider section-padding">
        <Container fluid>
          <Row className="m-0 p-0">
            <div
              id="iq-trending"
              className="s-margin iq-tvshow-tabs iq-trending-tabs overflow-hidden"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-md-3">
                <h5 className="main-title text-capitalize mb-0">
                  {t("home.trending")}
                </h5>
              </div>
              <div className="trending-contens position-relative">
                <Swiper
                  dir={themeSchemeDirection}
                  slidesPerView={5}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Navigation, Thumbs]}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    479: {
                      slidesPerView: 3,
                    },
                    1000: {
                      slidesPerView: 5,
                    },
                  }}
                  onActiveIndexChange={(swiperCore) => {
                    setswiperindex(!swiperindex)
                  }}
                  wrapperTag="ul"
                  watchSlidesProgress={true}
                  loop={true}
                  id="gallery-top"
                  className="trending-slider-nav align-items-center wrapper-class trending-swiper-padding merch-slides gallery-top gallery-thumbs "
                >
                  {trendingSlider.map((data, index) => (
                    <SwiperSlide
                      key={data.image + "thumb"}
                      className="align-items-center"
                      tag="li"
                      id="tranding-small-product-rtl-swiper"
                      indexs={index}
                      tranding-data-swiper-product-slide-index={index}
                    >
                      <Link to="#">
                        <div className="movie-swiper position-relative">
                          <img src={data.image} alt="img" />
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  dir={themeSchemeDirection}
                  onSwiper={setThumbsSwiper}
                  slidesPerView={1}
                  modules={[Navigation, Thumbs]}
                  watchSlidesProgress={true}
                  spaceBetween={32}
                  effect="fade"
                  loop={true}
                  allowTouchMove={false}
                  navigation={{
                    prevEl: ".trending-prev",
                    nextEl: ".trending-next",
                  }}
                  className="wrapper-class d-flex align-items-center trending-slider trending-tab-slider merch-slides"
                  wrapperTag="ul"
                >
                  {trendingSlider.map((data, index) => (
                    <SwiperSlide
                      key={data.image + "main"}
                      tag="li"
                      className="slider-big-img-1 p-0"
                      id="tranding-product-rtl-swiper"
                      indexs={index}
                      tranding-data-swiper-product-slide-index={index}
                    >
                      <div className="trending-tab-slider-image">
                        <img src={data.image} alt="trending-tab-slider-image" />
                      </div>
                      <div className="tranding-block position-relative">
                        <div className="trending-custom-tab">

                          <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="first"
                          >
                            <div className="tab-title-info position-relative">
                              <Nav
                                as="ul"
                                variant="pills"
                                className="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline"
                              >
                                <Nav.Item as="li">
                                  <Nav.Link eventKey="first">
                                    {t("home.overview")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Nav.Link eventKey="second">
                                    {t("home.episodes")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Nav.Link eventKey="three">
                                    {t("home.trailers")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Nav.Link eventKey="four">
                                    {t("home.similar_like")}
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </div>
                            <Tab.Content className="tab-content trending-content">
                              <Tab.Pane eventKey="first">
                                <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                                  <h1 className="trending-text big-title text-uppercase texture-text">
                                    {t("home.hero_camp")}
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail flex-wrap">
                                    <span>
                                      3 {t("episode_page.seasons")}
                                    </span>
                                    <span className="trending-year">
                                      2023
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                    <router-link to="#">
                                      <img src={generateImgPath("/assets/images/movies/trending-label.webp")}
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </router-link>
                                    <span className="text-gold">
                                      #2 {t("home.series_today")}
                                    </span>
                                  </div>
                                  <p className="trending-dec line-count-3">
                                    {t("ott_home.content_here")}
                                  </p>
                                  <div className="p-btns">
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
                                  <div className="trending-list mt-4">
                                    <div className="text-primary title">
                                      {t("home.starring")}:{" "}
                                      <span className="text-body">
                                        {t("home.wagner_moura")}
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      {t("ott_home.genres")}:{" "}
                                      <span className="text-body">
                                        {t("home.crime_action")}
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      {t("home.this_is")}:{" "}
                                      <span className="text-body">
                                        {t("home.violent_forceful")}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                                <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                                  <h1 className="trending-text big-title text-uppercase texture-text">
                                    {t("home.hero_camp")}
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                    <span className="season_date ms-2">
                                      {" "}
                                      2 {t("episode_page.seasons")}{" "}
                                    </span>
                                    <span className="trending-year">
                                      Feb 2019
                                    </span>
                                  </div>
                                  <div className="iq-custom-select d-inline-block trending-choice mb-4">
                                    <ChoicesJs options={options1} className="js-choice" select="one" />
                                  </div>
                                  <div
                                    className="position-relative swiper swiper-card streamit-block"
                                  >
                                    <Swiper
                                      className="p-0 m-0 list-inline"
                                      slidesPerView={4}
                                      navigation={{
                                        prevEl: ".episode-prev",
                                        nextEl: ".episode-next",
                                      }}
                                      breakpoints={{
                                        320: { slidesPerView: 1 },
                                        550: { slidesPerView: 2 },
                                        991: { slidesPerView: 2 },
                                        1400: { slidesPerView: 3 },
                                        1500: { slidesPerView: 4 },
                                      }}
                                      modules={[Navigation]}
                                      spaceBetween={28}
                                    >
                                      {episode.map((edata, index) => (
                                        <SwiperSlide
                                          as="li"
                                          key={index}
                                          className="swiper-slide"
                                        >
                                          <EpisodeCard
                                            link={edata.link}
                                            image={edata.image}
                                            showEpisod={
                                              edata.showEpisod
                                            }
                                            episodDate={
                                              edata.episodDate
                                            }
                                            episodTime={
                                              edata.episodTime
                                            }
                                            episodTitle={
                                              edata.episodTitle
                                            }
                                          ></EpisodeCard>
                                        </SwiperSlide>
                                      ))}
                                      <div
                                        id="next"
                                        className="swiper-button swiper-button-next episode-next"
                                      ></div>
                                      <div
                                        id="perv"
                                        className="swiper-button swiper-button-prev episode-prev"
                                      ></div>
                                    </Swiper>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="three">
                                <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction text-center">
                                  <h3 className="trending-text big-title text-uppercase texture-text mt-2">
                                    {t("home.watch_trailer")}
                                  </h3>
                                  <div className="episodes-contens mt-5">
                                    <div className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                      <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                        <img
                                          src={generateImgPath("/assets/images/tv-show/season/01.webp")}
                                          className="trailer-image"
                                          alt="trailer-image"
                                        />
                                        <Link
                                          to="#"
                                          className="video-open playbtn text-decoration-none"
                                          tabIndex="0"
                                          onClick={() =>
                                            setToggler(!toggler)
                                          }
                                        >
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
                                          <span className="w-trailor text-uppercase">
                                            {" "}
                                            {t(
                                              "home.watch_trailer"
                                            )}{" "}
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="four">
                                <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                                  <h3 className="trending-text big-title text-uppercase texture-text mb-5">
                                    {t("ott_home.recommended_for_you")}
                                  </h3>
                                  <div
                                    className="position-relative swiper swiper-card streamit-block"
                                    data-slide="4"
                                    data-laptop="3"
                                    data-tab="2"
                                    data-mobile="1"
                                    data-mobile-sm="1"
                                    data-autoplay="false"
                                    data-loop="false"
                                    data-navigation="true"
                                    data-pagination="true"
                                  >
                                    <Swiper
                                      className="p-0 swiper-wrapper m-0 list-inline"
                                      slidesPerView="4"
                                      breakpoints={{
                                        320: { slidesPerView: 1 },
                                        550: { slidesPerView: 2 },
                                        991: { slidesPerView: 2 },
                                        1400: { slidesPerView: 3 },
                                        1500: { slidesPerView: 4 },
                                      }}
                                      modules={[Navigation]}
                                      navigation={{
                                        prevEl: ".prev-1",
                                        nextEl: ".next-1",
                                      }}
                                      spaceBetween={28}
                                    >
                                      {episode.map((eData, index) => (
                                        <SwiperSlide
                                          as="li"
                                          key={index}
                                          className="swiper-slide"
                                        >
                                          <EpisodeCard
                                            link={eData.link}
                                            image={eData.image}
                                            showEpisod={
                                              eData.showEpisod
                                            }
                                            episodDate={
                                              eData.episodDate
                                            }
                                            episodTime={
                                              eData.episodTime
                                            }
                                            episodTitle={
                                              eData.episodTitle
                                            }
                                          ></EpisodeCard>
                                        </SwiperSlide>
                                      ))}
                                    </Swiper>
                                    <div className="swiper-button swiper-button-next next-1"></div>
                                    <div className="swiper-button swiper-button-prev prev-1"></div>
                                  </div>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </Tab.Container>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="swiper-arrow swiper-button-next trending-next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="swiper-arrow swiper-button-prev trending-prev" >
                    <i className="fa-solid fa-chevron-left"></i>
                  </div>
                </Swiper>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <FsLightbox
        toggler={toggler}
        sources={["/assets/images/video/trailer.mp4"]}
      />
    </Fragment>
  );
});

Trending.displayName = "Trending";
export default Trending;
