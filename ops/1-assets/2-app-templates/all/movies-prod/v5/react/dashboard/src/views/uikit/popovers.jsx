import React, { Fragment } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  OverlayTrigger,
  Popover,
  Tooltip,
} from "react-bootstrap";

const Popovers = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Popovers</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Header as="h3">Popover Title</Popover.Header>
                    <Popover.Body>
                      And here's some amazing content. It's very engaging.
                      Right?
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button className="btn-lg" variant="danger">
                  Click to toggle popover
                </Button>
              </OverlayTrigger>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Dismiss on next click</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Use the <code>focus</code> trigger to dismiss popovers on the
                user’s next click of a different element than the toggle
                element.
              </p>
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Header as="h3">Dismissible popover</Popover.Header>
                    <Popover.Body>
                      And here's some amazing content. It's very engaging.
                      Right?
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="danger">Dismissible popover</Button>
              </OverlayTrigger>
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
                interactive, meaning users cannot hover or click them to trigger
                a popover (or tooltip). As a workaround, you’ll want to trigger
                the popover from a wrapper <code>&lt;div&gt;</code> or{" "}
                <code>&lt;span&gt;</code> and override the{" "}
                <code>pointer-events</code> on the disabled element.
              </p>
              <span
                className="d-inline-block"
                data-bs-toggle="popover"
                data-bs-content="Disabled popover"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="tooltip-disabled">Disabled popover</Tooltip>
                  }
                >
                  <span className="d-inline-block">
                    <Button disabled style={{ pointerEvents: "none" }}>
                      Disabled button
                    </Button>
                  </span>
                </OverlayTrigger>
              </span>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Hover elements</h4>
                
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                  For disabled popover triggers, you may also prefer{" "}
                  <code>data-trigger="hover"</code> so that the popover appears
                  as immediate visual feedback to your users as they may not
                  expect to <em>click</em> on a disabled element.
                </p>
              <span
                className="d-inline-block"
                data-trigger="hover"
                data-bs-toggle="popover"
                data-bs-content="Disabled popover"
              >
                <Button
                  className="btn-primary"
                  style={{ pointerEvents: "none" }}
                  disabled
                >
                  Disabled button
                </Button>
              </span>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Four directions</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Four options are available: top, right, bottom, and left
                aligned.
              </p>
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary mb-1">Popover on top</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary mb-1">Popover on right</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary mb-1">Popover on bottom</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="left"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary mb-1">Popover on left</Button>
              </OverlayTrigger>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Popovers With Color</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Four options are available: top, right, bottom, and left
                aligned.
              </p>
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="primary mb-1">Popover on top</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="success mb-1">Popover on right</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="danger mb-1">Popover on bottom</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="left"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="info mb-1">Popover on left</Button>
              </OverlayTrigger>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Popovers With Color</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Four options are available: top, right, bottom, and left
                aligned.
              </p>
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="primary-subtle mb-1">Popover on top</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="success-subtle mb-1">Popover on right</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="danger-subtle mb-1">Popover on bottom</Button>
              </OverlayTrigger>{" "}
              <OverlayTrigger
                trigger="click"
                placement="left"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="info-subtle mb-1">Popover on left</Button>
              </OverlayTrigger>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Popovers;
