import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import Card  from '../../../components/Card'

//img
import success from '../../../assets/images/page-img/img-success.png'

const SimpleWizard = () => { 
    const [show, AccountShow] = useState('A');
    return (
        <> 
            <Container fluid>
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <Card.Header.Title>
                                    <h4 className="card-title">Simple Wizard</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form id="form-wizard1" className="text-center mt-4">
                                    <ul id="top-tab-list" className="p-0">
                                        <li className={ ` ${show === 'Image' ? 'active done' : ''} ${show === 'Personal' ? 'active done' : ''} ${show === 'Account' ? 'active done' : ''} ${show === 'A' ? 'active ' : ''} active`} id="account">
                                            <Link to="">
                                                <i className="ri-lock-unlock-line"></i><span>Account</span>
                                            </Link>
                                        </li>
                                        <li id="personal" className={`${show === 'Image' ? 'active done' : ''} ${show === 'Personal' ? 'active done' : ''} ${show === 'Account' ? 'active done' : ''} `}>
                                            <Link to="">
                                                <i className="ri-user-fill"></i><span>Personal</span>
                                            </Link>
                                        </li>
                                        <li id="payment" className={` ${show === 'Image' ? 'active done': ''} ${show === 'Personal' ? 'active done' : ''}`}>
                                            <Link to="">
                                                <i className="ri-camera-fill"></i><span>Image</span>
                                            </Link>
                                        </li>
                                        <li id="confirm" className={` ${show === 'Image' ? 'active done' : ''}`}>
                                            <Link to="">
                                                <i className="ri-check-fill"></i><span>Finish</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
                                    <div className="form-card text-left">
                                        <Row>
                                            <div className="col-7">
                                                <h3 className="mb-4">Account Information:</h3>
                                            </div>
                                            <div className="col-5">
                                                <h2 className="steps">Step 1 - 4</h2>
                                            </div>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <Form.Group className="form-group">
                                                <label>Email: *</label>
                                                <Form.Control type="email" name="email" placeholder="Email Id" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group className="form-group">
                                                    <label>Username: *</label>
                                                    <Form.Control type="text" name="uname" placeholder="UserName" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group className="form-group">
                                                <label>Password: *</label>
                                                <Form.Control type="password" name="pwd" placeholder="Password" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group className="form-group">
                                                    <label>Confirm Password: *</label>
                                                    <Form.Control type="password" name="cpwd" placeholder="Confirm Password" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Button type="button" name="next" variant="primary next action-button float-right" value="Next" onClick={() => AccountShow('Account')} >Next</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Account' ? 'd-block' : 'd-none'}`}>
                                    <div className="form-card text-left">
                                        <Row>
                                            <div className="col-7">
                                                <h3 className="mb-4">Personal Information:</h3>
                                            </div>
                                            <div className="col-5">
                                                <h2 className="steps">Step 2 - 4</h2>
                                            </div>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <Form.Group className="form-group">
                                                    <label>First Name: *</label>
                                                    <Form.Control type="text" name="fname" placeholder="First Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group className="form-group">
                                                    <label>Last Name: *</label>
                                                    <Form.Control type="text" name="lname" placeholder="Last Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group className="form-group">
                                                    <label>Contact No.: *</label>
                                                    <Form.Control type="text" name="phno" placeholder="Contact No." />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group className="form-group">
                                                    <label>Alternate Contact No.: *</label>
                                                    <Form.Control type="text" name="phno_2" placeholder="Alternate Contact No." />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Button type="button" name="next" variant="primary next action-button float-right" value="Next" onClick={() => AccountShow('Personal')} >Next</Button>
                                    <Button type="button" name="previous" variant="dark previous action-button-previous float-right mr-3" value="Previous" onClick={() => AccountShow('A')}>Previous</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Personal' ? 'd-block' : 'd-none'}`}>
                                    <div className="form-card text-left">
                                        <Row>
                                            <div className="col-7">
                                                <h3 className="mb-4">Image Upload:</h3>
                                            </div>
                                            <div className="col-5">
                                                <h2 className="steps">Step 3 - 4</h2>
                                            </div>
                                        </Row>
                                        <div className="form-group">
                                            <label>Upload Your Photo:</label>
                                            <input type="file" className="form-control" name="pic" accept="image/*"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Upload Signature Photo:</label>
                                            <input type="file" className="form-control" name="pic-2" accept="image/*"/>
                                        </div>
                                    </div>
                                    <Button type="button" name="next" variant="btn btn-primary next action-button float-right" value="Submit" onClick={() => AccountShow('Image')} >Submit</Button>
                                    <Button type="button" name="previous" variant="btn btn-dark previous action-button-previous float-right mr-3" value="Previous" onClick={() => AccountShow('Account')} >Previous</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
                                    <div className="form-card">
                                        <Row>
                                            <div className="col-7">
                                                <h3 className="mb-4 text-left">Finish:</h3>
                                            </div>
                                            <div className="col-5">
                                                <h2 className="steps">Step 4 - 4</h2>
                                            </div>
                                        </Row>
                                        <br/><br/>
                                        <h2 className="text-success text-center"><strong>SUCCESS !</strong></h2>
                                        <br/>
                                        <Row className="justify-content-center">
                                            <div className="col-3"><img src={success} className="fit-image" alt=""/></div>
                                        </Row>
                                        <br/><br/>
                                        <Row className="justify-content-center">
                                            <div className="col-7 text-center">
                                                <h5 className="purple-text text-center">You Have Successfully Signed Up</h5>
                                            </div>
                                        </Row>
                                    </div>
                                    </fieldset>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default SimpleWizard;