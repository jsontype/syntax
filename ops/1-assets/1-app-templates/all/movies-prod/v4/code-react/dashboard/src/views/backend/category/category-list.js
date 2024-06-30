import React from 'react'
import { Link} from 'react-router-dom'
import {Container,Row,Col,OverlayTrigger,Tooltip} from 'react-bootstrap'
import Card  from '../../../components/Card'


const CategoryList = () => { 
    return (
            <> 
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <Card.Header.Title>
                                        <h4 className="card-title">Category Lists</h4>
                                    </Card.Header.Title>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link to="/add-category" className="btn btn-primary">Add Category</Link>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="table-view">
                                        <table className="data-tables table movie_table " style={{width:"100%"}}>
                                            <thead>
                                                <tr>
                                                    <th style={{width:"10%"}}>No</th>
                                                    <th style={{width:"20%"}}>Name</th>
                                                    <th style={{width:"40%"}}>Description</th>
                                                    <th style={{width:"10%"}}>Movie</th>
                                                    <th style={{width:"20%"}}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Drama</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat luctus est,
                                                        vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>20</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Action</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat luctus
                                                        est, vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>10</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Thriller</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat luctus
                                                        est, vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>40</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Thriller</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat
                                                        luctus est,
                                                        vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>40</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Action</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat
                                                        luctus
                                                        est, vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>45</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>                                    
                                                    <td>6</td>
                                                    <td>Horror</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat
                                                        luctus
                                                        est, vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>50</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Action</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat
                                                        luctus est,
                                                        vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>70</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Drama</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat
                                                        luctus
                                                        est, vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>80</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Drama</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat
                                                        luctus
                                                        est, vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>30</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>Horror</td>
                                                    <td>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                        a scelerisque. Etiam feugiat
                                                        luctus
                                                        est, vel commodo odio rhoncus sit amet
                                                    </p>
                                                    </td>
                                                    <td>65</td>
                                                    <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                            <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                            <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                        </OverlayTrigger>
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
export default CategoryList;