import React from 'react'
import {Container,Row,Col,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'

const Radio = () => {
   
    return (
        <>
            <Container fluid>
               <Row>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Default Radio Buttons</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="radio d-inline-block mr-2">
                              <input type="radio" name="bsradio" id="radio1" defaultChecked/>
                              <label htmlFor="radio1">Active</label>
                           </div>
                           <div className="radio d-inline-block mr-2">
                              <input type="radio" name="bsradio" id="radio2"/>
                              <label htmlFor="radio2">Inactive</label>
                           </div>
                           <div className="radio d-inline-block mr-2">
                              <input type="radio" name="bsradio1" id="radio3" disabled defaultChecked/>
                              <label htmlFor="radio3">Active - Disabled</label>
                           </div>
                           <div className="radio d-inline-block mr-2">
                              <input type="radio" name="bsradio1" id="radio4" disabled/>
                              <label htmlFor="radio3">Inactive - Disabled</label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Colored Radio Buttons</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio01" name="customRadio-11" className="custom-control-input bg-primary"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio01"> Primary </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio02" name="customRadio-11" className="custom-control-input bg-success"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio02"> Success </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio03" name="customRadio-11" className="custom-control-input bg-danger"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio03"> Danger </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio04" name="customRadio-11" className="custom-control-input bg-warning"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio04"> Warning </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio05" name="customRadio-11" className="custom-control-input bg-dark"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio05"> Dark </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio06" name="customRadio-11" className="custom-control-input bg-info"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio06"> Info </Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Radio Buttons</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-radio custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio6" name="customRadio-1" className="custom-control-input"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio6"> One </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio7" name="customRadio-1" className="custom-control-input" />
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio7"> Two </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio8" name="customRadio-1" className="custom-control-input" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio8"> Three </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio-8" name="customRadio-2" className="custom-control-input" defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio-8"> Four Checked </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio9" name="customRadio-3" className="custom-control-input" disabled/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio9"> Five disabled</Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio10" name="customRadio-4" className="custom-control-input" disabled defaultChecked/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio10"> Six Selected and  disabled</Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Colored Radio Buttons</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio-1" name="customRadio-10" className="custom-control-input bg-primary"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio-1"> Primary </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio-2" name="customRadio-10" className="custom-control-input bg-success"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio-2"> Success </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio-3" name="customRadio-10" className="custom-control-input bg-danger"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio-3"> Danger </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio-4" name="customRadio-10" className="custom-control-input bg-warning"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio-4"> Warning </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio-5" name="customRadio-10" className="custom-control-input bg-dark"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio-5"> Dark </Form.Check.Label>
                           </div>
                           <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                              <Form.Check.Input type="radio" id="customRadio-6" name="customRadio-10" className="custom-control-input bg-info"/>
                              <Form.Check.Label className="custom-control-label" htmlFor="customRadio-6"> Info </Form.Check.Label>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
        </>
    )
}
export default Radio;