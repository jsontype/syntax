import React, { Fragment, memo, useState } from "react";

//react bootstrap
import {
  Col,
  Container,
  Row,
  Nav,
  Tab,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//utilites
import { useEnterExit } from "../utilities/usePage";

//function
import { generateImgPath } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const Playlist = memo(() => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEnterExit();

  const playlist = [
    {
      image: generateImgPath("/assets/images/movies/playlist/01.webp"),
      title: t("playlist.play_list1"),
      category: t("playlist.public"),
      views: `3 ${t("playlist.views")}`,
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/02.webp"),
      title: t("playlist.play_list2"),
      category: t("playlist.private"),
      views: `1 ${t("playlist.views")}`,
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/03.webp"),
      title: t("playlist.play_list3"),
      category: t("playlist.public"),
      views: `10 ${t("playlist.views")}`,
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/04.webp"),
      title: t("playlist.play_list4"),
      category: t("playlist.public"),
      views: `30 ${t("playlist.views")}`,
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/05.webp"),
      title: t("playlist.play_list5"),
      category: t("playlist.private"),
      views: `2 ${t("playlist.views")}`,
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/06.webp"),
      title: t("playlist.play_list6"),
      category: t("playlist.public"),
      views: `10 ${t("playlist.views")}`,
    },
    {
      image: generateImgPath("/assets/images/movies/playlist/07.webp"),
      title: t("playlist.play_list7"),
      category: t("playlist.public"),
      views: `50 ${t("playlist.views")}`,
    },
  ];
  return (
    <Fragment>
      <div className="section-padding-bottom">
        <div className="profile-box">
          <Container fluid>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
              <div className="d-flex align-items-center gap-3">
                <div className="account-logo d-flex align-items-center position-relative">
                  <img
                    src={generateImgPath("/assets/images/pages/profile.webp")}
                    alt="profile"
                    className="img-fluid object-cover rounded-3"
                  />
                  <i className="fa-regular fa-pen-to-square"></i>
                </div>
                <div>
                  <h6 className="font-size-18 text-capitalize text-white fw-500">
                    {t("playlist.admin")}
                  </h6>
                  <span className="font-size-14 text-white fw-500">
                    {t("playlist.admin")}@{t("playlist.admin")}.com
                  </span>
                </div>
              </div>
              <div className="iq-button">
                <Link
                  to="/pricing"
                  className="btn text-uppercase position-relative"
                >
                  <span className="button-text">
                    {t("playlist.subscription")}
                  </span>{" "}
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <Container fluid>
          <div className="content-details iq-custom-tab-style-two">
            <Tab.Container defaultActiveKey="first">
              <Nav className="d-flex justify-content-center nav nav-pills tab-header">
                <Nav className="" id="nav-tab" role="tablist">
                  <Nav.Link
                    eventKey="first"
                    variant=" d-flex align-items-center"
                    id="nav-playlist-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-playlist"
                    type="button"
                    role="tab"
                    aria-controls="nav-playlist"
                    aria-selected="true"
                  >
                    {t("playlist.playlist")}
                  </Nav.Link>
                  <Nav.Link
                    eventKey="second"
                    variant=""
                    id="nav-watchlist-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-watchlist"
                    type="button"
                    role="tab"
                    aria-controls="nav-watchlist"
                    aria-selected="false"
                  >
                    {t("header.watchlist")}
                  </Nav.Link>
                  <Nav.Link
                    eventKey="third"
                    variant=""
                    id="nav-favourite-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-favourite"
                    type="button"
                    role="tab"
                    aria-controls="nav-favourite"
                    aria-selected="false"
                  >
                    {t("header.favorites")}
                  </Nav.Link>
                </Nav>
              </Nav>
              <Tab.Content className="p-0">
                <Tab.Pane
                  className=" fade show"
                  eventKey="first"
                  id="nav-playlist"
                  role="tabpanel"
                  aria-labelledby="nav-playlist-tab"
                >
                  <div className="overflow-hidden animated fadeInUp">
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <h5 className="main-title text-capitalize mb-0">
                        {t("playlist.my_playlist")}
                      </h5>
                    </div>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {playlist.map((item, index) => {
                        return (
                          <Col className="mb-4" key={index}>
                            <div className="watchlist-warpper card-hover-style-two">
                              <div className="block-images position-relative w-100">
                                <div className="img-box">
                                  <Link
                                    to="/watchlist-detail"
                                    className="position-absolute top-0 bottom-0 start-0 end-0"
                                  ></Link>
                                  <img
                                    src={item.image}
                                    alt="movie-card"
                                    className="img-fluid object-cover w-100 d-block border-0"
                                  />
                                </div>
                                <div className="card-description">
                                  <h5 className="text-capitalize fw-500">
                                    <Link to="/watchlist-detail">
                                      {t(item.title)}
                                    </Link>
                                  </h5>
                                  <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-solid fa-earth-americas text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.category}
                                      </span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-regular fa-eye text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.views}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                    <div className="text-center">
                      <div className="iq-button">
                        <Button
                          type="button"
                          className="btn text-uppercase position-relativ"
                          onClick={handleShow}
                        >
                          <span className="button-text">
                            {t("playlist.create_playlist")}
                          </span>{" "}
                          <i className="fa-solid fa-play"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  className=" fade"
                  id="nav-watchlist"
                  eventKey="second"
                  role="tabpanel"
                  aria-labelledby="nav-watchlist-tab"
                >
                  <div className="overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <h5 className="main-title text-capitalize mb-0">
                        {t("playlist.my_watchlist")}
                      </h5>
                    </div>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {playlist.slice(0, 4).map((item, index) => {
                        return (
                          <Col className="mb-4" key={index}>
                            <div className="watchlist-warpper card-hover-style-two">
                              <div className="block-images position-relative w-100">
                                <div className="img-box">
                                  <Link
                                    to="/watchlist-detail"
                                    className="position-absolute top-0 bottom-0 start-0 end-0"
                                  ></Link>
                                  <img
                                    src={item.image}
                                    alt="movie-card"
                                    className="img-fluid object-cover w-100 d-block border-0"
                                  />
                                </div>
                                <div className="card-description">
                                  <h5 className="text-capitalize fw-500">
                                    <Link to="/watchlist-detail">
                                      {t(item.title)}
                                    </Link>
                                  </h5>
                                  <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-solid fa-earth-americas text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.category}
                                      </span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-regular fa-eye text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.views}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                    <div className="text-center">
                      <div className="iq-button">
                        <Button
                          type="button"
                          className="btn text-uppercase position-relativ"
                          onClick={handleShow}
                        >
                          <span className="button-text">
                            {t("playlist.create_watchlist")}{" "}
                          </span>
                          <i className="fa-solid fa-play"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  className=" fade"
                  id="nav-favourite"
                  eventKey="third"
                  role="tabpanel"
                  aria-labelledby="nav-favourite-tab"
                >
                  <div className="overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <h5 className="main-title text-capitalize mb-0">
                        {t("playlist.my_favourite")}
                      </h5>
                    </div>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {playlist.map((item, index) => {
                        return (
                          <Col className="mb-4" key={index}>
                            <div className="watchlist-warpper card-hover-style-two">
                              <div className="block-images position-relative w-100">
                                <div className="img-box">
                                  <Link
                                    to="/watchlist-detail"
                                    className="position-absolute top-0 bottom-0 start-0 end-0"
                                  ></Link>
                                  <img
                                    src={item.image}
                                    alt="movie-card"
                                    className="img-fluid object-cover w-100 d-block border-0"
                                  />
                                </div>
                                <div className="card-description">
                                  <h5 className="text-capitalize fw-500">
                                    <Link to="/watchlist-detail">
                                      {t(item.title)}
                                    </Link>
                                  </h5>
                                  <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-solid fa-earth-americas text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.category}
                                      </span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 font-size-12">
                                      <i className="fa-regular fa-eye text-primary"></i>
                                      <span className="text-body fw-semibold text-capitalize">
                                        {item.views}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                    <div className="text-center">
                      <div className="iq-button">
                        <Button
                          type="button"
                          className="btn text-uppercase position-relativ"
                          onClick={handleShow}
                        >
                          <span className="button-text">
                            {t("playlist.create_playlist")}{" "}
                          </span>
                          <i className="fa-solid fa-play"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              contentClassName="border-0"
            >
              <Modal.Header closeButton className="border-0">
                <div>
                  <Modal.Title as="h1" className="text-capitalize fs-5 fw-500">
                    {t("playlist.new_playlist")}
                  </Modal.Title>
                  <p className="mb-0">{t("playlist.information")}</p>
                </div>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="form-group">
                    <Form.Label className="text-white fw-500 mb-2">
                      {t("playlist.name")} *
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="text-white fw-500 mb-2">
                      {t("playlist.description")}
                    </Form.Label>
                    <textarea className="form-control" cols="5"></textarea>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="text-white fw-500 mb-2">
                      {t("playlist.privacy")}
                    </Form.Label>
                    <Form.Select className="form-control">
                      <option>{t("playlist.public")}</option>
                      <option>{t("playlist.private")}</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <div className="text-white fw-500">
                      {t("playlist.thumbnail")}
                    </div>
                    <small className="d-block my-2">
                      {t("playlist.maximum_upload")}
                    </small>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Form.Group className="form-group d-flex align-items-center gap-3">
                    <button
                      className="btn btn-sm btn-light text-uppercase fw-medium">
                      {t("playlist.cancel")}
                    </button>
                    <Button
                      className="btn btn-sm btn-primary text-uppercase fw-medium"
                      onClick={handleClose}
                    >
                      {t("playlist.save")}
                    </Button>
                  </Form.Group>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </Container>

        {/*  */}
      </div>
    </Fragment>
  );
});

export default Playlist;
