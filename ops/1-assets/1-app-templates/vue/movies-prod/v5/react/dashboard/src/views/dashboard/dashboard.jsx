import React, { Fragment, useEffect, useRef } from "react";

// react-router
import { Link } from "react-router-dom";

// react-bootstrap
import { Row, Col, Container } from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";

//plugins
import "flatpickr/dist/flatpickr.css";

// components
import Card from "../../components/partials/dashboard/bootstrap/card";

// plugins
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import Chart from "react-apexcharts";

// img
import dash01 from "/assets/images/dashboard/01.jpg";
import dash02 from "/assets/images/dashboard/02.jpg";
import dash03 from "/assets/images/dashboard/03.jpg";
import dash04 from "/assets/images/dashboard/04.jpg";
import dash05 from "/assets/images/dashboard/05.jpg";
import dash06 from "/assets/images/dashboard/06.jpg";
import dash07 from "/assets/images/movie-thumb/07.jpg";
import dash08 from "/assets/images/movie-thumb/01.jpg";
import dash09 from "/assets/images/movie-thumb/01.jpg";
import dash10 from "/assets/images/movie-thumb/05.jpg";
import dash11 from "/assets/images/movie-thumb/04.jpg";

//Hooks
import useDataTable from "../../hooks/useDatatable";

//data
const tableData = [
  {
    movie: dash07,
    name: "Boop Bitty",
    time: "",
    rating: "8.2",
    category: "Thriller",
    views: '<i class="fa-regular fa-eye"></i>',
    user: "Unsubcriber",
    date: "23 July,2020",
    heart: '<i class="fa-solid fa-heart text-primary"></i>',
  },
  {
    movie: dash08,
    name: "Champions",
    time: "1hr 40min",
    rating: "9.2",
    category: "Horror",
    views: '<i class="fa-regular fa-eye"></i>',
    user: "Unsubcriber",
    date: "21 July,2020",
    heart: '<i class="fa-solid fa-heart text-primary"></i>',
  },
  {
    movie: dash09,
    name: "Dino Land",
    time: "",
    rating: "8.5",
    category: "Action",
    views: '<i class="fa-regular fa-eye"></i>',
    user: "Unsubcriber",
    date: "24 July,2020",
    heart: '<i class="fa-solid fa-heart text-primary"></i>',
  },
  {
    movie: dash10,
    name: "Last Race",
    time: "",
    rating: "7.2",
    category: "Horror",
    views: '<i class="fa-regular fa-eye"></i>',
    user: "Subcriber",
    date: "22 July,2020",
    heart: '<i class="fa-solid fa-heart text-primary"></i>',
  },
  {
    movie: dash11,
    name: "The Last Breath",
    time: "",
    rating: "8.9",
    category: "Horror",
    views: '<i class="fa-regular fa-eye"></i>',
    user: "Subcriber",
    date: "25 July,2020",
    heart: '<i class="fa-solid fa-heart text-primary"></i>',
  },
];

SwiperCore.use([Navigation, Autoplay]);

const Dashbord = () => {
  const { t } = useTranslation();
  // const datatable = t("datatable", { returnObjects: true });
  const columns = useRef([
    {
      data: null,
      title: "Movie",
      render: function (row) {
        return `
      <div class="movie-row d-flex w-20">
        <img src="${row.movie}" class="img-border-radius avatar-40 img-fluid" />
        <div class="d-flex flex-column ms-3 justify-content-center">
          <p class="mb-0">${row.name}</p>
          <small>${row.time}</small>
        </div>
      </div>
    `;
      },
    },
    { data: "rating", title: "Rating", className: "w-20" },
    { data: "category", title: "Category", className: "w-20" },
    { data: "views", title: "Download/Views", className: "w-20" },
    { data: "user", title: "User", className: "w-20" },
    { data: "date", title: "Date", className: "w-20" },
    {
      data: "heart",
      title: '<i class="fa-solid fa-heart"></i>',
      className: "w-20",
    },
  ]);

  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns.current,
    data: tableData,
  });

  const options1 = t("options1", { returnObjects: true });
  const options2 = t("options2", { returnObjects: true });

  const chart1 = {
    options: {
      chart: {
        id: "view-chart-01",
      },
      colors: ["#e20e02", "#f68a04", "#007aff", "#545e75"],
      labels: [
        "New Customer",
        "Exsisting Subscriber's",
        "Daily Visitor's",
        "Extented Subscriber's",
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 0,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [44, 55, 30, 30],
  };
  const chart2 = {
    options: {
      colors: ["#e20e02", "#007aff"],
      chart: {
        id: "view-chart-03",
        foreColor: "#D1D0CF",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["a", "b", "c", "d"],
      },
      yaxis: {
        title: {
          text: "",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: false,
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
    series: [
      {
        name: "This Month",
        data: [44, 55, 30, 60],
      },
      {
        name: "Last Month",
        data: [35, 41, 20, 40],
      },
    ],
  };
  const chart3 = {
    options: {
      chart: {
        id: "view-chart-02",
      },
      colors: [
        "#e20e02",
        "#83878a",
        "#007aff",
        "#f68a04",
        "#14e788",
        "#545e75",
      ],
      labels: ["Actions", "Comedy", "Harror", "Drama", "Kids", "Thrilled"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 0,
      },
      legend: {
        show: false,
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [44, 30, 20, 43, 22, 20],
  };
  return (
    <Fragment>
      <Row>
        <Col lg="8">
          <Row>
            <Col sm="6" lg="6" xl="3">
              <Card className="card-block card-stretch card-height">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="iq-cart-text text-capitalize">
                      <p className="mb-0">{t("dashboard.view")}</p>
                    </div>
                    <div className="icon iq-icon-box-top rounded-circle bg-primary">
                      <svg
                        className="text-white"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h4 className=" mb-0">+24K</h4>
                    <p className="mb-0 text-primary">
                      <span>
                        <i className="fa fa-caret-down me-2"></i>
                      </span>
                      35%
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" lg="6" xl="3">
              <Card className="card-block card-stretch card-height">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="iq-cart-text text-capitalize">
                      <p className="mb-0 font-size-14">
                        {t("dashboard.app")}
                      </p>
                    </div>
                    <div className="icon iq-icon-box-top rounded-circle bg-warning">
                      <svg
                        className="text-white"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h4 className="mb-0">+55K</h4>
                    <p className="mb-0 text-warning">
                      <span>
                        <i className="fa fa-caret-up me-2"></i>
                      </span>
                      50%
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" lg="6" xl="3">
              <Card className="card-block card-stretch card-height">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="iq-cart-text text-capitalize">
                      <p className="mb-0 font-size-14">
                        {t("dashboard.download")}
                      </p>
                    </div>
                    <div className="icon iq-icon-box-top rounded-circle bg-info">
                      <svg
                        className="text-white"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.75 12C2.75 17.108 6.891 21.25 12 21.25C17.108 21.25 21.25 17.108 21.25 12C21.25 6.892 17.108 2.75 12 2.75C6.891 2.75 2.75 6.892 2.75 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M8.52832 10.5576L11.9993 14.0436L15.4703 10.5576"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h4 className="mb-0">+1M</h4>
                    <p className="mb-0 text-info">
                      <span>
                        <i className="fa fa-caret-up me-2"></i>
                      </span>
                      80%
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" lg="6" xl="3">
              <Card className="card-block card-stretch card-height">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="iq-cart-text text-capitalize">
                      <p className="mb-0 font-size-14">
                        {t("dashboard.visitors")}
                      </p>
                    </div>
                    <div className="icon iq-icon-box-top rounded-circle bg-success">
                      <svg
                        className="text-white"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
                          stroke="currentColor"
                          strokeWidth="1.42857"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h4 className="mb-0">+2M</h4>
                    <p className="mb-0 text-success">
                      <span>
                        <i className="fa fa-caret-up me-2"></i>
                      </span>
                      80%
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card id="slider1">
            <Card.Header className="d-flex justify-content-between align-items-center top-rated-slider pb-0">
              <h4 className="card-title m-0">{t("dashboard.top-item")}</h4>
              <div className="d-flex" id="swiper">
                <div className="swiper-button swiper-button-prev me-2"></div>
                <div className="swiper-button swiper-button-next"></div>
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  320: { slidesPerView: 2 },
                  767: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1400: { slidesPerView: 4 },
                  1500: { slidesPerView: 4 }
                }}
                loop={true}
                className="pt-2 pt-md-4 pt-lg-4  list-inline p-0 m-0"
              >
                <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                  <div className="iq-card mb-0">
                    <Card.Body className="p-0">
                      <div className="iq-thumb">
                        <Link to="#">
                          <img
                            src={dash01}
                            className="img-fluid w-100 img-border-radius"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="iq-feature-list mt-3">
                        <h6 className="font-weight-600 mb-0">
                          {t("dashboard.The_Last_Breath")}
                        </h6>
                        <p className="mb-0 mt-2">{t("dashboard.Tv_Show")}</p>
                        <div className="d-flex align-items-center my-2 iq-ltr-direction">
                          <p className="mb-0 me-2">
                            <i className="fa-regular fa-eye me-1"></i>134
                          </p>
                          <p className="mb-0 ">
                            <i className="fa-solid fa-download ms-2 me-1"></i>30k
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                  <div className="iq-card mb-0">
                    <Card.Body className="p-0">
                      <div className="iq-thumb">
                        <Link to="#">
                          <img
                            src={dash02}
                            className="img-fluid w-100 img-border-radius"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="iq-feature-list mt-3">
                        <h6 className="font-weight-600 mb-0">
                          {t("dashboard.Last_Night")}
                        </h6>
                        <p className="mb-0 mt-2">{t("dashboard.movie")}</p>
                        <div className="d-flex align-items-center my-2 iq-ltr-direction">
                          <p className="mb-0 me-2">
                            <i className="fa-regular fa-eye me-1"></i>133
                          </p>
                          <p className="mb-0 ">
                            <i className="fa-solid fa-download ms-2 me-1"></i>20k
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                  <div className="iq-card mb-0">
                    <Card.Body className="p-0">
                      <div className="iq-thumb">
                        <Link to="#">
                          <img
                            src={dash03}
                            className="img-fluid w-100 img-border-radius"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="iq-feature-list mt-3">
                        <h6 className="font-weight-600 mb-0">
                          {t("dashboard.Jeon_Woochie")}
                        </h6>
                        <p className="mb-0 mt-2">{t("dashboard.movie")}</p>
                        <div className="d-flex align-items-center my-2 iq-ltr-direction">
                          <p className="mb-0 me-2">
                            <i className="fa-regular fa-eye me-1"></i>222
                          </p>
                          <p className="mb-0 ">
                            <i className="fa-solid fa-download ms-2 me-1"></i>40k
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                  <div className="iq-card mb-0">
                    <Card.Body className="p-0">
                      <div className="iq-thumb">
                        <Link to="#">
                          <img
                            src={dash04}
                            className="img-fluid w-100 img-border-radius"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="iq-feature-list mt-3">
                        <h6 className="font-weight-600 mb-0">
                          {t("dashboard.Dino_Land")}
                        </h6>
                        <p className="mb-0 mt-2">{t("dashboard.Tv_Show")}</p>
                        <div className="d-flex align-items-center my-2 iq-ltr-direction">
                          <p className="mb-0 me-2">
                            <i className="fa-regular fa-eye me-1"></i>122
                          </p>
                          <p className="mb-0 ">
                            <i className="fa-solid fa-download ms-2 me-1"></i>25k
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                  <div className="iq-card mb-0">
                    <Card.Body className="p-0">
                      <div className="iq-thumb">
                        <Link to="#">
                          <img
                            src={dash05}
                            className="img-fluid w-100 img-border-radius"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="iq-feature-list mt-3">
                        <h6 className="font-weight-600 mb-0">
                          {t("dashboard.Last_Race")}
                        </h6>
                        <p className="mb-0 mt-2">{t("dashboard.Tv_Show")}</p>
                        <div className="d-flex align-items-center my-2 iq-ltr-direction">
                          <p className="mb-0 me-2">
                            <i className="fa-regular fa-eye me-1"></i> 144
                          </p>
                          <p className="mb-0 ">
                            <i className="fa-solid fa-download ms-2 me-1"></i>{" "}
                            35 k
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                  <div className="iq-card mb-0">
                    <Card.Body className="p-0">
                      <div className="iq-thumb">
                        <Link to="#">
                          <img
                            src={dash06}
                            className="img-fluid w-100 img-border-radius"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="iq-feature-list mt-3">
                        <h6 className="font-weight-600 mb-0">
                          {t("dashboard.Open_Dead_Shot")}
                        </h6>
                        <p className="mb-0 mt-2">{t("dashboard.Tv_Show")}</p>
                        <div className="d-flex align-items-center my-2 iq-ltr-direction">
                          <p className="mb-0 me-2">
                            <i className="fa-regular fa-eye me-1"></i> 134
                          </p>
                          <p className="mb-0">
                            <i className="fa-solid fa-download ms-2"></i>30k</p>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-block card-stretch card-height">
            <div className="card-header">
              <div className="iq-header-title">
                <h4 className="card-title text-center">
                  {t("dashboard.product")}
                </h4>
              </div>
            </div>
            <Card.Body className="pb-0">
              <Chart
                id="view-chart-01"
                options={chart1.options}
                series={chart1.series}
                type="donut"
                width="250"
              />
              <Row className="mt-1">
                <Col sm="6" md="3" lg="6" className="iq-user-list">
                  <Card className="border-0">
                    <Card.Body className="bg-body p-3">
                      <div className="d-flex align-items-center">
                        <div className="iq-user-box bg-primary"></div>
                        <div className="media-body">
                          <p className="mb-0 font-size-14 line-height">
                            {t("dashboard.new")} <br />
                            {t("dashboard.customer")}
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="3" lg="6" className="iq-user-list">
                  <Card className="border-0">
                    <Card.Body className="bg-body p-3">
                      <div className="d-flex align-items-center">
                        <div className="iq-user-box bg-warning"></div>
                        <div className="media-body">
                          <p className="mb-0 font-size-14 line-height">
                            {t("dashboard.exsisting")} <br />
                            {t("dashboard.subscribers")}
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="3" lg="6" className="iq-user-list">
                  <Card className="border-0">
                    <Card.Body className="bg-body p-3">
                      <div className="d-flex align-items-center">
                        <div className="iq-user-box bg-info"></div>
                        <div className="media-body">
                          <p className="mb-0 font-size-14 line-height">
                            {t("dashboard.daily")} <br />
                            {t("dashboard.visitor")}
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6" md="3" lg="6" className="iq-user-list">
                  <Card className="border-0">
                    <Card.Body className="bg-body p-3">
                      <div className="d-flex align-items-center">
                        <div className="iq-user-box bg-danger"></div>
                        <div className="media-body">
                          <p className="mb-0 font-size-14 line-height">
                            {t("dashboard.extend")}
                            <br />
                            {t("dashboard.subs")}
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="4">
          <Card className="card-block card-stretch card-height">
            <Card.Header className="d-flex align-items-center justify-content-between">
              <Card.Header.Title>
                <h4 className="card-title">{t("dashboard.categories")}</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <Chart
                options={chart2.options}
                series={chart2.series}
                type="bar"
                height="230"
                className="iq-chart"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="8">
          <Card className="card-block card-stretch card-height">
            <Card.Header className="align-items-center">
              <Card.Header.Title>
                <h4 className="card-title">{t("dashboard.Top_Category")}</h4>
              </Card.Header.Title>
              <div className="card-header-toolbar d-flex align-items-center seasons">
                <div className="iq-custom-select d-inline-block sea-epi s-margin">
                  <select name="cars" className="form-control season-select">
                    {options1.map((item, index) => {
                      return (
                        <option value={item.value} key={index}>
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="row align-items-center">
              <Col lg="7">
                <Row className="list-unstyled mb-0 pb-0">
                  <Col sm="6" md="4" lg="6" className="mb-3">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-primary">
                      <span
                        className="bg-primary"
                        data-percent="100"
                        style={{
                          transition: "height 2s ease 0s",
                          width: "100%",
                          height: "40%",
                        }}
                      ></span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="iq-icon-box-view rounded me-3 text-primary">
                        <i className="fa-solid fa-film font-size-32"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="mb-0 font-size-14 line-height">
                          {t("dashboard.actions")}
                        </h6>
                        <small className="text-primary mb-0">+34%</small>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" md="4" lg="6" className="mb-3">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-secondary">
                      <span
                        className="bg-secondary"
                        data-percent="100"
                        style={{
                          transition: "height 2s ease 0s",
                          width: "100%",
                          height: "70%",
                        }}
                      ></span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="iq-icon-box-view rounded me-3 text-secondary">
                        <i className="fa-solid fa-masks-theater font-size-32"></i>
                      </div>
                      <div className="media-body">
                        <p className="mb-0 font-size-14 line-height">
                          {t("dashboard.comedy")}
                        </p>
                        <small className="text-secondary mb-0">+44%</small>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" md="4" lg="6" className="mb-3">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-info">
                      <span
                        className="bg-info"
                        data-percent="100"
                        style={{
                          transition: "height 2s ease 0s",
                          width: "100%",
                          height: "40%",
                        }}
                      ></span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="iq-icon-box-view rounded me-3 text-info">
                        <i className="fa-solid fa-skull-crossbones font-size-32"></i>
                      </div>
                      <div className="media-body">
                        <p className="mb-0 font-size-14 line-height">
                          {t("dashboard.horror")}
                        </p>
                        <small className="text-info mb-0">+56%</small>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" md="4" lg="6" className="mb-3">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-warning">
                      <span
                        className="bg-warning"
                        data-percent="100"
                        style={{
                          transition: "height 2s ease 0s",
                          width: "100%",
                          height: "40%",
                        }}
                      ></span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="iq-icon-box-view rounded me-3 text-warning">
                        <i className="fa-solid fa-masks-theater font-size-32"></i>
                      </div>
                      <div className="media-body">
                        <p className="mb-0 font-size-14 line-height">
                          {t("dashboard.drama")}
                        </p>
                        <small className="text-warning mb-0">+65%</small>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" md="4" lg="6" className="mb-lg-0 mb-3">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-success">
                      <span
                        className="bg-success"
                        data-percent="100"
                        style={{
                          transition: "height 2s ease 0s",
                          width: "100%",
                          height: "60%",
                        }}
                      ></span>
                    </div>
                    <div className="d-flex align-items-center mb-lg-0 mb-3">
                      <div className="iq-icon-box-view rounded me-3 text-success">
                        <i className="fa-solid fa-child font-size-32"></i>
                      </div>
                      <div className="media-body">
                        <p className="mb-0 font-size-14 line-height">
                          {t("dashboard.kids")}
                        </p>
                        <small className="text-success mb-0">+74%</small>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" md="4" lg="6" className="mb-lg-0 mb-3">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-danger">
                      <span
                        className="bg-danger"
                        data-percent="100"
                        style={{
                          transition: "height 2s ease 0s",
                          width: "100%",
                          height: "80%",
                        }}
                      ></span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="iq-icon-box-view rounded me-3 text-danger">
                        <i className="fa-solid fa-face-grin-beam-sweat font-size-32"></i>
                      </div>
                      <div className="media-body">
                        <p className="mb-0 font-size-14 line-height">
                          {t("dashboard.thrilled")}
                        </p>
                        <small className="text-danger mb-0">+40%</small>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="5">
                <Chart
                  id="view-chart-02"
                  options={chart3.options}
                  series={chart3.series}
                  type="donut"
                  height="210"
                  className="text-start"
                />
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between gap-2">
              <Card.Header.Title>
                <h4>{t("dashboard.Viewed_Items")}</h4>
              </Card.Header.Title>
              <div className="iq-card-header-toolbar d-flex align-items-center seasons">
                <div className="iq-custom-select d-inline-block sea-epi s-margin">
                  <select name="cars" className="form-control season-select">
                    {options2.map((item, index) => {
                      return (
                        <option value={item.value} key={index}>
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive table-view table-space">
                <table
                  id="datatable"
                  ref={tableRef}
                  className="data-tables table custom-table "
                  data-toggle="data-table"
                ></table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashbord;
