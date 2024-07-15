import { memo, Fragment } from "react";

//React-Bootstrap
import { Row, Col, Card,Container } from "react-bootstrap";

// Recact-router-dom
import { Link } from "react-router-dom";
// components

const ButtonGroups = memo(() => {
  return (
    <Fragment>
        <Row>
        <Col lg="4" md="6" sm="6">
          <Card className="card-block card-stretch card-height blog ui-button-group">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Flat Button</h4>
              </div>
            </div>
            <Card.Body>
              <ul className="list-inline p-0 m-0 text-center">
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-flat btn-group-medium">
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-flat btn-group-medium">
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="btn-group btn-group-toggle btn-group-flat btn-group-medium">
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="6">
          <Card className="card-block card-stretch card-height blog ui-button-group">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Edges Button</h4>
              </div>
            </div>
            <Card.Body>
              <ul className="list-inline p-0 m-0 text-center">
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-edges btn-group-medium">
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-edges btn-group-medium">
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="btn-group btn-group-toggle btn-group-edges btn-group-medium">
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="6">
          <Card className="card-block card-stretch card-height blog ui-button-group">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic Buttons</h4>
              </div>
            </div>
            <Card.Body>
              <ul className="list-inline p-0 m-0 text-center">
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="6">
          <Card className="card-block card-stretch card-height blog ui-button-group">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Outline Middle Buttons</h4>
              </div>
            </div>
            <Card.Body>
              <ul className="list-inline p-0 m-0 text-center">
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-outline-primary"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-primary"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-outline-success"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-success"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-outline-warning"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-warning"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="6">
          <Card className="card-block card-stretch card-height blog ui-button-group">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Outline Side Buttons</h4>
              </div>
            </div>
            <Card.Body>
              <ul className="list-inline p-0 m-0 text-center">
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-primary"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-success"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-warning"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="6">
          <Card className="card-block card-stretch card-height blog ui-button-group">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Outline Buttons</h4>
              </div>
            </div>
            <Card.Body>
              <ul className="list-inline p-0 m-0 text-center">
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-outline-primary"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-primary"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-primary"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-outline-success"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-success"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-success"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="btn-group btn-group-toggle btn-group-medium">
                    <Link
                      className="button btn button-icon btn-outline-warning"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-warning"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-outline-warning"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="6" sm="6">
          <Card className="card-block card-stretch card-height blog ui-button-group">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Toolbar Buttons</h4>
              </div>
            </div>
            <Card.Body>
              <ul className="list-inline p-0 m-0 text-center">
                <li className="d-flex flex-wrap align-items-center justify-content-center mb-2">
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group-edges me-2 btn-group1">
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      1
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      2
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      3
                    </Link>
                  </div>
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group-edges me-2 btn-group2">
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      4
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      5
                    </Link>
                  </div>
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group3">
                    <Link
                      className="button btn button-icon btn-primary rounded"
                      target="_blank"
                      to="#"
                    >
                      6
                    </Link>
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center justify-content-center mb-2">
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group-edges me-2 btn-group1">
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      1
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      2
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      3
                    </Link>
                  </div>
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group-edges me-2 btn-group2">
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      4
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      5
                    </Link>
                  </div>
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group3">
                    <Link
                      className="button btn button-icon btn-success rounded"
                      target="_blank"
                      to="#"
                    >
                      6
                    </Link>
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center justify-content-center">
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group-edges me-2 btn-group1">
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      1
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      2
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      3
                    </Link>
                  </div>
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group-edges me-2 btn-group2">
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      4
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      5
                    </Link>
                  </div>
                  <div className="btn-group mt-2 btn-group-toggle btn-group-medium btn-group3">
                    <Link
                      className="button btn button-icon btn-warning rounded"
                      target="_blank"
                      to="#"
                    >
                      6
                    </Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="6" sm="6">
          <Card className="card-block card-stretch card-height blog ui-button-group">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic Buttons</h4>
              </div>
            </div>
            <Card.Body>
              <ul className="list-inline p-0 m-0 text-center">
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-sm  btn-group-edges">
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-primary"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="btn-group btn-group-toggle btn-group-medium btn-group-edges">
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-success"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="btn-group btn-group-toggle btn-group-lg  btn-group-edges">
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Left
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Middle
                    </Link>
                    <Link
                      className="button btn button-icon btn-warning"
                      target="_blank"
                      to="#"
                    >
                      Right
                    </Link>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" md="6" sm="6">
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Group Vertical</h4>
              </div>
            </div>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div
                className="btn-group-vertical"
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio1"
                  defaultChecked
                />
                <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
                  Radio 1
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio2"
                />
                <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
                  Radio 2
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio3"
                />
                <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
                  Radio 3
                </label>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" md="6" sm="6">
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Checkbox and radio button groups</h4>
              </div>
            </div>
            <div className="card-body">
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div
                className="btn-group checkboxradio"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input type="checkbox" className="btn-check" id="btncheck1" />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  Checkbox 1
                </label>

                <input type="checkbox" className="btn-check" id="btncheck2" />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">
                  Checkbox 2
                </label>

                <input type="checkbox" className="btn-check" id="btncheck3" />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">
                  Checkbox 3
                </label>
              </div>{" "}
              <div
                className="btn-group mt-1 mt-xl-0  checkboxradio"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  defaultChecked
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Radio 1
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  Radio 2
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Radio 3
                </label>
              </div>
            </div>
          </Card>
        </Col>
        </Row>
    </Fragment>
  );
});

ButtonGroups.displayName = "ButtonGroups";
export default ButtonGroups;
