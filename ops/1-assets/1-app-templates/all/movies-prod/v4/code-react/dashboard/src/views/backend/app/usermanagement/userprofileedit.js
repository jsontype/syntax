import React from 'react'
import { Container, Row, Col, Tab, Form,Button, Nav } from 'react-bootstrap'
import Card from '../../../../components/Card'
import {Link} from 'react-router-dom'

//img 
import user1 from '../../../../assets/images/user/1.jpg'

const UserProfileEdit = () => {

    return (
        <>
            <Container fluid>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col lg="12">
                            <Card>
                                <Card.Body className="iq-card-body p-0">
                                    <div className="iq-edit-list">
                                        <Nav as="ul" variant="pills" className="iq-edit-profile d-flex">
                                            <Nav.Item as="li" className="col-md-3 p-0">
                                                <Nav.Link  eventKey="first" role="button">
                                                    Personal Information
                                                </Nav.Link>
                                            </Nav.Item>            
                                            <Nav.Item as="li" className="col-md-3 p-0">
                                                <Nav.Link eventKey="second" role="button">
                                                    Change Password
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" className="col-md-3 p-0">
                                                <Nav.Link  eventKey="third" role="button">
                                                    Email and SMS
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" className="col-md-3 p-0">
                                                <Nav.Link eventKey="fourth" role="button">
                                                    Manage Contact
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="12">
                                <Tab.Content >
                                    <Tab.Pane eventKey="first" className="fade show">
                                        <Card>
                                            <Card.Header>
                                                <Card.Header.Title>
                                                    <h4 className="card-title">Personal Information</h4>
                                                </Card.Header.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form>
                                                    <div className="form-group row align-items-center">
                                                        <div className="col-md-12">
                                                            <div className="profile-img-edit">
                                                                <img className="profile-pic avatar-80 img-fluid" src={user1} alt="profile-pic" style={{height: "150px", width: "150px"}}/>
                                                                <div className="p-image">
                                                                    <i className="ri-pencil-line upload-button"></i>
                                                                    <input className="file-upload" type="file" accept="image/*"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Row className=" align-items-center">
                                                        <Form.Group controlId="fname" as={Col} sm="6">
                                                            <Form.Label>First Name:</Form.Label>
                                                            <Form.Control type="text" defaultValue="Barry" />
                                                        </Form.Group>
                                                        <Form.Group controlId="lname" as={Col} sm="6">
                                                            <Form.Label>Last Name:</Form.Label>
                                                            <Form.Control type="text" defaultValue="Tech" />
                                                        </Form.Group>
                                                        <Form.Group controlId="uname" as={Col} sm="6">
                                                            <Form.Label>User Name:</Form.Label>
                                                            <Form.Control type="text" defaultValue="Barry@01" />
                                                        </Form.Group>
                                                        <Form.Group controlId="cname" as={Col} sm="6">
                                                            <Form.Label>City:</Form.Label>
                                                            <Form.Control type="text" defaultValue="Atlanta" />
                                                        </Form.Group>
                                                        <Form.Group as={Col} sm="6">
                                                            <Form.Label bsPrefix="d-block">Gender:</Form.Label>
                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                <Form.Check.Input type="radio" id="customRadio6" name="customRadio1" bsPrefix="custom-control-input" defaultChecked />
                                                                <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio6"> Male </Form.Check.Label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                <Form.Check.Input type="radio" id="customRadio7" name="customRadio1" bsPrefix="custom-control-input" />
                                                                <Form.Check.Label bsPrefix="custom-control-label" htmlFor="customRadio7"> Female </Form.Check.Label>
                                                            </div>
                                                        </Form.Group>
                                                        <Form.Group as={Col} sm="6" controlId="dob">
                                                            <Form.Label>Date Of Birth:</Form.Label>
                                                            <Form.Control defaultValue="1984-01-24" />
                                                        </Form.Group>
                                                        <Form.Group as={Col} sm="6" controlId="exampleFormControlSelect1">
                                                            <Form.Label>Marital Status:</Form.Label>
                                                            <Form.Control as="select">
                                                                <option defaultValue="">Single</option>
                                                                <option>Married</option>
                                                                <option>Widowed</option>
                                                                <option>Divorced</option>
                                                                <option>Separated </option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group as={Col} sm="6" controlId="exampleFormControlSelect2">
                                                            <Form.Label>Age:</Form.Label>
                                                            <Form.Control as="select">
                                                                <option>12-18</option>
                                                                <option>19-32</option>
                                                                <option defaultValue="33-45">33-45</option>
                                                                <option>46-62</option>
                                                                <option>63</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group as={Col} controlId="exampleFormControlSelect3" sm="6">
                                                            <Form.Label>Country:</Form.Label>
                                                            <Form.Control as="select">
                                                                <option>Caneda</option>
                                                                <option>Noida</option>
                                                                <option defaultValue="">USA</option>
                                                                <option>India</option>
                                                                <option>Africa</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group as={Col} controlId="exampleFormControlSelect4" sm="6">
                                                            <Form.Label>State:</Form.Label>
                                                            <Form.Control as="select">
                                                                <option>California</option>
                                                                <option>Florida</option>
                                                                <option defaultValue="">Georgia</option>
                                                                <option>Connecticut</option>
                                                                <option>Louisiana</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group as={Col} sm="12">
                                                            <Form.Label>Address:</Form.Label>
                                                            <Form.Control as="textarea" name="address" defaultValue="37 Cardinal Lane
                                                                Petersburg, VA 23803
                                                                United States of America
                                                                Zip Code: 85001"  rows="5" style={{ lineHeight: "22px" }}>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Row>
                                                    <Button type="submit" variant="primary" className="mr-2">Submit</Button>
                                                    <Button type="reset" variant="mr-2" className="iq-bg-danger">Cancel</Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="fade show">
                                        <Card>
                                            <Card.Header>
                                                <Card.Header.Title>
                                                    <h4 className="card-title">Change Password</h4>
                                                </Card.Header.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form>
                                                    <Form.Group controlId="cpass">
                                                        <Form.Label>Current Password:</Form.Label>
                                                        <Link to="/" onClick={ e => e.preventDefault()}  className="float-right">Forgot Password</Link>
                                                        <Form.Control  type="Password" />
                                                    </Form.Group>
                                                    <Form.Group controlId="npass">
                                                        <Form.Label>New Password:</Form.Label>
                                                        <Form.Control type="Password" />
                                                    </Form.Group>
                                                    <Form.Group controlId="vpass">
                                                        <Form.Label>Verify Password:</Form.Label>
                                                        <Form.Control type="Password" />
                                                    </Form.Group>
                                                    <Button type="submit" variant="primary" className="mr-2">Submit</Button>
                                                    <Button type="reset" variant="mr-2" className="iq-bg-danger">Cancel</Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className="fade show">
                                        <Card>
                                            <Card.Header>
                                                <Card.Header.Title>
                                                    <h4 className="card-title">Email and SMS</h4>
                                                </Card.Header.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form>
                                                    <Form.Group as={Row} className="align-items-center" controlId="emailnotification">
                                                        <Form.Label className="col-md-3">Email Notification:</Form.Label>
                                                        <div className="col-md-9 custom-control custom-switch">
                                                            <Form.Check.Input  bsPrefix="custom-control-input"  defaultChecked />
                                                            <Form.Label bsPrefix="custom-control-label"></Form.Label>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="align-items-center" controlId="smsnotification">
                                                        <Form.Label bsPrefix="col-md-3">SMS Notification:</Form.Label>
                                                        <div className="col-md-9 custom-control custom-switch">
                                                            <Form.Check.Input  bsPrefix="custom-control-input" defaultChecked />
                                                            <Form.Label bsPrefix="custom-control-label"></Form.Label>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="align-items-center">
                                                        <Form.Label bsPrefix="col-md-3" htmlFor="npass">When To Email</Form.Label>
                                                        <div className="col-md-9">
                                                            <div className="custom-control custom-checkbox">
                                                                <Form.Check.Input  bsPrefix="custom-control-input" id="email01" />
                                                                <Form.Label bsPrefix="custom-control-label" htmlFor="email01">You have new notifications.</Form.Label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <Form.Check.Input  bsPrefix="custom-control-input" id="email02" />
                                                                <Form.Label bsPrefix="custom-control-label" htmlFor="email02">You're sent a direct message</Form.Label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <Form.Check.Input  bsPrefix="custom-control-input" id="email03" defaultChecked />
                                                                <Form.Label bsPrefix="custom-control-label" htmlFor="email03">Someone adds you as a connection</Form.Label>
                                                            </div>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="align-items-center">
                                                        <Form.Label bsPrefix="col-md-3" htmlFor="npass">When To Escalate Emails</Form.Label>
                                                        <div className="col-md-9">
                                                            <div className="custom-control custom-checkbox">
                                                                <Form.Check.Input bsPrefix="custom-control-input" id="email04" />
                                                                <Form.Label bsPrefix="custom-control-label" htmlFor="email04"> Upon new order.</Form.Label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <Form.Check.Input bsPrefix="custom-control-input" id="email05" />
                                                                <Form.Label bsPrefix="custom-control-label" htmlFor="email05"> New membership approval</Form.Label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <Form.Check.Input bsPrefix="custom-control-input" id="email06" defaultChecked />
                                                                <Form.Label bsPrefix="custom-control-label" htmlFor="email06"> Member registration</Form.Label>
                                                            </div>
                                                        </div>
                                                    </Form.Group>
                                                    <Button type="submit" variant="primary" className="mr-2">Submit</Button>
                                                    <Button type="reset" variant="mr-2" className="iq-bg-danger">Cancel</Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth" className="fade show">
                                        <Card>
                                            <Card.Header>
                                                <Card.Header.Title>
                                                    <h4 className="card-title">Manage Contact</h4>
                                                </Card.Header.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form>
                                                    <Form.Group controlId="cno">
                                                        <Form.Label>Contact Number:</Form.Label>
                                                        <Form.Control type="text" defaultValue="001 2536 123 458" />
                                                    </Form.Group>
                                                    <Form.Group controlId="email">
                                                        <Form.Label>Email:</Form.Label>
                                                        <Form.Control type="text" defaultValue="Barryjone@demo.com" />
                                                    </Form.Group>
                                                    <Form.Group controlId="url">
                                                        <Form.Label>Url:</Form.Label>
                                                        <Form.Control type="text" defaultValue="https://getbootstrap.com" />
                                                    </Form.Group>
                                                    <Button type="submit" variant="primary" className="mr-2">Submit</Button>
                                                    <Button type="reset" variant="mr-2" className="iq-bg-danger">Cancel</Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    )
}

export default UserProfileEdit