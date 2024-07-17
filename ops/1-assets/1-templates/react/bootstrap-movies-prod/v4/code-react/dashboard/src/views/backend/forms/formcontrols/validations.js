import React,{useState} from 'react'
import {Container,Row,Col,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'


const Validations = () => {
    

   //form validation
   const [validated, setValidated] = useState(false);

   const handleSubmit = (event) => {
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }
     setValidated(true);
   };
   const [validated1, setValidated1] = useState(false);

   const handleSubmit1 = (event) => {
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }
     setValidated1(true);
   };
    return (
        <>
     <Container fluid>
         <Row>
            <Col sm="12" lg="6">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title"> Default Validation</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <Form>
                        <div className="form-row">
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationDefault01">First name</Form.Label>
                              <Form.Control type="text" id="validationDefault01" required/>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationDefault02">Last name</Form.Label>
                              <Form.Control type="text"  id="validationDefault02" required/>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationDefaultUsername">Username</Form.Label>
                              <div className="input-group">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                 </div>
                                 <Form.Control type="text"  id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationDefault03">City</Form.Label>
                              <Form.Control type="text"  id="validationDefault03" required/>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationDefault04">State</Form.Label>
                              <select className="form-control" id="validationDefault04" required>
                                 <option defaultValue disabled>Choose...</option>
                                 <option>...</option>
                              </select>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationDefault05">Zip</Form.Label>
                              <Form.Control type="text"  id="validationDefault05" required/>
                           </div>
                        </div>
                        <Form.Group>
                           <Form.Check>
                              <Form.Check.Input type="checkbox" defaultValue="" id="invalidCheck2" required/>
                              <Form.Check.Label  htmlFor="invalidCheck2">
                                 Agree to terms and conditions
                              </Form.Check.Label>
                           </Form.Check>
                        </Form.Group>
                        <Form.Group>
                           <button className="btn btn-primary" type="submit">Submit form</button>
                        </Form.Group>
                     </Form>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title"> Supported elements</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <Form className="was-validated" validated>
                        <div className="mb-3">
                           <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                           <Form.Control type="textarea" className="is-invalid" id="validationTextarea" placeholder="Required example textarea" required/>
                           <Form.Control.Feedback  className="invalid-feedback">
                              Please enter a message in the textarea.
                           </Form.Control.Feedback>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                           <input type="checkbox" className="custom-control-input" id="customControlValidation1" required/>
                           <Form.Label className="custom-control-label" htmlFor="customControlValidation1">Check this custom checkbox</Form.Label>
                           <Form.Control.Feedback className="invalid">Example invalid feedback text</Form.Control.Feedback>
                        </div>
                        <div className="custom-control custom-radio">
                           <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required/>
                           <Form.Label className="custom-control-label" htmlFor="customControlValidation2">Toggle this custom radio</Form.Label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                           <input type="radio" className="custom-control-input" id="customControlValidation3" name="radio-stacked" required/>
                           <Form.Label className="custom-control-label" htmlFor="customControlValidation3">Or toggle this other custom radio</Form.Label>
                           <Form.Control.Feedback className="invalid">More example invalid feedback text</Form.Control.Feedback>
                        </div>
                        <Form.Group>
                           <select className="custom-select" required>
                              <option defaultValue="">Open this select menu</option>
                              <option defaultValue="1">One</option>
                              <option defaultValue="2">Two</option>
                              <option defaultValue="3">Three</option>
                           </select>
                           <Form.Control.Feedback className="invalid">Example invalid custom select feedback</Form.Control.Feedback>
                        </Form.Group>
                        <div className="custom-file">
                           <input type="file" className="custom-file-input" id="validatedCustomFile" required/>
                           <Form.Label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</Form.Label>
                           <Form.Control.Feedback className="invalid">Example invalid custom file feedback</Form.Control.Feedback>
                        </div>
                     </Form>
                  </Card.Body>
               </Card>
            </Col>
            <Col sm="12" lg="6">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Custom Validation</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <Form className="needs-validation" noValidate validated={validated} onClick={handleSubmit}>
                        <div className="form-row">
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationCustom01">First name</Form.Label>
                              <Form.Control type="text" id="validationCustom01"  required/>
                              <div className="invalid-feedback">
                                 Looks good!
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
                              <Form.Control type="text" id="validationCustom02"  required/>
                              <div className="invalid-feedback">
                                 Looks good!
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
                              <div className="input-group">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                 </div>
                                 <Form.Control type="text" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                                 <div className="invalid-feedback">
                                    Please choose a username.
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationCustom03">City</Form.Label>
                              <Form.Control type="text" id="validationCustom03" required />
                              <div className="invalid-feedback">
                                 Please provide a valid city.
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationCustom04">State</Form.Label>
                              <select className="form-control" id="validationCustom04" required>
                                 <option defaultChecked disabled defaultValue>Choose...</option>
                                 <option>...</option>
                              </select>
                              <div className="invalid-feedback">
                                 Please select a valid state.
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
                              <Form.Control type="text"  id="validationCustom05" required/>
                              <div className="invalid-feedback" >
                                 Please provide a valid zip.
                              </div>
                           </div>
                        </div>
                        <Form.Group>
                           <Form.Check>
                              <Form.Check.Input type="checkbox" defaultValue="" id="invalidCheck" required/>
                              <Form.Check.Label htmlFor="invalidCheck">
                                 Agree to terms and conditions
                              </Form.Check.Label>
                              <Form.Control.Feedback>
                                 You must agree before submitting.
                              </Form.Control.Feedback>
                           </Form.Check>
                        </Form.Group>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                     </Form>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Tooltips</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <Form className="needs-validation"  validated={validated1} onClick={handleSubmit1} noValidate>
                        <div className="form-row">
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationTooltip01">First name</Form.Label>
                              <Form.Control type="text" id="validationTooltip01" defaultValue="Mark" required/>
                              <Form.Control.Feedback tooltip>
                                 Looks good!
                              </Form.Control.Feedback>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationTooltip02">Last name</Form.Label>
                              <Form.Control type="text"  id="validationTooltip02" defaultValue="Tech" required/>
                              <Form.Control.Feedback tooltip>
                                 Looks good!
                              </Form.Control.Feedback>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationTooltipUsername">Username</Form.Label>
                              <div className="input-group">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                 </div>
                                 <Form.Control type="text"  id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
                                 <div className="invalid-tooltip">
                                    Please choose a unique and valid username.
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationTooltip03">City</Form.Label>
                              <Form.Control type="text"  id="validationTooltip03" required/>
                              <div className="invalid-tooltip">
                                 Please provide a valid city.
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationTooltip04">State</Form.Label>
                              <select className="form-control" id="validationTooltip04" required>
                                 <option defaultChecked disabled>Choose...</option>
                                 <option>...</option>
                              </select>
                              <Form.Control.Feedback tooltip>
                                 Please select a valid state.
                              </Form.Control.Feedback>
                           </div>
                           <div className="col-md-6 mb-3">
                              <Form.Label htmlFor="validationTooltip05">Zip</Form.Label>
                              <Form.Control type="text"  id="validationTooltip05" required/>
                              <div className="invalid-tooltip">
                                 Please provide a valid zip.
                              </div>
                           </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                     </Form>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
        </>
    )
}
export default Validations;