import { useState, memo, Fragment } from "react";

//react-boostrap
import { Alert, Row, Col } from "react-bootstrap";

//components
import Card from "../../components/bootstrap/card";

const Alerts = memo(() => {
  //Alert
  const [showA1, setShowA1] = useState(true);
  const [showA2, setShowA2] = useState(true);
  const [showA3, setShowA3] = useState(true);
  const [showA4, setShowA4] = useState(true);
  const [showA5, setShowA5] = useState(true);
  const [showA6, setShowA6] = useState(true);
  const [showA7, setShowA7] = useState(true);
  const [showA8, setShowA8] = useState(true);
  const [showA9, setShowA9] = useState(true);
  const [showA10, setShowA10] = useState(true);
  const [showA11, setShowA11] = useState(true);
  const [showA12, setShowA12] = useState(true);
  const [showA13, setShowA13] = useState(true);
  const [showA14, setShowA14] = useState(true);

  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic Alerts</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever
              </p>
              <Alert
                variant="alert alert-success alert-dismissible d-flex align-items-center gap-1 fade show mb-3"
                show={showA1}
                onClose={() => setShowA1(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-thumbs-up"></i>
                </span>
                <span>This is a success alert—check it out!</span>
              </Alert>
              <Alert
                variant="info alert-dismissible d-flex align-items-center gap-1 fade show mb-3"
                className="mb-3"
                show={showA2}
                role="alert"
                onClose={() => setShowA2(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-bell"></i>
                </span>
                <span>This is a info alert—check it out!</span>
              </Alert>
              <Alert
                variant="warning alert-dismissible d-flex align-items-center gap-1 fade show mb-3"
                className=" mb-3"
                show={showA3}
                role="alert"
                onClose={() => setShowA3(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-bell"></i>
                </span>
                <span>This is a warning alert—check it out!</span>
              </Alert>
              <Alert
                variant="danger alert-dismissible d-flex align-items-center gap-1 fade show mb-3"
                className=" mb-3"
                show={showA4}
                role="alert"
                onClose={() => setShowA4(false)}
                dismissible
              >
                <span>
                  <i className="far fa-life-ring"></i>
                </span>
                <span>This is a danger alert—check it out!</span>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic Alerts With Icons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol
                  id="check-circle-fill"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </symbol>
                <symbol
                  id="info-fill"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </symbol>
                <symbol
                  id="exclamation-triangle-fill"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </symbol>
              </svg>
              <Alert
                variant="alert alert-primary "
                className="d-flex align-items-center"
                role="alert"
              >
                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                  <use href="#info-fill" />
                </svg>
                <div>An example alert with an icon</div>
              </Alert>
              <Alert
                variant="alert alert-success"
                className="d-flex align-items-center"
                role="alert"
              >
                <svg width="24" height="24" className="bi flex-shrink-0 me-2">
                  <use href="#check-circle-fill"></use>
                </svg>
                <div>An example success alert with an icon</div>
              </Alert>
              <Alert
                variant="alert alert-warning"
                className="d-flex align-items-center"
                role="alert"
              >
                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                  <use href="#exclamation-triangle-fill" />
                </svg>
                <div>An example warning alert with an icon</div>
              </Alert>
              <Alert
                variant="alert alert-danger"
                className="d-flex align-items-center"
                role="alert"
              >
                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                  <use href="#exclamation-triangle-fill" />
                </svg>
                <div>An example danger alert with an icon</div>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic Line Alerts</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Alert
                variant="alert alert-solid alert-success d-flex align-items-center gap-1 alert-dismissible fade show mb-3"
                className="mb-3"
                show={showA5}
                role="alert"
                onClose={() => setShowA5(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-thumbs-up"></i>
                </span>
                <span>This is a success alert—check it out!</span>
              </Alert>
              <Alert
                variant="alert alert-solid alert-info d-flex align-items-center gap-1 alert-dismissible fade show mb-3"
                className="mb-3"
                show={showA6}
                role="alert"
                onClose={() => setShowA6(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-bell"></i>
                </span>
                <span>This is a info alert—check it out!</span>
              </Alert>
              <Alert
                variant="alert alert-solid alert-warning d-flex align-items-center gap-1 alert-dismissible fade show mb-3"
                className=" mb-3"
                show={showA7}
                role="alert"
                onClose={() => setShowA7(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-bell"></i>
                </span>
                <span>This is a warning alert—check it out!</span>
              </Alert>
              <Alert
                variant="alert alert-solid alert-danger d-flex align-items-center gap-1 alert-dismissible fade show mb-3"
                show={showA8}
                role="alert"
                onClose={() => setShowA8(false)}
                dismissible
              >
                <span>
                  <i className="far fa-life-ring"></i>
                </span>
                <span>This is a danger alert—check it out!</span>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic Line Alerts With Icons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol
                  id="check-circle-fill"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </symbol>
                <symbol
                  id="info-fill"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </symbol>
                <symbol
                  id="exclamation-triangle-fill"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </symbol>
              </svg>
              <Alert
                variant="alert alert-solid alert-primary"
                className="d-flex align-items-center"
                role="alert"
              >
                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                  <use href="#info-fill" />
                </svg>
                <div>An example alert alert-solid with an icon</div>
              </Alert>
              <Alert
                variant="alert alert-solid alert-success"
                className="d-flex align-items-center"
                role="alert"
              >
                <svg width="24" height="24" className="bi flex-shrink-0 me-2">
                  <use href="#check-circle-fill"></use>
                </svg>
                <div>An example success alert alert-solid with an icon</div>
              </Alert>
              <Alert
                variant="alert alert-solid alert-warning"
                className="d-flex align-items-center"
                role="alert"
              >
                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                  <use href="#exclamation-triangle-fill" />
                </svg>
                <div>An example warning alert alert-solid with an icon</div>
              </Alert>
              <Alert
                variant="alert alert-solid alert-danger"
                className="d-flex align-items-center"
                role="alert"
              >
                <svg className="bi flex-shrink-0 me-2" width="24" height="24">
                  <use href="#exclamation-triangle-fill" />
                </svg>
                <div>An example danger alert alert-solid with an icon</div>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Alerts With Background</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Alert
                variant="alert alert-left alert-success  d-flex align-items-center gap-1 alert-dismissible fade show mb-3"
                show={showA9}
                role="alert"
                onClose={() => setShowA9(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-thumbs-up"></i>
                </span>
                <span>This is a success alert—check it out!</span>
              </Alert>
              <Alert
                variant="alert alert-top alert-info d-flex align-items-center gap-1 alert-dismissible fade show mb-3"
                show={showA10}
                role="alert"
                onClose={() => setShowA10(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-bell"></i>
                </span>
                <span>This is a info alert—check it out!</span>
              </Alert>
              <Alert
                variant="alert alert-right alert-warning   d-flex align-items-center gap-1 alert-dismissible fade show mb-3"
                show={showA11}
                role="alert"
                onClose={() => setShowA11(false)}
                dismissible
              >
                <span>
                  <i className="fas fa-bell"></i>
                </span>
                <span>This is a warning alert—check it out!</span>
              </Alert>
              <Alert
                variant="alert alert-bottom alert-danger  d-flex align-items-center gap-1 alert-dismissible fade show mb-3"
                show={showA12}
                role="alert"
                onClose={() => setShowA12(false)}
                dismissible
              >
                <span>
                  <i className="far fa-life-ring"></i>
                </span>
                <span>This is a danger alert—check it out!</span>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">For Banner</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Alert
                variant="alert alert-warning rounded-0 alert-dismissible fade show d-flex align-items-center gap-1"
                show={showA13}
                role="alert"
                onClose={() => setShowA13(false)}
                dismissible
              >
                <span>
                  <i className="far fa-life-ring"></i>
                </span>
                <span>This is a warning alert—check it out!</span>
              </Alert>
              <Alert
                variant="alert alert-warning alert-solid rounded-0 alert-dismissible fade show d-flex align-items-center gap-1"
                show={showA14}
                role="alert"
                onClose={() => setShowA14(false)}
                dismissible
              >
                <span>
                  <i className="far fa-life-ring"></i>
                </span>
                <span>This is a warning alert—check it out!</span>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Alerts.displayName = "Alerts";
export default Alerts;
