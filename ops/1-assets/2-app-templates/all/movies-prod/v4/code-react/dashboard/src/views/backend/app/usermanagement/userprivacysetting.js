import React from 'react'
import { Container ,Row, Col,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../../components/Card'

const UserPrivacySetting = () => {
    return (
    <>
      <Container fluid>
         <Row>
            <Col lg="12">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Privacy Setting</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="acc-privacy">
                        <div className="data-privacy">
                           <h4 className="mb-2">Account Privacy</h4>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="acc-private"/>
                              <Form.Check.Label className="custom-control-label privacy-status mb-2" htmlFor="acc-private">Private Account</Form.Check.Label>
                           </div>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2">Activity Status</h4>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="activety" defaultChecked/>
                              <Form.Check.Label className="custom-control-label privacy-status mb-2" htmlFor="activety">Show Activity Status</Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2"> Story Sharing </h4>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="story" defaultChecked/>
                              <Form.Check.Label className="custom-control-label privacy-status mb-2" htmlFor="story">Allow Sharing</Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2"> Photo Of You </h4>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="automatically" name="customRadio0" className="custom-control-input" defaultChecked />
                              <Form.Check.Label className="custom-control-label" htmlFor="automatically"> Add Automatically</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio mb-2">
                              <Form.Check.Input type="radio" id="manualy" name="customRadio0" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="manualy"> Add Manualy</Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2"> Your Profile </h4>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="public" name="customRadio1" className="custom-control-input" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="public"> Public </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="friend" name="customRadio1" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="friend"> Friend </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="spfriend" name="customRadio1" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="spfriend"> Specific Friend </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio mb-2">
                              <Form.Check.Input type="radio" id="onlyme" name="customRadio1" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="onlyme"> Only Me </Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2"> Login Notification </h4>
                           <div className="custom-control custom-radio">
                              <Form.Check.Input type="radio" id="enable" name="customRadio2" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="enable"> Enable </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio mb-2">
                              <Form.Check.Input type="radio" id="disable" name="customRadio2" className="custom-control-input" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="disable"> Disable </Form.Check.Label>
                           </div>
                           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                        <hr/>
                        <div className="data-privacy">
                           <h4 className="mb-2">Privacy Help</h4>
                           <Link to="#"><i className="ri-customer-service-2-line mr-2"></i>Support</Link>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
    </>
    )
}

export default UserPrivacySetting