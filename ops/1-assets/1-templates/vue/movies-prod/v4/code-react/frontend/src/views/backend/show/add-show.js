import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import Card  from '../../../components/Card'
import { useHistory } from 'react-router-dom'

const AddShow = () => { 
   
   let history =useHistory()
    
   return (
        <> 
            <Container fluid>
               <Row>
                  <Col sm="12">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <Card.Header.Title>
                              <h4 className="card-title">Add Show</h4>
                           </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                           <Form>
                              <Row>
                                 <Col md="6" className="form-group">
                                    <Form.Control type="text" placeholder="Title"/>
                                 </Col>
                                 <Col md="6" className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                       <option defaultValue disabled="">Choose Language</option>
                                       <option>English</option>
                                       <option>Hindi</option>
                                       <option>Tamil</option>
                                       <option>Gujarati</option>
                                    </select>                                 
                                 </Col>
                                 <Col md="6" className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect2">
                                       <option defaultValue disabled="">Show Category</option>
                                       <option>Comedy</option>
                                       <option>Crime</option>
                                       <option>Drama</option>
                                       <option>Horror</option>
                                       <option>Romance</option>
                                    </select>
                                 </Col>
                                 <Col md="6" className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect3">
                                       <option defaultValue disabled="">Choose quality</option>
                                       <option>Full HD</option>
                                       <option>HD</option>
                                    </select>
                                 </Col>
                                 <Col md="6" className="form_gallery form-group">
                                    <label id="gallery2" htmlFor="form_gallery-upload">Upload Image</label>
                                    <input data-name="#gallery2" id="form_gallery-upload" name="gallery"
                                       className="form_gallery-upload" type="file" accept=".png, .jpg, .jpeg"/>
                                 </Col>
                                 <Col md="6" className="form_gallery form-group">
                                    <label id="gallery3" htmlFor="show2">Upload Show Banner</label>
                                    <input data-name="#gallery3" id="show2" name="gallery" className="form_gallery-upload"
                                       type="file" accept=".png, .jpg, .jpeg"/>
                                 </Col>
                                 <Form.Group className="col-12">
                                    <Form.Control as="textarea" id="text1" name="text" rows="5" placeholder="Description"></Form.Control>
                                 </Form.Group>
                              </Row>
                              <Row>
                                 <div className="col-12">
                                    <h5 className="text-white mb-3">Add Seasons</h5>
                                 </div>
                              </Row>
                              <Row>
                                 <Col lg="7">
                                    <Row>
                                       <Col md="6" className="form-group">
                                          <select className="form-control" id="exampleFormControlSelect5">
                                             <option disabled>Select Seasons</option>
                                             <option>Season 1</option>
                                             <option>Season 2</option>
                                             <option>Season 3</option>
                                             <option>Season 4</option>
                                             <option>Season 5</option>
                                          </select>
                                       </Col>
                                       <Col md="6" className="form-group">
                                          <Form.Control type="text" placeholder="Episode No."/>
                                       </Col>
                                       <Col md="6" className="form-group">
                                          <Form.Control type="text" placeholder="Episode Name"/>
                                       </Col>
                                       <Col md="6" className="form_gallery form-group">
                                          <label id="gallery4" htmlFor="show3">Upload Image</label>
                                          <input data-name="#gallery4" id="show3" name="gallery" className="form_gallery-upload" type="file" accept=".png, .jpg, .jpeg"/>
                                       </Col>
                                       <Col md="6" className="form-group">
                                          <Form.Control type="text" placeholder="Running Time in Minutes"/>
                                       </Col>
                                       <Col md="6" className="form-group">
                                          <Form.Control className="date-input basicFlatpickr" type="text" placeholder="Selete Date"/>
                                       </Col>
                                       <Form.Group className="col-12">
                                          <Form.Control as="textarea" id="text" name="text" rows="5" placeholder="Description"></Form.Control>
                                       </Form.Group>
                                    </Row>
                                 </Col>
                                 <Col lg="5">
                                    <div className="d-block position-relative">
                                       <div className="form_video-upload">
                                          <input type="file" accept="video/mp4,video/x-m4v,video/*" multiple/>
                                          <p>Upload video</p>
                                       </div>
                                    </div>
                                 </Col>
                              </Row>
                              <Row>
                                 <Form.Group className="col-12">
                                    <Button type="button" onClick={()=> history.push('/show-list')}variant="primary">Submit</Button>{' '}
                                    <Button type="reset" variant="danger">Cancel</Button>
                                 </Form.Group>
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
export default AddShow;
