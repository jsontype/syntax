import React, { useState, memo, useRef } from "react";
import Swal from "sweetalert2";

//react-bootstrap
import { Row, Col, Card, Button, Offcanvas } from "react-bootstrap";

//Hooks
import useDataTable from "../../../hooks/useDatatable";

import InputField from "../../../components/inputfield";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";


// Redux Selector / Action
import { useSelector } from "react-redux";

//plugins
import "flatpickr/dist/flatpickr.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

import season01 from "/assets/images/movie-thumb/03.jpg";
import season02 from "/assets/images/movie-thumb/04.jpg";
import season03 from "/assets/images/movie-thumb/05.jpg";
import season04 from "/assets/images/movie-thumb/06.jpg";
import season05 from "/assets/images/movie-thumb/07.jpg";
import season06 from "/assets/images/movie-thumb/08.jpg";
import season07 from "/assets/images/movie-thumb/09.jpg";
import season08 from "/assets/images/movie-thumb/10.jpg";
import season09 from "/assets/images/movie-thumb/02.jpg";
import season10 from "/assets/images/movie-thumb/01.jpg";
import season11 from "/assets/images/movie-thumb/01.jpg";
import season12 from "/assets/images/movie-thumb/01.jpg";

// the hook
import { useTranslation } from "react-i18next";

import ChoicesJs from "../../../components/choices";

//DATA
const tableData = [
  {
    movie: season01,
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
    movie: season02,
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
    movie: season03,
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
    movie: season04,
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
    movie: season05,
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
    movie: season06,
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
    movie: season07,
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
    movie: season08,
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
    movie: season09,
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
    movie: season10,
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
    movie: season11,
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
    movie: season12,
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
    title: "Show",
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

const Seasons = memo(() => {
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
    { value: "abc", label: "abc" },
    { value: "xyz", label: "xyz" },
    { value: "mno", label: "mno" },
    { value: "stu", label: "stu" },
  ];

  const options2 = [
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
                  <ChoicesJs options={options2} className="js-choice" select="one" />
                </span>
              </div>
              <Button variant="primary" className="d-inline">
                {t("bordertable.apply")}
              </Button>
            </div>

            <Button variant="primary mt-3 px-2 px-md-3" onClick={handleShow}>
              <i className="fa-solid fa-plus me-2"></i>
              {t("movielist.add_season")}
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
            <Offcanvas.Title>{t("movielist.add_new_season")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="section-form">
              <fieldset>
                <legend className="text-primary">{t("sidebar.seasons")}</legend>
                <Row>
                  <Col sm="12">
                    <InputField
                      isLabel={true}
                      label="Seasons"
                      type="text"
                      placeholder="1"
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

                  <Col sm="12">
                    <div className="form-group px-3">
                      <label
                        className="form-label flex-grow-1"
                        htmlFor="movie-access"
                      >
                        <strong>{t("bordertable.show")}:</strong>
                      </label>
                      <span className="choices iq-custom-select">
                        <ChoicesJs options={options1} className="js-choice" select="one" />
                      </span>
                    </div>
                  </Col>
                </Row>
              </fieldset>
            </div>
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
      </Col>
      <Offcanvas
        className="offcanvas-width-80"
        show={show1}
        onHide={handleClose1}
        placement={placement}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t("movielist.edit_season")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            <div className="section-form">
              <fieldset>
                <legend className="text-primary">{t("sidebar.seasons")}</legend>
                <Row>
                  <Col sm="12">
                    <InputField
                      isLabel={true}
                      isRequired="true"
                      label="Seasons"
                      type="text"
                      placeholder="Enter Episode Name"
                      value="07"
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

                  <Col sm="12">
                    <div className="form-group px-3">
                      <label
                        className="form-label flex-grow-1"
                        htmlFor="movie-access"
                      >
                        <strong>{t("movielist.shows")}:</strong>
                      </label>
                      <span className="choices iq-custom-select">
                        <ChoicesJs options={options1} className="js-choice" select="one" />
                      </span>
                    </div>
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
    </Row>
  );
});

Seasons.displayName = "Seasons";
export default Seasons;
