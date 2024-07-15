import React from 'react'
import { Link} from 'react-router-dom'
import {Container,Row,Col,OverlayTrigger,Tooltip} from 'react-bootstrap'
import Card  from '../../../components/Card'

//img
import mt01 from '../../../assets/images/movie-thumb/01.jpg'
import mt02 from '../../../assets/images/movie-thumb/02.jpg'
import mt03 from '../../../assets/images/movie-thumb/03.jpg'
import mt04 from '../../../assets/images/movie-thumb/04.jpg'
import mt05 from '../../../assets/images/movie-thumb/05.jpg'
import mt06 from '../../../assets/images/movie-thumb/06.jpg'
import mt07 from '../../../assets/images/movie-thumb/07.jpg'
import mt08 from '../../../assets/images/movie-thumb/08.jpg'
import mt09 from '../../../assets/images/movie-thumb/09.jpg'
import mt10 from '../../../assets/images/movie-thumb/10.jpg'

const MovieList = () => { 
    return (
        <> 
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <Card.Header.Title>
                                    <h4 className="card-title">Movie Lists</h4>
                                </Card.Header.Title>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Link to="/add-movie" className="btn btn-primary">Add movie</Link>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-view">
                                    <table className="data-tables table movie_table " style={{width:"100%"}}>
                                        <thead>
                                            <tr>
                                                <th>Movie</th>
                                                <th>Quality</th>
                                                <th>Category</th>
                                                <th>Release Year</th>
                                                <th>Language</th>
                                                <th style={{width: "20%"}}>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt06} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">Champions</p>
                                                        <small>2h 15m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>Full HD</td>
                                                <td>Drama</td>
                                                <td>2019</td>
                                                <td>English</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat luctus est,
                                                    vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt05} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">Last Race</p>
                                                        <small>2h 20m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>HD</td>
                                                <td>Action</td>
                                                <td>2020</td>
                                                <td>Hindi</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat luctus
                                                    est, vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt08} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">Boop Bitty</p>
                                                        <small>2h 40m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>Full HD</td>
                                                <td>Thriller</td>
                                                <td>2017</td>
                                                <td>English</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat luctus
                                                    est, vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt04} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">Dino Land</p>
                                                        <small>1h 40m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>HD</td>
                                                <td>Thriller</td>
                                                <td>2015</td>
                                                <td>English</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat
                                                    luctus est,
                                                    vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt09} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">The Last Breath</p>
                                                        <small>2h 30m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>FUll HD</td>
                                                <td>Action</td>
                                                <td>2013</td>
                                                <td>Hindi</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat
                                                    luctus
                                                    est, vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt01} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">Last Night</p>
                                                        <small>3h 15m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>Full HD</td>
                                                <td>Horror</td>
                                                <td>2019</td>
                                                <td>English</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat
                                                    luctus
                                                    est, vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt02} className="img-border-radius avatar-40 img-fluid" alt=""/>'
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">1980</p>
                                                        <small>2h 15m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>HD</td>
                                                <td>Action</td>
                                                <td>2010</td>
                                                <td>Hindi</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat
                                                    luctus est,
                                                    vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt07} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">Looters</p>
                                                        <small>2h 30m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>Full HD</td>
                                                <td>Drama</td>
                                                <td>2014</td>
                                                <td>English</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat
                                                    luctus
                                                    est, vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt10} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">The Illusion</p>
                                                        <small>2h 30m</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>Full HD</td>
                                                <td>Drama</td>
                                                <td>2018</td>
                                                <td>English</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat
                                                    luctus
                                                    est, vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
                                                <td>
                                                <div className="media align-items-center">
                                                    <div className="iq-movie">
                                                        <Link to="#">
                                                            <img src={mt03} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="media-body text-white text-left ml-3">
                                                        <p className="mb-0">Burning</p>
                                                        <small>3h</small>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>HD</td>
                                                <td>Horror</td>
                                                <td>2020</td>
                                                <td>Hindi</td>
                                                <td>
                                                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                                    a scelerisque. Etiam feugiat
                                                    luctus
                                                    est, vel commodo odio rhoncus sit amet
                                                </p>
                                                </td>
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
export default MovieList;