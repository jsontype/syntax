import React from 'react'
import {Container,Row,Col,Button,ListGroup} from 'react-bootstrap'
import  Card from '../../../components/Card'
import { Link } from 'react-router-dom'
// img
import darklogo from '../../../assets/images/logo-dark.png'

const Invoiceview =()=>{
    return(
        <>
        <Container fluid>
        <Row>            
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <h4 className="font-weight-bold">Invoice View</h4>
                         <Link to="/pages-invoice" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-2">Back</span>
                        </Link>
                </div>
            </Col>
            <Col lg="12">
                <Card>
                    <Card.Body>
                        <Row className="pb-4 mx-0 card-header-border">
                            <Col lg="12" className="mb-3">
                                <img className="avatar avatar-50 is-squared" alt="user-icon" src={darklogo}/>
                            </Col>
                            <Col lg="6">
                                <div className="text-left">
                                    <h5 className="font-weight-bold mb-2">Invoice number</h5>
                                    <p className="mb-0">IN-05866</p>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="text-right">
                                    <h5 className="font-weight-bold mb-2">Invoice Date</h5>
                                    <p className="mb-0">2nd Oct 2019 03:16 PM</p>
                                </div>
                            </Col>                            
                        </Row>
                        <Row className="pt-4 pb-5 mx-0">
                            <Col lg="6">
                                <div className="text-left">
                                    <h5 className="font-weight-bold mb-3">Invoice From</h5>
                                    <p className="mb-0 mb-1">Chris Wood</p>
                                    <p className="mb-0 mb-1">4183 Forest Avenue</p>
                                    <p className="mb-0 mb-1">New York</p>
                                    <p className="mb-0 mb-1">10011</p>
                                    <p className="mb-0 mb-2">USA</p>
                                    <p className="mb-0 mb-2">chris.wood@blueberry.com</p>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className="text-right">
                                    <h5 className="font-weight-bold mb-3">Invoice To</h5>
                                    <p className="mb-0 mb-1">Blueberry LLC</p>
                                    <p className="mb-0 mb-1">354 Roy Allen</p>
                                    <p className="mb-0 mb-1">Denver</p>
                                    <p className="mb-0 mb-1">80202</p>
                                    <p className="mb-0 mb-2">USA</p>
                                    <p className="mb-0 mb-2">info@blueberry.com</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <ListGroup as="ul" className="list-group-flush">
                                    <ListGroup.Item as="li" className="p-0">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mb-0">
                                                <thead>
                                                    <tr className="text-muted">
                                                        <th scope="col" className="text-left">No</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col" className="text-right">Quantity</th>
                                                        <th scope="col" className="text-right">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-left">
                                                            1
                                                        </td>
                                                        <td>
                                                            OR-325548
                                                        </td>
                                                        <td className="text-right">
                                                            6
                                                        </td>
                                                        <td className="text-right">
                                                            $800
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">
                                                            2
                                                        </td>
                                                        <td>
                                                            OR-500008
                                                        </td>
                                                        <td className="text-right">
                                                            3
                                                        </td>
                                                        <td className="text-right">
                                                            $500
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">
                                                            3
                                                        </td>
                                                        <td>
                                                            OR-654412
                                                        </td>
                                                        <td className="text-right">
                                                            5
                                                        </td>
                                                        <td className="text-right">
                                                            $600
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <div className="d-flex justify-content-end mb-2">
                                            Subtotal: <p className="ml-2 mb-0">$1,600</p>
                                        </div>
                                        <div className="d-flex justify-content-end mb-2">
                                            Taxes: <p className="ml-2 mb-0">$300</p>
                                        </div>
                                        <div className="d-flex justify-content-end mb-2">
                                            Total: <p className="ml-2 mb-0 font-weight-bold">$1,900</p>
                                        </div>
                                        
                                    </ListGroup.Item>
                                </ListGroup>                                        
                            </Col>
                            <Col lg="12">
                                <div className="d-flex flex-wrap justify-content-between align-items-center p-4">
                                    <div className="flex align-items-start flex-column">
                                        <h6>Notes</h6>
                                        <p className="mb-0 my-2">Please send all items at the same time to the shipping address. Thanksin advance.</p>
                                    </div>
                                    <div>
                                        <Button variant="btn btn-secondary px-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                            </svg>    
                                            Print
                                        </Button>
                                        <Button variant="btn btn-primary px-4">Send</Button>
                                    </div>
                                </div>
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

export default Invoiceview;