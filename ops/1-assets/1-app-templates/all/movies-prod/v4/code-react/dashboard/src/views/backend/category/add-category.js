import React from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import Card  from '../../../components/Card'
import {useHistory} from 'react-router-dom'

const AddCategory = () => { 
    let history =useHistory()

    return (
       <> 
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <Card.Header.Title>
                                    <h4 className="card-title">Add Category</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col lg="12">
                                        <Form>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Name"/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control as="textarea" id="text" name="text" rows="5" placeholder="Description"></Form.Control>
                                            </Form.Group>
                                            <Form.Group className="radio-box">
                                                <label>Status</label>
                                                <div className="radio-btn">
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" id="customRadio6" name="customRadio-1" className="custom-control-input"/>
                                                        <label className="custom-control-label" htmlFor="customRadio6">enable</label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" id="customRadio7" name="customRadio-1" className="custom-control-input"/>
                                                        <label className="custom-control-label" htmlFor="customRadio7">disable </label>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Button type="button" onClick={()=> history.push('/category-list')}variant=" btn-primary">Submit</Button>{' '}
                                                <Button type="reset" variant=" btn-danger">Cancel</Button>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

       </>
    )
}
export default AddCategory;