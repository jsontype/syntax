import React, { Fragment, memo, useRef } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab, Form } from "react-bootstrap";

//router
import Link from "next/link";

//components
import ReviewComponent from "../../components/ReviewComponent";
import Sources from "../../components/Sources";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";
import RelatedVideos from "../../components/sections/RelatedVideos";
import ProductCard from "../../components/merchandise/product-card";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import RelatedMovies from "../../components/sections/RelatedMovies";
import VideoJS from "../../components/plugins/VideoJs";
import FsLightBox from "../../components/fslight-box";
import RatingStar from "../../components/rating-star";

//static data
import { newProduct } from "../../StaticData/shop";

//function
import { generateImgPath } from "../../StaticData/data";

//utilities
import { useEnterExit } from "../../utilities/usePage";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const RelatedPage = memo(() => {
  // date, type
  const shows = {
    id: 1,
    slug: "zombie-island",
    thumbnail: generateImgPath("/assets/images/genre/01.webp"),
    title: "Zombie Island",
    detail:
      "Zombie Island is a 1998 direct-to-video animated comedy horror film based on Hanna-Barbera's Scooby-Doo Saturday-morning cartoons. In the film, Shaggy, Scooby, Fred, Velma, and Daphne reunite after a year-long hiatus from Mystery, Inc. to investigate a bayou island said to be haunted by the ghost of the pirate Morgan Moonscar. The film was directed by Jim Stenstrum, from a screenplay by Glenn Leopold.",
    season_type: "2 Season",
    certificate: "Adventure",
    rating: 4.5,
    likes: 9,
    rating_from: "Imdb",
    geners: ["action", "adventure", "drama"],
    tags: ["brother", "brother-relationship", "kings", "vikings"],
    video_link: "",
    video_type: "video",
    is_restricted: false,

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
  useEnterExit();

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    techOrder: ["youtube"],
    sources: [
      {
        src: "https://www.youtube.com/watch?v=QCGq1epI9pQ",
        type: "video/youtube",
      },
    ],
    youtube: { iv_load_policy: 1 },
  };

  const handlePlayerReady = (player:any) => {
    playerRef.current = player;
  };
  return (
    <Fragment>
      <div className="iq-main-slider site-video">
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="pt-0">
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
              </div>
            </Col>
          </Row>
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
                        {shows.title}
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
                              href="/view-all"
                              className="text-primary text-capitalize"
                            >
                              {item}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4">
                      <span className="badge bg-secondary">Horror</span>
                      <span className="ms-3 font-Weight-500 genres-info me-2">
                        1hr : 48mins{" "}
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
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-heart"></i>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-plus"></i>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-download"></i>
                          </span>
                        </li>
                      </ul>
                      <div className="movie-detail-select">
                        <Form.Select
                          name="movieselect"
                          className="form-select "
                        >
                          <option value="1">Playlist</option>
                          <option value="2">Zombie Island</option>
                          <option value="3">Sand Dust</option>
                          <option value="4">Jumbo Queen</option>
                        </Form.Select>
                      </div>
                    </div>
                    <ul className="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
                      <li className="iq-tag-title text-primary mb-0">
                        <i className="fa fa-tags" aria-hidden="true"></i>Tags:{" "}
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
                  </Col>
                  <FsLightBox image={shows.thumbnail} />
                </Row>
              </div>
              <div className="content-details trending-info">
                <Tab.Container defaultActiveKey="first">
                  <Nav className="iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="first"
                        className=" d-flex align-items-center"
                        id="nav-description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-description"
                        type="button"
                        role="tab"
                        aria-controls="nav-description"
                        aria-selected="true"
                      >
                        Description
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="second"
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
                    <Nav.Item>
                      <Nav.Link
                        eventKey="third"
                        id="nav-sources-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-sources"
                        type="button"
                        role="tab"
                        aria-controls="nav-sources"
                        aria-selected="false"
                      >
                        Sources
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
                      <p>{shows.detail}</p>
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
                        <SwiperSlide key={index}>
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
                                <small className="text-white">
                                  As {item.as}
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
                        <SwiperSlide key={index}>
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
      <MoviesRecommendedForYou />
      <RelatedMovies />
      <RelatedVideos />
      <UpcomingMovies />
      <div className="newest-product-block section-padding-top streamit-block">
        <Container fluid>
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-3 my-4">
              <h5 className="main-title text-capitalize mb-0">
                Newest Products
              </h5>
              <Link
                href="/merchandise/all-product"
                className="text-primary iq-view-all text-decoration-none flex-none"
              >
                Want More?
              </Link>
            </div>
            <div className="card-style-slider">
              <Swiper
                slidesPerView={5}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                loop={true}
                modules={[Navigation]}
                tag="ul"
                className="position-relative swiper-card"
                breakpoints={{
                  0: {
                    slidesPerView: 2,
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
                {newProduct.map((item:any, index:any) => {
                  return (
                    <SwiperSlide tag="li" key={index}>
                      <ProductCard
                        thumbnail={item.thumbnail}
                        product_name={item.product_name}
                        price={item.price}
                        final_price={item.final_price}
                        rating="5"
                        count1="0"
                        is_sale={item.is_sale}
                        is_new={item.is_new}
                        slug={item.slug}
                      />
                    </SwiperSlide>
                  );
                })}
                <div className="swiper-button swiper-button-next"></div>
                <div className="swiper-button swiper-button-prev"></div>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

RelatedPage.displayName = "RelatedPage";
export default RelatedPage;
