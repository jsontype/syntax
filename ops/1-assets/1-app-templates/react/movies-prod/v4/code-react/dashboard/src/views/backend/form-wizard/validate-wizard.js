
import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import Card  from '../../../components/Card'

//img
import success from '../../../assets/images/page-img/img-success.png'

const ValidateWizard = () => { 
    const [show, AccountShow] = useState('A');
    return (
        <> 
            <Container fluid>
               <Row>
                  <Col sm="12" lg="12">
                     <Card>
                        <Card.Header>
                           <Card.Header.Title>
                              <h4 className="card-title">Validate Wizard</h4>
                           </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                           <div className="stepwizard mt-4">
                              <div className="stepwizard-row setup-panel">
                                 <div id="user" className={ ` ${show === 'Image' ? 'active done' : ''} ${show === 'Personal' ? 'active done' : ''} ${show === 'Account' ? 'active done' : ''} ${show === 'A' ? 'active ' : ''} active wizard-step `}>
                                    <Link to="#user-detail" className={` ${show === 'A' ? 'active' : ''} btn`}>
                                    <i className="ri-lock-unlock-line text-primary"></i><span>User Detail</span>
                                    </Link>
                                 </div>
                                 <div id="document" className={`${show === 'Image' ? 'active done' : ''} ${show === 'Personal' ? 'active done' : ''} ${show === 'Account' ? 'active done' : ''} wizard-step `} >
                                    <Link to="#document-detail" className={` ${show === 'Account' ? 'active done' : ''} btn`}>
                                    <i className="ri-user-fill text-danger"></i><span>Document Detail</span>
                                    </Link>
                                 </div>
                                 <div id="bank" className={` ${show === 'Image' ? 'active done': ''} ${show === 'Personal' ? 'active done' : ''} wizard-step`}>
                                    <Link to="#bank-detail" className={` ${show === 'Personal' ? 'active done' : ''}  btn`}>
                                    <i className="ri-camera-fill text-success"></i><span>Bank Detail</span>
                                    </Link>
                                 </div>
                                 <div id="confirm" className={` ${show === 'Image' ? 'active done' : ''} wizard-step`}>
                                    <Link to="#cpnfirm-data" className={` ${show === 'Image' ? 'active done' : ''} btn`}>
                                    <i className="ri-check-fill text-warning"></i><span>Confirm</span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                           <Form>
                              <Row className={` ${show === 'A' ? 'd-block' : 'd-none'} setup-content`} id="user-detail">
                                 <Col sm="12">
                                    <Col md="12" className="p-0">
                                       <h3 className="mb-4">User Information:</h3>
                                       <Row>
                                          <Col md="6" className="form-group">
                                             <label className="control-label">First Name</label>
                                             <Form.Control maxLength="100" type="text" required="required" placeholder="Enter First Name"  />
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label className="control-label">Last Name</label>
                                             <Form.Control maxLength="100" type="text" required="required" placeholder="Enter Last Name" />
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="uname" className="control-label">User Name: *</label>
                                             <Form.Control type="text" id="uname" required="required" name="uname" placeholder="Enter User Name"></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="emailid" className="control-label">Email Id: *</label>
                                             <Form.Control type="email" id="emailid" required="required" name="emailid" placeholder="Email ID"></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="pwd" className="control-label">Password: *</label>
                                             <Form.Control type="password" required="required" id="pwd" name="pwd" placeholder="Password"></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="cpwd" className="control-label">Confirm Password: *</label>
                                             <Form.Control type="password" id="cpwd" required="required" name="cpwd" placeholder="Confirm Password"></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                            <label htmlFor="cno" className="control-label">Contact Number: *</label>
                                             <Form.Control type="text" required="required" id="cno" name="cno" placeholder="Contact Number"></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="acno" className="control-label">Alternate Contact Number: *</label>
                                             <Form.Control type="text" required="required" id="acno" name="acno" placeholder="Alternate Contact Number"></Form.Control>
                                          </Col>
                                          <Col md="12" className="mb-3 form-group">
                                             <label htmlFor="address" className="control-label">Address: *</label>
                                             <Form.Control as="textarea" name="address" id="address" rows="5" required="required"></Form.Control>
                                          </Col>
                                          <Col md="12" className="mb-3 form-group">
                                             <Button variant="primary nextBtn btn-lg float-right" type="button" onClick={() => AccountShow('Account')}>Next</Button>
                                          </Col>
                                       </Row>
                                    </Col>
                                 </Col>
                              </Row>
                              <Row className={` ${show === 'Account' ? 'd-block' : 'd-none'} setup-content`} id="document-detail">
                                 <Col sm="12">
                                    <Col md="12" className="p-0">
                                       <h3 className="mb-4">Document Details:</h3>
                                       <Row>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="fname" className="control-label">Company Name: *</label>
                                             <Form.Control type="text" required="required" id="fname" name="fname" placeholder="Company Name"></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <Form.Group>
                                                <label htmlFor="ccno" className="control-label">Contact Number: *</label>
                                                <Form.Control type="text" required="required" id="ccno" name="ccno" placeholder="Contact Number"></Form.Control>
                                             </Form.Group>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <Form.Group>
                                                <label htmlFor="url" className="control-label">Company Url: *</label>
                                                <Form.Control type="text" required="required" id="url" name="url" placeholder="Company Url."></Form.Control>
                                             </Form.Group>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <div className="form-group">
                                                <label htmlFor="cemail" className="control-label">Company Mail Id: *</label>
                                                <Form.Control type="email" required="required" id="cemail" name="cemail" placeholder="Company Mail Id."></Form.Control>
                                             </div>
                                          </Col>
                                          <Col md="12">
                                             <Form.Group>
                                                <label htmlFor="cadd" className="control-label">Company Address: *</label>
                                                <Form.Control as="textarea" name="cadd" required="required" id="cadd" rows="5"></Form.Control>
                                             </Form.Group>
                                          </Col>
                                          <Col md="12" className="form-group">
                                             <Button variant="primary nextBtn btn-lg float-right" type="button" onClick={() => AccountShow('Personal')}>Next</Button>
                                          </Col>
                                       </Row>
                                    </Col>
                                 </Col>
                              </Row>
                              <Row className={` ${show === 'Personal' ? 'd-block' : 'd-none'} setup-content`} id="bank-detail">
                                 <Col sm="12">
                                    <Col md="12" className="p-0">
                                       <h3 className="mb-4">Bank Detail:</h3>
                                       <Row>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="panno" className="control-label">Pan No: *</label>
                                             <Form.Control type="text" required="required" id="panno" name="panno" placeholder="Pan No."></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="accno" className="control-label">Account No: *</label>
                                             <Form.Control type="text" required="required" id="accno" name="accno" placeholder="Account No."></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="accname" className="control-label">Account Holder Name: *</label>
                                             <Form.Control type="text" required="required" id="accname" name="accname" placeholder="Account Holder Name."></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="ifsc" className="control-label">IFSC Code: *</label>
                                             <Form.Control type="text" required="required" id="ifsc" name="ifsc" placeholder="IFSC Code."></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="bankname" className="control-label">Bank Name: *</label>
                                             <Form.Control type="text" required="required" id="bankname" name="bankname" placeholder="Bank Name."></Form.Control>
                                          </Col>
                                          <Col md="6" className="form-group">
                                             <label htmlFor="branch" className="control-label">Bank Branch Name: *</label>
                                             <Form.Control type="text" required="required" id="branch" name="branch" placeholder="Bank Branch Name."></Form.Control>
                                          </Col>
                                          <Col md="12" className="form-group">
                                             <Button variant="primary nextBtn btn-lg float-right" type="button" onClick={() => AccountShow('Image')} >Next</Button>
                                          </Col>
                                       </Row>
                                    </Col>
                                 </Col>
                              </Row>
                              <Row className={` ${show === 'Image' ? 'd-block' : 'd-none'} setup-content`}id="cpnfirm-data">
                                 <Col sm="12">
                                    <Col md="12" className="p-0">
                                       <h3 className="mb-4 text-left">Finish:</h3>
                                       <Row className="justify-content-center">
                                          <div className="col-3"> <img src={success} className="fit-image" alt="img-success"/></div>
                                       </Row>
                                    </Col>
                                 </Col>
                              </Row>
                           </Form>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
        </>
    )
}
export default ValidateWizard;