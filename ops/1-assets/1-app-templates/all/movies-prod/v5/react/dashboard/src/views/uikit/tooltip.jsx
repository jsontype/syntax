import React, { Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Tooltips = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Tooltips</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Hover over the buttons below to see the four tooltips
                directions: top, right, bottom, and left. The data-bs-placement
                attribute specifies the tooltip position.
              </p>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Tooltip on top</Tooltip>}
              >
                <Button variant="secondary mt-2">Tooltip on top</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Tooltip on right</Tooltip>}
              >
                <Button variant="secondary mt-2">Tooltip on right</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Tooltip on bottom</Tooltip>}
              >
                <Button variant="secondary mt-2">Tooltip on bottom</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>Tooltip on left</Tooltip>}
              >
                <Button variant="secondary mt-2">Tooltip on left</Button>
              </OverlayTrigger>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Disabled elements</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Elements with the <code>disabled</code> attribute aren’t
                interactive, meaning users cannot focus, hover, or click them to
                trigger a tooltip (or popover). As a workaround, you’ll want to
                trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or{" "}
                <code>&lt;span&gt;</code>, ideally made keyboard-focusable using{" "}
                <code>tabindex="0"</code>, and override the{" "}
                <code>pointer-events</code> on the disabled element.
              </p>
              <OverlayTrigger
                overlay={
                  <Tooltip id="Disabledtooltip">Disabled tooltip</Tooltip>
                }
              >
                <span className="d-inline-block">
                  <Button
                    className="btn-primary"
                    disabled
                    style={{ pointerEvents: "none" }}
                  >
                    Disabled button
                  </Button>
                </span>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Tooltips</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Hover over the buttons below to see the four tooltips
                directions: top, right, bottom, and left Using background colors
              </p>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Tooltip on top</Tooltip>}
              >
                <Button className="btn-primary mt-2">Tooltip on top</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Tooltip on right</Tooltip>}
              >
                <Button className="btn-success mt-2">Tooltip on right</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Tooltip on bottom</Tooltip>}
              >
                <Button className="btn-danger mt-2">Tooltip on bottom</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>Tooltip on left</Tooltip>}
              >
                <Button className="btn-info mt-2">Tooltip on left</Button>
              </OverlayTrigger>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Tooltips</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Hover over the buttons below to see the four tooltips
                directions: top, right, bottom, and left Using Light background
                colors
              </p>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Tooltip on top</Tooltip>}
              >
                <Button className="btn btn-primary-subtle mt-2 border-0">
                  Tooltip on top
                </Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Tooltip on right</Tooltip>}
              >
                <Button className="btn btn-success-subtle mt-2 border-0">
                  Tooltip on right
                </Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Tooltip on bottom</Tooltip>}
              >
                <Button className="btn btn-danger-subtle mt-2 border-0">
                  Tooltip on bottom
                </Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>Tooltip on left</Tooltip>}
              >
                <Button className="btn btn-info-subtle mt-2 border-0">
                  Tooltip on left
                </Button>
              </OverlayTrigger>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col lg="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Hover elements</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>Hover over the buttons below to see the tooltip.</p>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">Some tooltip text!</Tooltip>
                }
              >
                <Link
                  to="#"
                  data-bs-toggle="tooltip"
                  title="Some tooltip text!"
                >
                  Hover over me
                </Link>
              </OverlayTrigger>
                <div className="tooltip bs-tooltip-top" role="tooltip">
               <div className="arrow"></div>
               <div className="tooltip-inner">
                  Some tooltip text!
               </div>
            </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tooltips;
