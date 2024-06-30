import React from 'react'
import {Container,Row,Col,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'
const Checkbox = () => {
  
    return (
        <>
              <Container>
               <Row>
                  <Col sm="12" lg="6">
                  <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Basic Checkbox</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="checkbox d-inline-block mr-2">
                              <input type="checkbox" className="checkbox-input" id="checkbox1" />
                              <label htmlFor="checkbox1">Primary / Inactive</label>
                           </div>
                           <div className="checkbox d-inline-block mr-2">
                              <input type="checkbox" className="checkbox-input" id="checkbox2" defaultChecked />
                              <label htmlFor="checkbox2">Primary / Active</label>
                           </div>
                           <div className="checkbox d-inline-block mr-2">
                              <input type="checkbox" className="checkbox-input" id="checkbox3" disabled/>
                              <label htmlFor="checkbox3">Disable / Inactive</label>
                           </div>
                           <div className="checkbox d-inline-block mr-2">
                              <input type="checkbox" className="checkbox-input" id="checkbox4" defaultChecked disabled/>
                              <label htmlFor="checkbox4">Active / Disable</label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Color</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-primary" id="customCheck-11"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-11">Primary </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customCheck-22"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-22">Success</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customCheck-33"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-33">Danger</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-warning" id="customCheck-44"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-44">Warning</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-dark" id="customCheck-55"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-55">Dark</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-info" id="customCheck-66"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-66"> Info</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Boolean Checkbox</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-t" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-t">True</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-f"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-f">False</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Checkbox</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck5"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck5">Primary / Inactive</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck6" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck6">Primary - active</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck7"  disabled/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck7">Primary - inactive - disabled</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck8"  defaultChecked disabled/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck8">Primary - active - disabled</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Color</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-primary" id="customCheck-1" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-1"> Primary</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customCheck-2" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-2">Success</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customCheck-3" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-3">Danger</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-warning" id="customCheck-4" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-4">Warning</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-dark" id="customCheck-5" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-5">Dark</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-info" id="customCheck-6" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-6">Info</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Change Icon</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-10" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-10"><i className="fa fa-music"></i>Music</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-20" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-20"><i className="fa fa-commenting-o"></i>SMS</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-30" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-30"><i className="fa fa-times"></i>Cancel</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-40" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-40"><i className="fa fa-file"></i>File</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-50" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-50"><i className="fa fa-bold"></i>Bold</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-60" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-60"><i className="fa fa-map-marker"></i>Location</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-70" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customCheck-70"><i className="fa fa-camera"></i>Camera</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
        </>
    )
}
export default Checkbox;