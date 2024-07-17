import React, { Fragment } from "react";
import { Row, Col, Card, Toast, Button } from "react-bootstrap";

const Notifications = () => {
  return (
    <Fragment>
      <Row>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Notifications</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
              <Toast
                className="fade show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <Toast.Header closeButton={false}>
                  <svg
                    className="bd-placeholder-img rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#e50914"></rect>
                  </svg>
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <Button className="ms-2 mb-1 btn-close" variant=" " bsPrefix=" "></Button>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Stacking </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                When you have multiple toasts, we default to vertically stacking
                them in a readable manner.
              </p>

              <Toast
                className="toast fade show mb-2"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <Toast.Header closeButton={false}>
                  <svg
                    className="bd-placeholder-img rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#e50914"></rect>
                  </svg>
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted ">just now</small>
                  <Button className="ms-2 mb-1 btn-close" variant=" " bsPrefix=" "></Button>
                </Toast.Header>
                <div className="toast-body">See? Just like this.</div>
              </Toast>
              <Toast
                className="fade show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <Toast.Header closeButton={false}>
                  <svg
                    className="bd-placeholder-img rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#e50914"></rect>
                  </svg>
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">2 seconds ago</small>
                  <Button className="ms-2 mb-1 btn-close" variant=" " bsPrefix=" "></Button>
                </Toast.Header>
                <div className="toast-body">
                  Heads up, toasts will stack automatically
                </div>
              </Toast>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  Notifications horizontally and/or vertically{" "}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                You can also get fancy with flexbox utilities to align toasts
                horizontally and/or vertically.
              </p>
              <div className="p-3 ">
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: "200px" }}
                >
                  <Toast>
                    <Toast.Header closeButton={false}>
                      <svg
                        className="bd-placeholder-img rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <rect
                          width="100%"
                          height="100%"
                          fill="#e50914"
                        ></rect>
                      </svg>
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">11 mins ago</small>
                      <Button
                        bsPrefix=" "
                        variant=" "
                        type="button"
                        className="ms-2 mb-1 btn-close"
                        data-dismiss="toast"
                        aria-label="Close"
                      ></Button>
                    </Toast.Header>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Notifications</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Toasts are slightly translucent, too, so they blend over
                whatever they might appear over. For browsers that support the{" "}
                <code>backdrop-filter</code> CSS property, we’ll also attempt to
                blur the elements under a toast.
              </p>

              <div className="p-3 " position="top-start">
                <Toast>
                  <Toast.Header closeButton={false}>
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="#e50914"></rect>
                    </svg>
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">11 mins ago</small>
                    <Button
                      bsPrefix=" "
                      variant=" "
                      type="button"
                      className="ms-2 mb-1 btn-close"
                      data-dismiss="toast"
                      aria-label="Close"
                    ></Button>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Stacking Placement</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Place toasts with custom CSS as you need them. The top right is
                often used for notifications, as is the top middle. If you’re
                only ever going to show one toast at a time, put the positioning
                styles right on the <code>.toast</code>.
              </p>
              <div className="p-3 " position="top-start">
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  style={{ minHeight: "200px", position: 'relative' }}
                >
                  <Toast style={{ position: "relative", top: '0', right: '0' }}>
                    <Toast.Header closeButton={false}>
                      <svg
                        className="bd-placeholder-img rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <rect width="100%" height="100%" fill="#e50914"></rect>
                      </svg>
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">11 mins ago</small>
                      <Button
                        bsPrefix=" "
                        variant=" "
                        type="button"
                        className="ms-2 mb-1 btn-close"
                        data-dismiss="toast"
                        aria-label="Close"
                      ></Button>
                    </Toast.Header>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                </div>
              </div>
              <p className="mt-3">
                For systems that generate more notifications, consider using a
                wrapping element so they can easily stack.
              </p>
              <div className=" mt-3 p-3">
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  style={{ minHeight: "200px", position: 'relative' }}
                >
                  <div style={{ position: 'relative', top: '0', right: '0' }}>
                    <Toast
                      className="fade show"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <Toast.Header closeButton={false}>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <rect width="100%" height="100%" fill="#e50914"></rect>
                        </svg>
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">11 mins ago</small>
                        <Button
                          bsPrefix=" "
                          variant=" "
                          type="button"
                          className="ms-2 mb-1 btn-close"
                          data-dismiss="toast"
                          aria-label="Close"
                        ></Button>
                      </Toast.Header>
                      <Toast.Body>
                        Hello, world! This is a toast message.
                      </Toast.Body>
                    </Toast>
                    <Toast
                      className="fade show"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <Toast.Header closeButton={false}>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <rect width="100%" height="100%" fill="#e50914"></rect>
                        </svg>
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">11 mins ago</small>
                        <Button
                          bsPrefix=" "
                          variant=" "
                          type="button"
                          className="ms-2 mb-1 btn-close"
                          data-dismiss="toast"
                          aria-label="Close"
                        ></Button>
                      </Toast.Header>
                      <Toast.Body>
                        Hello, world! This is a toast message.
                      </Toast.Body>
                    </Toast>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Notifications </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Toasts are as flexible as you need and have very little required
                markup. At a minimum, we require a single element to contain
                your “toasted” content and strongly encourage a dismiss button.
              </p>
              <div className="d-flex flex-wrap justify-content-around">
                <Toast
                  className="fade show bg-primary text-white mt-3 border-0"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <Toast.Header className="bg-primary text-white" closeButton={false}>
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#fff"></rect>
                    </svg>
                    <strong className="me-auto text-white">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button
                      type="button"
                      className="ms-2 mb-1 btn-close"
                      data-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                <Toast
                  className="fade show bg-success text-white border-0 mt-3"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <Toast.Header className="bg-success text-white" closeButton={false}>
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#fff"></rect>
                    </svg>
                    <strong className="me-auto text-white">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button
                      type="button"
                      className="ms-2 mb-1 btn-close"
                      data-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Notifications;
