import React, { memo, Fragment } from "react";

// react-bootsrap
import {  Row, Col, Placeholder } from "react-bootstrap";

const shimmerCardStyle = {
  // backgroundColor: "#1e1e1e",
  height: "20.5rem",
  padding: "1rem",
  width: "48em",
};
const CardBlogShimmer = memo((props) => {
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
          <Placeholder as="p" animation="glow" className="mb-0">
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

      <div className="iq-blog-box" style={{ paddingBottom: "6.25rem" }}>
        <Row>
          <Col>
            <div style={shimmerCardStyle}>
              <Row>
                <Placeholder as="p" animation="glow">
                  <Placeholder
                    style={{
                      
                      height: 25,
                      width: 100,
                    }}
                  />
                  <Placeholder
                    style={{
                      
                      height: 25,
                      width: 180,
                    }}
                  />
                </Placeholder>
              </Row>
              <Placeholder as="p" animation="glow mb-3">
                <Placeholder
                  style={{
                    
                    height: 25,
                    width: 350,
                  }}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow mb-3">
                <Placeholder
                  style={{
                    
                    height: 25,
                    width: 500,
                  }}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow mb-3">
                <Placeholder
                  style={{
                    
                    height: 25,
                    width: 430,
                  }}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder
                  bg=" btn btn-hover"
                  style={{ height: 30, width: 120, }}
                />
              </Placeholder>
              <Row>
                <Placeholder as="p" animation="glow">
                  <Placeholder
                    style={{
                      
                      height: 25,
                      width: 60,
                    }}
                  />
                  <Placeholder
                    style={{
                      
                      height: 25,
                      width: 100,
                    }}
                  />
                </Placeholder>
              </Row>

              <Row>
                <Placeholder as="p" animation="glow">
                  <Placeholder
                    style={{
                      
                      height: 25,
                      width: 70,
                    }}
                  />
                  <Placeholder
                    style={{
                     
                      height: 25,
                      width: 100,
                    }}
                  />
                  <Placeholder
                    style={{
                      
                      height: 25,
                      width: 120,
                    }}
                  />
                  <Placeholder
                    style={{
                      
                      height: 25,
                      width: 140,
                    }}
                  />
                </Placeholder>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
});






CardBlogShimmer.displayName = "CardBlogShimmer";

export default CardBlogShimmer;
