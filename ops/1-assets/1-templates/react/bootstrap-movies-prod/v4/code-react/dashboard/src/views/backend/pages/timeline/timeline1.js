import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../../../components/Card'

const Timeline2 = () => {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Product Orders</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="iq-timeline">
                                    <li>
                                        <div className="timeline-dots"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-success"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-danger"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans <Link to="#">gummi bears</Link>gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-primary"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-warning"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Product Orders</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="iq-timeline">
                                    <li>
                                        <div className="timeline-dots"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-success"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-danger"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans <Link to="#">gummi bears</Link>gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-primary"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-warning"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"><i className="ri-pantone-line"></i></div>
                                        <h6 className="float-left mb-1">Client Meeting</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Timeline2;