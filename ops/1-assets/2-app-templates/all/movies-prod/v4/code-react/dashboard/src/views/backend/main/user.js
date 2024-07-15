import React from 'react'
import { Link} from 'react-router-dom'
import {Container,Row,Col,OverlayTrigger,Tooltip} from 'react-bootstrap'
import Card  from '../../../components/Card'

//img
import user01 from '../../../assets/images/user/01.jpg'
import user05 from '../../../assets/images/user/05.jpg'
import user03 from '../../../assets/images/user/03.jpg'
import user08 from '../../../assets/images/user/08.jpg'
import user06 from '../../../assets/images/user/06.jpg'
import user10 from '../../../assets/images/user/10.jpg'
const User = () => { 
    return (
       <> 
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <Card.Header.Title>
                                <h4 className="card-title">User Lists</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-view">
                                <table className="data-tables table movie_table" style={{width:"100%"}}>
                                    <thead>
                                    <tr>
                                        <th style={{width: "10%"}}>Profile</th>
                                        <th style={{width: "10%"}}>Name</th>
                                        <th style={{width: "20%"}}>Contact</th>
                                        <th style={{width: "20%"}}>Email</th>
                                        <th style={{width: "10%"}}>Country</th>
                                        <th style={{width: "10%"}}>Status</th>
                                        <th style={{width: "10%"}}>Join Date</th>
                                        <th style={{width: "10%"}}>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <img src={user01} className="img-fluid avatar-50" alt="author-profile"/>
                                        </td>
                                        <td>Anna Sthesia</td>
                                        <td>0123456789</td>
                                        <td>anna@gmail.com</td>
                                        <td>India</td>
                                        <td><span className="badge iq-bg-success">Active</span></td>
                                        <td>21 Jul, 2020</td>
                                        <td>
                                            <div className="flex align-items-center list-user-action">
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                </OverlayTrigger>
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src={user03} className="img-fluid avatar-50" alt="author-profile"/>
                                                </td>
                                                <td>Brock Lee</td>
                                                <td>2586253125</td>
                                                <td>brock@gmail.com</td>
                                                <td>India</td>
                                                <td><span className="badge iq-bg-primary">Block</span></td>
                                                <td>12 Jun, 2020</td>
                                                <td>
                                                <div className="flex align-items-center list-user-action">                                             
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                    </OverlayTrigger>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={user05} className="img-fluid avatar-50" alt="author-profile"/>
                                                    </td>
                                                    <td>Nick Allen</td>
                                                    <td>6523456856</td>
                                                    <td>nick@gmail.com</td>
                                                    <td>India</td>
                                                    <td><span className="badge iq-bg-warning">Pending</span></td>
                                                    <td>10 Aug, 2020</td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <img src={user08} className="img-fluid avatar-50" alt="author-profile"/>
                                                            </td>
                                                            <td>Lynn Guini</td>
                                                            <td>2563456589</td>
                                                            <td>lynn@gmail.com</td>
                                                            <td>India</td>
                                                            <td><span className="badge iq-bg-success">Active</span></td>
                                                            <td>29 Jul, 2020</td>
                                                            <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                                </OverlayTrigger>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <img src={user06} className="img-fluid avatar-50" alt="author-profile"/>
                                                                </td>
                                                                <td>Eric Shun</td>
                                                                <td>5625456589</td>
                                                                <td>eric@gmail.com</td>
                                                                <td>India</td>
                                                                <td><span className="badge iq-bg-primary">Block</span></td>
                                                                <td>01 Aug, 2020</td>
                                                                <td>
                                                                    <div className="flex align-items-center list-user-action">
                                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                                            <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                                        </OverlayTrigger>
                                                                        <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                                            <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                                        </OverlayTrigger>                                                                        </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <img src={user10} className="img-fluid avatar-50" alt="author-profile"/>
                                                                        </td>
                                                                        <td>Marge Arita</td>
                                                                        <td>2563456589</td>
                                                                        <td>marge@gmail.com</td>
                                                                        <td>India</td>
                                                                        <td><span className="badge iq-bg-warning">Pending</span></td>
                                                                        <td>09 May, 2020</td>
                                                                        <td>
                                                                        <div className="flex align-items-center list-user-action">
                                                                            <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                                                <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                                            </OverlayTrigger>
                                                                            <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                                                <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
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
export default User;