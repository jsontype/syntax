import React, { memo, Fragment } from "react";

// react-bootsrap
import { Row, Col, Placeholder } from "react-bootstrap";


const shimmerCardStyle = {
//   backgroundColor: "#1e1e1e",
  height: "13.5rem",
  padding: "1rem",
  width: "48em",
};
const CardblogSidebarShimmer = memo((props) => {
  return (
    <Fragment>
      <div
        id="gallery-top"
        className=""
        data-swiper="gallery-top"
        style={{
          marginBottom: "2em",
        }}
      >
        <div className="swiper-wrapper list-inline p-0 m-0  trending-slider-nav align-items-center">
          <Placeholder as="p" animation="wave" className="mb-0">
            <Placeholder
              style={{
                marginRight: "3em",
                backgroundColor: "#3e3e3e",
                height: "27rem",
                width: "48rem",
              }}
            />
          </Placeholder>
        </div>
      </div>

      <div className="iq-blog-box" style={{ paddingBottom: "4.25rem" }}>
        <Row>
          <Col>
            <div style={shimmerCardStyle}>
              <Row>
                <Placeholder as="p" animation="glow mb-5" >
                  <Placeholder
                    style={{
                      marginLeft: "1em",
                      height: 25,
                      width: 150,
                    }}
                  />
                  <Placeholder
                    style={{
                      marginLeft: "1em",
                      height: 25,
                      width: 100,
                    }}
                  />
                </Placeholder>
              </Row>
              <Placeholder as="p" animation="glow mb-3">
                <Placeholder
                  style={{
                    marginLeft: "1em",
                    height: 35,
                    width: 580,
                  }}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow mt-5">
                <Placeholder
                  bg=" btn btn-hover"
                  style={{ height: 30, width: 120, marginLeft: "1em" }}
                />
              </Placeholder>

            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
});

const RecentShimmer = memo((props) => {
    return (
      <Fragment>
        <div className="iq-blog-box pb-3">
        
          
            
            
            <Row>
                <Placeholder as="div" animation="glow" className=" mt-0 d-flex align-items-center" >
                  <Placeholder
                  xs={3}
                    style={{
                      height: "3rem", 
                    }}
                  />
                  <Placeholder as="div" animation="glow" className="ms-4 d-flex flex-column w-100">
                  <Placeholder as="p"
                  xs={10}
                  />
                  <Placeholder
                  bg="danger"
                  
                  xs={7}
                  />
                  </Placeholder>
                  
                </Placeholder>
              </Row>
            
        
        </div>
      </Fragment>
    );
  });
  

CardblogSidebarShimmer.displayName = "CardShimmer";
RecentShimmer.displayName = "RecentShimmer";

export {CardblogSidebarShimmer, RecentShimmer};

