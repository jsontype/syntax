import React from 'react'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import  Card from '../../../../components/Card'

const TermsOfUse = () => {
    return (
        <>
            <Container fluid id="faqAccordion">
                <Row>
                    <Col lg="12">
                        <Accordion className="mm-accordion career-style faq-style" defaultActiveKey="0">
                            <Card className="mm-accordion-block accordion">
                                <div className="active-faq clearfix" id="headingOne">
                                    <Container fluid>
                                        <Row>
                                            <Col sm="12">
                                                <Accordion.Toggle as={Button} href="#"   bsPrefix="accordion-title" eventKey="0">
                                                    <span>Lorem ipsum dolor sit </span>
                                                </Accordion.Toggle>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <Accordion.Collapse eventKey="0" className="accordion-details">
                                    <p className="mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                        aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                                        sustainable VHS. 
                                    </p>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mm-accordion-block">
                                <div className="active-faq clearfix" id="headingTwo">
                                    <Container fluid>
                                        <Row>
                                            <Col sm="12">
                                                <Accordion.Toggle as={Button} href="#"   bsPrefix="accordion-title" eventKey="1">
                                                    <span>consectetur adipiscing elit</span>
                                                </Accordion.Toggle>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <Accordion.Collapse className="accordion-details" eventKey="1">
                                    <p className="mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                        aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.
                                    </p>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mm-accordion-block ">
                                <div className="active-faq clearfix" id="headingThree">
                                    <Container fluid>
                                        <Row>
                                            <Col sm="12">
                                                <Accordion.Toggle as={Button} href="#"   bsPrefix="accordion-title" eventKey="2">
                                                    <span>Etiam sit amet justo non</span>
                                                </Accordion.Toggle>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <Accordion.Collapse className="accordion-details" eventKey="2">
                                    <p className="mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                        aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.
                                    </p>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mm-accordion-block ">
                                <div className="active-faq clearfix" id="headingFour">
                                    <Container fluid>
                                        <Row>
                                            <Col sm="12">
                                                <Accordion.Toggle as={Button} href="#"   bsPrefix="accordion-title" eventKey="3">
                                                    <span>velit accumsan laoreet</span>
                                                </Accordion.Toggle>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <Accordion.Collapse className="accordion-details"  eventKey="3">
                                    <p className="mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                        aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.
                                    </p>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mm-accordion-block">
                                <div className="active-faq clearfix" id="headingFive">
                                    <Container fluid>
                                        <Row>
                                            <Col sm="12">
                                                <Accordion.Toggle as={Button} href="#"   bsPrefix="accordion-title" eventKey="4">
                                                    <span>Donec volutpat metus in erat</span>
                                                </Accordion.Toggle>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <Accordion.Collapse className="accordion-details" eventKey="4">
                                    <p className="mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                        aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.
                                    </p>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mm-accordion-block">
                                <div className="active-faq clearfix" id="headingSix">
                                    <Container fluid>
                                        <Row>
                                            <Col sm="12">
                                                <Accordion.Toggle as={Button} href="#"   bsPrefix="accordion-title" eventKey="5">
                                                    <span>quam quis massa tristique</span>
                                                </Accordion.Toggle>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <Accordion.Collapse className="accordion-details" eventKey="5">
                                    <p className="mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                        aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.
                                    </p>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TermsOfUse;