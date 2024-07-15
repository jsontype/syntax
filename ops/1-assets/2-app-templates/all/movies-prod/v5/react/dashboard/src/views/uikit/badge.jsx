import React, { Fragment } from "react";
import { Badge, Row, Col, Container } from "react-bootstrap";
// component
import Card from "../../components/bootstrap/card";
import { Link } from "react-router-dom";

const Badges = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Badge</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.
              </p>
              <h1 className="mt-2">
                Example heading <Badge bg="primary">New</Badge>
              </h1>
              <h2 className="mt-2">
                Example heading <Badge bg="secondary">New</Badge>
              </h2>
              <h3 className="mt-2">
                Example heading<Badge bg="success ms-1">New</Badge>
              </h3>
              <h4 className="mt-2">
                Example heading <Badge bg="danger">New</Badge>
              </h4>
              <h5 className="mt-2">
                Example heading <Badge bg="warning">New</Badge>
              </h5>
              <h6 className="mb-0">
                Example heading <Badge bg="info">New</Badge>
              </h6>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Badges</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>Badges can be used as part of buttons to provide a counter.</p>
              <button type="button" className="btn mb-1 btn-primary">
                Notifications{" "}
                <Badge bg="" className="badge text-bg-secondary ms-2">
                  4
                </Badge>{" "}
              </button>{" "}
              <button type="button" className="btn mb-1 btn-success">
                Notifications{" "}
                <Badge bg="" className="badge text-bg-secondary ms-2">
                  4
                </Badge>{" "}
              </button>{" "}
              <button type="button" className="btn mb-1 btn-danger">
                Notifications{" "}
                <Badge bg="" className="badge text-bg-secondary ms-2">
                  4
                </Badge>{" "}
              </button>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Light background Badges</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>Badges can be used as part of buttons to provide a counter.</p>
              <button type="button" className="btn mb-1 btn-outline-primary">
                Notifications{" "}
                <Badge bg="primary" className="badge bg-primary ms-2">
                  4
                </Badge>
              </button>{" "}
              <button type="button" className="btn mb-1 btn-outline-success">
                Notifications{" "}
                <Badge bg="success" className="badge bg-primary ms-2">
                  4
                </Badge>
              </button>{" "}
              <button type="button" className="btn mb-1 btn-outline-danger">
                Notifications{" "}
                <Badge bg="danger" className="badge bg-primary ms-2">
                  4
                </Badge>
              </button>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Border Badges</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>Badges can be used as part of buttons to provide a counter.</p>
              <button type="button" className="btn mb-1 bg-primary-subtle">
                Notifications{" "}
                <Badge bg="primary" className="badge bg-primary ms-2">
                  4
                </Badge>
              </button>{" "}
              <button type="button" className="btn mb-1 bg-success-subtle">
                Notifications{" "}
                <Badge bg="success" className="badge bg-primary ms-2">
                  4
                </Badge>
              </button>{" "}
              <button type="button" className="btn mb-1 bg-danger-subtle">
                Notifications{" "}
                <Badge bg="danger" className="badge bg-primary ms-2">
                  4
                </Badge>
              </button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Contextual variations</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Add any of the below mentioned modifier classes to change the
                appearance of a badge
              </p>
              <Badge bg="primary" className="mt-2">
                Primary
              </Badge>{" "}
              <Badge bg="secondary" className="mt-2">
                Secondary
              </Badge>{" "}
              <Badge bg="success" className="mt-2">
                Success
              </Badge>{" "}
              <Badge bg="danger" className="mt-2">
                Danger
              </Badge>{" "}
              <Badge bg="warning" className="mt-2">
                Warning
              </Badge>{" "}
              <Badge bg="info" className="mt-2">
                Info
              </Badge>{" "}
              <Badge bg="light" className="mt-2">
                Light
              </Badge>{" "}
              <Badge bg="dark" className="mt-2">
                Dark
              </Badge>{" "}
              <Badge bg="gray" className="mt-2">
                Gray
              </Badge>{" "}
              <h5 className="card-title mt-4">Pill badges</h5>
              <p className="mb-2">
                Use the
                <code> .badge-pill</code> modifier class to make badges more
                rounded (with a larger <code>border-radius</code> and additional
                horizontal
                <code> padding</code>). Useful if you miss the badges from v3.
              </p>
              <Badge pill bg="primary" className="mt-2">
                Primary
              </Badge>{" "}
              <Badge pill bg="secondary" className="mt-2">
                Secondary
              </Badge>{" "}
              <Badge pill bg="success" className=" mt-2">
                Success
              </Badge>{" "}
              <Badge pill bg="danger" className="mt-2">
                Danger
              </Badge>{" "}
              <Badge pill bg="warning" className=" mt-2">
                Warning
              </Badge>{" "}
              <Badge pill bg="info" className="mt-2">
                Info
              </Badge>{" "}
              <Badge pill bg="light" className="mt-2">
                Light
              </Badge>{" "}
              <Badge pill bg="dark" className="mt-2">
                Dark
              </Badge>{" "}
              <Badge pill bg="gray" className="mt-2">
                Gray
              </Badge>{" "}
              <h5 className="card-title mt-4">Links</h5>
              <p className="mb-2">
                Using the contextual <code>.badge-*</code> classes on an{" "}
                <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.
              </p>
              <Badge as={Link} bg="primary" to="#" className="mt-2">
                Primary
              </Badge>{" "}
              <Badge as={Link} bg="secondary" to="#" className="mt-2">
                Secondary
              </Badge>{" "}
              <Badge as={Link} bg="success" to="#" className="mt-2">
                Success
              </Badge>{" "}
              <Badge as={Link} bg="danger" to="#" className="mt-2">
                Danger
              </Badge>{" "}
              <Badge as={Link} bg="warning" to="#" className="mt-2">
                Warning
              </Badge>{" "}
              <Badge as={Link} bg="info" to="#" className="mt-2">
                Info
              </Badge>{" "}
              <Badge as={Link} bg="light" to="#" className="mt-2">
                Light
              </Badge>{" "}
              <Badge as={Link} bg="dark" to="#" className="mt-2">
                Dark
              </Badge>{" "}
              <Badge as={Link} bg="gray" to="#" className="mt-2">
                Gray
              </Badge>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Contextual variations Border</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                Add any of the below mentioned modifier classes to change the
                appearance of a badge.
              </p>
              <Badge
                bg=""
                bsPrefix="badge border border-primary text-primary mt-2"
              >
                Primary
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-secondary text-secondary mt-2"
              >
                Secondary
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-success text-success mt-2"
              >
                Success
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-danger text-danger mt-2"
              >
                Danger
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-warning text-warning mt-2"
              >
                Warning
              </Badge>{" "}
              <Badge bg="" className="badge border border-info text-info mt-2">
                Info
              </Badge>{" "}
              <Badge
                bg=""
                className="badge border border-light text-light mt-2"
              >
                Light
              </Badge>{" "}
              <Badge bg="" className="badge border border-dark text-dark mt-2">
                Dark
              </Badge>{" "}
              <Badge bg="" className="badge border border-gray text-gray mt-2">
                Gray
              </Badge>{" "}
              <h5 className="card-title mt-4">Pill badges</h5>
              <p className="mb-2">
                Use the <code> .badge-pill</code> modifier class to make badges
                more rounded (with a larger <code> border-radius</code> and
                additional horizontal
                <code> padding</code>
                ). Useful if you miss the badges from v3.
              </p>
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-primary text-primary mt-2"
              >
                Primary
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-secondary text-secondary mt-2"
              >
                Secondary
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-success text-success mt-2"
              >
                Success
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-danger text-danger mt-2"
              >
                Danger
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-warning text-warning mt-2"
              >
                Warning
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-info text-info mt-2"
              >
                Info
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-light text-light mt-2"
              >
                Light
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-dark text-dark mt-2"
              >
                Dark
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-gray text-gray mt-2"
              >
                Gray
              </Badge>{" "}
              <h5 className="card-title mt-4">Links</h5>
              <p className="mb-2">
                Using the contextual
                <code> .badge-* </code> classes on an <code>&lt;a&gt;</code>{" "}
                element quickly provide
                <em> actionable</em> badges with hover and focus states.
              </p>
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-primary text-primary mt-2"
              >
                Primary
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-secondary text-secondary mt-2"
              >
                Secondary
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-success text-success mt-2"
              >
                Success
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-danger text-danger mt-2"
              >
                Danger
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-warning text-warning mt-2"
              >
                Warning
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-info text-info mt-2"
              >
                Info
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-light text-light mt-2"
              >
                Light
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-dark text-dark mt-2"
              >
                Dark
              </Badge>{" "}
              <Badge
                as={Link}
                bg=""
                to="#"
                className="badge border border-gray text-gray mt-2"
              >
                Gray
              </Badge>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Badges;
