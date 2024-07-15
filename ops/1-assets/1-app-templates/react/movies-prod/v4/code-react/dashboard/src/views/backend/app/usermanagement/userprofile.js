import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container ,ProgressBar, Dropdown } from 'react-bootstrap'
import  Card from '../../../../components/Card'

// import CustomToggle from '../../../components/dropdowns'
import CustomToggle from '../../../../components/dropdowns' 

//img
import user from '../../../../assets/images/user/1.jpg'
import user1 from '../../../../assets/images/user/06.jpg'
import user2 from '../../../../assets/images/user/07.jpg'
import user3 from '../../../../assets/images/user/08.jpg'

const UserProfile = () => {
    return (
        <>
            <Container fluid>
                <Row className="profile-content">
                    <Col className="col-12 col-md-12 col-lg-4">
                        <Card>
                            <Card.Body className=" profile-page">
                                <div className="profile-header">
                                    <div className="cover-container text-center">
                                        <img src={user} alt="profile-bg" className="rounded-circle img-fluid"/>
                                        <div className="profile-detail mt-3">
                                            <h3>Barry Tech</h3>
                                            <p className="text-primary">Web designer</p>
                                            <p>Phasellus faucibus mollis pharetra. Proin blandit ac massa.Morbi nulla dolor, ornare at commodo non, feugiat non nisi.</p>
                                        </div>
                                        <div className="iq-social d-inline-block align-items-center">
                                            <ul className="list-inline d-flex p-0 mb-0 align-items-center">
                                                <li>
                                                    <Link to="#" className="avatar-40 rounded-circle bg-primary mr-2 facebook"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="avatar-40 rounded-circle bg-primary mr-2 twitter"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="avatar-40 rounded-circle bg-primary mr-2 youtube"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link>
                                                </li>
                                                <li >
                                                    <Link to="#" className="avatar-40 rounded-circle bg-primary pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                                <div className="iq-header-title">
                                    <h4 className="card-title mb-0">Personal Details</h4>
                                </div>
                            </Card.Header> 
                            <Card.Body className="">
                                <ul className="list-inline p-0 mb-0">
                                    <li>
                                        <Row className="row align-items-center justify-content-between mb-3">
                                            <Col sm="6">
                                                <h6>Birthday</h6>                                       
                                            </Col>
                                            <Col sm="6">
                                                <p className="mb-0">3rd March</p>                                       
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row className="align-items-center justify-content-between mb-3">
                                            <Col sm="6">
                                                <h6>Address</h6>                                       
                                            </Col>
                                            <Col sm="6">
                                                <p className="mb-0">Landon</p>                                       
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row className="align-items-center justify-content-between mb-3">
                                            <Col sm="6">
                                                <h6>Phone</h6>                                       
                                            </Col>
                                            <Col sm="6">
                                                <p className="mb-0">(010)987 543 201</p>                                       
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row className="align-items-center justify-content-between mb-3">
                                            <Col sm="6">
                                                <h6>Email</h6>                                       
                                            </Col>
                                            <Col sm="6">
                                                <p className="mb-0">Barry@example.com</p>                                       
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row className="align-items-center justify-content-between mb-3">
                                            <Col sm="6">
                                                <h6>Twitter</h6>                                       
                                            </Col>
                                            <Col sm="6">
                                                <p className="mb-0">@Barry</p>                                       
                                            </Col>
                                        </Row>
                                    </li>                              
                                    <li>
                                        <Row className="align-items-center justify-content-between mb-3">
                                            <Col sm="6">
                                                <h6>Facebook</h6>                                       
                                            </Col>
                                            <Col sm="6">
                                                <p className="mb-0">@Barry_Tech</p>                                       
                                            </Col>
                                        </Row>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                                <div className="iq-header-title">
                                    <h4 className="card-title mb-0">Skill Progress</h4>
                                </div>
                            </Card.Header> 
                            <Card.Body className="">
                                <ul className="list-inline p-0 mb-0">
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Biography</h6>
                                            <div className="iq-progress-bar-linear d-inline-block mt-1 w-50">
                                                <ProgressBar now={70} variant="primary" className="iq-progress-bar iq-bg-primary">
                                                </ProgressBar>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Horror</h6>
                                            <div className="iq-progress-bar-linear d-inline-block mt-1 w-50">
                                                <ProgressBar now={50} variant="danger" className="iq-progress-bar iq-bg-primary">
                                                </ProgressBar>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Comic Book</h6>
                                            <div className="iq-progress-bar-linear d-inline-block mt-1 w-50">
                                                <ProgressBar now={65} variant="info" className="iq-progress-bar iq-bg-primary">
                                                </ProgressBar>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6>Adventure</h6>
                                            <div className="iq-progress-bar-linear d-inline-block mt-1 w-50">
                                                <ProgressBar now={85} variant="success" className="iq-progress-bar iq-bg-primary">
                                                </ProgressBar>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-12 col-md-12 col-lg-8">
                        <Row>
                            <Col md="6">
                                <Card className="iq-card-block iq-card-stretch iq-card-height">
                                    <Card.Header className="d-flex justify-content-between align-items-center mb-0">
                                        <div className="iq-header-title">
                                            <h4 className="card-title mb-0">Latest Uploads</h4>
                                        </div>
                                    </Card.Header> 
                                    <Card.Body>
                                        <ul className="list-inline p-0 mb-0">
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="profile-icon bg-secondary">
                                                    <span>
                                                        <i className="ri-file-3-fill"></i>
                                                    </span>
                                                </div>
                                                <div className="media-support-info ml-3">
                                                    <h6>Documentation</h6>
                                                    <p className="mb-0">48kb</p>
                                                </div>
                                                <div className="iq-card-toolbar">
                                                    <Dropdown className="dropdown">
                                                        <Dropdown.Toggle as={CustomToggle}>
                                                            <i className="ri-more-line"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right p-0">
                                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-user-unfollow-line mr-2"></i>Share</Dropdown.Item>
                                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-close-circle-line mr-2"></i>Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="profile-icon bg-secondary">
                                                    <span>
                                                        <i className="ri-image-fill"></i>
                                                    </span>
                                                </div>
                                                <div className="media-support-info ml-3">
                                                    <h6>Images</h6>
                                                    <p className="mb-0">204kb</p>
                                                </div>
                                                <div className="iq-card-toolbar">
                                                    <Dropdown className="dropdown">
                                                        <Dropdown.Toggle as={CustomToggle}>
                                                            <i className="ri-more-line"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right p-0">
                                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-user-unfollow-line mr-2"></i>Share</Dropdown.Item>
                                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-close-circle-line mr-2"></i>Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="profile-icon bg-secondary">
                                                    <span>
                                                        <i className="ri-video-fill"></i>
                                                    </span>
                                                </div>
                                                <div className="media-support-info ml-3">
                                                    <h6>Videos</h6>
                                                    <p className="mb-0">509kb</p>
                                                </div>
                                                <div className="iq-card-toolbar">
                                                    <Dropdown className="dropdown"> 
                                                        <Dropdown.Toggle as={CustomToggle}>
                                                            <i className="ri-more-line"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right p-0">
                                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-user-unfollow-line mr-2"></i>Share</Dropdown.Item>
                                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-close-circle-line mr-2"></i>Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="profile-icon bg-secondary">
                                                    <span>
                                                        <i className="ri-file-3-fill"></i>
                                                    </span>
                                                </div>
                                                <div className="media-support-info ml-3">
                                                    <h6>Resources</h6>
                                                    <p className="mb-0">48kb</p>
                                                </div>
                                                <div className="iq-card-toolbar">
                                                    <Dropdown className="dropdown">
                                                        <Dropdown.Toggle as={CustomToggle}>
                                                            <i className="ri-more-line"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right p-0">
                                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-user-unfollow-line mr-2"></i>Share</Dropdown.Item>
                                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-close-circle-line mr-2"></i>Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div className="profile-icon bg-secondary">
                                                    <span>
                                                        <i className="ri-refresh-line"></i>
                                                    </span>
                                                </div>
                                                <div className="media-support-info ml-3">
                                                    <h6>Celine Dion</h6>
                                                    <p className="mb-0">204kb</p>
                                                </div>
                                                <div className="iq-card-toolbar">
                                                    <Dropdown className="dropdown">
                                                        <Dropdown.Toggle as={CustomToggle}>
                                                            <i className="ri-more-line"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right p-0">
                                                            <Dropdown.Menu className="dropdown-item" href="#"><i className="ri-user-unfollow-line mr-2"></i>Share</Dropdown.Menu>
                                                            <Dropdown.Menu className="dropdown-item" href="#"><i className="ri-close-circle-line mr-2"></i>Delete</Dropdown.Menu>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="iq-card-block iq-card-stretch iq-card-height">
                                    <Card.Header className="d-flex justify-content-between align-items-center mb-0">
                                        <div className="iq-header-title">
                                            <h4 className="card-title mb-0">Top Books</h4>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="list-inline p-0 mb-0">
                                            <li>
                                                <div className="iq-details mb-2">
                                                    <span className="title">Adventure</span>
                                                    <div className="percentage float-right text-primary">95 <span>%</span></div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <ProgressBar now={95} variant="primary" className="iq-progress-bar">
                                                        </ProgressBar>
                                                    </div>
                                                </div>                                       
                                            </li>
                                            <li>
                                                <div className="iq-details mb-2">
                                                    <span className="title">Horror</span>
                                                    <div className="percentage float-right text-warning">72 <span>%</span></div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <ProgressBar now={72} variant="warning" className="iq-progress-bar">
                                                        </ProgressBar>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="iq-details mb-2">
                                                    <span className="title">Comic Book</span>
                                                    <div className="percentage float-right text-info">75 <span>%</span></div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <ProgressBar now={75} variant="info" className="iq-progress-bar">
                                                        </ProgressBar>
                                                    </div>
                                                </div> 
                                            </li>
                                            <li>
                                                <div className="iq-details mb-2">
                                                    <span className="title">Biography</span>
                                                    <div className="percentage float-right text-danger">70 <span>%</span></div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <ProgressBar now={70} variant="danger" className="iq-progress-bar">
                                                        </ProgressBar>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="iq-details">
                                                    <span className="title">Mystery</span>
                                                    <div className="percentage float-right text-success">80 <span>%</span></div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <ProgressBar now={80} variant="success" className="iq-progress-bar">
                                                        </ProgressBar>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Card>
                            <Card.Header className="d-flex justify-content-between align-items-center mb-0">
                                <div className="iq-header-title">
                                    <h4 className="card-title mb-0">Daily Sales</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle as={CustomToggle} role="button" className="dropdown-toggle text-primary">
                                            <i className="ri-more-fill"></i>
                                        </Dropdown.Toggle>  
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton05">
                                            <Dropdown.Item className="dropdown-item" to="#"><i className="ri-eye-fill mr-2"></i>View</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" to="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" to="#"><i className="ri-pencil-fill mr-2"></i>Edit</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" to="#"><i className="ri-printer-fill mr-2"></i>Print</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" to="#"><i className="ri-file-download-fill mr-2"></i>Download</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="perfomer-lists m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img className="img-fluid avatar-50 rounded-circle" src={user1} alt=""/>
                                        </div>
                                        <div className="media-support-info ml-3">
                                            <h5>Reading on the World</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy test</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <span className="text-dark"><b>+$82</b></span>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img className="img-fluid avatar-50 rounded-circle" src={user2} alt=""/>
                                        </div>
                                        <div className="media-support-info ml-3">
                                            <h5>Little Black Book</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy test</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <span className="text-dark"><b>+$90</b></span>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="user-img img-fluid">
                                            <img className="img-fluid avatar-50 rounded-circle" src={user3} alt=""/>
                                        </div>
                                        <div className="media-support-info ml-3">
                                            <h5>See the More Story</h5>
                                            <p className="mb-0">Lorem Ipsum is simply dummy test</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-cener">
                                            <span className="text-dark"><b>+$85</b></span>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex justify-content-between align-items-center mb-0">
                                <div className="iq-header-title">
                                    <h4 className="card-title mb-0">Top Products</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle as={CustomToggle} className="dropdown-toggle text-primary" id="dropdownMenuButton07" data-toggle="dropdown">
                                            <i className="ri-more-fill"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton05">
                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="perfomer-lists m-0 p-0">
                                    <Row className="mb-3 align-items-center justify-content-between">
                                        <Col md="8">
                                            <h5>Find The Wave Book</h5>
                                            <p className="mb-0">General Book</p>
                                        </Col>
                                        <Col md="4" className="col-md-4 text-right">
                                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                                <span className="text-primary mr-3"><b>+$92</b></span>
                                                <div className="iq-progress-bar-linear d-inline-block mt-1 w-100">
                                                    <ProgressBar now="92" variant="primary" className="iq-progress-bar iq-bg-primary">
                                                    </ProgressBar>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center justify-content-between">
                                        <Col md="8">
                                            <h5>A man with those Faces</h5>
                                            <p className="mb-0">Biography Book</p>
                                        </Col>
                                        <Col md="4" className="text-right">
                                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                                <span className="text-danger mr-3"><b>+$85</b></span>
                                                <div className="iq-progress-bar-linear d-inline-block mt-1 w-100">
                                                    <ProgressBar now="85" variant="danger" className="iq-progress-bar iq-bg-primary">
                                                    </ProgressBar>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>                       
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserProfile