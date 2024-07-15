import React, { Fragment, memo, useState } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab, Form } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import ReviewComponent from "../../components/ReviewComponent";
import Sources from "../../components/Sources";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";
import RelatedVideos from "../../components/sections/RelatedVideos";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import RelatedMovies from "../../components/sections/RelatedMovies";
import RatingStar from "../../components/rating-star";
import FsLightBoxComponent from "../../components/fslight-box";

//function
import { generateImgPath } from "../../StaticData/data";

// //utilites
// import { useEnterExit } from "../../utilities/usePage";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// the hook
import { useTranslation } from "react-i18next";

//fslightbox
import FsLightbox from "fslightbox-react";

//choicejs
import ChoicesJs from "../../components/choice";

const RestrictedPage = memo(() => {
  // date, type
  const { t } = useTranslation();

  const options = [
    { value: `${t('header.playlist')}`, label: `${t('header.playlist')}` },
    { value: `${t('detail_page.zombie_island')}`, label: `${t('detail_page.zombie_island')}` },
    { value: `${t('detail_page.sand_dust')}`, label: `${t('detail_page.sand_dust')}` },
    { value: `${t('detail_page.jumbo_queen')}`, label: `${t('detail_page.jumbo_queen')}` },
  ];

  const shows = {
    id: 1,
    slug: "zombie-world",
    thumbnail: generateImgPath("/assets/images/tags/07.webp"),
    title: "episode_page.zombie_island",
    detail: "detail_page.movie_desc",
    season_type: "2 Season",
    certificate: "Adventure",
    rating: 4.8,
    likes: 9,
    rating_from: "Imdb",
    geners: ["home.action", "home.adventure", "ott_home.drama"],
    tags: ["ott_home.action", "ott_home.adventure", "ott_home.drama"],
    video_link: "",
    video_type: "video",
    is_restricted: false,

    cast: [
      {
        title: "restricted.james_chinlund",
        thumbnail: generateImgPath("/assets/images/genre/g1.webp"),
        as: "detail_page.as_james",
      },
      {
        title: "restricted.james_earl",
        thumbnail: generateImgPath("/assets/images/genre/g2.webp"),
        as: "detail_page.as_jones",
      },
    ],
    crew: [
      {
        title: "restricted.jeff_nathanson",
        thumbnail: generateImgPath("/assets/images/genre/g3.webp"),
        as: "detail_page.writing",
      },
      {
        title: "restricted.jeff_nathanson",
        thumbnail: generateImgPath("/assets/images/genre/g5.webp"),
        as: "detail_page.writing",
      },
      {
        title: "restricted.jeff_nathanson",
        thumbnail: generateImgPath("/assets/images/genre/g4.webp"),
        as: "detail_page.production",
      },
    ],
    created_by_username: "Admin",
    created_at: "Feb 2017",
    date: "Nov 2020",
  };

  const [toggler, setToggler] = useState(false);

  const handleToggle = () => {
    setToggler(!toggler)
  }
  // useEnterExit();
  return (
    <Fragment>
      <div className="iq-main-slider site-video">
        <Container fluid>
          <div className="iq-content_restriction">
            <div className="iq-restriction_box">
              <span className="subscribe-text">
                {t("restricted.logged_in")}
              </span>
              <div className="iq-button">
                <Link to="" className="btn text-uppercase position-relative">
                  <span className="button-text">
                    {t("restricted.subscribe_watch")}
                  </span>{" "}
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
              <span> {t("restricted.already_member")}</span>
              <div className="iq-button">
                <Link to="" className="btn text-uppercase position-relative">
                  <span className="button-text">{t("restricted.log_in")}</span>{" "}
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="details-part">
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="trending-info mt-4 pt-0 pb-4">
                <Row>
                  <Col md="9" className="mb-auto">
                    <div className="d-block d-lg-flex align-items-center">
                      <h2 className="trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block">
                        {t(shows.title)}
                      </h2>
                      <div className="slider-ratting d-flex align-items-center ms-lg-3 ms-0">
                        <RatingStar
                          count="5"
                          count1="0"
                          starColor="text-warning"
                        />
                        <span className="text-white ms-2">
                          {shows.rating} ({shows.rating_from})
                        </span>
                      </div>
                    </div>
                    <ul className="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
                      {shows.geners.map((item, index) => {
                        return (
                          <li key={index} className="trending-list">
                            <Link
                              to="/view-all"
                              className="text-primary text-capitalize"
                            >
                              {t(item)}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4">
                      <span className="badge bg-secondary">
                        {t("detail_page.horror")}
                      </span>
                      <span className="ms-3 font-Weight-500 genres-info me-2">
                        1hr : 48mins
                      </span>
                      <span className="trending-year trending-year-list font-Weight-500 genres-info">
                        {shows.created_at}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-4 flex-wrap mb-4">
                      <ul className="list-inline p-0 share-icons music-play-lists mb-n2 mx-n2">
                        <li className="share">
                          <span>
                            <i className="fa-solid fa-share-nodes"></i>
                          </span>{" "}
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
                        </li>{" "}
                        <li>
                          <span>
                            <i className="fa-solid fa-download"></i>
                          </span>
                        </li>{" "}
                      </ul>
                      <div className="movie-detail-select">
                        <ChoicesJs options={options} className="js-choice" select="one" />
                      </div>
                    </div>
                    <ul className="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
                      <li className="iq-tag-title text-primary mb-0">
                        <i className="fa fa-tags" aria-hidden="true"></i>{" "}Tags:
                      </li>
                      {shows.tags.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link
                              to="/view-all"
                              className="title text-capitalize"
                            >
                              {t(item)}
                            </Link>
                            <span className="text-secondary">,</span>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                  <FsLightBoxComponent image={shows.thumbnail} handleToggle={handleToggle} />
                </Row>
              </div>
              <div className="content-details trending-info">
                <Tab.Container defaultActiveKey="first">
                  <Nav className="iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="first"
                        variant=" d-flex align-items-center"
                        id="nav-description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-description"
                        type="button"
                        role="tab"
                        aria-controls="nav-description"
                        aria-selected="true"
                      >
                        {t("restricted.discription")}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="second"
                        variant=""
                        id="nav-review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-review"
                        type="button"
                        role="tab"
                        aria-controls="nav-review"
                        aria-selected="false"
                      >
                        {t("restricted.rate")} & {t("restricted.review")}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="third"
                        variant=""
                        id="nav-sources-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-sources"
                        type="button"
                        role="tab"
                        aria-controls="nav-sources"
                        aria-selected="false"
                      >
                        {t("restricted.sources")}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane
                      className=" fade show"
                      eventKey="first"
                      id="nav-description"
                      role="tabpanel"
                      aria-labelledby="nav-description-tab"
                    >
                      <p>{t(shows.detail)}</p>
                    </Tab.Pane>
                    <Tab.Pane
                      className=" fade"
                      id="nav-review"
                      eventKey="second"
                      role="tabpanel"
                      aria-labelledby="nav-review-tab"
                    >
                      <ReviewComponent />
                    </Tab.Pane>
                    <Tab.Pane
                      className=" fade"
                      id="nav-sources"
                      eventKey="third"
                      role="tabpanel"
                      aria-labelledby="nav-sources-tab"
                    >
                      <Sources />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
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
                                <small className="text-white">{t(item.as)}
                                </small>
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
                                <small className="text-white">
                                  {t(item.as)}
                                </small>
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
      <MoviesRecommendedForYou viewAll={false} slideMedium={2} paddingY="pt-2 my-4" slides={5} />
      <RelatedMovies viewAll={false} slideMedium={2} paddingY="my-4 pt-2" />
      <RelatedVideos viewAll={false} slideMedium={2} paddingY="my-4 pt-2" />
      <UpcomingMovies viewAll={false} slideMedium={2} paddingY="my-4 pr-2" slides={5} title="home.upcoming" />
      <FsLightbox
        maxYoutubeVideoDimensions={{ width: 1000, height: 600 }}
        exitFullscreenOnClose={true}
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=QCGq1epI9pQ"]}
      />
    </Fragment>
  );
});

RestrictedPage.displayName = "RestrictedPage";
export default RestrictedPage;
