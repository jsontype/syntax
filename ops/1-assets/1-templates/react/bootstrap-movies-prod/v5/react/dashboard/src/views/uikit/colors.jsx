import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../../components/bootstrap/card";
import { Link } from "react-router-dom";

const Colors = () => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Streamit Color</h4>
              </div>
            </div>
            <Card.Body>
              <p>Similar to the contextual text color classes, easily set
                the background of an element to any contextual class.
                Anchor components will darken on hover, just like the text classes.
                Background utilities <strong>do not set <code>color</code></strong>,
                so in some cases you’ll want to use
                <code> .text-*</code> utilities.</p>
              <Row className="mt-4">
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-primary pt-5 pb-5 text-center rounded mb-2"></p>
                  <h6 className="mb-4 mb-lg-0">Primary</h6>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-secondary pt-5 pb-5 text-center rounded mb-2"></p>
                  <h6 className="mb-4 mb-lg-0">Secondary</h6>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-success pt-5 pb-5 text-center rounded mb-2"></p>
                  <h6 className="mb-4 mb-lg-0">Success</h6>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-danger pt-5 pb-5 text-center rounded mb-2"></p>
                  <h6 className="mb-4 mb-lg-0">Danger</h6>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-warning pt-5 pb-5 text-center rounded mb-2"></p>
                  <h6 className="mb-4 mb-lg-0">Warning</h6>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-info pt-5 pb-5 text-center rounded mb-2"></p>
                  <h6 className="mb-4 mb-lg-0">Info</h6>
                </div>
                <div className="col-lg-2 col-md-6 text-center mt-0 mt-lg-3">
                  <p className="bg-light pt-5 pb-5 text-center rounded mb-2"></p>
                  <h6 className="mb-4 mb-lg-0">Light</h6>
                </div>
                <div className="col-lg-2 col-md-6 text-center mt-0 mt-lg-3">
                  <p className="bg-dark pt-5 pb-5 text-center rounded mb-2"></p>
                  <h6 className="mb-4 mb-lg-0">Dark</h6>
                </div>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Streamit Color</h4>
              </div>
            </div>
            <Card.Body>
              <p>
                Similar to the contextual text color classes, easily set the
                background of an element to any contextual class. Anchor
                components will darken on hover, just like the text classes.
                Background utilities{" "}
                <strong>
                  do not set <code>color</code>
                </strong>
                , so in some cases you’ll want to use <code>.text-*</code>{" "}
                utilities.
              </p>
              <Row className="mt-4">
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-primary-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Primary
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-secondary-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Secondary
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-success-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Success
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-danger-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Danger
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-warning-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Warning
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 text-center">
                  <p className="bg-info-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Info
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 text-center mt-0 mt-lg-3">
                  <p className="bg-dark-subtle text-white pt-5 pb-5 text-center rounded font-size-18">
                    Dark
                  </p>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Streamit Text Color</h4>
              </div>
            </div>
            <Card.Body>
              <p>
                Contextual text classes also work well on anchors with the
                provided hover and focus states.{" "}
                <strong>
                  Note that the <code>.text-white</code> and{" "}
                  <code>.text-muted</code> class has no additional link styling
                  beyond underline.
                </strong>
              </p>
              <p className="text-primary">.text-primary</p>
              <p className="text-secondary">.text-secondary</p>
              <p className="text-gray">.text-gray</p>
              <p className="text-success">.text-success</p>
              <p className="text-danger">.text-danger</p>
              <p className="text-warning">.text-warning</p>
              <p className="text-bg-info">.text-bg-info</p>
              <p className="text-light bg-dark">.text-light</p>
              <p className="text-dark">.text-dark</p>
              <p className="text-muted">.text-muted</p>
              <p className="text-white bg-dark">.text-white</p>
              <p className="text-black-50">.text-black-50</p>
              <p className="text-white-50 bg-dark mb-0">.text-white-50</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Streamit Text Color</h4>
              </div>
            </div>
            <Card.Body>
              <p>
                Contextual text classes also work well on anchors with the
                provided hover and focus states.{" "}
                <strong>
                  Note that the <code>.text-white</code> and{" "}
                  <code>.text-muted</code> class has no additional link styling
                  beyond underline.
                </strong>
              </p>
              <p>
                <Link to="#" className="text-primary">
                  Primary link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-secondary">
                  Secondary link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-success">
                  Success link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-danger">
                  Danger link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-warning">
                  Warning link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-gray">
                  gray link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-bg-info">
                  bg-Info link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-light bg-dark">
                  Light link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-dark">
                  Dark link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-muted">
                  Muted link
                </Link>
              </p>
              <p className="mb-0">
                <Link to="#" className="text-white bg-dark">
                  White link
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Streamit Text Color</h4>
              </div>
            </div>
            <Card.Body>
              <p>
                Contextual text classes also work well on anchors with the
                provided hover and focus states.{" "}
                <strong>
                  Note that the <code>.text-white</code> and{" "}
                  <code>.text-muted</code> class has no additional link styling
                  beyond underline.
                </strong>
              </p>
              <p className="bg-primary-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Primary link
              </p>
              <p className="bg-secondary-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Secondary link
              </p>
              <p className="bg-success-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Success link
              </p>
              <p className="bg-danger-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Danger link
              </p>
              <p className="bg-warning-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Warning link
              </p>
              <p className="bg-info-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                bg-Info link
              </p>
              <p className="bg-dark-subtle ps-3 pe-3 pt-2 pb-2 rounded text-dark">
                Dark link
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Streamit Text Color</h4>
              </div>
            </div>
            <Card.Body>
              <p>
                Contextual text classes also work well on anchors with the
                provided hover and focus states.{" "}
                <strong>
                  Note that the <code>.text-white</code> and{" "}
                  <code>.text-muted</code> class has no additional link styling
                  beyond underline.
                </strong>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-primary-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Primary link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-secondary-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Secondary link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-success-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Success link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-danger-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Danger link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-warning-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Warning link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-info-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  bg-Info link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-dark-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block text-dark"
                >
                  Dark link
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Colors;
