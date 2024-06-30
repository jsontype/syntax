import { useEffect, memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Dropdown, Button, Card } from "react-bootstrap";

//apexcharts
import Chart from "react-apexcharts";

//component
import CustomToggle from "../../components/dropdowns";
import ChoicesJs from "../../components/choices";

//flatpickr
import Flatpickr from "react-flatpickr";

//router-dom
import { Link } from "react-router-dom";

// Redux Selector / Action
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";

//Image
import shap1 from "/assets/images/shapes/01.png";
import shap2 from "/assets/images/shapes/02.png";
import shap3 from "/assets/images/shapes/03.png";
import shap4 from "/assets/images/shapes/04.png";
import shap5 from "/assets/images/shapes/05.png";

//select
const options = [
  { value: "Past 30 Days", label: "Past 30 Days" },
  { value: "Past 60 Days", label: "Past 60 Days" },
  { value: "Past 90 Days", label: "Past 90 Days" },
  { value: "Past 1 year", label: "Past 1 year" },
  { value: "Past 2 year", label: "Past 2 year" },
];

const Index = memo((props) => {
  const { t } = useTranslation();
  useSelector(SettingSelector.theme_color);

  const getVariableColor = () => {
    let prefix =
      getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
    if (prefix) {
      prefix = prefix.trim();
    }
    const color1 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary`
    );
    const color2 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}secondary`
    );
    const color3 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary-tint-20`
    );
    const color4 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}warning`
    );
    const color5 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}tertiray`
    );
    return {
      primary: color1.trim(),
      secondary: color2.trim(),
      primary_light: color3.trim(),
      warning: color4.trim(),
      tertiray: color5.trim(),
    };
  };
  const variableColors = getVariableColor();
  const colors = [
    variableColors.primary,
    variableColors.secondary,
    variableColors.tertiray,
  ];
  useEffect(() => {
    return () => colors;
  });

  const chart2 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      forecastDataPoints: {
        count: 3,
      },
      markers: {
        size: 6,
        colors: "#FFFFFF",
        strokeColors: colors,
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 0,
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 72, 39, 21, 148],
      },
      {
        name: "Mobile",
        data: [20, 62, 70, 88, 67, 30, 100, 51, 98],
      },
      {
        name: "Tablet",
        data: [10, 82, 75, 68, 47, 90, 59, 101, 108],
      },
    ],
  };

  const chart3 = {
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: colors,
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: "55%",
          },
        },
        stroke: {
          colors: undefined,
          width: 30,
        },
      },
      labels: ["Themeforest: 15%", "Dribble: 40%", "Figma 45%"],
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 280,
          legend: {
            position: "right",
          },
        },
      ],
    },
    series: [15, 40, 45],
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 gap-3">
        <div className="d-flex flex-column">
          <h3>{t("financialdashboard.quick_insights")}</h3>
          <p className="text-primary mb-0">
            {t("financialdashboard.financial")}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center rounded flex-wrap gap-3">
          <div
            className="form-group mb-0 custom-choicejs"
            style={{ minWidth: "145px" }}
          >
            <ChoicesJs options={options} className="js-choice" select="one" />
          </div>
          <div className="form-group mb-0 ">
            <Flatpickr
              options={{ mode: "range", minDate: "today" }}
              className="form-control range_flatpicker"
              placeholder="24 Jan 2022 to 23 Feb 2022"
            />
          </div>
          <Button type="button" className="primary">
            {t("financialdashboard.analytics")}
          </Button>
        </div>
      </div>
      <Row>
        <Col lg="8" xl="8">
          <Card className="card-block card-stretch card-height">
            <Card.Header>
              <div className="flex-wrap  d-flex justify-content-between">
                <div className="header-title">
                  <h4>{t("financialdashboard.sales_stastics")}</h4>
                </div>
                <div className="d-flex">
                  <div className="me-3">
                    <p className="mb-0">
                      <svg
                        className="text-primary"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="currentColor" />
                      </svg>{" "}
                      {t("financialdashboard.total_sales")}{" "}
                    </p>
                  </div>
                  <div className="me-3">
                    <p className="mb-0">
                      <svg
                        className="text-secondary"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="currentColor" />
                      </svg>{" "}
                      {t("financialdashboard.total_expense")}
                    </p>
                  </div>
                  <div className="">
                    <p className="mb-0">
                      <svg
                        className="text-tertiray"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="currentColor" />
                      </svg>{" "}
                      {t("financialdashboard.total_profit")}
                    </p>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Chart
                options={chart2.options}
                series={chart2.series}
                type="line"
                height="100%"
                className="sales-chart-02"
              ></Chart>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" xl="4">
          <Card className="card-block card-stretch card-height">
            <Card.Header>
              <div className="header-title">
                <h4 className=" card-title">{t("financialdashboard.date")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="course-picker">
                <Flatpickr
                  className="d-none w-100"
                  options={{ inline: true, minDate: "today" }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" xl="4">
          <Card className="card card-block card-stretch card-height">
            <Card.Body>
              <div className="mb-5">
                <div className="mb-2 d-flex justify-content-between align-items-center">
                  <span className="text-dark">
                    {t("financialdashboard.last_transaction")}
                  </span>
                  <Link className="badge rounded-pill bg-soft-primary" to="#">
                    {t("financialdashboard.view_report")}
                  </Link>
                </div>
                <div className="">
                  <h2
                    className="counter mb-2"
                    style={{ visibility: "visible" }}
                  >
                    $46,996
                  </h2>
                  <p>{t("financialdashboard.this_month")}</p>
                </div>
              </div>

              <div className="d-flex gap flex-column">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-soft-primary avatar-60 rounded">
                    <svg
                      className="icon-35"
                      width="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="18"
                        cy="11.8999"
                        r="1"
                        fill="currentColor"
                      ></circle>
                    </svg>
                  </div>
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-2">
                        {t("financialdashboard.balance")}
                      </h6>
                      <h6 className="text-body">$2,386</h6>
                    </div>
                    <div
                      className="progress bg-soft-primary shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-primary"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="23"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "23%",
                          transition: "width 2s ease 0s",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-soft-info avatar-60 rounded">
                    <svg
                      className="icon-35"
                      width="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M6.447 22C3.996 22 2 19.9698 2 17.4755V12.5144C2 10.0252 3.99 8 6.437 8L17.553 8C20.005 8 22 10.0302 22 12.5256V17.4846C22 19.9748 20.01 22 17.563 22H16.623H6.447Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11.455 2.22103L8.54604 5.06682C8.24604 5.36094 8.24604 5.83427 8.54804 6.12742C8.85004 6.41959 9.33704 6.41862 9.63704 6.12547L11.23 4.56623V6.06119V14.4515C11.23 14.8654 11.575 15.2014 12 15.2014C12.426 15.2014 12.77 14.8654 12.77 14.4515V4.56623L14.363 6.12547C14.663 6.41862 15.15 6.41959 15.452 6.12742C15.603 5.98036 15.679 5.78849 15.679 5.59566C15.679 5.40477 15.603 5.21291 15.454 5.06682L12.546 2.22103C12.401 2.07981 12.205 1.99995 12 1.99995C11.796 1.99995 11.6 2.07981 11.455 2.22103Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-2">
                        {t("financialdashboard.transfer")}
                      </h6>
                      <h6 className="text-body">$4,765</h6>
                    </div>
                    <div
                      className="progress bg-soft-info shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-info"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "40%",
                          transition: "width 2s ease 0s",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-soft-success avatar-60 rounded">
                    <svg
                      className="icon-35"
                      width="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between  ">
                      <h6 className="mb-2">
                        {t("financialdashboard.recived")}
                      </h6>
                      <h6 className="text-body">$8,224</h6>
                    </div>
                    <div
                      className="progress bg-soft-success shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-success"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="82"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "82%",
                          transition: "width 2s ease 0s",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-soft-danger avatar-60 rounded">
                    <svg
                      className="icon-35"
                      width="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="18"
                        cy="11.8999"
                        r="1"
                        fill="currentColor"
                      ></circle>
                    </svg>
                  </div>
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between  ">
                      <h6 className="mb-2">
                        {t("financialdashboard.outstanding")}
                      </h6>
                      <h6 className="text-body">$1,224</h6>
                    </div>
                    <div
                      className="progress bg-soft-danger shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-danger"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "15%",
                          transition: "width 2s ease 0s",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="8" xl="8">
          <Card className="card-block card-stretch card-height">
            <div className="flex-wrap card-header d-flex justify-content-between">
              <div className="header-title">
                <h4>{t("financialdashboard.sales_order")}</h4>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  to="#"
                  variant="text-gray dropdown-toggle"
                  size="sm"
                  id="dropdownMenuButton22"
                >
                  {t("financialdashboard.this_year")}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item to="#">
                    {t("financialdashboard.this_year")}
                  </Dropdown.Item>
                  <Dropdown.Item to="#">
                    {t("dashboard.This_Month")}
                  </Dropdown.Item>
                  <Dropdown.Item to="#">
                    {t("financialdashboard.this_week")}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Card.Body className="">
              <div className=" table-responsive border rounded">
                <table
                  id="basic-table"
                  className="table mb-0 table-striped"
                  role="grid"
                >
                  <thead>
                    <tr>
                      <th>{t("financialdashboard.companies")}</th>
                      <th>{t("financialdashboard.contacts")}</th>
                      <th>{t("financialdashboard.order")}</th>
                      <th>{t("financialdashboard.completion")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={shap1}
                            alt=""
                            className="rounded bg-soft-primary img-fluid avatar-40 me-3"
                            loading="lazy"
                          />
                          <h6>{t("financialdashboard.addidis_sportwear")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              MM
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$14,000</td>
                      <td>
                        <div className="mb-2 d-flex align-items-center">
                          <h6>60%</h6>
                        </div>
                        <div
                          className="shadow-none progress bg-soft-primary w-100"
                          style={{ height: "4px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "60%",
                              transition: "width 2s ease 0s",
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={shap5}
                            alt=""
                            className="rounded bg-soft-primary img-fluid avatar-40 me-3"
                            loading="lazy"
                          />
                          <h6>{t("financialdashboard.netflixer_platforms")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$30,000</td>
                      <td>
                        <div className="mb-2 d-flex align-items-center">
                          <h6>25%</h6>
                        </div>
                        <div
                          className="shadow-none progress bg-soft-primary w-100"
                          style={{ height: "4px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "25%",
                              transition: "width 2s ease 0s",
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={shap2}
                            alt=""
                            className="rounded bg-soft-primary img-fluid avatar-40 me-3"
                            loading="lazy"
                          />
                          <h6>{t("financialdashboard.shopifi_stores")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              TP
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$8,500</td>
                      <td>
                        <div className="mb-2 d-flex align-items-center">
                          <h6>100%</h6>
                        </div>
                        <div
                          className="shadow-none progress bg-soft-success w-100"
                          style={{ height: "4px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "100%",
                              transition: "width 2s ease 0s",
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={shap3}
                            alt=""
                            className="rounded bg-soft-primary img-fluid avatar-40 me-3"
                            loading="lazy"
                          />
                          <h6>
                            {t("financialdashboard.bootstrap_technologies")}
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              MM
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              TP
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$20,500</td>
                      <td>
                        <div className="mb-2 d-flex align-items-center">
                          <h6>100%</h6>
                        </div>
                        <div
                          className="shadow-none progress bg-soft-success w-100"
                          style={{ height: "4px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "100%",
                              transition: "width 2s ease 0s",
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={shap4}
                            alt=""
                            className="rounded bg-soft-primary img-fluid avatar-40 me-3"
                            loading="lazy"
                          />
                          <h6>{t("financialdashboard.community_first")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              MM
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$9,800</td>
                      <td>
                        <div className="mb-2 d-flex align-items-center">
                          <h6>75%</h6>
                        </div>
                        <div
                          className="shadow-none progress bg-soft-primary w-100"
                          style={{ height: "4px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "75%",
                              transition: "width 2s ease 0s",
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12">
          <Card className=" card-block card-stretch card-height">
            <Card.Header>
              <div className="flex-wrap d-flex justify-content-between">
                <div className="header-title">
                  <h4>{t("financialdashboard.sales_anylsis")}</h4>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    variant="text-gray dropdown-toggle"
                    size="sm"
                    id="dropdownMenuButton29"
                  >
                    {t("financialdashboard.this_year")}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_month")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_week")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body>
              <Chart
                options={chart3.options}
                series={chart3.series}
                type="donut"
                width="100%"
                height="450px"
                className="sales-chart-04"
              ></Chart>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12">
          <Card className="card-block card-stretch card-height">
            <Card.Header>
              <div className="flex-wrap  d-flex justify-content-between">
                <div className="header-title">
                  <h4>{t("financialdashboard.to_do")}</h4>
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    variant="text-gray dropdown-toggle"
                    size="sm"
                    id="dropdownMenuButton24"
                  >
                    {t("financialdashboard.this_year")}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between  mb-3">
                <div className="w-100">
                  <h6>Streamit</h6>
                  <div className="d-flex align-items-center">
                    <div
                      className="progress bg-soft-success shadow-none w-50"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-success"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                    <small className="ms-2">80% completed</small>
                  </div>
                  <small>Due in 3 Days</small>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton25"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex justify-content-between  mb-3">
                <div className="w-100">
                  <h6>Fashion Theme</h6>
                  <div className="d-flex align-items-center">
                    <div
                      className="progress bg-soft-danger shadow-none w-50"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-danger"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="18"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "18%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                    <small className="ms-2">15% completed</small>
                  </div>
                  <small>Due in 4 Days</small>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton61"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex justify-content-between  mb-3">
                <div className="w-100">
                  <h6>Sidebar Patterns</h6>
                  <div className="d-flex align-items-center">
                    <div
                      className="progress bg-soft-primary shadow-none w-50"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-primary"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="18"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "18%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                    <small className="ms-2">50% completed</small>
                  </div>
                  <small>Due in 2 Days</small>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton62"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex justify-content-between  mb-3">
                <div className="w-100">
                  <h6>Menu Bar Update</h6>
                  <div className="d-flex align-items-center">
                    <div
                      className="progress bg-soft-gray shadow-none w-50"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-secondary"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "35%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                    <small className="ms-2">35% completed</small>
                  </div>
                  <small>Due in 5 Days</small>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton63"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex justify-content-between">
                <div className="w-100">
                  <h6>Aprycot Theme</h6>
                  <div className="d-flex align-items-center">
                    <div
                      className="progress bg-soft-success shadow-none w-50"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-success"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "100%",
                          transition: "width 2s ease 0s",
                        }}
                      ></div>
                    </div>
                    <small className="ms-2">100% completed</small>
                  </div>
                  <small>Due in 1 Days</small>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton64"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                    <Dropdown.Item to="#">
                      {t("financialdashboard.this_year")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="12" sm="12">
          <Card className="card-block card-stretch card-height">
            <Card.Header>
              <div className="header-title">
                <h4>Actvity overview</h4>
                <p className="mb-0 text-success">
                  <svg
                    className="me-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#17904b"
                      d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
                    />
                  </svg>
                  16% {t("financialdashboard.this_year")}
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex align-items-top">
                <h6 className="mb-0 text-left">07:45</h6>
                <div className="profile-media ms-3 d-flex">
                  <div className="profile-dots-pills border-success"></div>
                  <div className="ms-3">
                    <h6 className="mb-0">$2400, Purchased a Wordpress Theme</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-top">
                <h6 className="mb-0 text-left">08:50</h6>
                <div className="profile-media ms-3 d-flex">
                  <div className="profile-dots-pills border-warning"></div>
                  <div className="ms-3">
                    <h6 className="mb-0">
                      New order placed #8744152 of 3D Icons
                    </h6>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-top">
                <h6 className="mb-0 text-left">10:00</h6>
                <div className="profile-media ms-3 d-flex">
                  <div className="profile-dots-pills border-info"></div>
                  <div className="ms-3">
                    <h6 className="mb-0">Affilate Payout</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-top">
                <h6 className="mb-0 text-left">13:15</h6>
                <div className="profile-media ms-3 d-flex">
                  <div className="profile-dots-pills border-warning"></div>
                  <div className="ms-3">
                    <h6 className="mb-0">New user added in Streamit</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-top">
                <h6 className="mb-0 text-left">15:30</h6>
                <div className="profile-media ms-3 d-flex">
                  <div className="profile-dots-pills border-success"></div>
                  <div className="ms-3">
                    <h6 className="mb-0">Product added in wish List</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-top">
                <h6 className="mb-0 text-left">18:40</h6>
                <div className="profile-media ms-3 d-flex">
                  <div className="profile-dots-pills border-warning"></div>
                  <div className="ms-3">
                    <h6 className="mb-0">
                      New order Placed{" "}
                      <span className="text-primary">#87444892</span> of
                      Dashboard
                    </h6>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Index.displayName = "Index";
export default Index;
