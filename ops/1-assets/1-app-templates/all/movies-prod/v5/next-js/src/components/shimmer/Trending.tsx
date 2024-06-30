import React, { memo, Fragment } from "react";

// react-bootsrap
import { Container, Row, Col, Placeholder } from "react-bootstrap";

const TrendingShimer = memo(() => {
  return (
    <Fragment>
      <Container fluid>
        <Row className="m-0 p-0">
          <div
            id="iq-trending"
            className="s-margin iq-tvshow-tabs iq-rtl-direction iq-trending-tabs"
          >
            <div className="iq-main-header d-flex align-items-center justify-content-between">
              <h4 className="main-title">Trending</h4>
            </div>
            <div className="trending-contens position-relative ">
              <div
                id="gallery-top"
                className="gallery-thumbs"
                data-swiper="gallery-top"
              >
                <div className="swiper-wrapper list-inline p-0 m-0  trending-slider-nav align-items-center">
                  <Placeholder as="p" animation="wave" className="mb-0">
                    <Placeholder
                      style={{
                        marginRight: "3em",
                        backgroundColor: "#3e3e3e",
                        height: "8rem",
                        width: "15rem",
                      }}
                    />

                    <Placeholder
                      style={{
                        marginRight: "1em",
                        backgroundColor: "#3e3e3e",
                        height: "8rem",
                        width: "15rem",
                      }}
                    />

                    <Placeholder
                      style={{
                        marginRight: "1em",
                        backgroundColor: "#3e3e3e",
                        height: "10rem",
                        width: "17rem",
                      }}
                    />

                    <Placeholder
                      style={{
                        marginRight: "3em",
                        backgroundColor: "#3e3e3e",
                        height: "8rem",
                        width: "15rem",
                      }}
                    />

                    <Placeholder
                      style={{
                        backgroundColor: "#3e3e3e",
                        height: "8rem",
                        width: "15rem",
                      }}
                    />
                  </Placeholder>
                </div>
              </div>
              <div
                id="gallery-bottom"
                className="swiper trending-tab-slider"
                data-swiper="gallery-bottom"
              >
                <Placeholder as="p" animation="wave">
                  <Placeholder
                    style={{
                      backgroundColor: "#3e3e3e",
                      height: "50em",
                      width: "89em",
                    }}
                  >
                    <Col style={{ marginLeft: "3em", marginTop: "17em" }}>
                      <Row>
                        <Placeholder as="p" animation="glow">
                          <Placeholder
                            style={{
                              marginTop: "-17rem",
                              backgroundColor: "#a30202",
                              borderLeft: "6px solid #ff0505",
                              height: 45,
                              width: 280,
                            }}
                          />
                        </Placeholder>
                      </Row>
                      <Row>
                        <Placeholder as="p" animation="glow">
                          <Placeholder style={{ height: 45, width: 55 }} />
                          <Placeholder
                            style={{
                              marginLeft: "1em",
                              height: 45,
                              width: 150,
                            }}
                          />
                          <Placeholder
                            style={{
                              marginLeft: "1em",
                              height: 45,
                              width: 150,
                            }}
                          />
                        </Placeholder>
                      </Row>
                      <Row style={{ marginTop: "2em" }}>
                        <Placeholder as="p" animation="glow">
                          <Placeholder style={{ height: 20, width: 160 }} />
                        </Placeholder>
                      </Row>
                      <Row style={{ marginTop: "2em" }}>
                        <Placeholder as="p" animation="glow">
                          <Placeholder style={{ height: 20, width: 470 }} />{" "}
                          <br />
                          <Placeholder
                            style={{ height: 20, width: 440 }}
                          />{" "}
                          <br />
                          <Placeholder style={{ height: 20, width: 410 }} />
                        </Placeholder>
                      </Row>
                      <Row style={{ marginTop: "1em" }}>
                        <Placeholder as="p" animation="glow">
                          <Placeholder
                            bg="btn btn-hover"
                            style={{ height: 45, width: 150 }}
                          />
                        </Placeholder>
                      </Row>
                      <Row style={{ marginTop: "1em" }}>
                        <Placeholder as="p" animation="glow">
                          <Placeholder style={{ height: 16, width: 90 }} />{" "}
                          <Placeholder
                            style={{ marginLeft: 7, height: 16, width: 220 }}
                          />{" "}
                          <Placeholder
                            style={{ marginLeft: 7, height: 16, width: 190 }}
                          />{" "}
                          <br />
                          <Placeholder style={{ height: 16, width: 90 }} />{" "}
                          <Placeholder
                            style={{ marginLeft: 7, height: 16, width: 190 }}
                          />{" "}
                          <Placeholder
                            style={{ marginLeft: 7, height: 16, width: 160 }}
                          />{" "}
                          <br />
                          <Placeholder style={{ height: 16, width: 90 }} />{" "}
                          <Placeholder
                            style={{ marginLeft: 7, height: 16, width: 160 }}
                          />{" "}
                          <Placeholder
                            style={{ marginLeft: 7, height: 16, width: 130 }}
                          />
                        </Placeholder>
                      </Row>
                    </Col>
                  </Placeholder>
                </Placeholder>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
});

TrendingShimer.displayName = "TrendingShimer";
export default TrendingShimer;
