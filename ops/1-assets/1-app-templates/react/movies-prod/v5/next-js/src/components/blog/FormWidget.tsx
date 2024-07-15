import React, { Fragment, memo } from 'react'

//react-bootstrap
import { Button, Col, Form, Row } from 'react-bootstrap'

//react-router-dom
import Link from "next/link";

interface Props {
    prevLink?: string;
    nextLink?: string;
}

const FormWidget = memo((props: Props) => {
    return (
        <Fragment>
            <Row className="blog-nav">
                <Col lg="6" className='blog-prev-post mb-5 mb-lg-0 border-end'>
                    <Link href={props.prevLink ? `${props.prevLink}` : '/blogs/template'}>
                        <div className="blog-arrow font-size-14 fw-normal mb-3">
                            <i className="fas fa-arrow-left"></i>
                            <span className='previous fw-medium fst-italic'> Previous Post</span>
                        </div>
                        <span className="fw-semibold text-white">Why Amy Adams Always Dreamed of Working </span>
                    </Link>
                </Col>
                <Col lg="6" className='blog-next-post text-start text-lg-end'>
                    <Link href={props.nextLink ? `${props.nextLink}` : '/blogs/single/audio'}>
                        <div className="blog-arrow font-size-14 fw-normal mb-3">
                            <span className='next fw-medium fst-italic'> Next Post</span>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <span className="fw-semibold text-white">Gillian Anderson Shares the Photos From The Crown</span>
                    </Link>
                </Col>
            </Row>
            <Form>
                <h4 className="fw-500 mb-3">Leave a Reply</h4>
                <p className="mb-4">Logged in as Jenny. <span className="text-primary">Edit your profile. Log out?</span>
                    Required fields are marked *</p>
                <Row>
                    <Col md="12">
                        <Form.Group>
                            <textarea className='form-control' name='comment' cols={5} rows={8} required placeholder='Comment'></textarea>
                        </Form.Group>
                    </Col>
                    <Col md="12">
                        <div className="form-submit mt-4">
                            <div className="iq-button">
                                <Button name='submit' type="submit" id="submit" className='btn text-uppercase position-relative' >
                                    <span className="button-text">Post Comment</span>
                                    <i className="fa-solid fa-play"></i>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Form>

        </Fragment>
    )
})

FormWidget.displayName = "FormWidget"
export default FormWidget