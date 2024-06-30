import { memo, Fragment, useState } from "react";

// react-bootstrap
import {
  Button,
  ButtonGroup,
  CardBody,
  Col,
  Dropdown,
  Row,
  ToggleButton,
  Container
} from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";
// components
import Card from "../../components/bootstrap/card";
import CustomToggle from "../../components/dropdowns";

const Buttons = memo(() => {
  const [radioValue, setRadioValue] = useState("1");
  const [radioValue1, setRadioValue1] = useState("1");

  const radios = [
    { name: "Radio 1", value: "1" },
    { name: "Radio 2", value: "2" },
    { name: "Radio 3", value: "3" },
  ];
  const radios1 = [
    { name: "Radio 1", value: "1" },
    { name: "Radio 2", value: "2" },
    { name: "Radio 3", value: "3" },
  ];
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="btn-primary mt-2">
                Primary
              </Button>{" "}
              <Button variant="secondary" className="btn-secondary mt-2 ">
                Secondary
              </Button>{" "}
              <Button variant="success" className="btn-secondary mt-2">
                Success
              </Button>{" "}
              <Button variant="danger" className="btn-secondary mt-2 ">
                Danger
              </Button>{" "}
              <Button variant="warning" className="btn-secondary mt-2 ">
                Warning
              </Button>{" "}
              <Button variant="info" className="btn-secondary mt-2 ">
                Info
              </Button>{" "}
              <Button variant="light" className="btn-secondary mt-2 ">
                Light
              </Button>{" "}
              <Button variant="dark" className="btn-secondary mt-2">
                Dark
              </Button>{" "}
              <Button variant="link" className="btn-link mt-2">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons Rounded Shape</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="rounded-pill mt-2">
                Primary
              </Button>{" "}
              <Button variant="secondary" className="rounded-pill mt-2">
                Secondary
              </Button>{" "}
              <Button variant="success" className="rounded-pill mt-2">
                Success
              </Button>{" "}
              <Button variant="danger" className="rounded-pill mt-2">
                Danger
              </Button>{" "}
              <Button variant="warning" className="rounded-pill mt-2">
                Warning
              </Button>{" "}
              <Button variant="info" className="rounded-pill mt-2">
                Info
              </Button>{" "}
              <Button variant="light" className="rounded-pill mt-2">
                Light
              </Button>{" "}
              <Button variant="dark" className="rounded-pill mt-2">
                Dark
              </Button>{" "}
              <Button variant="link" className="rounded-pill mt-2">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="outline-primary" className="mt-2">
                Primary
              </Button>{" "}
              <Button variant="outline-secondary" className="mt-2">
                Secondary
              </Button>{" "}
              <Button variant="outline-success" className="mt-2">
                Success
              </Button>{" "}
              <Button variant="outline-danger" className="mt-2">
                Danger
              </Button>{" "}
              <Button variant="outline-warning" className="mt-2">
                Warning
              </Button>{" "}
              <Button variant="outline-info" className="mt-2">
                Info
              </Button>{" "}
              <Button variant="outline-dark" className="mt-2 text-dark">
                Dark
              </Button>{" "}
              <Button variant="outline-link" className="mt-2">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Rounded Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="outline-primary" className="rounded-pill mt-2">
                Primary
              </Button>{" "}
              <Button variant="outline-secondary" className="rounded-pill mt-2">
                Secondary
              </Button>{" "}
              <Button variant="outline-success" className="rounded-pill mt-2">
                Success
              </Button>{" "}
              <Button variant="outline-danger" className="rounded-pill mt-2">
                Danger
              </Button>{" "}
              <Button variant="outline-warning" className="rounded-pill mt-2">
                Warning
              </Button>{" "}
              <Button variant="outline-info" className="rounded-pill mt-2">
                Info
              </Button>{" "}
              <Button variant="outline-dark" className="rounded-pill mt-2 text-dark">
                Dark
              </Button>{" "}
              <Button variant="outline-link" className="rounded-pill mt-2">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Soft Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary-subtle" className="mb-1">
                Primary
              </Button>{" "}
              <Button variant="secondary-subtle" className="mb-1">
                Secondary
              </Button>{" "}
              <Button variant="success-subtle" className="mb-1">
                Success
              </Button>{" "}
              <Button variant="danger-subtle" className="mb-1">
                Danger
              </Button>{" "}
              <Button variant="warning-subtle" className="mb-1">Warning</Button>{" "}
              <Button variant="info-subtle" className="mb-1">Info</Button>{" "}
              <Button variant="dark-subtle" className="mb-1 text-dark">Dark</Button>{" "}
              <Button variant="link-subtle" >Link</Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Rounded Soft Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary-subtle" className="rounded-pill mb-1">
                Primary
              </Button>{" "}
              <Button variant="secondary-subtle" className="rounded-pill mb-1">
                Secondary
              </Button>{" "}
              <Button variant="success-subtle" className="rounded-pill mb-1">
                Success
              </Button>{" "}
              <Button variant="danger-subtle" className="rounded-pill mb-1">
                Danger
              </Button>{" "}
              <Button variant="warning-subtle" className="rounded-pill mb-1">
                Warning
              </Button>{" "}
              <Button variant="info-subtle" className="rounded-pill mb-1">
                Info
              </Button>{" "}
              <Button variant="dark-subtle" className="rounded-pill mb-1 text-dark">
                Dark
              </Button>{" "}
              <Button variant="link-subtle" className="rounded-pill mb-1">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              {/* <i className="material-symbols-outlined me-1">favorite</i> */}
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="btn mt-2">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Primary
              </Button>{" "}
              <Button variant="secondary" className="btn mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Secondary
              </Button>{" "}
              <Button variant="success" className="btn mt-2">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Success
              </Button>{" "}
              <Button variant="danger" className="btn mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Danger
              </Button>{" "}
              <Button variant="warning" className="btn mt-2">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Warning
              </Button>{" "}
              <Button
                variant="info"
                className="btn mt-2"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Info
              </Button>{" "}
              <Button variant="light" className="btn mt-2">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Light
              </Button>{" "}
              <Button variant="dark" className="btn mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Dark
              </Button>{" "}
              <Button variant="link" className="btn mt-2">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons Rounded Shape</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button
                variant="primary"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Primary
              </Button>{" "}
              <Button
                variant="secondary"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Secondary
              </Button>{" "}
              <Button
                variant="success"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Success
              </Button>{" "}
              <Button
                variant="danger"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Danger
              </Button>{" "}
              <Button
                variant="warning"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Warning
              </Button>{" "}
              <Button
                variant="info"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Info
              </Button>{" "}
              <Button
                variant="light"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Light
              </Button>{" "}
              <Button
                variant="dark"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Dark
              </Button>{" "}
              <Button
                variant="link"
                className="rounded-pill btn mt-2"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="outline-primary" className="mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-heart-line"></i>Primary
              </Button>{" "}
              <Button variant="outline-secondary" className="mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0024 10.4147V7.3147"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.995 13.5H11.005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-alert-line"></i>Secondary
              </Button>{" "}
              <Button variant="outline-success" className="mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-heart-line"></i>Success
              </Button>{" "}
              <Button variant="outline-danger" className="mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0024 10.4147V7.3147"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.995 13.5H11.005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-outline-danger"></i>Danger
              </Button>{" "}
              <Button variant="outline-warning" className="mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-heart-line"></i>Warning
              </Button>{" "}
              <Button variant="outline-info" className="mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0024 10.4147V7.3147"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.995 13.5H11.005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-alert-line"></i>Info
              </Button>{" "}
              <Button variant="outline-dark" className="mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0024 10.4147V7.3147"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.995 13.5H11.005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-alert-line"></i>Dark
              </Button>{" "}
              <Button variant="outline-link" className="mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-heart-line"></i>Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Rounded Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="outline-primary" className="rounded-pill mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-heart-line"></i>Primary
              </Button>{" "}
              <Button variant="outline-secondary" className="rounded-pill mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0024 10.4147V7.3147"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.995 13.5H11.005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-alert-line"></i>Secondary
              </Button>{" "}
              <Button variant="outline-success" className="rounded-pill mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-heart-line"></i>Success
              </Button>{" "}
              <Button variant="outline-danger" className="rounded-pill mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0024 10.4147V7.3147"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.995 13.5H11.005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-alert-line"></i>Danger
              </Button>{" "}
              <Button variant="outline-warning" className="rounded-pill mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-heart-line"></i>Warning
              </Button>{" "}
              <Button variant="outline-info" className="rounded-pill mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0024 10.4147V7.3147"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.995 13.5H11.005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-alert-line"></i>Info
              </Button>{" "}
              <Button variant="outline-dark" className="rounded-pill mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.0024 10.4147V7.3147"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.995 13.5H11.005"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <i className="ri-alert-line"></i>Dark
              </Button>{" "}
              <Button variant="outline-link" className="rounded-pill mt-2">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Tags</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Link className="btn btn-primary mt-2" to="#" role="button">
                Link
              </Link>{" "}
              <Button variant="success" className="mt-2" type="submit">
                Button
              </Button>{" "}
              <input
                className="btn btn-danger mt-2"
                type="button"
                value="Input"
              />{" "}
              <input
                className="btn btn-warning mt-2"
                type="submit"
                value="Submit"
              />{" "}
              <input className="btn btn-info mt-2" type="reset" value="Reset" />{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Buttons Sizes</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" size="sm" className="me-2 mt-2">
                Small Button
              </Button>{" "}
              <Button variant="success" className="me-2 mt-2">
                Button
              </Button>{" "}
              <Button variant="info" size="lg" className="me-2 mt-2">
                Large Button
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Block Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body className="d-grid gap-2">
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary">
                Block level button
              </Button>{" "}
              <Button variant="success">
                Block level button
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Icons Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                </svg>
              </Button>{" "}
              <Button variant="secondary" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
              </Button>{" "}
              <Button variant="success" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </Button>{" "}
              <Button variant="danger" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-video"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
                  <rect x="3" y="6" width="12" height="12" rx="2"></rect>
                </svg>
              </Button>{" "}
              <Button variant="warning" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="4" y1="7" x2="20" y2="7"></line>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              </Button>{" "}
              <Button variant="info" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                  <circle cx="12" cy="16" r="1"></circle>
                  <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
                </svg>
              </Button>{" "}
              <Button variant="light" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <polyline points="12 7 12 12 15 15"></polyline>
                </svg>
              </Button>{" "}
              <Button variant="dark" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                </svg>
              </Button>{" "}
              {/* <Button variant="link" className="d-inline-flex mb-1">
                <i className="material-symbols-outlined me-0">album</i>
              </Button>{" "} */}
              <div className="d-inline-block w-100">
                <Button variant="primary" className="mt-2">
                  <svg
                    width="16"
                    height="15"
                    className="me-2"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Buttons
                </Button>{" "}
                <Button variant="secondary" className="mt-2">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                  Buttons
                </Button>{" "}
                <Button variant="success" className="mt-2">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Buttons
                </Button>{" "}
                <Button variant="danger" className="mt-2">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
                    <rect x="3" y="6" width="16" height="15" rx="2"></rect>
                  </svg>
                  Buttons
                </Button>{" "}
                <Button variant="info" className="mt-2">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                  </svg>
                  Buttons
                </Button>{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Social Disabled State</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="mt-2" disabled>
                Primary button
              </Button>{" "}
              <Button variant="success" className="mt-2" disabled>
                Button
              </Button>{" "}
              <Button variant="outline-primary" className="mt-2" disabled>
                Button
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Buttons Toggle States</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" >
                Single toggle
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons Active</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="active mt-2">
                Active
              </Button>{" "}
              <Button variant="secondary" className="active mt-2">
                Active
              </Button>{" "}
              <Button variant="warning" className="active mt-2">
                Active
              </Button>{" "}
              <Button variant="accent" className="mt-2" disabled>
                Disabled
              </Button>{" "}
              <Button variant="primary" className="mt-2" disabled>
                Disabled
              </Button>{" "}
              <Button variant="outline-primary" className="mt-2" disabled>
                Disabled
              </Button>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Group Sizing</h4>
              </div>
            </Card.Header>
            <CardBody className="ui-button-group">
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div className="d-block">
                <div
                  className="btn-group btn-group-lg"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button type="button" className="btn btn-primary mt-2">
                    Left
                  </Button>
                  <Button type="button" className="btn btn-primary mt-2">
                    Middle
                  </Button>
                  <Button type="button" className="btn btn-primary mt-2">
                    Right
                  </Button>
                </div>
              </div>
              <div className="d-block">
                <div
                  className="btn-group mt-2 btn-group-medium"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button type="button" className="btn btn-primary">
                    Left
                  </Button>
                  <Button type="button" className="btn btn-primary">
                    Middle
                  </Button>
                  <Button type="button" className="btn btn-primary">
                    Right
                  </Button>
                </div>
              </div>
              <div className="d-block">
                <div
                  className="btn-group btn-group-sm mt-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button type="button" className="btn btn-primary">
                    Left
                  </Button>
                  <Button type="button" className="btn btn-primary">
                    Middle
                  </Button>
                  <Button type="button" className="btn btn-primary">
                    Right
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Group</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div
                className="btn-group btn-group-medium"
                role="group"
                aria-label="Basic example"
              >
                <Button type="button">Left</Button>
                <Button type="button">Middle</Button>
                <Button type="button">Right</Button>
              </div>
              <div
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group mt-2 me-2"
                  role="group"
                  aria-label="First group"
                >
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                </div>
                <div
                  className="btn-group mt-2 me-2"
                  role="group"
                  aria-label="Second group"
                >
                  <Button variant="secondary">5</Button>
                  <Button variant="secondary">6</Button>
                  <Button variant="secondary">7</Button>
                </div>
                <div
                  className="btn-group mt-2 me-2"
                  role="group"
                  aria-label="Third group"
                >
                  <Button variant="info">8</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Dropdown</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div
                className="btn-group btn-group-medium"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <Button variant="primary">1</Button>
                <Button variant="primary">2</Button>
                <div className="btn-group" role="group">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      <Button
                        variant="primary gap-1"
                        id="btnGroupDrop1"
                        type="button"
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </Button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Dropdown link</Dropdown.Item>
                      <Dropdown.Item>Dropdown link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="d-block mt-2">
                <div
                  className="btn-group-vertical "
                  role="group"
                  aria-label="Vertical button group"
                >
                  <div
                    className="btn-group-vertical"
                    role="group"
                    aria-label="Button group with nested dropdown"
                  >
                    <Button type="button" className="btn-primary">
                      1
                    </Button>
                    <Button type="button" className="btn-primary">
                      2
                    </Button>
                    <div className="btn-group" role="group">
                      <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                          <Button
                            variant="primary gap-1"
                            id="btnGroupDrop1"
                            type="button"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </Button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Dropdown link</Dropdown.Item>
                          <Dropdown.Item>Dropdown link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
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

Buttons.displayName = "Buttons";
export default Buttons;
