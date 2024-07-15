import React, { Fragment, memo } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab, Form } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import ReviewComponent from "../../components/ReviewComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import RatingStar from "../../components/rating-star";

//function
import { generateImgPath } from "../../StaticData/data";

//utilities
import { useEnterExit } from "../../utilities/usePage";

//swiper
import { Navigation } from "swiper";

// the hook
import { useTranslation } from "react-i18next";

import ChoicesJs from "../../components/choice";


//select
const options = [
  { value: "Season 1", label: "Season 1" },
  { value: "Season 2", label: "Season 2" },
];

const TvShowsDetail = memo(() => {
  const { t } = useTranslation();

  const options1 = [
    { value: `${t('header.playlist')}`, label: `${t('header.playlist')}` },
    { value: `${t('detail_page.zombie_island')}`, label: `${t('detail_page.zombie_island')}` },
    { value: `${t('detail_page.sand_dust')}`, label: `${t('detail_page.sand_dust')}` },
    { value: `${t('detail_page.jumbo_queen')}`, label: `${t('detail_page.jumbo_queen')}` },
  ];
  useEnterExit();
  // date, type
  const shows = {
    id: 1,
    slug: "zombie-world",
    thumbnail: generateImgPath("/assets/images/genre/01.webp"),
    title: "episode_page.zombie_world",
    detail: "detail_page.travels_lone",
    season_type: `${t("ott_home.season")} 1`,
    certificate: "Adventure",
    rating: 4.5,
    likes: 9,
    rating_from: "Imdb",
    geners: ["home.comedy", "ott_home.drama"],
    tags: [
      "ott_home.4k_ultra",
      "ott_home.brother",
      "ott_home.brother_relationship",
      "ott_home.kings",
      "ott_home.vikings",
    ],
    video_link: "",
    views: "1.2k",
    video_type: "video",
    is_restricted: false,
    episodes: [
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/01.webp"),
        episode_no: "S01E01",
        release_date: `${t('detail_page.october')}  1, 2020`,
        duration: "45min",
        name: `${t('episode_page.zombie_island')} 1`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/02.webp"),
        episode_no: "S01E02",
        release_date: `${t('detail_page.october')}  8, 2020`,
        duration: "35min",
        name: `${t('episode_page.zombie_island')} 2`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/03.webp"),
        episode_no: "S01E03",
        release_date: `${t('detail_page.october')}  15, 2020`,
        duration: "36min",
        name: `${t('episode_page.zombie_island')} 3`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/04.webp"),
        episode_no: "S01E04",
        release_date: `${t('detail_page.october')}  22, 2020`,
        duration: "41min",
        name: `${t('episode_page.zombie_island')} 4`,
      },
    ],

    cast: [
      {
        title: "detail_page.james_chinlund",
        thumbnail: generateImgPath("/assets/images/genre/g1.webp"),
        as: "detail_page.as_james",
      },
      {
        title: "detail_page.james_earl",
        thumbnail: generateImgPath("/assets/images/genre/g2.webp"),
        as: "detail_page.as_jones",
      },
    ],
    crew: [
      {
        title: "detail_page.jeff_nathanson",
        thumbnail: generateImgPath("/assets/images/genre/g3.webp"),
        as: "detail_page.writing",
      },
      {
        title: "detail_page.irene_mecchi",
        thumbnail: generateImgPath("/assets/images/genre/g5.webp"),
        as: "detail_page.writing",
      },
      {
        title: "detail_page.karan_gilchrist",
        thumbnail: generateImgPath("/assets/images/genre/g4.webp"),
        as: "detail_page.production",
      },
    ],
    created_by_username: "Admin",
    created_at: "Feb 2019",
    ranking: "#1 in Series Today ",
    date: "Nov 2020",
  };
  return (
    <Fragment>
      <div className="tv-show-detail">
        <Container fluid>
          <div
            className="overlay-wrapper iq-main-slider "
            style={{
              background: `url(${generateImgPath(
                "/assets/images/tv-show/episodes/main-banner.webp"
              )}`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="banner-caption">
              <div className="trending-info p-0">
                <h1 className="texture-text big-font text-uppercase mt-2">
                  {t(shows.title)}
                </h1>
                <div className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                  <RatingStar count="4" count1="1" starColor="text-warning" />
                  <span className="text-white ms-4 me-1">{shows.rating}</span>
                  <img
                    src={generateImgPath("/assets/images/movies/imdb-logo.svg")}
                    alt="imdb-logo"
                    className="img-fluid ms-2"
                  />
                </div>
                <ul className="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
                  {shows.geners.map((item, index) => {
                    return (
                      <li className="trending-list" key={index}>
                        <Link
                          to="/view-all"
                          className="text-primary text-uppercase font-size-18"
                        >
                          {t(item)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="d-flex flex-wrap align-items-center gap-3 font-size-20 mb-3 fw-500 text-white">
                  <span>{shows.season_type}</span>
                  <span>{shows.created_at}</span>
                </div>
                <p className="line-count-2 my-3">{t(shows.detail)}</p>
              </div>
              <div className="position-relative my-4">
                <Link
                  to="/episodes"
                  className="d-flex align-items-center gap-3"
                >
                  <div className="play-button">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <h4 className="text-white fw-bold m-0">
                    {t("episode_page.latest_episode")}
                  </h4>
                </Link>
              </div>
              <div className="d-flex align-items-center flex-wrap gap-4 mb-4">
                <ul className="list-inline p-0 m-0 share-icons music-play-lists mb-n2 mx-n2">
                  <li className="share">
                    <span>
                      <i className="fa-solid fa-share-nodes"></i>
                    </span>
                    <div className="share-box">
                      <svg
                        width="15"
                        height="40"
                        viewBox="0 0 15 40"
                        className="share-shape"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                          fill="#191919"
                        ></path>
                      </svg>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="share-ico">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link to="#" className="share-ico">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link to="#" className="share-ico">
                          <i className="fa-solid fa-link"></i>
                        </Link>
                      </div>
                    </div>
                  </li>{" "}
                  <li>
                    <span>
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </li>{" "}
                  <li>
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </li>
                </ul>
                <div className="movie-detail-select">
                  <ChoicesJs options={options1} className="js-choice" select="one" />
                </div>
              </div>
              <ul className="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
                <li className="iq-tag-title text-primary mb-0">
                  <i className="fa fa-tags" aria-hidden="true"></i> {t("header.tags")}:{" "}
                </li>
                {shows.tags.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to="/view-all" className="title text-capitalize">
                        {t(item)}
                      </Link>
                      <span className="text-secondary">,</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="show-detail section-padding">
        <Container fluid>
          <div className="show-movie-section">
            <div className="iq-custom-select d-inline-block">
              <ChoicesJs options={options} className="js-choice" select="one" />
            </div>
          </div>
          <div className="show-custom-tab">
            <Tab.Container defaultActiveKey="first">
              <Nav className="iq-custom-tab tab-bg-fill nav nav-pills text-center list-inline my-4">
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    variant=" d-flex align-items-center"
                    id="nav-episodes-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-episodes"
                    type="button"
                    role="tab"
                    aria-controls="nav-episodes"
                    aria-selected="true"
                    className="m-0"
                  >
                    {t("detail_page.episode")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    variant=""
                    id="nav-description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-description"
                    type="button"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="false"
                    className="m-0"
                  >
                    {t("detail_page.description")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    variant=""
                    id="nav-review-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-review"
                    type="button"
                    role="tab"
                    aria-controls="nav-review"
                    aria-selected="false"
                  >
                    {t("detail_page.rate")} & {t("detail_page.review")}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane
                  className=" fade show"
                  eventKey="first"
                  id="nav-episodes"
                  role="tabpanel"
                  aria-labelledby="nav-episodes-tab"
                >
                  <Row className="list-inline p-0 mb-0">
                    {shows.episodes.map((item, index) => {
                      return (
                        <Col lg={3} sm={12} md={6} key={index} className={`${index === shows.episodes.length - 1 ? 'mt-3 mt-md-0' : ''}`}>
                          <div className="episode-block">
                            <div className="block-image position-relative">
                              <Link to="/episodes">
                                <img
                                  src={item.thumbnail}
                                  alt="showImg"
                                  className="img-fluid img-zoom"
                                  loading="lazy"
                                />
                              </Link>
                              <div className="episode-number">
                                {item.episode_no}
                              </div>
                              <div className="episode-play">
                                <Link to="/episodes">
                                  <i className="fa-solid fa-play"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="epi-desc p-3">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <span className="border-gredient-left text-white rel-date">
                                  {item.release_date}
                                </span>
                                <span className="text-primary run-time">
                                  {item.duration}
                                </span>
                              </div>
                              <Link to="/episodes">
                                <h5 className="epi-name text-white mb-0">
                                  {item.name}
                                </h5>
                              </Link>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane
                  className=" fade"
                  id="nav-description"
                  eventKey="second"
                  role="tabpanel"
                  aria-labelledby="nav-description-tab"
                >
                  <p>{t(shows.detail)}</p>
                </Tab.Pane>
                <Tab.Pane
                  className=" fade"
                  id="nav-review"
                  eventKey="third"
                  role="tabpanel"
                  aria-labelledby="nav-review-tab"
                >
                  <ReviewComponent />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </div>
      <div className="cast-tabs">
        <Container fluid>
          <div className="content-details trending-info g-border iq-rtl-direction">
            <Tab.Container defaultActiveKey="first">
              <Nav className="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5 ">
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    variant=" d-flex align-items-center"
                    id="nav-cast-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-cast"
                    type="button"
                    role="tab"
                    aria-controls="nav-cast"
                    aria-selected="true"
                  >
                    {t("detail_page.cast")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    variant=""
                    id="nav-crew-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-crew"
                    type="button"
                    role="tab"
                    aria-controls="nav-crew"
                    aria-selected="false"
                  >
                    {t("detail_page.crew")}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane
                  className=" fade show"
                  eventKey="first"
                  id="nav-cast"
                  role="tabpanel"
                  aria-labelledby="nav-cast-tab"
                >
                  <Swiper
                    slidesPerView={5}
                    navigation={{
                      prevEl: ".swiper-button-prev",
                      nextEl: ".swiper-button-next",
                    }}
                    loop={false}
                    modules={[Navigation]}
                    tag="ul"
                    className="position-relative swiper-card list-inline"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      576: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      1025: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                      1500: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                    }}
                  >
                    {shows.cast.map((item, index) => {
                      return (
                        <SwiperSlide key={index} as="li">
                          <Row className="cast-images m-0 align-items-center position-relative">
                            <div className="col-4 img-box p-0">
                              <img
                                src={item.thumbnail}
                                alt="cast-1"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                            <div className="col-8 block-description">
                              <h6 className="iq-title">
                                <Link to="/cast-detail">{t(item.title)}</Link>
                              </h6>
                              <div className="video-time d-flex align-items-center my-2">
                                <small className="text-white">{t(item.as)}</small>
                              </div>
                            </div>
                          </Row>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Tab.Pane>
                <Tab.Pane
                  className=" fade"
                  id="nav-crew"
                  eventKey="second"
                  role="tabpanel"
                  aria-labelledby="nav-crew-tab"
                >
                  <Swiper
                    slidesPerView={5}
                    navigation={{
                      prevEl: ".swiper-button-prev",
                      nextEl: ".swiper-button-next",
                    }}
                    loop={false}
                    modules={[Navigation]}
                    tag="ul"
                    className="position-relative swiper-card list-inline"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      576: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      1025: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                      1500: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                      },
                    }}
                  >
                    {shows.crew.map((item, index) => {
                      return (
                        <SwiperSlide key={index} as="li">
                          <Row className="cast-images m-0 align-items-center position-relative">
                            <div className="col-4 img-box p-0">
                              <img
                                src={item.thumbnail}
                                alt="cast-1"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                            <div className="col-8 block-description">
                              <h6 className="iq-title">
                                <Link to="/cast-detail">{t(item.title)}</Link>
                              </h6>
                              <div className="video-time d-flex align-items-center my-2">
                                <small className="text-white">{t(item.as)}</small>
                              </div>
                            </div>
                          </Row>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

TvShowsDetail.displayName = "TvShowsDetail";
export default TvShowsDetail;
