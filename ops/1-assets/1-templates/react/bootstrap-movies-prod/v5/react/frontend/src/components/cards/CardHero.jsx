import { Fragment, memo, useState } from "react";

//react-bootstrap
import { Col, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//react fs-lightbox
import FsLightbox from "fslightbox-react";

const CardHero = memo(
  ({ link, title, rating, certificate, views, time, seasonType, createdAt, detail }) => {
    const [toggler, setToggler] = useState(false);
    return (
      <Fragment>
        <div className="shows-content h-100">
          <Row className="align-items-center h-100">
            <Col lg="7" md="12">
              <h1
                className="slider-text big-title title text-uppercase"
                data-animation-in="fadeInLeft"
                data-delay-in="0.6"
              >
                {title}
              </h1>
              <div className="flex-wrap align-items-center fadeInLeft animated">
                <div
                  className="flex-wrap align-items-center fadeInLeft animated"
                  data-iq-gsap="onStart"
                  data-iq-position-x="-150"
                  data-iq-position-y="0"
                  data-iq-duration="1"
                  data-iq-delay=".4"
                >
                  <div className="slider-ratting d-flex align-items-center">
                    <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                    {rating ? (
                      <span className="text-white ms-2">
                        {rating} <span className="ms-1">(lmdb)</span>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="d-flex align-items-center movie-banner-time">
                  {certificate ? (
                    <span className="badge bg-secondary p-2">{certificate}</span>
                  ) : (
                    ""
                  )}
                  {views ? (
                    <span className="badge bg-secondary p-2">
                      {" "}
                      <i className="fa fa-eye me-1"></i> {views} views{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  <span className="mx-2 mx-md-2">
                    <i
                      className="ri-checkbox-blank-circle-fill"
                      style="font-size: 7px"
                    ></i>
                  </span>
                  <span className="trending-time font-normal"> {time}</span>
                  {seasonType ? (
                    <span className="mx-2 mx-md-2">{seasonType}</span>
                  ) : (
                    ""
                  )}
                  <span className="mx-2 mx-md-2">
                    <i
                      className="ri-checkbox-blank-circle-fill"
                      style="font-size: 7px"
                    ></i>
                  </span>
                  <span className="trending-year font-normal">{createdAt}</span>
                </div>

                <p
                  className="movie-banner-text"
                  data-iq-gsap="onStart"
                  data-iq-position-x="0"
                  data-iq-position-y="150"
                  data-iq-duration="1"
                  data-iq-delay=".5"
                >
                  {detail}
                </p>
                <div
                  className="d-flex align-items-center r-mb-23"
                  data-iq-gsap="onStart"
                  data-iq-position-x="0"
                  data-iq-position-y="150"
                  data-iq-duration="1"
                  data-iq-delay=".6"
                >
                  <Link
                    to={link}
                    role="button"
                    className="btn btn-hover iq-button"
                  >
                    <i className="fa fa-play me-1" aria-hidden="true"></i> Play
                    Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              lg="5"
              md="12"
              className="trailor-video iq-slider d-none d-lg-block"
            >
              <Link to="#" className="video-open playbtn" tabIndex="0">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="80px"
                  height="80px"
                  viewBox="0 0 213.7 213.7"
                  enableBackground="new 0 0 213.7 213.7"
                  xmlSpace="preserve"
                  onClick={() => setToggler(!toggler)}
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
                <span className="w-trailor" onClick={() => setToggler(!toggler)}>
                  Watch Trailer
                </span>
              </Link>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://i.imgur.com/fsyrScY.jpg",
                  "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
);

CardHero.displayName = "CardHero";
export default CardHero;
