import React, { Fragment, memo } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab, Form } from "react-bootstrap";

// Next-Link
import Link from 'next/link'

//components
import ReviewComponent from "@/components/ReviewComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import RatingStar from "@/components/rating-star";

//function
import { generateImgPath } from "@/StaticData/data";

//utilities
import { useEnterExit } from "@/utilities/usePage";

//swiper
import { Navigation } from "swiper";
const ShowsDetailPage = memo(() => {

  useEnterExit();
  // date, type
  const shows = {
    id: 1,
    slug: "zombie-world",
    thumbnail: generateImgPath("/assets/images/tags/07.webp"),
    title: "Zombie World",
    detail:
      "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    season_type: "Seasons 1",
    certificate: "Adventure",
    rating: 4.5,
    likes: 9,
    rating_from: "Imdb",
    geners: ["Comedy", "Drama"],
    tags: ["4K Ultra", "brother", "brother-relationship", "kings", "vikings"],
    video_link: "",
    views: "1.2k",
    video_type: "video",
    is_restricted: false,
    episodes: [
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/01.webp"),
        episode_no: "S01E01",
        release_date: "October 1, 2020",
        duration: "45min",
        name: "Zombie World 1",
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/02.webp"),
        episode_no: "S01E02",
        release_date: "October 8, 2020",
        duration: "35min",
        name: "Zombie World 2",
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/03.webp"),
        episode_no: "S01E03",
        release_date: "October 15, 2020",
        duration: "36min",
        name: "Zombie World 3",
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/04.webp"),
        episode_no: "S01E04",
        release_date: "October 22, 2020",
        duration: "41min",
        name: "Zombie World 4",
      },
    ],

    cast: [
      {
        title: "James Chinlund",
        thumbnail: generateImgPath("/assets/images/genre/g1.webp"),
        as: "As James",
      },
      {
        title: "James Earl Jones",
        thumbnail: generateImgPath("/assets/images/genre/g2.webp"),
        as: "As Jones",
      },
    ],
    crew: [
      {
        title: "Jeff Nathanson ",
        thumbnail: generateImgPath("/assets/images/genre/g3.webp"),
        as: "Writing",
      },
      {
        title: " Irene Mecchi ",
        thumbnail: generateImgPath("/assets/images/genre/g5.webp"),
        as: "Writing",
      },
      {
        title: " Karen Gilchrist ",
        thumbnail: generateImgPath("/assets/images/genre/g4.webp"),
        as: "Production",
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
                  {shows.title}
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
                          href="/view-all"
                          className="text-primary text-uppercase font-size-18"
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="d-flex flex-wrap align-items-center gap-3 font-size-20 mb-3 fw-500 text-white">
                  <span>{shows.season_type}</span>
                  <span>{shows.created_at}</span>
                </div>
                <p className="line-count-2 my-3">{shows.detail}</p>
              </div>
              <div className="position-relative my-4">
                <Link
                  href="/tv-shows/episode"
                  className="d-flex align-items-center gap-3"
                >
                  <div className="play-button">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <h4 className="text-white fw-bold m-0">
                    Watch latest Episode
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
                        <Link href="#" className="share-ico">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link href="#" className="share-ico">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link href="#" className="share-ico">
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
                  <Form.Select name="movieselect" className="form-select ">
                    <option value="1">Playlist</option>
                    <option value="2">Zombie Island</option>
                    <option value="3">Sand Dust</option>
                    <option value="4">Jumbo Queen</option>
                  </Form.Select>
                </div>
              </div>
              <ul className="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
                <li className="iq-tag-title text-primary mb-0">
                  <i className="fa fa-tags" aria-hidden="true"></i> Tags:{" "}
                </li>
                {shows.tags.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href="/view-all" className="title text-capitalize">
                        {item}
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
              <Form.Select name="movieselect" className="form-select ">
                <option value="1">Season 1</option>
                <option value="2">Season 2</option>
              </Form.Select>
            </div>
          </div>
          <div className="show-custom-tab">
            <Tab.Container defaultActiveKey="first">
              <Nav className="iq-custom-tab tab-bg-fill nav nav-pills text-center list-inline my-4">
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    className=" d-flex align-items-center"
                    id="nav-episodes-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-episodes"
                    type="button"
                    role="tab"
                    aria-controls="nav-episodes"
                    aria-selected="true"
                  >
                    Episodes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    id="nav-description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-description"
                    type="button"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="false"
                  >
                    Description
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    id="nav-review-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-review"
                    type="button"
                    role="tab"
                    aria-controls="nav-review"
                    aria-selected="false"
                  >
                    Rate & Review
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
                        <Col lg={3} sm={12} md={6} key={index}>
                          <div className="episode-block">
                            <div className="block-image position-relative">
                              <Link href="/tv-shows/episode">
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
                                <Link href="/tv-shows/episode">
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
                              <Link href="/tv-shows/episode">
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
                  <p>{shows.detail}</p>
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
                    className=" d-flex align-items-center"
                    id="nav-cast-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-cast"
                    type="button"
                    role="tab"
                    aria-controls="nav-cast"
                    aria-selected="true"
                  >
                    Cast
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    id="nav-crew-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-crew"
                    type="button"
                    role="tab"
                    aria-controls="nav-crew"
                    aria-selected="false"
                  >
                    Crew
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
                        <SwiperSlide key={index} >
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
                                <Link href="/cast/detail">{item.title}</Link>
                              </h6>
                              <div className="video-time d-flex align-items-center my-2">
                                <small className="text-white">{item.as}</small>
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
                        <SwiperSlide key={index} >
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
                                <Link href="/cast/detail">{item.title}</Link>
                              </h6>
                              <div className="video-time d-flex align-items-center my-2">
                                <small className="text-white">{item.as}</small>
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

ShowsDetailPage.displayName = "ShowsDetailPage";
export default ShowsDetailPage;
