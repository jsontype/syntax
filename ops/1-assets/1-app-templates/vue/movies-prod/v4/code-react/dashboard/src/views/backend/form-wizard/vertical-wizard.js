import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import {Container,Row,Col,Form,Button,Image} from 'react-bootstrap'
import Card  from '../../../components/Card'


//img
import image1 from '../../../assets/images/page-img/img-success.png'

const VerticalWizard = () => { 
    const [show, AccountShow] = useState('A');
    return (
        <> 
            <Container fluid>
                <Row>
                    <col-sm-12 lg="12">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Vertical Wizard</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md="3">
                                <ul id="top-tabbar-vertical" className="p-0">
                                    <li className={` ${show === 'A' ? 'active done' : ''} ${show === 'Account' ? 'active done' : ''} ${show === 'Personal' ? 'active done' : ''}  active step1`} id="personal">
                                        <Link to="#">
                                            <i className="ri-lock-unlock-line text-primary"></i><span>Personal</span>
                                        </Link>
                                    </li>
                                    <li id="contact" className={` ${show === 'Account' ? 'active done' : ''} ${show === 'Personal' ? 'active done' : ''} ${show === 'Image' ? 'active done' : ''} step2`}>
                                        <Link to="#">
                                            <i className="ri-user-fill text-danger"></i><span>Contact</span>
                                        </Link>
                                    </li>
                                    <li id="official" className={` ${show === 'Personal' ? 'active done' : ''} ${show === 'Image' ? 'active done' : ''} step3`}>
                                        <Link to="#">
                                            <i className="ri-camera-fill text-success"></i><span>Official</span>
                                        </Link>
                                    </li>
                                    <li id="payment" className={` ${show === 'Image' ? 'active done' : ''} step4`}>
                                        <Link to="#">
                                            <i className="ri-check-fill text-warning"></i><span>Payment</span>
                                        </Link>
                                    </li>
                                </ul>
                                </Col>
                                <Col md="9">
                                <Form id="form-wizard3" className="text-center">
                                    <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-left">
                                            <Row>
                                            <div className="col-12">
                                                <h3 className="mb-4">User Information:</h3>
                                            </div>
                                            </Row>
                                            <Row>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="fname">First Name: *</label>
                                                    <Form.Control type="text" id="fname" name="fname" placeholder="First Name" required="required" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="lname">Last Name: *</label>
                                                    <Form.Control type="text" id="lname" name="lname" placeholder="Last Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label>Gender: *</label>
                                                    <Form.Check>
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                                        <label className="custom-control-label" htmlFor="customRadio1"> Male</label>
                                                        </div>
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                                        <label className="custom-control-label" htmlFor="customRadio2"> Female</label>
                                                        </div>
                                                    </Form.Check>
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="dob">Date Of Birth: *</label>
                                                    <Form.Control type="text" className="date-input basicFlatpickr" id="dob" placeholder="Selete Date" />
                                                </Form.Group>
                                            </Col>
                                            </Row>
                                        </div>
                                        <Button id="submit" type="button" name="next" variant="primary next action-button float-right" value="Next" onClick={() => AccountShow('Account')}>Next</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Account' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-left">
                                            <Row>
                                            <div className="col-12">
                                                <h3 className="mb-4">Contact Information:</h3>
                                            </div>
                                            </Row>
                                            <Row>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="email">Email Id: *</label>
                                                    <Form.Control type="email" id="email" name="email" placeholder="Email Id" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="ccno">Contact Number: *</label>
                                                    <Form.Control type="text" id="ccno" name="ccno" placeholder="Contact Number" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="city">City: *</label>
                                                    <Form.Control type="text" id="city" name="city" placeholder="City." />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="state">State: *</label>
                                                    <Form.Control type="text" id="state" name="state" placeholder="State." />
                                                </Form.Group>
                                            </Col>
                                            </Row>
                                        </div>
                                        <Button type="button" name="next" variant="primary next action-button float-right" value="Next" onClick={() => AccountShow('Personal')}>Next</Button>
                                        <Button type="button" name="previous" variant="dark previous action-button-previous float-right mr-3" value="Previous" onClick={() => AccountShow('A')}>Previous</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Personal' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-left">
                                            <Row>
                                            <div className="col-12">
                                                <h3 className="mb-4">Official Information:</h3>
                                            </div>
                                            </Row>
                                            <Row>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="empid">Employee Id: *</label>
                                                    <Form.Control type="email" id="empid" name="empid" placeholder="Employee Id." />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="desg">Designation: *</label>
                                                    <Form.Control type="text" id="desg" name="desg" placeholder="Designation." />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="accname">Departmrnt Name: *</label>
                                                    <Form.Control type="text" id="accname" name="accname" placeholder="Departmrnt Name." />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="workhour">Working Hour: *</label>
                                                    <Form.Control type="text" id="workhour" name="workhour" placeholder="Working Hour." />
                                                </Form.Group>
                                            </Col>
                                            </Row>
                                        </div>
                                        <Button type="button" name="next" variant="primary next action-button float-right" value="Submit" onClick={() => AccountShow('Image')}>Next</Button>
                                        <Button type="button" name="previous" variant="dark previous action-button-previous float-right mr-3" value="Previous" onClick={() => AccountShow('Account')}>Previous</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-left">
                                            <Row>
                                            <div className="col-12">
                                                <h3 className="mb-4 text-left">Payment:</h3>
                                            </div>
                                            </Row>
                                            <Row>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="panno">Pan No: *</label>
                                                    <Form.Control type="text" id="panno" name="panno" placeholder="Pan No." />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="accno">Account No: *</label>
                                                    <Form.Control type="text" id="accno" name="accno" placeholder="Account No." />
                                                </Form.Group>   
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="holname">Account Holder Name: *</label>
                                                    <Form.Control type="text" id="holname" name="accname" placeholder="Account Holder Name." />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label htmlFor="ifsc">IFSC Code: *</label>
                                                    <Form.Control type="text" id="ifsc" name="ifsc" placeholder="IFSC Code." />
                                                </Form.Group>
                                            </Col>
                                            </Row>
                                        </div>
                                        <Button variant="secondary" className="primary next action-button float-right" data-enchanter="previous" onClick={() => AccountShow('Success')}>Submit</Button>
                                        <Button variant="primary" className="dark previous action-button-previous float-right mr-3" data-enchanter="next" onClick={() => AccountShow('Personal')}>Previous</Button>
                                    </fieldset>
                                    <fieldset className={` ${show === 'Success' ? 'd-block' : 'd-none'} row show fade`}>
                                        <Col sm="12">
                                            <Col md="12" className="p-0">
                                                <h3 className="mb-4 text-left">Finish:</h3>
                                                <Row className="justify-content-center">
                                                    <div className="col-3"> 
                                                        <Image src={image1} className="img-fluid" alt="img-success"/> 
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Col>
                                    </fieldset> 
                                </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    </col-sm-12>
                </Row>
            </Container>
        </>
    )
}
export default VerticalWizard;