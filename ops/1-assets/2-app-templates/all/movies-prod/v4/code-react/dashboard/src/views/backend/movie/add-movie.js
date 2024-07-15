import React from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import Card  from '../../../components/Card'
import {useHistory} from 'react-router-dom'
const AddMovie = () => { 
    let history =useHistory()
    return (
            <> 
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <Card.Header.Title>
                                        <h4 className="card-title">Add Movie</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Row>
                                            <Col lg="7">
                                                <Row>
                                                    <Form.Group className="col-12">
                                                        <Form.Control type="text" placeholder="Title"/>
                                                    </Form.Group>
                                                    <div className="col-12 form_gallery form-group">
                                                        <label id="gallery2" htmlFor="form_gallery-upload">Upload Image</label>
                                                        <input data-name="#gallery2" id="form_gallery-upload" className="form_gallery-upload"
                                                        type="file" accept=".png, .jpg, .jpeg"/>
                                                    </div>
                                                    <Form.Group className="col-md-6">
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option disabled>Movie Category</option>
                                                        <option>Comedy</option>
                                                        <option>Crime</option>
                                                        <option>Drama</option>
                                                        <option>Horror</option>
                                                        <option>Romance</option>
                                                    </select>
                                                    </Form.Group>
                                                    <Col sm="6" className="form-group">
                                                        <select className="form-control" id="exampleFormControlSelect2">
                                                            <option disabled>Choose quality</option>
                                                            <option>FULLHD</option>
                                                            <option>HD</option>
                                                        </select>
                                                    </Col>
                                                    <Form.Group className="col-12">
                                                    <Form.Control as="textarea" id="text" name="text" rows="5"
                                                        placeholder="Description"></Form.Control>
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
                                            <Col sm="6" className="form-group">
                                                <Form.Control type="text" placeholder="Release year"/>
                                            </Col>
                                            <Col sm="6" className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect3">
                                                    <option defaultValue disabled="">Choose Language</option>
                                                    <option>English</option>
                                                    <option>Hindi</option>
                                                    <option>Tamil</option>
                                                    <option>Gujarati</option>
                                                </select>
                                            </Col>
                                            <Col sm="12" className="form-group">
                                                <Form.Control type="text" placeholder="Movie Duration"/>
                                            </Col>
                                            <Form.Group className="col-12">
                                                <Button type="button" onClick={()=> history.push('/movie-list')}variant="primary">Submit</Button>{' '}
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
export default AddMovie;