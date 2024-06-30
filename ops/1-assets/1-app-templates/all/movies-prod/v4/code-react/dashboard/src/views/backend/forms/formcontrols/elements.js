import React from 'react'
import {Row, Col, Form, Button, Container} from 'react-bootstrap'
import  Card from '../../../../components/Card'

const Elements = () => {
  
    return (
        <>
           <Container fluid>
               <Row>
                  <Col sm="12" lg="6">
                     <Card>
                     <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Basic Form</h4>
                                </div>
                     </Card.Header>
                     <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="email">Email address:</Form.Label>
                                        <Form.Control type="email"  id="email1"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="pwd">Password:</Form.Label>
                                        <Form.Control type="password"  id="pwd"/>
                                    </Form.Group>
                                    <div className="checkbox mb-3">
                                        <Form.Check className="form-check ">
                                            <Form.Check.Input  type="checkbox" defaultValue="" id="flexCheckDefault3"/>
                                            <Form.Check.Label  htmlFor="flexCheckDefault3">
                                                Remember me
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                    <Button type="button" variant="btn btn-danger">cancel</Button>
                                </Form>
                        </Card.Body>
                     </Card>
                     <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Form Grid</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Row>
                                        <Col>
                                        <Form.Control type="text"  placeholder="First name"/>
                                        </Col>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Last name"/>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Input</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputText1">Input Text </Form.Label>
                                        <Form.Control type="text"  id="exampleInputText1" defaultValue="Mark Jhon" placeholder="Enter Name"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputEmail3">Email Input</Form.Label>
                                        <Form.Control type="email"  id="exampleInputEmail3" defaultValue="markjhon@gmail.com" placeholder="Enter Email"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputurl">Url Input</Form.Label>
                                        <Form.Control type="url"  id="exampleInputurl" defaultValue="https://getbootstrap.com" placeholder="Enter Url"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputphone">Teliphone Input</Form.Label>
                                        <Form.Control type="tel"  id="exampleInputphone" defaultValue="1-(555)-555-5555"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputNumber1">Number Input</Form.Label>
                                        <Form.Control type="number"  id="exampleInputNumber1" defaultValue="2356"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputPassword3">Password Input</Form.Label>
                                        <Form.Control type="password"  id="exampleInputPassword3" defaultValue="markjhon123" placeholder="Enter Password"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputdate">Date Input</Form.Label>
                                        <Form.Control type="date"  id="exampleInputdate" defaultValue="2019-12-18"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputmonth">Month Input</Form.Label>
                                        <Form.Control type="month"  id="exampleInputmonth" defaultValue="2019-12"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputweek">Week Input</Form.Label>
                                        <Form.Control type="week"  id="exampleInputweek" defaultValue="2019-W46"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputtime">Time Input</Form.Label>
                                        <Form.Control type="time"  id="exampleInputtime" defaultValue="13:45"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputdatetime">Date and Time Input</Form.Label>
                                        <Form.Control type="datetime-local"  id="exampleInputdatetime" defaultValue="2019-12-19T13:45:00"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 form-group">
                                        <Form.Label  htmlFor="exampleFormControlTextarea1">Example textarea</Form.Label>
                                        <Form.Control as="textarea"  id="exampleFormControlTextarea1" rows="5"/>
                                    </Form.Group>
                                    <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                    <Button type="button" variant="btn btn-danger">cancel</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Input Size</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="colFormLabelSm">Small</Form.Label>
                                        <Form.Control type="email" className=" form-control-sm" id="colFormLabelSm" placeholder="form-control-sm"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="colFormLabel">Default</Form.Label>
                                        <Form.Control type="email" id="colFormLabel" placeholder="form-control"/>
                                    </Form.Group >
                                    <Form.Group className=" mb-0 form-group">
                                        <Form.Label className="pb-0" htmlFor="colFormLabelLg">Large</Form.Label>
                                        <Form.Control type="email" className="form-control-lg" id="colFormLabelLg" placeholder="form-control-lg"/>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                  </Col>
                  <Col sm="12" lg="6">
                  <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Horizontal Form</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form className="form-horizontal" action="/action_page.php">
                                    <Form.Group as={Row} className="form-group">
                                        <Form.Label column sm="3" className="control-label align-self-center mb-0" htmlFor="email">Email:</Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="email"  placeholder="Enter Your  email"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="form-group">
                                        <Form.Label column sm="3" className="control-label  align-self-center mb-0" htmlFor="pwd1">Password:</Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="password"  placeholder="Enter Your password"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Check className="mb-3">
                                            <Form.Check.Input type="checkbox" className="me-2" defaultValue id="flexCheckDefault"/>
                                            <Form.Check.Label htmlFor="flexCheckDefault">
                                                Remember me
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                        <Button type="button" variant="btn btn-danger">cancel</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Form row</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Control type="text" placeholder="First name"/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Last name"/>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                     
                        <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Input</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <Form>
                              <Form.Group>
                                 <Form.Label htmlFor="exampleInputDisabled1">Disabled Input</Form.Label>
                                 <Form.Control type="text"   disabled defaultValue="Mark Tech"/>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Label htmlFor="exampleInputPlaceholder">Placeholder</Form.Label>
                                 <Form.Control type="text" className="form-control" id="exampleInputPlaceholder" placeholder="This is Placeholder"/>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Label htmlFor="exampleInputReadonly">Readonly</Form.Label>
                                 <Form.Control type="text" className="form-control" id="exampleInputReadonly" readOnly defaultValue="Mark Tech"/>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Label htmlFor="exampleInputcolor">Input Color </Form.Label>
                                 <Form.Control type="color" className="form-control" id="exampleInputcolor" defaultValue="#e20e02"/>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Label htmlFor="exampleFormControlSelect1">Select Input</Form.Label>
                                 <select className="form-control" id="exampleFormControlSelect1">
                                    <option defaultValue disabled>Select your age</option>
                                    <option>0-18</option>
                                    <option>18-26</option>
                                    <option>26-46</option>
                                    <option>46-60</option>
                                    <option>Above 60</option>
                                 </select>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Label htmlFor="exampleFormControlSelect2">Example multiple select</Form.Label>
                                 <select multiple="" className="form-control" id="exampleFormControlSelect2">
                                    <option>select-1</option>
                                    <option>select-2</option>
                                    <option>select-3</option>
                                    <option>select-4</option>
                                    <option>select-5</option>
                                    <option>select-6</option>
                                    <option>select-7</option>
                                    <option>select-8</option>
                                 </select>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Label htmlFor="customRange1">Range Input</Form.Label>
                                 <input type="range" className="custom-range" id="customRange1"/>
                              </Form.Group>
                              <Form.Group>
                                 <div className="custom-control custom-checkbox">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <Form.Label className="custom-control-label" htmlFor="customCheck1">Default checkbox</Form.Label>
                                 </div>
                                 <div className="custom-control custom-checkbox">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customCheck2" defaultChecked/>
                                    <Form.Label className="custom-control-label" htmlFor="customCheck2">Checked</Form.Label>
                                 </div>
                                 <div className="custom-control custom-checkbox">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customCheck3"  disabled/>
                                    <Form.Label className="custom-control-label" htmlFor="customCheck3">Disabled checkbox</Form.Label>
                                 </div>
                                 <div className="custom-control custom-checkbox">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customCheck4"  defaultChecked disabled/>
                                    <Form.Label className="custom-control-label" htmlFor="customCheck4">Disabled checkbox</Form.Label>
                                 </div>
                              </Form.Group>
                              <Form.Group>
                                 <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customCheck5"/>
                                    <Form.Label className="custom-control-label" htmlFor="customCheck5">Default checkbox</Form.Label>
                                 </div>
                                 <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customCheck6" defaultChecked/>
                                    <Form.Label className="custom-control-label" htmlFor="customCheck6">Checked</Form.Label>
                                 </div>
                                 <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customCheck7"  disabled/>
                                    <Form.Label className="custom-control-label" htmlFor="customCheck7">Disabled checkbox</Form.Label>
                                 </div>
                                 <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customCheck8"  defaultChecked disabled/>
                                    <Form.Label className="custom-control-label" htmlFor="customCheck8">Disabled checkbox</Form.Label>
                                 </div>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Check>
                                    <div className="custom-control custom-radio">
                                       <Form.Control type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                       <Form.Label className="custom-control-label" htmlFor="customRadio1"> Default radio</Form.Label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                       <Form.Control type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                       <Form.Label className="custom-control-label" htmlFor="customRadio2"> Default radio</Form.Label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                       <Form.Control type="radio" id="customRadio3" name="customRadio3" className="custom-control-input" defaultChecked/>
                                       <Form.Label className="custom-control-label" htmlFor="customRadio3"> Selected radio</Form.Label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                       <Form.Control type="radio" id="customRadio4" name="customRadio4" className="custom-control-input" disabled/>
                                       <Form.Label className="custom-control-label" htmlFor="customRadio4"> disabled radio</Form.Label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                       <Form.Control type="radio" id="customRadio5" name="customRadio5" className="custom-control-input" disabled defaultChecked/>
                                       <Form.Label className="custom-control-label" htmlFor="customRadio5"> Selected and  disabled radio</Form.Label>
                                    </div>
                                 </Form.Check>
                              </Form.Group>
                              <Form.Group>
                                 <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="customRadio6"> Default radio</Form.Label>
                                 </div>
                                 <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio7" name="customRadio1" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="customRadio7"> Default radio</Form.Label>
                                 </div>
                                 <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio8" name="customRadio6" className="custom-control-input" defaultChecked/>
                                    <Form.Label className="custom-control-label" htmlFor="customRadio8"> Selected radio</Form.Label>
                                 </div>
                                 <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio9" name="customRadio7" className="custom-control-input" disabled/>
                                    <Form.Label className="custom-control-label" htmlFor="customRadio9"> disabled radio</Form.Label>
                                 </div>
                                 <div className="custom-control custom-radio custom-control-inline">
                                    <Form.Check.Input type="radio" id="customRadio10" name="customRadio8" className="custom-control-input" disabled defaultChecked/>
                                    <Form.Label className="custom-control-label" htmlFor="customRadio10"> Selected and  disabled radio</Form.Label>
                                 </div>
                              </Form.Group>
                              <Form.Group>
                                 <div className="custom-control custom-switch">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customSwitch1"/>
                                    <Form.Label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</Form.Label>
                                 </div>
                                 <div className="custom-control custom-switch">
                                    <Form.Check type="checkbox" className="custom-control-input" id="customSwitch2" defaultChecked/>
                                    <Form.Label className="custom-control-label" htmlFor="customSwitch2">Toggle this switch element</Form.Label>
                                 </div>
                                 <div className="custom-control custom-switch">
                                    <Form.Check type="checkbox" className="custom-control-input" disabled id="customSwitch3"/>
                                    <Form.Label className="custom-control-label" htmlFor="customSwitch3">Disabled switch element</Form.Label>
                                 </div>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Label htmlFor="exampleFormControlFile1">Example file input</Form.Label>
                                 <Form.Control type="file" className="form-control-file" id="exampleFormControlFile1"/>
                              </Form.Group>
                              <Form.Group>
                                 <div className="custom-file">
                                    <Form.Control type="file" className="custom-file-input" id="customFile"/>
                                    <Form.Label className="custom-file-label" htmlFor="customFile">Choose file</Form.Label>
                                 </div>
                              </Form.Group>
                              <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                              <Button type="button" variant="btn btn-danger">Cancel</Button>
                           </Form>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Select Size</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <Form.Group>
                              <label>Small</label>
                              <select className="form-control form-control-sm mb-3">
                                 <option defaultValue>Open this select menu</option>
                                 <option defaultValue="1">One</option>
                                 <option defaultValue="2">Two</option>
                                 <option defaultValue="3">Three</option>
                              </select>
                           </Form.Group>
                           <Form.Group>
                              <label>Default</label>
                              <select className="form-control mb-3">
                                 <option defaultValue>Open this select menu</option>
                                 <option defaultValue="1">One</option>
                                 <option defaultValue="2">Two</option>
                                 <option defaultValue="3">Three</option>
                              </select>
                           </Form.Group>
                           <Form.Group>
                              <label>Large</label>
                              <select className="form-control form-control-lg">
                                 <option defaultValue>Open this select menu</option>
                                 <option defaultValue="1">One</option>
                                 <option defaultValue="2">Two</option>
                                 <option defaultValue="3">Three</option>
                              </select>
                           </Form.Group>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
        </>
    )
}
export default Elements;