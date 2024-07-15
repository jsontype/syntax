import React, { Fragment } from "react";
import { Card, Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import card1 from "/assets/images/page-img/01.jpg";

const Carousels = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <Card.Title as="h4">Slides only</Card.Title>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Here’s a carousel with slides only. Note the presence of the{" "}
                <code>.d-block</code> and <code>.img-fluid</code> on carousel
                images to prevent browser default image alignment.
              </p>
              <Carousel
                id="carouselExampleSlidesOnly"
                indicators={false}
                nextIcon={""}
                prevIcon={""}
                data-ride="carousel"
              >
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Slides With Controls</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Here’s a carousel with slides only. Note the presence of the{" "}
                <code>.d-block</code> and <code>.img-fluid</code> on carousel
                images to prevent browser default image alignment.
              </p>
              <Carousel
                id="carouselExampleControls"
                indicators={false}
              >
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Slides With Indicators</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Here’s a carousel with slides only. Note the presence of the{" "}
                <code>.d-block</code> and <code>.img-fluid</code> on carousel
                images to prevent browser default image alignment.
              </p>
              <Carousel
                id="carouselExampleSlidesOnly"
                indicators={false}
              >
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Slides With Captions</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="bd-example">
                <p>
                  Here’s a carousel with slides only. Note the presence of the{" "}
                  <code>.d-block</code> and <code>.img-fluid</code> on carousel
                  images to prevent browser default image alignment.
                </p>
                <Carousel
                  id="carouselExampleSlidesOnly"
                  indicators={false}
                >
                  <Carousel.Item>
                    <img src={card1} className="d-block w-100" alt="#" />
                    <Carousel.Caption className="d-none d-md-block">
                      <h4 className="text-black">First slide label</h4>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={card1} className="d-block w-100" alt="#" />
                    <Carousel.Caption className="d-none d-md-block">
                      <h4 className="text-black">Second slide label</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={card1} className="d-block w-100" alt="#" />
                    <Carousel.Caption className="d-none d-md-block">
                      <h4 className="text-black">Third slide label</h4>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Slides With Crossfade</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Here’s a carousel with slides only. Note the presence of the
                <code> .d-block</code> and <code>.img-fluid</code> on carousel
                images to prevent browser default image alignment.
              </p>
              <Carousel
                fade
                id="carouselExampleFade"
                indicators={false}
              >
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card1} className="d-block w-100" alt="#" />
                </Carousel.Item>

              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

Carousels.displayName = "Carousels";
export default Carousels;
