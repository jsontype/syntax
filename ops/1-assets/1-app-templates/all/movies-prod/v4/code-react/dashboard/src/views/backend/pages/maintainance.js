import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Card from '../../../components/Card'

// img
import maintenance from '../../../assets/images/error/02.png'
const Maintainance = () => {
    return (
        <>
             <div className="mt-5 iq-maintenance">
                <Container fluid className="p-0">
                    <Row className="no-gutters">
                        <Col sm="12" className="text-center">
                            <div className="iq-maintenance">
                                <img src={maintenance} className="img-fluid" alt=""/>
                                <h3 className="mt-4 mb-1">We are Currently Performing Maintenance</h3>
                                <p>Please check back in sometime.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-3">
                    <Row>
                        <Col lg="4">
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="ri-window-line ri-4x line-height text-primary"></i>
                                    <h5 className="card-title mt-1">Why is the Site Down?</h5>
                                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="ri-time-line ri-4x line-height text-primary"></i>
                                    <h5 className="card-title mt-1">What is the Downtime?</h5>
                                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="ri-information-line ri-4x line-height text-primary"></i>
                                    <h5 className="card-title mt-1">Do you need Support?</h5>
                                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Maintainance;