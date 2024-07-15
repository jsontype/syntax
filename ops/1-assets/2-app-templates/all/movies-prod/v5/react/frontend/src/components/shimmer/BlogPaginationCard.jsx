import React, { memo, Fragment } from "react";

// react-bootsrap
import { Container, Row, Col, Placeholder } from "react-bootstrap";

// components

const shimmerCardStyle = {
  backgroundColor: "#1e1e1e",
  height: "13.5rem",
  padding: "1rem",
  width: "23em",
};
const CardblogPaginationShimmer = memo((props) => {
  let height;
  switch (props.grid) {
    case "single":
      height = "54rem";
      break;
    case "double":
      height = "26.2rem";
      break;
    case "large-grid":
      height = "17.2rem";
      break;
    case "small-grid":
      height = "12.7rem";
      break;
    default:
      height = "12.7rem"; // Default height if none of the cases match
      break;
  }

  return (
    <Fragment>
      <div className="iq-blog-box pb-3">
        <div className="iq-blog-image clearfix d-flex flex-column">
          <Placeholder as="p" animation="glow" className="mb-0">
            <Placeholder
              xs={12}
              style={{
                height: height,
              }}
            />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="mb-3 mt-4">
            <Placeholder as="h4" xs={8} />
            <Placeholder as="h4" xs={11} gap={3} className="mb-2 mt-3" />
            <Placeholder as="p" xs={3} bg="danger" className="mt-3" />
          </Placeholder>
        </div>
      </div>
    </Fragment>
  );
});

CardblogPaginationShimmer.displayName = "CardShimmer";
export default CardblogPaginationShimmer;
