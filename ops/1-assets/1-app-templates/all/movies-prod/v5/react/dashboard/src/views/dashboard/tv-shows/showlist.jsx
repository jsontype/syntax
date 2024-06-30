import React, { useState, memo, useRef } from "react";
import Swal from "sweetalert2";

// react-bootstrap
import { Row, Col, Card, Button, Offcanvas, Form } from "react-bootstrap";

//Hooks
import useDataTable from "../../../hooks/useDatatable";

import { Link } from "react-router-dom";

import InputField from "../../../components/inputfield";
import CastCrewForm from "../../../components/Castmodal";
import CastModalEdit from "../../../components/CastModalEdit";


// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";


// Redux Selector / Action
import { useSelector } from "react-redux";

// plugins
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

import show01 from "/assets/images/movie-thumb/03.jpg";
import show02 from "/assets/images/movie-thumb/04.jpg";
import show03 from "/assets/images/movie-thumb/05.jpg";
import show04 from "/assets/images/movie-thumb/06.jpg";
import show05 from "/assets/images/movie-thumb/07.jpg";
import show06 from "/assets/images/movie-thumb/08.jpg";
import show07 from "/assets/images/movie-thumb/09.jpg";
import show08 from "/assets/images/movie-thumb/10.jpg";
import show09 from "/assets/images/movie-thumb/02.jpg";
import show10 from "/assets/images/movie-thumb/01.jpg";
import show11 from "/assets/images/movie-thumb/01.jpg";
import show12 from "/assets/images/movie-thumb/01.jpg";

// the hook
import { useTranslation } from "react-i18next";

//choice js
import ChoicesJs from "../../../components/choices";

//DATA
const tableData = [
  {
    movie: show01,
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
    movie: show02,
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
    movie: show03,
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
    movie: show04,
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
    movie: show05,
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
    movie: show06,
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
    movie: show07,
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
    movie: show08,
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
    movie: show09,
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
    movie: show10,
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
    movie: show11,
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
    movie: show12,
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

const ShowList = memo(() => {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const direction = useSelector(SettingSelector.theme_scheme_direction)

  let placement;

  if (direction === "rtl") {
    placement = "start"
  }

  else {
    placement = "end"
  }
  //select dropDown
  const options1 = [
    { value: `${t('pricing.free')}`, label: `${t('pricing.free')}` },
    { value: `${t('movielist.standard')}`, label: `${t('movielist.standard')}` },
    { value: `${t('pricing.premium')}`, label: `${t('pricing.premium')}` },
  ];

  const options2 = [
    { value: `${t('Datatable.hindi')}`, label: `${t('Datatable.hindi')}` },
    { value: `${t('Datatable.english')}`, label: `${t('Datatable.english')}` },
    { value: `${t('Datatable.french')}`, label: `${t('Datatable.french')}` },
    { value: `${t('Datatable.marathi')}`, label: `${t('Datatable.marathi')}` },
    { value: `${t('Datatable.gujrati')}`, label: `${t('Datatable.gujrati')}` },
  ];

  const options3 = [
    { value: `${t('bordertable.action')}`, label: `${t('bordertable.action')}` },
    { value: `${t('movielist.adventure')}`, label: `${t('movielist.adventure')}` },
    { value: `${t('movielist.animation')}`, label: `${t('movielist.animation')}` },
    { value: `${t('dashboard.horror')}`, label: `${t('dashboard.horror')}` },
    { value: `${t('movielist.thriller')}`, label: `${t('movielist.thriller')}` },
  ];

  const options4 = [
    { value: `${t('bordertable.no_action')}`, label: `${t('bordertable.no_action')}` },
    { value: `${t('bordertable.status')}`, label: `${t('bordertable.status')}` },
    { value: `${t('accesscontrol.delete')}`, label: `${t('accesscontrol.delete')}` },
  ];
  return (
    <Row>
      <Col sm="12">
        <Card className="pb-3">
          <Card.Header className="border-bottom d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center mt-3 gap-2">
              <div className="form-group mb-0">
                <span className="choices iq-custom-select bulk-action" >
                  <ChoicesJs options={options4} className="js-choice" select="one" />
                </span>
              </div>
              <Button variant="primary" className="d-inline">
                {t("bordertable.apply")}
              </Button>
            </div>
            <Button variant="primary mt-3" onClick={handleShow}>
              <i className="fa-solid fa-plus me-2"></i>
              {t("movielist.add_show")}
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
          className="offcanvas-width-80 on-rtl "
          show={show}
          onHide={handleClose}
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t("movielist.show_list")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form>
              <div className="section-form">
                <fieldset>
                  <legend className="text-primary">{t("movielist.show")}</legend>
                  <Row>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        isRequired="true"
                        label="Show Name"
                        type="text"
                        placeholder="Enter Show Name"
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

                    <Col sm="6">
                      <div className="form-group px-3">
                        <label
                          className="form-label flex-grow-1"
                          htmlFor="movie-access"
                        >
                          <strong>{t("movielist.show_access")}:</strong>
                        </label>
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options1} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="form-group px-3">
                        <label
                          className="form-label flex-grow-1"
                          htmlFor="language"
                        >
                          <strong>{t("bordertable.language")}:</strong>
                        </label>
                        {/* <select
                          id="language"
                          type="select"
                          className="form-control select2-basic-multiple"
                          placeholder="select language"
                        >
                          <option>{t("Datatable.hindi")}</option>
                          <option defaultValue>{t("Datatable.english")}</option>
                          <option>{t("Datatable.french")}</option>
                          <option>{t("Datatable.marathi")}</option>
                          <option>{t("Datatable.gujrati")}</option>
                        </select> */}
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options2} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                    <Col sm="12">
                      <div className="form-group px-3">
                        <label className="form-label flex-grow-1" htmlFor="genres">
                          <strong>{t("movielist.genres")}:</strong>
                        </label>
                        {/* <select
                          id="genres"
                          type="select"
                          className="form-control select2-basic-multiple"
                          placeholder="select genres"
                        >
                          <option>{t("bordertable.action")}</option>
                          <option>{t("movielist.adventure")}</option>
                          <option>{t("movielist.animation")}</option>
                          <option>{t("dashboard.horror")}</option>
                          <option>{t("dashboard.thrilled")}</option>
                        </select> */}
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options3} className="js-choice" select="one" />
                        </span>
                      </div>
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
                            <th>{t("bordertable.action")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>{t("movielist.cast")}</td>
                            <td>ABC</td>
                            <td>{t("bordertable.james")}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  to="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  to="#"
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
                                  to="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  to="#"
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
                      <InputField
                        isLabel={true}
                        label="Content Rating"
                        type="text"
                        placeholder="Rating"
                      />
                    </Col>
                    <Col lg="3">
                      <div className="form-group px-3">
                        <Form.Label className="flex-grow-1">
                          <strong>{t("bordertable.release")}:</strong>
                        </Form.Label>
                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder={t("movielist.release")}
                          className="flatpicker_minDate form-control"
                        />
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="form-group px-3">
                        <Form.Label className="flex-grow-1">
                          <strong>{t("bordertable.publish_date")}:</strong>
                        </Form.Label>

                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder="public Date.."
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
                        className="d-flex justify-content-between"
                        name="status"
                      />
                    </Col>
                  </Row>
                </fieldset>
              </div>
            </form>
          </Offcanvas.Body>
          <div className="offcanvas-footer border-top">
            <div className="d-grid d-md-flex gap-3 p-3">
              <Button variant="primary" type="submit" className="d-block">
                <i className="fa-solid fa-floppy-disk me-2"></i>
                {t("accesscontrol.save")}
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
          className="offcanvas-width-80"
          show={show1}
          onHide={handleClose1}
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t("movielist.edit_show_list")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form>
              <div className="section-form">
                <fieldset>
                  <legend className="text-primary">{t("movielist.shows")}</legend>
                  <Row>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        isRequired="true"
                        label="Show Name"
                        type="text"
                        placeholder="Enter Episode Name"
                        value="Day Of Darkness"
                      />
                    </Col>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        label="Description"
                        type="textarea"
                        placeholder="Description"
                        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                      />
                    </Col>

                    <Col sm="6">
                      <div className="form-group px-5">
                        <label
                          className="form-label flex-grow-1"
                          htmlFor="movie-access"
                        >
                          <strong>{t("movielist.show_access")}:</strong>
                        </label>
                        {/* <select
                          id="movie-access"
                          type="select"
                          className="form-control select2-basic-multiple"
                          placeholder="select movie access"
                        >
                          <option>{t("movielist.free")}</option>
                          <option>{t("movielist.standard")}</option>
                          <option>{t("movielist.premium")}</option>
                        </select> */}
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options1} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="form-group px-5">
                        <label
                          className="form-label flex-grow-1"
                          htmlFor="language"
                        >
                          <strong>{t("movielist.language")}:</strong>
                        </label>
                        {/* <select
                          id="language"
                          type="select"
                          className="form-control select2-basic-multiple"
                          placeholder="select language"
                        >
                          <option>{t("Datatable.hindi")}</option>
                          <option>{t("Datatable.english")}</option>
                          <option defaultValue>{t("Datatable.french")}</option>
                          <option>{t("Datatable.marathi")}</option>
                          <option>{t("Datatable.gujrati")}</option>
                        </select> */}
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options2} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                    <Col sm="12">
                      <div className="form-group px-5">
                        <label className="form-label flex-grow-1" htmlFor="genres">
                          <strong>{t("movielist.genres")}:</strong>
                        </label>
                        {/* <select
                          id="genres"
                          type="select"
                          className="form-control select2-basic-multiple"
                          placeholder="select genres"
                        >
                          <option>{t("user_profile.action")}</option>
                          <option>{t("movielist.adventure")}</option>
                          <option>{t("movielist.animation")}</option>
                          <option>{t("dashboard.horror")}</option>
                          <option>{t("movielist.thriller")}</option>
                        </select> */}
                        <span className="choices iq-custom-select">
                          <ChoicesJs options={options3} className="js-choice" select="one" />
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center my-4 px-3">
                    <h5>
                      <strong>{t("bordertable.casts_crews")}</strong>
                    </h5>
                    <CastModalEdit />
                  </div>
                  <Row className="px-3">
                    <div>
                      <table className="table table-bordered table-strip">
                        <thead>
                          <tr className="text-center">
                            <th>{t("bordertable.casts_crews")}</th>
                            <th>{t("Datatable.name")}</th>
                            <th>{t("admin.role")}</th>
                            <th>{t("dashboard.actions")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>{t("movielist.cast")}</td>
                            <td>ABC</td>
                            <td>{t("bordertable.james")}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Link
                                  aria-current="page"
                                  to="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  aria-current="page"
                                  to="#"
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
                                  to="#"
                                  className="active text-success"
                                  title="Edit"
                                >
                                  <i className="fa-solid fa-pen mx-4"></i>
                                </Link>
                                <Link
                                  to="#"
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
                      <InputField
                        isLabel={true}
                        label="Content Rating"
                        type="text"
                        placeholder="4.5"
                      />
                    </Col>
                    <Col lg="3">
                      <div className="form-group px-3">
                        <span>{t("bordertable.release")}:</span>
                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder="Release Date.."
                          className="flatpicker_minDate form-control"
                        />
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="form-group px-3">
                        <span>{t("bordertable.publish_date")}:</span>
                        <Flatpickr
                          options={{ minDate: "2020-01" }}
                          placeholder="Public date.."
                          className="flatpicker_minDate form-control"
                        />
                      </div>
                    </Col>
                    <Col lg="3">
                      <InputField
                        isLabel={true}
                        label="Duration"
                        type="text"
                        placeholder="45"
                      />
                    </Col>
                    <Col lg="12" className="mt-4">
                      <InputField
                        label="Status"
                        type="toggle"
                        placeholder=""
                        className="d-flex justify-content-between"
                        name="status"
                      />
                    </Col>
                  </Row>
                </fieldset>
              </div>
            </form>
          </Offcanvas.Body>
          <div className="offcanvas-footer border-top">
            <div className="d-grid d-md-flex gap-3 p-3">
              <Button variant="primary" type="submit" className="d-block">
                <i className="fa-solid fa-floppy-disk me-2"></i>
                {t("accesscontrol.save")}
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

ShowList.displayName = "ShowList";
export default ShowList;
