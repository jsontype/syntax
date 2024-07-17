import React from 'react'
import { Link } from 'react-router-dom'
import {Col,Row,Container,OverlayTrigger,Tooltip} from 'react-bootstrap'
import  Card  from '../../../components/Card'


const Rating = () => {

    return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                <Card.Header.Title>
                                    <h4 className="card-title">Rating Lists</h4>
                                </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                <div className="table-responsive">
                                    <table className="data-tables table movie_table" style={{width:"100%"}}>
                                        <thead>
                                            <tr>
                                            <th style={{width: "5%"}}>No</th>
                                            <th style={{width: "5%"}}>Category</th>
                                            <th style={{width: "15%"}}>Name</th>
                                            <th style={{width: "30%"}}>Description</th>
                                            <th style={{width: "15%"}}>Release Date</th>
                                            <th style={{width: "10%"}}>Rating</th>
                                            <th style={{width: "10%"}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>1</td>
                                            <td>
                                                Movie
                                            </td>
                                            <td><span>Man of Street</span></td>
                                            <td>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                            </td>
                                            <td>
                                                2017
                                            </td>
                                            <td><i className="las la-star text-primary mr-2"></i> 9.2</td>
                                            <td>
                                                <div className="flex align-items-center list-user-action">
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                    </OverlayTrigger>{' '}
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    </OverlayTrigger>{' '}
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                    </OverlayTrigger>{' '}
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2</td>
                                            <td>
                                                Show
                                            </td>
                                            <td><span>Cursed</span></td>
                                            <td>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                            </td>
                                            <td>
                                                2012
                                            </td>
                                            <td><i className="las la-star text-primary mr-2"></i> 8.5</td>
                                            <td>
                                                <div className="flex align-items-center list-user-action">
                                                <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                </OverlayTrigger>{' '}
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i
                                                        className="ri-pencil-line"></i></Link>
                                                </OverlayTrigger>{' '}
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i
                                                        className="ri-delete-bin-line"></i></Link>
                                                </OverlayTrigger>{' '}
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>3</td>
                                            <td>
                                                Movie
                                            </td>
                                            <td><span>Veronica</span></td>
                                            <td>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                            </td>
                                            <td>
                                                2018
                                            </td>
                                            <td><i className="las la-star text-primary mr-2"></i> 7.0</td>
                                            <td>
                                                <div className="flex align-items-center list-user-action">
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                    </OverlayTrigger>{' '}
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    </OverlayTrigger>{' '}
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                    </OverlayTrigger>{' '}
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>4</td>
                                            <td>
                                                Movie
                                            </td>
                                            <td><span>Troll Hunters</span></td>
                                            <td>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                            </td>
                                            <td>
                                                2020
                                            </td>
                                            <td><i className="las la-star text-primary mr-2"></i> 9.5</td>
                                            <td>
                                                <div className="flex align-items-center list-user-action">
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                    </OverlayTrigger>{' '}
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    </OverlayTrigger>{' '}
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                    </OverlayTrigger>{' '}
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>5</td>
                                            <td>
                                                Show
                                            </td>
                                            <td><span>Gran Torino</span></td>
                                            <td>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                            </td>
                                            <td>
                                                2019
                                            </td>
                                            <td><i className="las la-star text-primary mr-2"></i> 7.5</td>
                                            <td>
                                                <div className="flex align-items-center list-user-action">
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                    </OverlayTrigger>{' '}
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    </OverlayTrigger>{' '}
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                    </OverlayTrigger>{' '}
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </>
    )
}

export default Rating;