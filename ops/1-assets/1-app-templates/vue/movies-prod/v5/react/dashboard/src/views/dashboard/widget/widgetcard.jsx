import { useState, memo, Fragment } from "react";

//react-bootstrap
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";

// import {bindActionCreators} from "redux"

//react-router-dom
import { Link } from "react-router-dom";
// /assets/images / avatars /02.png

//Img Suggestion
import shap1 from "/assets/images/avatars/02.png";
import shap2 from "/assets/images/avatars/09.png";
import shap3 from "/assets/images/avatars/06.png";
import shap4 from "/assets/images/avatars/07.png";

//Img Gallery
import icon1 from "/assets/images/icon/01.png";
import icon2 from "/assets/images/shapes/03.png";
import icon3 from "/assets/images/avatars/03.png";
import icon4 from "/assets/images/icon/04.png";
import icon5 from "/assets/images/shapes/06.png";
import icon8 from "/assets/images/icon/08.png";
import icon6 from "/assets/images/avatars/04.png";
import icon7 from "/assets/images/avatars/05.png";
import icon9 from "/assets/images/shapes/05.png";
import icon10 from "/assets/images/shapes/04.png";
import icon11 from "/assets/images/shapes/02.png";

import avatars11 from "/assets/images/avatars/01.png";
import avatars22 from "/assets/images/avatars/avtar_1.png";
import avatars33 from "/assets/images/avatars/avtar_2.png";
import avatars44 from "/assets/images/avatars/avtar_3.png";
import avatars55 from "/assets/images/avatars/avtar_4.png";
import avatars66 from "/assets/images/avatars/avtar_5.png";

import avatars2 from "/assets/images/avatars/02.png";
import avatars3 from "/assets/images/avatars/03.png";
import avatars4 from "/assets/images/avatars/04.png";
import avatars5 from "/assets/images/avatars/05.png";

// the hook
import { useTranslation } from "react-i18next";

//react fs-lightbox
import ReactFsLightbox from "fslightbox-react";
import ShareOffcanvas from "../../../components/shareoffcanvas";
const FsLightbox = ReactFsLightbox.default
  ? ReactFsLightbox.default
  : ReactFsLightbox;

// import ShareOffcanvas from "../../../components/partials/components/shareoffcanvas";
// Circularprogressbar

// import Circularprogressbar from "../../../components/circularprogressbar";

const Widgetcard = memo((props) => {
  const { t } = useTranslation();
  const [toggler, setToggler] = useState(false);
  return (
    <Fragment>
      <FsLightbox
        toggler={toggler}
        sources={[
          icon4,
          icon11,
          icon8,
          icon10,
          icon2,
          icon5,
          icon9,
          icon10,
          icon1,
        ]}
      />
      <Row>
        <Col lg="4">
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column text-center align-items-center justify-content-between ">
                  <div className="fs-italic">
                    <h5>{t("widgetcard.regina_miles")}</h5>
                    <div className=" mb-1">
                      <small>{t("widgetcard.trainer_expert")}</small>
                    </div>
                  </div>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{" "}
                  </div>
                  <div className="card-profile-progress">
                    <Image
                      src={avatars11}
                      alt="profile-pic"
                      className="theme-color-default-img img-fluid rounded-circle card-img"
                    />
                    <div
                      id="circle-progress-1"
                      className="circle-progress circle-progress-basic circle-progress-primary"
                      data-min-value="0"
                      data-max-value="100"
                      data-value="80"
                      data-type="percent"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="80"
                    >
                      <svg
                        version="1.1"
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        className="circle-progress"
                      >
                        <circle
                          className="circle-progress-circle"
                          cx="50"
                          cy="50"
                          r="46"
                          fill="none"
                          stroke="#ddd"
                          strokeWidth="8"
                        ></circle>
                        <path
                          d="M 50 4 A 46 46 0 1 1 6.25140025042294 35.78521825875241"
                          className="circle-progress-value"
                          fill="none"
                          stroke="#00E699"
                          strokeWidth="8"
                        ></path>
                        <text
                          className="circle-progress-text"
                          x="50"
                          y="50"
                          font="16px Arial, sans-serif"
                          textAnchor="middle"
                          fill="#999"
                          dy="0.4em"
                        ></text>
                      </svg>
                    </div>
                    <div className="card-profile-progress">
                      {/* <Circularprogressbar
                        Linecap="rounded"
                        strokewidth="0px"
                        width="100"
                        height="100"
                        value={0}
                        style={{ width: "140px", height: "140px" }}
                      > */}
                      <Image
                        className="theme-color-default-img  img-fluid rounded-circle card-img"
                        src={avatars11}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-blue-img img-fluid rounded-circle card-img"
                        src={avatars22}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-green-img img-fluid rounded-circle card-img"
                        src={avatars33}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-royal-blue-img img-fluid rounded-circle card-img"
                        src={avatars55}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-red-img img-fluid rounded-circle card-img"
                        src={avatars66}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-pink-img img-fluid rounded-circle card-img"
                        src={avatars44}
                        alt="profile-pic"
                      />
                      {/* </Circularprogressbar> */}
                    </div>
                    <div className="text-center text-muted-50">
                      <p>{t("widgetcard.slate_helps")}</p>
                    </div>
                    <div className="d-flex icon-pill">
                      <Link
                        to="#"
                        className="btn btn-sm rounded-pill px-2 py-2 ms-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-sm rounded-pill px-2 py-2  ms-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-danger"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-sm rounded-pill px-2 py-2 ms-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-success"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="p-2 rounded bg-warning disabled">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h4 className="px-3">{t("widgetcard.conversion")}</h4>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                  <Link to="#">
                    <svg width="24px" viewBox="0 0 22 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z" fill="currentColor"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Form className="d-grid gap-card">
                <Form.Group className="mb-0">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="1000"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon3"
                    />
                    <InputGroup.Text
                      as="span"
                      id="basic-addon3"
                    >
                      {t("widgetcard.grd")}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-0">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="100"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon4"
                    />
                    <InputGroup.Text
                      as="span"
                      className="input-group-text"
                      id="basic-addon4"
                    >
                      {t("widgetcard.usd")}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-0">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="150"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon4"
                    />
                    <InputGroup.Text
                      as="span"
                      className="input-group-text"
                      id="basic-addon4"
                    >
                      {t("widgetcard.euro")}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Button variant="btn btn-primary">
                  {t("widgetcard.archive")}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-4">
                <div className="">
                  <h2>59</h2>
                  <h5>{t("widgetcard.holidays")}</h5>
                </div>
                <div className="">
                  <div className="badge bg-danger p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="d-flex  justify-content-start align-items-center mb-3">
                <div className="pe-3">
                  <Image
                    src={avatars2}
                    className="rounded-circle p-1 bg-danger-subtle"
                    width="60"
                    height="60"
                    alt="1"
                  />
                </div>
                <div>
                  <h5 className="">{t("widgetcard.web_workshop")}</h5>
                  <h6 className="mb-0">1 {t("widgetcard.hour_ago")}</h6>
                </div>
              </div>
              <div>
                <small>{t("widgetcard.impossible_withhold")}</small>
                <small>{t("widgetcard.impossible_unreasoning")}</small>
              </div>
              <div className="pt-3">
                <small>- {t("widgetcard.agens_reppligers")}</small>
              </div>
              <div className="pt-3">
                <small>- {t("widgetcard.managements")}</small>
              </div>
              <div className="pt-3">
                <small>- {t("widgetcard.creative_sprint")}</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("widgetcard.upcoming_birthday")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-start align-items-center">
                <div className="pe-3">
                  <Image
                    src={avatars3}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">{t("widgetcard.anna_sthesia")}</h6>
                  <p className="mb-0">{t("widgetcard.today")}</p>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center mt-4">
                <div className="pe-3">
                  <Image
                    src={avatars4}
                    className="rounded-circle bg-danger-subtle p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">{t("widgetcard.annette_black")}</h6>
                  <p className="mb-0">{t("widgetcard.today")}</p>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center mt-4">
                <div className="pe-3">
                  <Image
                    src={avatars5}
                    className="rounded-circle bg-soft-info p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">{t("widgetcard.daivid_wall")}</h6>
                  <p className="mb-0">{t("widgetcard.today")}</p>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center mt-4">
                <div className="pe-3">
                  <Image
                    src={avatars2}
                    className="rounded-circle bg-danger-subtle p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">{t("widgetcard.jphn_devid")}</h6>
                  <p className="mb-0">{t("widgetcard.today")}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="5">
          <Card>
            <Card.Body>
              <div className="user-post-data">
                <div className="d-flex flex-wrap">
                  <div className="media-support-user-img me-3">
                    <Image
                      className="rounded-circle p-1 bg-danger-subtle img-fluid avatar-60"
                      src={avatars2}
                      alt=""
                    />
                  </div>
                  <div className="media-support-info mt-2">
                    <h5 className="mb-0 d-inline-block">
                      {t("widgetcard.ira_membrit")}
                    </h5>
                    <p className="mb-0 text-primary">
                      6 {t("widgetcard.hour_ago")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p>{t("widgetcard.lorem_ipsum_dolor")}</p>
              </div>
              <div className="comment-area mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="like-block position-relative d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <p className="mb-0">
                        <svg width="18" className="me-1" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"
                          />
                        </svg>{" "}
                        140 {t("widgetcard.likes")}
                      </p>
                      <p className="ms-3 mb-0">{t("widgetcard.comments")}</p>
                    </div>
                  </div>

                  <div className="share-block d-flex align-items-center feather-icon me-3">

                    <ShareOffcanvas share="99" />
                  </div>
                </div>

                <ul className="post-comments p-0 list-inline mt-3">
                  <li className="mb-3">
                    <div className="d-flex flex-wrap">
                      <div className="user-img">
                        <Image
                          src={avatars3}
                          alt="userimg"
                          className="p-1 bg-soft-primary avatar-60 rounded-circle img-fluid"
                        />
                      </div>
                      <div className="comment-data-block ms-3">
                        <h6 className="mb-2">{t("widgetcard.monty_carlo")}</h6>
                        <p className="mb-0">
                          {t("widgetcard.lorem_ipsum")}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <Form action="#">
                  <InputGroup className="">
                    <FormControl
                      type="text"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      type="button"
                      className="input-group-text btn-primary"
                      id="basic-addon2"
                    >
                      <svg
                        width="24"
                        className="icon-24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z"
                          fill="currentColor"
                        ></path>
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Button>
                  </InputGroup>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("widgetcard.stories")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <ul className="media-story m-0 p-0">
                <li className="d-flex mb-4 align-items-center active">
                  <Image
                    src={avatars4}
                    alt="story-img"
                    className="avatar-50 rounded-circle p-1 bg-danger-subtle img-fluid"
                  />
                  <div className="stories-data ms-3">
                    <h5>{t("widgetcard.anna_mull")}</h5>
                    <p className="mb-0">1 {t("widgetchart.hours")}</p>
                  </div>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <Image
                    src={avatars2}
                    alt="story-img"
                    className="avatar-50 rounded-circle p-1 bg-danger-subtle img-fluid"
                  />
                  <div className="stories-data ms-3">
                    <h5>{t("widgetcard.ira_membrit")}</h5>
                    <p className="mb-0">4 {t("widgetchart.hours")}</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <Image
                    src={avatars3}
                    alt="story-img"
                    className="avatar-50 rounded-circle p-1 bg-soft-primary img-fluid"
                  />
                  <div className="stories-data ms-3">
                    <h5>{t("widgetcard.bob_frapples")}</h5>
                    <p className="mb-0">9 {t("widgetchart.hours")}</p>
                  </div>
                </li>
              </ul>
              <Link to="#" className="btn btn-primary d-block mt-4">
                {t("widgetcard.see_all")}
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("widgetcard.gallery")}</h4>
              </div>
              <span>132 {t("widgetcard.pics")}</span>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-card grid-cols-3">
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon4}
                    className="img-fluid bg-info-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon11}
                    className="img-fluid bg-primary-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon8}
                    className="img-fluid bg-info-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon10}
                    className="img-fluid bg-primary-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon2}
                    className="img-fluid bg-warning-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon5}
                    className="img-fluid bg-primary-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon9}
                    className="img-fluid bg-danger-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon10}
                    className="img-fluid bg-primary-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
                <Link onClick={() => setToggler(!toggler)} to="#">
                  <Image
                    src={icon1}
                    className="img-fluid bg-success-subtle rounded w-100"
                    alt="profile-image"
                  />
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">{t("widgetcard.twitter_feeds")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="twit-feed">
                <div className="d-flex align-items-center mb-4">
                  <Image
                    className="theme-color-default-img rounded-pill img-fluid avatar-60 me-3"
                    src={avatars11}
                    alt="profile-pic"
                  />
                  <Image
                    className="theme-color-blue-img rounded-pill img-fluid avatar-60 me-3"
                    src={avatars22}
                    alt="profile-pic"
                  />
                  <Image
                    className="theme-color-green-img rounded-pill img-fluid avatar-60 me-3"
                    src={avatars33}
                    alt="profile-pic"
                  />
                  {/* <Image
                    className="theme-color-royal-blue-img rounded-pill img-fluid avatar-60 me-3"
                    src={avatars55}
                    alt="profile-pic"
                  /> */}
                  {/* <Image
                    className="theme-color-red-img rounded-pill img-fluid avatar-60 me-3"
                    src={avatars66}
                    alt="profile-pic"
                  /> */}
                  <Image
                    className="theme-color-pink-img rounded-pill img-fluid avatar-60 me-3"
                    src={avatars44}
                    alt="profile-pic"
                  />
                  <div className="media-support-info">
                    <h6 className="mb-0">{t("widgetcard.anna_sthesia")}</h6>
                    <p className="mb-0">
                      {t("widgetcard.@anna59")}{" "}
                      <span className="text-primary">
                        <svg width="15" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                          ></path>
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="media-support-body">
                  <p>{t("widgetcard.dummytext")}</p>
                  <div className="d-flex flex-wrap mb-1">
                    <Link to="#" className="twit-meta-tag pe-2">
                      {t("widgetcard.#html")}
                    </Link>
                    <Link to="#" className="twit-meta-tag pe-2">
                      {t("widgetcard.#Bootstrap")}
                    </Link>
                  </div>
                  <div className="twit-date">07 {t("widgetcard.jan")} 2021</div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="twit-feed">
                <div className="d-flex align-items-center mb-4">
                  <Image
                    className="rounded-pill p-1 bg-soft-primary img-fluid avatar-60 me-3"
                    src={avatars3}
                    alt=""
                  />
                  <div className="media-support-info">
                    <h6 className="mb-0">{t("widgetcard.paige_turner")}</h6>
                    <p className="mb-0">
                      {t("widgetcard.@paige30")}{" "}
                      <span className="text-primary">
                        <svg width="15" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                          ></path>
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="media-support-body">
                  <p>{t("widgetcard.dummytext")}</p>
                  <div className="d-flex flex-wrap mb-1">
                    <Link to="#" className="twit-meta-tag pe-2">
                      {t("widgetcard.#js")}
                    </Link>
                    <Link to="#" className="twit-meta-tag pe-2">
                      {t("widgetcard.#Bootstrap")}
                    </Link>
                  </div>
                  <div className="twit-date">18 {t("widgetcard.feb")} 2021</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">{t("widgetcard.suggestions")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <ul className="list-inline m-0 p-0">
                <li className="d-flex mb-4 align-items-center">
                  <div className="img-fluid bg-soft-warning rounded-pill">
                    <Image
                      src={shap1}
                      alt="story-img"
                      className="rounded-pill avatar-40"
                    />
                  </div>
                  <div className="ms-3 flex-grow-1">
                    <h6>{t("widgetcard.paul_molive")}</h6>
                    <p className="mb-0">4 {t("widgetcard.mutual_friends")}</p>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2"
                  >
                    <span className="btn-inner">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        currentcolor="#7016d0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.2036 8.66919V12.6792"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.2497 10.6741H17.1597"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="img-fluid bg-danger-subtle rounded-pill">
                    <Image
                      src={icon3}
                      alt="story-img"
                      className="rounded-pill avatar-40"
                    />
                  </div>
                  <div className="ms-3 flex-grow-1">
                    <h6>{t("widgetcard.robert_fox")}</h6>
                    <p className="mb-0">4 {t("widgetcard.mutual_friends")}</p>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2"
                  >
                    <span className="btn-inner">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        currentcolor="#7016d0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.2036 8.66919V12.6792"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.2497 10.6741H17.1597"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="img-fluid bg-soft-dark rounded-pill">
                    <Image
                      src={icon6}
                      alt="story-img"
                      className="rounded-pill avatar-40"
                    />
                  </div>
                  <div className="ms-3 flex-grow-1">
                    <h6>{t("widgetcard.jenny_wilson")}</h6>
                    <p className="mb-0">6 {t("widgetcard.mutual_friends")}</p>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2"
                  >
                    <span className="btn-inner">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        currentcolor="#7016d0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.2036 8.66919V12.6792"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.2497 10.6741H17.1597"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="img-fluid bg-soft-primary rounded-pill">
                    <Image
                      src={icon7}
                      alt="story-img"
                      className="rounded-pill avatar-40"
                    />
                  </div>
                  <div className="ms-3 flex-grow-1">
                    <h6>{t("widgetcard.cody_fisher")}</h6>
                    <p className="mb-0">8 {t("widgetcard.mutual_friends")}</p>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2"
                  >
                    <span className="btn-inner">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        currentcolor="#7016d0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.2036 8.66919V12.6792"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.2497 10.6741H17.1597"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="img-fluid bg-soft-info rounded-pill">
                    <Image
                      src={shap3}
                      alt="story-img"
                      className="rounded-pill avatar-40"
                    />
                  </div>
                  <div className="ms-3 flex-grow-1">
                    <h6>{t("widgetcard.bessie_cooper")}</h6>
                    <p className="mb-0">1 {t("widgetcard.mutual_friends")}</p>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2"
                  >
                    <span className="btn-inner">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        currentcolor="#7016d0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.2036 8.66919V12.6792"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.2497 10.6741H17.1597"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="img-fluid bg-soft-warning rounded-pill">
                    <Image
                      src={shap4}
                      alt="story-img"
                      className="rounded-pill avatar-40"
                    />
                  </div>
                  <div className="ms-3 flex-grow-1">
                    <h6>{t("widgetcard.wade_warren")}</h6>
                    <p className="mb-0">3 {t("widgetcard.mutual_friends")}</p>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2"
                  >
                    <span className="btn-inner">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        currentcolor="#7016d0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.2036 8.66919V12.6792"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.2497 10.6741H17.1597"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <div className="img-fluid bg-soft-info rounded-pill">
                    <Image
                      src={shap2}
                      alt="story-img"
                      className="rounded-pill avatar-40"
                    />
                  </div>
                  <div className="ms-3 flex-grow-1">
                    <h6>{t("widgetcard.floyd_miles")}</h6>
                    <p className="mb-0">2 {t("widgetcard.mutual_friends")}</p>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2"
                  >
                    <span className="btn-inner">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        currentcolor="#7016d0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.2036 8.66919V12.6792"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.2497 10.6741H17.1597"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Widgetcard.displayName = "Widgetcard";
export default Widgetcard;
