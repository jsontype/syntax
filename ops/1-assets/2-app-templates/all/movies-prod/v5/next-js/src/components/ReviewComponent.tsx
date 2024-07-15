import React, { Fragment, memo } from 'react'

//react-boostrap
import { Button, Form, Row, Col } from 'react-bootstrap'

const ReviewComponent = memo(() => {
  return (
    <Fragment>
        <div className="streamit-reviews">
            <div id="comments" className="comments-area validate-form">
                <p className='masvideos-noreviews mt-3'>
                There are no reviews yet.
                </p>
            </div>
            <div className="review_form">
                <div className="comment-respond">
                    <h3 className='fw-500 my-2'>
                    Be the first to review “Zombie Island”
                    </h3>
                    <Row>
                        <Col md="12">
                            <Form.Group className='form-group'>
                                <Form.Label>Your review <span className='text-danger'> *</span></Form.Label>
                                <textarea className='form-control' name='comment' cols={5} rows={8} required></textarea>
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group className='form-group'>
                                <Form.Label>Name <span className='text-danger'> *</span></Form.Label>
                                <Form.Control type='text' name='author' size='lg' required/>
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group className='form-group'>
                                <Form.Label>Email <span className='text-danger'> *</span></Form.Label>
                                <Form.Control type='email' name='email' size={'lg'} required/>
                            </Form.Group>
                        </Col>
                        <Col md="12">
                            <Form.Group className='form-group'>
                               <div className='mt-3 mt-3 d-flex gap-2 align-items-center'>
                                <Form.Check.Input className='mt-0' type='checkbox' id='check1' />
                                <Form.Check.Label htmlFor="check1">Save my name, email, and website in this browser for the next time I comment.</Form.Check.Label>
                               </div>
                            </Form.Group>
                        </Col>
                        <Col md="12">
                            <div className='form-submit mt-4'>
                            <div className="iq-button">
                                          <Button name="submit" type="submit" id="submit" className="btn text-uppercase position-relative" value="Submit">
                                              <span className="button-text">Submit</span>
                                              <i className="fa-solid fa-play"></i>
                                          </Button>
                                      </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </Fragment>
  )
})

export default ReviewComponent