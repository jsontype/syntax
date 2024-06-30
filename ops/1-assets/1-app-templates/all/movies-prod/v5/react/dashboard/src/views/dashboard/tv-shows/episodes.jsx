import React, { useState, memo, useRef } from "react";
import Swal from "sweetalert2";

//react-bootstrap
import { Row, Col, Card, Button, Offcanvas, Form } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

//components
import InputField from "../../../components/inputfield";
import CastCrewForm from "../../../components/Castmodal";
import CastModalEdit from "../../../components/CastModalEdit";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";


// Redux Selector / Action
import { useSelector } from "react-redux";

//Hooks
import useDataTable from "../../../hooks/useDatatable";

//plugins
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import VideoModal from "../../../components/Videomodal";
import SubtitleModal from "../../../components/SubtitleModal";
import VideoModalEdit from "../../../components/VideoModalEdit";

import epi01 from "/assets/images/movie-thumb/03.jpg";
import epi02 from "/assets/images/movie-thumb/04.jpg";
import epi03 from "/assets/images/movie-thumb/05.jpg";
import epi04 from "/assets/images/movie-thumb/06.jpg";
import epi05 from "/assets/images/movie-thumb/07.jpg";
import epi06 from "/assets/images/movie-thumb/08.jpg";
import epi07 from "/assets/images/movie-thumb/09.jpg";
import epi08 from "/assets/images/movie-thumb/10.jpg";
import epi09 from "/assets/images/movie-thumb/02.jpg";
import epi10 from "/assets/images/movie-thumb/01.jpg";
import epi11 from "/assets/images/movie-thumb/01.jpg";
import epi12 from "/assets/images/movie-thumb/01.jpg";

// the hook
import { useTranslation } from "react-i18next";


import ChoicesJs from "../../../components/choices";

//DATA
const tableData = [
  {
    movie: epi01,
    title: "Arrival 1999",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi02,
    title: "Day Of Darkness",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi03,
    title: "Don Jon",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi04,
    title: "Mega Fun",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi05,
    title: "My True Friends",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi06,
    title: "Night Mare",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi07,
    title: "Portable",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi08,
    title: "Suffered",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi09,
    title: "The Witcher",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi10,
    title: "Troll Hunter",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi11,
    title: "Troll Hunter",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
  {
    movie: epi12,
    title: "Troll Hunter",
    time: "2h 21m",
    language: "(english, hindi)",
    quality: "480/720/1080",
    category: "Hello",
    publish_date: "2010",
    movie_access: "World",
    seo: "!!!",
  },
];

const columns = [
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<input type="checkbox" class="form-check-input">',
    render: function () {
      return `
       <input type="checkbox" class="form-check-input">
        `;
    },
  },
  {
    data: null,
    title: "Movie",
    render: function (row) {
      return `
      <div class="d-flex">
          <img src="${row.movie}" class="rounded-2 avatar avatar-55 img-fluid" />
          <div class="d-flex flex-column ms-3 justify-content-center">
              <h6 class="text-capitalize">${row.title}</h6>
              <small>${row.time}</small>
              <small class="text-capitalize">${row.language}</small>
          </div>
      </div>
          
        `;
    },
  },

  { data: "quality", title: "Quality" },
  { data: "category", title: "Category" },
  { data: "publish_date", title: "Publish Date" },
  { data: "movie_access", title: "Movie Access" },
  { data: "seo", title: "Seo" },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: "Status",
    render: function () {
      return `
      <div class="d-flex justify-content-between">
          <div class="form-check form-switch ms-2">
              <input class="form-check-input" type="checkbox">
          </div>
      </div>
        `;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: "Action",
    render: function () {
      return `
       <div class="d-flex gap-1 align-items-center">
        <a title="Edit" class="btn btn-sm btn-icon btn-success rounded" data-table="action" data-id="0" data-method="edit" href="#"><i class="fa-solid fa-pen"></i></a>
        <a title="Delete" class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#" ><i class="fa-solid fa-trash"></i></a>
      </div>
        `;
    },
  },
];

const EpisodesList = memo(() => {
  const { t } = useTranslation();
  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
    actionCallback: (data) => {
      switch (data.method) {
        case "edit":
          handleShow1();
          break;

        case "delete":
          showAlert();
          break;

        default:
          break;
      }
    },
  });

  const direction = useSelector(SettingSelector.theme_scheme_direction)

  const showAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item",
      icon: "error",
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#c03221",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  // offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  let placement;

  if (direction === "rtl") {
    placement = "start"
  }

  else {
    placement = "end"
  }


  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const options1 = [
    { value: `${t('movielist.the_mandalorian')}`, label: `${t('movielist.the_mandalorian')}` },
    { value: `${t('movielist.zombie_island')}`, label: `${t('movielist.zombie_island')}` },
    { value: `${t('movielist.folke_the_fat')}`, label: `${t('movielist.folke_the_fat')}` },
    { value: `${t('movielist.criminals_and_agents')}`, label: `${t('movielist.criminals_and_agents')}` },
  ];
  const options2 = [
    { value: "Season 2", label: "Season 2" },
    { value: "Season 1", label: "Season 1" },
    { value: "Season 3", label: "Season 3" },
    { value: "Season 4", label: "Season 4" },
  ];
  const options3 = [
    { value: `${t('bordertable.no_action')}`, label: `${t('bordertable.no_action')}` },
    { value: `${t('bordertable.status')}`, label: `${t('bordertable.status')}` },
    { value: `${t('accesscontrol.delete')}`, label: `${t('accesscontrol.delete')}` },
  ];

  return (
    <Row>
      <Col sm="12">
        <Card >
          <Card.Header className="border-bottom d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center mt-3 gap-2">
              <div className="form-group mb-0">
                <span className="choices iq-custom-select bulk-action" >
                  <ChoicesJs options={options3} className="js-choice" select="one" />
                </span>
              </div>
              <Button variant="primary" className="d-inline">
                {t("bordertable.apply")}
              </Button>
            </div>

            <Button variant="primary mt-3 px-2 px-lg-3" onClick={handleShow}>
              <i className="fa-solid fa-plus me-2"></i>
              {t("bordertable.add_episodes")}
            </Button>
          </Card.Header>
          <Card.Body>
            <div className="table-view table-responsive table-space">
              <table
                id="datatable"
                ref={tableRef}
                className="data-tables table custom-table movie_table dataTable no-footer"
              ></table>
            </div>
          </Card.Body>
        </Card>
        <Offcanvas
          className="offcanvas-width-80"
          show={show}
          onHide={handleClose}
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t("bordertable.add_new_episodes")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form>
              <div className="section-form">
                <fieldset>
                  <legend className="text-primary">{t("sidebar.episodes")}</legend>
                  <Row>
                    <Col sm="12">
                      <div className="px-3 mb-3">
                        <label className="form-label">
                          <strong>{t("bordertable.show")}</strong>:
                        </label>{" "}
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options1} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                    <Col sm="12">
                      <div className="px-3 mb-3">
                        <label className="form-label">
                          <strong>{t("sidebar.seasons")}</strong>:
                        </label>
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options2} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        isRequired="true"
                        label="Episode Name"
                        type="text"
                        placeholder="Enter Movie Name"
                      />
                    </Col>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        label="Description"
                        type="textarea"
                        placeholder="Description"
                      />
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center my-5 px-3">
                    <h5>
                      <strong>{t("bordertable.casts_crews")}</strong>
                    </h5>
                    <CastCrewForm />
                  </div>
                  <Row className="px-3">
                    <div className="table-responsive">
                      <table className="table table-bordered table-strip">
                        <thead>
                          <tr className="text-center">
                            <th>{t("bordertable.casts_crews")}</th>
                            <th>{t("Datatable.name")}</th>
                            <th>{t("admin.role")}</th>
                            <th>{t("user_profile.action")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>{t("castmodal.cast")}</td>
                            <td>ABC</td>
                            <td>{t("bordertable.james")}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-danger"
                                  title="Delete"
                                >
                                  <i className="fa-solid fa-trash me-4"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>{t("castmodal.crew")}</td>
                            <td>XYZ</td>
                            <td>{t("bordertable.producer")}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-danger"
                                  title="Delete"
                                >
                                  <i className="fa-solid fa-trash me-4"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Row>
                  <Row className="mt-5">
                    <Col lg="3">
                      <div className="form-group px-3">
                        <label className="form-label">
                          <strong>{t("bordertable.content_rating")}</strong>:
                        </label>
                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder="Rating"
                          className="flatpicker_minDate form-control"
                        />
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="px-3 form-group">
                        <label className="form-label">
                          <strong>{t("bordertable.release")}</strong>:
                        </label>
                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder="Release date.."
                          className="flatpicker_minDate form-control"
                        />
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="px-3 form-group">
                        <label className="form-label">
                          <strong>{t("bordertable.publish_date")}</strong>:
                        </label>
                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder="Publish date.."
                          className="flatpicker_minDate form-control"
                        />
                      </div>
                    </Col>
                    <Col lg="3">
                      <InputField
                        isLabel={true}
                        label="Duration"
                        type="text"
                        placeholder="Duration in mins"
                      />
                    </Col>
                    <Col lg="12" className="mt-4">
                      <InputField
                        label="Status"
                        type="toggle"
                        placeholder=""
                        className="d-flex align-self-end"
                        name="status"
                      />
                    </Col>
                  </Row>
                </fieldset>
                <fieldset>
                  <legend className="mt-5 text-primary">
                    {t("bordertable.media")}
                  </legend>
                  <Row>
                    <Col sm="12" lg="6">
                      <InputField
                        isLabel={true}
                        label="Thumbnail"
                        isRequired={true}
                        type="file"
                      />
                    </Col>
                    <Col sm="12" lg="6">
                      <InputField
                        isLabel={true}
                        label="Poster"
                        isRequired={true}
                        type="file"
                      />
                    </Col>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        isRequired={true}
                        label="Trailer Url"
                        placeholder="Trailer Link"
                        type="text"
                      />
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center mt-5 mb-3 px-3">
                    <h5>
                      <strong>{t("bordertable.video_quality")}</strong>
                    </h5>
                    <VideoModal />
                  </div>
                  <Row className="px-#">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr className="text-center">
                            <th style={{ width: "30%" }}>
                              {t("castmodal.quality")}
                            </th>
                            <th style={{ width: "30%" }}>
                              {t("bordertable.video_url")}
                            </th>
                            <th style={{ width: "30%" }}>
                              {t("user_profile.action")}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>720P</td>
                            <td>video_720.mp4</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-danger"
                                  title="Delete"
                                >
                                  <i className="fa-solid fa-trash me-4"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center mt-5 mb-3 px-3">
                    <h5>
                      <strong>{t("bordertable.subtitles")}</strong>
                    </h5>
                    <SubtitleModal />
                  </div>
                  <Row className="px-#">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr className="text-center">
                            <th style={{ width: "30%" }}>
                              {t("bordertable.language")}
                            </th>
                            <th style={{ width: "30%" }}>URL</th>
                            <th style={{ width: "30%" }}>
                              {t("user_profile.action")}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>{t("Datatable.english")}</td>
                            <td>English.txt</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-danger"
                                  title="Delete"
                                >
                                  <i className="fa-solid fa-trash me-4"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Row>
                </fieldset>
              </div>
            </form>
          </Offcanvas.Body>
          <div className="offcanvas-footer border-top">
            <div className="d-grid d-md-flex gap-3 p-3">
              <Button variant="primary" type="submit" className="d-block">
                <i className="fa-solid fa-floppy-disk me-2"></i>
                {t("admin.save")}
              </Button>
              <Button
                variant="outline-primary"
                type="button"
                className="d-block"
                onClick={handleClose}
              >
                <i className="fa-solid fa-angles-left me-2"></i>
                {t("castmodal.close")}
              </Button>
            </div>
          </div>
        </Offcanvas>
        <Offcanvas
          className=" offcanvas-width-80 on-rtl "
          show={show1}
          onHide={handleClose1}
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t("bordertable.edit_episode")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form>
              <div className="section-form">
                <fieldset>
                  <legend className="text-primary">{t("sidebar.episodes")}</legend>
                  <Row>
                    <Col sm="12">
                      <div className="form-group px-3">
                        <label className="form-label">
                          <strong>{t("accesscontrol.shows")}</strong>:
                        </label>{" "}
                        {/* <select className="form-control select2-basic-multiple">
                          {Showopt.map((item, index) => {
                            return <option key={index}>{item.label}</option>;
                          })}
                        </select> */}
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options1} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                    <Col sm="12">
                      <div className="form-group px-3">
                        <label className="form-label">
                          <strong>{t("accesscontrol.seasons")}</strong>:
                        </label>{" "}
                        {/* <select className="form-control select2-basic-multiple">
                          {Seasonopt.map((item, index) => {
                            return <option key={index}>{item.label}</option>;
                          })}
                        </select> */}
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options2} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        isRequired="true"
                        label="Episode Name"
                        type="text"
                        placeholder="Enter Episode Name"
                      />
                    </Col>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        label="Description"
                        type="textarea"
                        placeholder="Description"
                      />
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center my-5 px-3">
                    <h5>
                      <strong>{t("bordertable.casts_crews")}</strong>
                    </h5>
                    <CastModalEdit />
                  </div>
                  <Row className="px-3">
                    <div className="table-responsive">
                      <table className="table table-bordered table-strip">
                        <thead>
                          <tr className="text-center">
                            <th>{t("bordertable.casts_crews")}</th>
                            <th>{t("Datatable.name")}</th>
                            <th>{t("admin.role")}</th>
                            <th>{t("user_profile.action")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>{t("castmodal.cast")}</td>
                            <td>ABC</td>
                            <td>{t("bordertable.james")}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-danger"
                                  title="Delete"
                                >
                                  <i className="fa-solid fa-trash me-4"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>{t("castmodal.crew")}</td>
                            <td>XYZ</td>
                            <td>{t("bordertable.producer")}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-danger"
                                  title="Delete"
                                >
                                  <i className="fa-solid fa-trash me-4"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Row>
                  <Row className="mt-5">
                    <Col lg="4">
                      <div className="px-3">
                        <label className="form-label">
                          <strong>{t("bordertable.release")}</strong>:
                        </label>
                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder="Select Date.."
                          className="flatpicker_minDate form-control"
                        />
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="px-3">
                        <label className="form-label">
                          <strong>{t("bordertable.publish_date")}</strong>:
                        </label>
                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder="Select Date.."
                          className="flatpicker_minDate form-control"
                        />
                      </div>
                    </Col>
                    <Col lg="4">
                      <InputField
                        isLabel={true}
                        label="Duration"
                        type="text"
                        placeholder="Duration in mins"
                      />
                    </Col>
                    <Col lg="12" className="mt-4">
                      <InputField
                        label="Status"
                        type="toggle"
                        placeholder=""
                        className="d-flex align-self-end"
                        name="status"
                      />
                    </Col>
                  </Row>
                </fieldset>
                <fieldset>
                  <legend className="mt-5">{t("bordertable.media")}</legend>
                  <Row>
                    <Col sm="12" lg="6">
                      <InputField
                        isLabel={true}
                        label="Thumbnail"
                        isRequired="true"
                        type="file"
                      />
                    </Col>
                    <Col sm="12" lg="6">
                      <InputField
                        isLabel="true"
                        label="Poster"
                        isRequired="true"
                        type="file"
                      />
                    </Col>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        isRequired="true"
                        label="Trailer Url"
                        placeholder="Trailer Link"
                        type="text"
                        value="www.demo.com"
                      />
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center mt-5 mb-3 px-3">
                    <h5>
                      <strong>{t("bordertable.video_quality")}</strong>
                    </h5>
                    <VideoModalEdit />
                  </div>
                  <Row className="px-#">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr className="text-center">
                            <th style={{ width: "30%" }}>
                              {t("castmodal.quality")}
                            </th>
                            <th style={{ width: "30%" }}>
                              {t("bordertable.video_url")}
                            </th>
                            <th style={{ width: "30%" }}>
                              {t("bordertable.action")}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>720P</td>
                            <td>video_720.mp4</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-danger"
                                  title="Delete"
                                >
                                  <i className="fa-solid fa-trash me-4"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center mt-5 mb-3 px-3">
                    <h5>
                      <strong>{t("bordertable.subtitles")}</strong>
                    </h5>
                    <SubtitleModal />
                  </div>
                  <Row className="px-#">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr className="text-center">
                            <th style={{ width: "30%" }}>
                              {t("bordertable.language")}
                            </th>
                            <th style={{ width: "30%" }}>
                              {t("user_profile.url")}
                            </th>
                            <th style={{ width: "30%" }}>
                              {t("user_profile.action")}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>{t("Datatable.english")}</td>
                            <td>English.txt</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  href="#"
                                  className="active text-danger"
                                  title="Delete"
                                >
                                  <i className="fa-solid fa-trash me-4"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Row>
                </fieldset>
              </div>
            </form>
          </Offcanvas.Body>
          <div className="offcanvas-footer border-top">
            <div className="d-grid d-md-flex gap-3 p-3">
              <Button variant="primary" type="submit" className="d-block">
                <i className="fa-solid fa-floppy-disk me-2"></i>
                {t("admin.save")}
              </Button>
              <Button
                variant="outline-primary"
                type="button"
                className="d-block"
                onClick={handleClose1}
              >
                <i className="fa-solid fa-angles-left me-2"></i>
                {t("castmodal.close")}
              </Button>
            </div>
          </div>
        </Offcanvas>
      </Col>
    </Row>
  );
});

EpisodesList.displayName = "EpisodesList";
export default EpisodesList;
