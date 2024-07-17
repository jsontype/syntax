import React, { Fragment } from "react";
import { Col, Row, Card, ProgressBar } from "react-bootstrap";

const Progressbars = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Examples</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Provide up-to-date feedback on the progress of a workflow or
                action with simple yet flexible progress bars.
              </p>
              <ul>
                <li>
                  We use the <code>.progress</code> as a wrapper to indicate the
                  max value of the progress bar.
                </li>
                <li>
                  We use the inner <code>.progress-bar</code> to indicate the
                  progress so far.
                </li>
                <li>
                  The <code>.progress-bar</code> requires an inline style,
                  utility class, or custom CSS to set their width.
                </li>
                <li>
                  The <code>.progress-bar</code> also requires some{" "}
                  <code>role</code> and <code>aria</code> attributes to make it
                  accessible.
                </li>
              </ul>
              <p>Put that all together, and you have the following examples.</p>
              <div className="progress mb-3">
                <ProgressBar now={0}></ProgressBar>
              </div>
              <div className="progress mb-3">
                <ProgressBar style={{ width: "25%" }} now={25}></ProgressBar>
              </div>
              <div className="progress mb-3">
                <ProgressBar style={{ width: "50%" }} now={50}></ProgressBar>
              </div>
              <div className="progress mb-3">
                <ProgressBar style={{ width: "75%" }} now={75}></ProgressBar>
              </div>
              <div className="progress">
                <ProgressBar style={{ width: "100%" }} now={10}></ProgressBar>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Height</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                We only set a <code>height</code> value on the{" "}
                <code>.progress</code>, so if you change that value the inner{" "}
                <code>.progress-bar</code> will automatically resize
                accordingly.
              </p>
              <div className="progress mb-3" style={{ height: "3px" }}>
                <ProgressBar
                  variant="primary"
                  style={{ width: "25%" }}
                  now={25}
                  label={"25%"}
                />
              </div>
              <div className="progress mb-3" style={{ height: "10px" }}>
                <ProgressBar
                  variant="primary"
                  style={{ width: "50%" }}
                  now={50}
                  label={"50%"}
                />
              </div>
              <div className="progress mb-3" style={{ height: "15px" }}>
                <ProgressBar
                  variant="primary"
                  style={{ width: "75%" }}
                  now={75}
                  label={"75%"}
                />
              </div>
              <div className="progress" style={{ height: "20px" }}>
                <ProgressBar
                  variant="primary"
                  style={{ width: "99%" }}
                  now={99}
                  label={"99%"}
                />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Animated stripes</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add <code>animated</code> prop to animate the stripes right to
                left. Not available in IE9 and below.
              </p>
              <div className="progress mb-3">
                <ProgressBar
                  animated
                  striped
                  now={75}
                  style={{ width: "75%" }}
                ></ProgressBar>
              </div>
              <div className="progress">
                <ProgressBar
                  animated
                  striped
                  variant="success"
                  now={75}
                  style={{ width: "75%" }}
                ></ProgressBar>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Labels</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add a <code>label</code> prop to show a visible percentage. For
                low percentages, consider adding a min-width to ensure the
                label's text is fully visible.
              </p>
              <div className="progress mb-3">
                <ProgressBar style={{ width: "25%" }} now={25} label={"25%"} />
              </div>
              <div className="progress mb-3">
                <ProgressBar style={{ width: "50%" }} label={"50%"} now={50} />
              </div>
              <div className="progress mb-3">
                <ProgressBar style={{ width: "75%" }} label={"75%"} now={75} />
              </div>
              <div className="progress">
                <ProgressBar style={{ width: "99%" }} label={"99%"} now={99} />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Backgrounds</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Use background utility classes to change the appearance of
                individual progress bars.
              </p>
              <div className="progress mb-3">
                <ProgressBar
                  variant="success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  now={25}
                ></ProgressBar>
              </div>
              <div className="progress mb-3">
                <ProgressBar
                  variant="info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  now={50}
                ></ProgressBar>
              </div>
              <div className="progress mb-3">
                <ProgressBar
                  variant="warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  now={75}
                ></ProgressBar>
              </div>
              <div className="progress">
                <ProgressBar
                  variant="danger"
                  role="progressbar"
                  style={{ width: "100%" }}
                  now={100}
                ></ProgressBar>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Multiple bars</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Nest<code> &lt;ProgressBar /&gt;s </code> to stack them.
              </p>
              <ProgressBar>
                <ProgressBar variant="primary" now={15} key={1} />
                <ProgressBar variant="success" now={30} key={2} />
                <ProgressBar variant="info" now={20} key={3} />
              </ProgressBar>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Striped</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Uses a gradient to create a striped effect. Not available in
                IE8.
              </p>
              <div className="progress mb-3">
                <ProgressBar
                  striped
                  style={{ width: "10%" }}
                  now={10}
                ></ProgressBar>
              </div>
              <div className="progress mb-3">
                <ProgressBar
                  striped
                  variant="success"
                  style={{ width: "25%" }}
                  now={25}
                ></ProgressBar>
              </div>
              <div className="progress mb-3">
                <ProgressBar
                  striped
                  variant="info"
                  style={{ width: "50%" }}
                  now={50}
                ></ProgressBar>
              </div>
              <div className="progress mb-3">
                <ProgressBar
                  striped
                  variant="warning"
                  style={{ width: "75%" }}
                  now={75}
                ></ProgressBar>
              </div>
              <div className="progress">
                <ProgressBar
                  striped
                  variant="danger"
                  style={{ width: "100%" }}
                  now={100}
                ></ProgressBar>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Progressbars;
