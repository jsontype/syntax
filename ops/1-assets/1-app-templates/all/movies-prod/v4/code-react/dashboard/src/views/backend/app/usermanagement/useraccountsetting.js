import React from 'react'
import { Container ,Row, Col,Form,Button } from 'react-bootstrap'
import  Card from '../../../../components/Card'

const UserAccountSetting = () => {
    return (
    <>
       <Container fluid>
         <Row>
            <Col lg="6">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Account Setting</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="acc-edit">
                        <Form>
                           <Form.Group>
                              <Form.Label htmlFor="uname">User Name:</Form.Label>
                              <Form.Control type="text"  id="uname" defaultValue="Barry@01"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="email">Email Id:</Form.Label>
                              <Form.Control  type="email"  id="email" defaultValue="Barryjohn@gmail.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="altemail">Alternate Email:</Form.Label>
                              <Form.Control  type="email"  id="altemail" defaultValue="designtheme@gmail.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label className="d-block">Language Known:</Form.Label>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="english" defaultChecked/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="english">English</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="french" defaultChecked/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="french">French</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="hindi"/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="hindi">Hindi</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="spanish" defaultChecked/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="spanish">Spanish</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="arabic"/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="arabic">Arabic</Form.Check.Label>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="italian"/>
                                 <Form.Check.Label className="custom-control-label" htmlFor="italian">Italian</Form.Check.Label>
                              </div>
                           </Form.Group>
                           <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                           <Button type="reset" variant="btn iq-bg-danger">Cancel</Button>
                        </Form>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Social Media</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="acc-edit">
                        <Form>
                           <Form.Group>
                              <Form.Label htmlFor="facebook">Facebook:</Form.Label>
                              <Form.Control type="text"  id="facebook" defaultValue="www.facebook.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="twitter">Twitter:</Form.Label>
                              <Form.Control type="text"  id="twitter" defaultValue="www.twitter.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="google">Google +:</Form.Label>
                              <Form.Control type="text"  id="google" defaultValue="www.google.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="instagram">Instagram:</Form.Label>
                              <Form.Control type="text"  id="instagram" defaultValue="www.instagram.com"/>
                           </Form.Group>
                           <Form.Group>
                              <Form.Label htmlFor="youtube">You Tube:</Form.Label>
                              <Form.Control type="text"  id="youtube" defaultValue="www.youtube.com"/>
                           </Form.Group>
                           <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                           <Button type="reset" variant="btn iq-bg-danger">Cancel</Button>
                        </Form>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
    </>
    )
}

export default UserAccountSetting