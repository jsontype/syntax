import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const UiColors = () =>{
   return(
      <>
         <Container fluid>
            <Row>
               <Col lg="12">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Streamit Color</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>
                        <Row className="mt-4">
                           <Col lg="2" md="4" className=" text-center">
                              <p className="bg-primary pt-5 pb-5 text-center rounded"></p>
                              <h6>Primary</h6>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="bg-secondary pt-5 pb-5 text-center rounded"></p>
                              <h6>Secondary</h6>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="bg-success pt-5 pb-5 text-center rounded"></p>
                              <h6>Success</h6>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="bg-danger pt-5 pb-5 text-center rounded"></p>
                              <h6>Danger</h6>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="bg-warning pt-5 pb-5 text-center rounded"></p>
                              <h6>Warning</h6>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="bg-info pt-5 pb-5 text-center rounded"></p>
                              <h6>Info</h6>
                           </Col>
                           <Col lg="2" md="4" className=" text-center mt-4">
                              <p className="bg-light pt-5 pb-5 text-center rounded"></p>
                              <h6>Light</h6>
                           </Col>
                           <Col lg="2" md="4" className=" text-center mt-4">
                              <p className="bg-dark pt-5 pb-5 text-center rounded"></p>
                              <h6>Dark</h6>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Color</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>
                        <Row className="mt-4">
                           <Col lg="2" md="4" className=" text-center">
                              <p className="iq-bg-primary pt-5 pb-5 text-center rounded font-size-18">Primary</p>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="iq-bg-secondary pt-5 pb-5 text-center rounded font-size-18">Secondary</p>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="iq-bg-success pt-5 pb-5 text-center rounded font-size-18">Success</p>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="iq-bg-danger pt-5 pb-5 text-center rounded font-size-18">Danger</p>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="iq-bg-warning pt-5 pb-5 text-center rounded font-size-18">Warning</p>
                           </Col>
                           <Col lg="2" md="4" className=" text-center">
                              <p className="iq-bg-info pt-5 pb-5 text-center rounded font-size-18">Info</p>
                           </Col>
                           <Col lg="2" md="4" className=" text-center mt-4">
                              <p className="iq-bg-dark pt-5 pb-5 text-center rounded font-size-18">Dark</p>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Streamit Text Color</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong></p>
                        <p className="text-primary">.text-primary</p>
                        <p className="text-secondary">.text-secondary</p>
                        <p className="text-success">.text-success</p>
                        <p className="text-danger">.text-danger</p>
                        <p className="text-warning">.text-warning</p>
                        <p className="text-info">.text-info</p>
                        <p className="text-light bg-dark">.text-light</p>
                        <p className="text-dark">.text-dark</p>
                        <p className="text-muted">.text-muted</p>
                        <p className="text-white bg-dark mb-0">.text-white</p>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Streamit Text Color</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong></p>
                        <p><Link to="/" onClick={e => e.preventDefault()}  className="text-primary">Primary link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="text-secondary">Secondary link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="text-success">Success link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="text-danger">Danger link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="text-warning">Warning link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="text-info">Info link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="text-light bg-dark">Light link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="text-dark">Dark link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="text-muted">Muted link</Link></p>
                        <p className="mb-0"><Link to="/" onClick={e => e.preventDefault()} className="text-white bg-dark">White link</Link></p>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Streamit Text Color</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong></p>
                        <p className="iq-bg-primary pl-3 pr-3 pt-2 pb-2 rounded">Primary link</p>
                        <p className="iq-bg-secondary pl-3 pr-3 pt-2 pb-2 rounded">Secondary link</p>
                        <p className="iq-bg-success pl-3 pr-3 pt-2 pb-2 rounded">Success link</p>
                        <p className="iq-bg-danger pl-3 pr-3 pt-2 pb-2 rounded">Danger link</p>
                        <p className="iq-bg-warning pl-3 pr-3 pt-2 pb-2 rounded">Warning link</p>
                        <p className="iq-bg-info pl-3 pr-3 pt-2 pb-2 rounded">iq-bg-Info link</p>
                        <p className="iq-bg-dark pl-3 pr-3 pt-2 pb-2 rounded mb-0">Dark link</p>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title"> Text Color</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> class has no additional link styling beyond underline.</strong></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="iq-bg-primary pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Primary link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="iq-bg-secondary pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Secondary link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="iq-bg-success pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Success link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="iq-bg-danger pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Danger link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="iq-bg-warning pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Warning link</Link></p>
                        <p><Link to="/" onClick={e => e.preventDefault()} className="iq-bg-info pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">bg-Info link</Link></p>
                        <p className="mb-0"><Link to="/" onClick={e => e.preventDefault()} className="iq-bg-dark pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Dark link</Link></p>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiColors;