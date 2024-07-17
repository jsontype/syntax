import React, { memo, Fragment } from "react";

// react-bootsrap
import { Container, Row, Col, Placeholder } from "react-bootstrap";

// components
// import SectionHeader from "../../sections/section-header";

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

const CardShimmer = memo((props:Props) => {
  return (
    <Fragment>
      <Container fluid style={{ paddingBottom: "6.25rem" }}>
        <Row style={{ paddingBottom: "1.5em" }}>
          {/* <SectionHeader title={props.title} /> */}
        </Row>
        <Row style={{ "--bs-gutter-x": "2em", ...(props.style || {}) } as React.CSSProperties}>
          <Col
            sm={12}
            md={6}
            lg={3}
            className="d-none d-lg-block d-md-block mb-4"
          >
            <div style={shimmerCardStyle}>
              <Placeholder as="p" animation="glow" className="mt-3 ms-2 mb-2">
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mt-2 ms-2">
                <Placeholder xs={3} />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mt-4 ms-2">
                <Placeholder
                  bg=" btn btn-hover"
                  style={{ height: 30, width: 120 }}
                />
              </Placeholder>
            </div>
          </Col>
          <Col
            as="li"
            sm={12}
            md={6}
            lg={3}
            className="d-none d-lg-block d-md-block"
          >
            <div style={shimmerCardStyle}>
              <Placeholder as="p" animation="glow" className="mt-3 ms-2 mb-2">
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mt-2 ms-2">
                <Placeholder xs={3} />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mt-4 ms-2">
                <Placeholder
                  bg=" btn btn-hover"
                  style={{ height: 30, width: 120 }}
                />
              </Placeholder>
            </div>
          </Col>
          <Col
            as="li"
            sm={12}
            md={6}
            lg={3}
            className="d-none d-lg-block d-md-block"
          >
            <div style={shimmerCardStyle}>
              <Placeholder as="p" animation="glow" className="mt-3 ms-2 mb-2">
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mt-2 ms-2">
                <Placeholder xs={3} />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mt-4 ms-2">
                <Placeholder
                  bg=" btn btn-hover"
                  style={{ height: 30, width: 120 }}
                />
              </Placeholder>
            </div>
          </Col>
          <Col
            as="li"
            sm={12}
            md={6}
            lg={3}
            className="d-none d-lg-block d-md-block"
          >
            <div style={shimmerCardStyle}>
              <Placeholder as="p" animation="glow" className="mt-3 ms-2 mb-2">
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mt-2 ms-2">
                <Placeholder xs={3} />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mt-4 ms-2">
                <Placeholder
                  bg=" btn btn-hover"
                  style={{ height: 30, width: 120 }}
                />
              </Placeholder>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
});

CardShimmer.displayName = "CardShimmer";
export default CardShimmer;
