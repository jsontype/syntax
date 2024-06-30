import React, { memo, Fragment } from "react";

// react-bootsrap
import { Container, Row, Col, Placeholder } from "react-bootstrap";

const shimmerCardStyle = {
  backgroundColor: "#1e1e1e",
  height: "11.5rem",
  width: "100%",
  padding: "1rem",
};

type CustomStyle = {
  "--bs-gutter-x"?: string;
};

interface Props {
  style?: CustomStyle;
}

const VerticalShimmer = memo((props:Props) => {
  return (
    <Fragment>
      <div className="container">
        <Placeholder as="p" animation="wave" style={{ width: "86em" }}>
          <Placeholder
            style={{
              backgroundColor: "#3e3e3e",
              height: "58em",
              width: "100%",
            }}
          >
            <Container className=" slider--col position-relative">
              <Row style={{ "--bs-gutter-x": "0em", ...(props.style || {}) } as React.CSSProperties}>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  className="d-none d-lg-block d-md-block"
                >
                  <div style={shimmerCardStyle}>
                    <Placeholder
                      as="p"
                      animation="glow"
                      className="mt-4 ms-2 mb-0"
                    >
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="ms-2 mb-2">
                      <Placeholder xs={2} /> <Placeholder xs={3} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="mt-1 ms-2">
                      <Placeholder
                        bg="btn btn-hover"
                        style={{ height: 35, width: 140 }}
                      />
                    </Placeholder>
                  </div>
                </Col>
              </Row>
              <br />
              <Row style={{ "--bs-gutter-x": "0em", ...(props.style || {}) } as React.CSSProperties}>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  className="d-none d-lg-block d-md-block"
                >
                  <div style={shimmerCardStyle}>
                    <Placeholder
                      as="p"
                      animation="glow"
                      className="mt-4 ms-2 mb-0"
                    >
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="ms-2 mb-2">
                      <Placeholder xs={2} /> <Placeholder xs={3} />
                    </Placeholder>
                  </div>
                </Col>
              </Row>
              <br />
              <Row style={{ "--bs-gutter-x": "0em", ...(props.style || {}) } as React.CSSProperties}>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  className="d-none d-lg-block d-md-block"
                >
                  <div style={shimmerCardStyle}>
                    <Placeholder
                      as="p"
                      animation="glow"
                      className="mt-4 ms-2 mb-0"
                    >
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="ms-2 mb-2">
                      <Placeholder xs={2} /> <Placeholder xs={3} />
                    </Placeholder>
                  </div>
                </Col>
              </Row>
              <br />
              <Row style={{ "--bs-gutter-x": "0em", ...(props.style || {}) } as React.CSSProperties}>
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  className="d-none d-lg-block d-md-block"
                >
                  <div style={shimmerCardStyle}>
                    <Placeholder
                      as="p"
                      animation="glow"
                      className="mt-4 ms-2 mb-0"
                    >
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="ms-2 mb-2">
                      <Placeholder xs={2} /> <Placeholder xs={3} />
                    </Placeholder>
                  </div>
                </Col>
              </Row>
            </Container>
          </Placeholder>
        </Placeholder>
      </div>
    </Fragment>
  );
});

VerticalShimmer.displayName = "VerticalShimmer";
export default VerticalShimmer;
