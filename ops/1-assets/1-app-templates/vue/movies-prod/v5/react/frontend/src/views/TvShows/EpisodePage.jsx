import React, { Fragment, memo } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import ReviewComponent from "../../components/ReviewComponent";
import RatingStar from "../../components/rating-star";
import FsLightBox from "../../components/fslight-box";
import Sources from "../../components/Sources";
import VideoJS from "../../components/plugins/VideoJs";

//function
import { generateImgPath } from "../../StaticData/data";

//utilites
import { useEnterExit } from "../../utilities/usePage";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";

const TvShowsDetail = memo(() => {
  const { t } = useTranslation();
  useEnterExit();

  const playerRef = React.useRef(null);
  const themeSchemeDirection = useSelector(theme_scheme_direction);

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

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  // date, type
  const shows = {
    id: 1,
    slug: "football-3",
    thumbnail: generateImgPath("/assets/images/genre/01.webp"),
    title: `${t('episode_page.football')} 3`,
    detail:
      "episode_page.episod_desc",
    season_type: "Season 1",
    certificate: "Adventure",
    rating: 3.3,
    episode_no: "S01E03",
    likes: 9,
    rating_from: "Imdb",
    geners: ["Comedy", "Drama"],
    tags: [
      "ott_home.brother",
      "ott_home.brother_relationship",
      "ott_home.kings",
      "ott_home.vikings",
    ],
    video_link: "",
    views: `1.2k ${t('episode_page.views')}`,
    video_type: "video",
    is_restricted: false,
    episodes: [
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/02.webp"),
        episode_no: "S01E02",
        release_date: `${t('detail_page.october')}  8, 2022`,
        duration: "35min",
        name: `${t('episode_page.zombie_world')} 2`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/03.webp"),
        episode_no: "S01E03",
        release_date: `${t('detail_page.october')}  15, 2022`,
        duration: "36min",
        name: `${t('episode_page.zombie_world')} 3`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/04.webp"),
        episode_no: "S01E04",
        release_date: `${t('detail_page.october')}  22, 2022`,
        duration: "41min",
        name: `${t('episode_page.zombie_world')} 4`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/01.webp"),
        episode_no: "S01E04",
        release_date: `${t('detail_page.october')} 1, 2022`,
        duration: "45min",
        name: `${t('episode_page.zombie_world')} 1`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/02.webp"),
        episode_no: "S01E02",
        release_date: `${t('detail_page.october')}  8, 2022`,
        duration: "35min",
        name: `${t('episode_page.zombie_world')} 2`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/03.webp"),
        episode_no: "S01E03",
        release_date: `${t('detail_page.october')}  15, 2022`,
        duration: "36min",
        name: `${t('episode_page.zombie_world')} 3`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/04.webp"),
        episode_no: "S01E04",
        release_date: `${t('detail_page.october')}  22, 2022`,
        duration: "41min",
        name: `${t('episode_page.zombie_world')} 4`,
      },
      {
        thumbnail: generateImgPath("/assets/images/tv-show/episodes/01.webp"),
        episode_no: "S01E04",
        release_date: `${t('detail_page.october')} 1, 2022`,
        duration: "45min",
        name: `${t('episode_page.zombie_world')} 1`,
      },
    ],
    created_by_username: "Admin",
    created_at: "Feb 2019",
    ranking: "#1 in Series Today ",
    date: "Nov 2020",
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
          <div className="trending-info mt-4 pt-0 pb-4">
            <Row>
              <Col md={9} className="col-12 mb-auto">
                <div className="d-md-flex">
                  <h2 className="trending-text fw-bold texture-text text-uppercase mt-0 fadeInLeft animated">
                    {t(shows.title)}
                  </h2>
                  <div className="slider-ratting d-flex align-items-center gap-2 ms-md-3 ms-0">
                    <RatingStar count="4" count1="1" starColor="text-primary" />
                    <span className="text-white">
                      {shows.rating}
                      <img
                        src={generateImgPath(
                          "/assets/images/movies/imdb-logo.svg"
                        )}
                        alt="imdb-logo"
                        className="img-fluid ms-2"
                      />
                    </span>
                  </div>
                </div>
                <ul className="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
                  <li className="font-size-18">{shows.episode_no}</li>
                  <li className="font-size-18">{shows.title}</li>
                  <li className="font-size-18">{shows.views}</li>
                </ul>
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
                    variant=" d-flex align-items-center"
                    id="nav-description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-description"
                    type="button"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="true"
                  >
                    {t("episode_page.description")}
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
                    {t("episode_page.rate")} & {t("episode_page.review")}
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
                    {t("episode_page.sources")}
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
        </Container>
      </div>
      <div className="recommended-block">
        <Container fluid>
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
              <h5 className="main-title text-capitalize mb-0">
                {t('episode_page.latest_episodes')}
              </h5>
            </div>
            <div className="card-style-slider">
              <Swiper
                key={themeSchemeDirection}
                dir={themeSchemeDirection}
                className="position-relative swiper-card wrapper-class"
                slidesPerView={4}
                modules={[Navigation]}
                effect="fade"
                loop={true}
                spaceBetween={5}
                // wrapperClass="p-0 m-0  list-inline"
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
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
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  1025: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1500: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                }}
              >
                {shows.episodes.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
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
                              {t(item.name)}
                            </h5>
                          </Link>
                        </div>
                      </div>
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

TvShowsDetail.displayName = "TvShowsDetail";
export default TvShowsDetail;
