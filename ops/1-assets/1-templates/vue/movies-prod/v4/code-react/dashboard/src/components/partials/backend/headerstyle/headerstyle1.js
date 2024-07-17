import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button, Form, Nav, Dropdown } from 'react-bootstrap'
import  Card from '../../../Card'
import CustomToggle from '../../../dropdowns' 


//img

import  user1  from  '../../../../assets/images/user/1.jpg'
import  user01  from  '../../../../assets/images/user/01.jpg'
import  user02  from  '../../../../assets/images/user/02.jpg'
import  user03  from  '../../../../assets/images/user/03.jpg'
import  user04  from  '../../../../assets/images/user/04.jpg'
import  user05  from  '../../../../assets/images/user/05.jpg'

//img
import logo from '../../../../../src/assets/images/logo.png'



const  HeaderStyle1 =(props) =>{
    const minisidbar =() =>{
        document.body.classList.toggle('sidebar-main')
    }
    
    return(
         <>
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <Navbar className="p-0" expand="lg">
                <div className="iq-menu-bt d-flex align-items-center">
                    <div className="wrapper-menu" onClick={minisidbar}>
                        <div className="main-circle"><i className="las la-bars"></i></div>
                    </div> 
                    <div className="iq-navbar-logo d-flex justify-content-between">
                        <Link to="#" className="header-logo">
                            <img src={logo} className="img-fluid rounded-normal" alt=""/>
                            <div className="logo-title">
                            <span className="text-primary text-uppercase">Streamit</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="iq-search-bar ml-auto">
                    <Form action="#" className="searchbox">
                        <input type="text" className="text search-input" placeholder="Search Here..."/>
                        <Link className="search-link" to="#"><i className="ri-search-line"></i></Link>
                    </Form>
                </div>
                <Navbar.Toggle as={Button} aria-controls="responsive-navbar-nav">
                    <i className="ri-menu-3-line"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav as="ul" className="ml-auto navbar-list iq-header">
                        <Dropdown as="li" className="nav-item nav-icon search-content iq-search">
                            <Dropdown.Toggle as={CustomToggle} href="#" variant="search-toggle iq-waves-effect text-gray rounded">
                                <i className="ri-search-line"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Form action="#" className="search-box p-0">
                                    <input type="text" className="text search-input" placeholder="Type here to search..."/>
                                    <Link className="search-link" to="#"><i className="ri-search-line"></i></Link>
                                </Form>
                            </Dropdown.Menu>  
                        </Dropdown>   
                        <Dropdown as="li" className="nav-item nav-icon">
                            <Dropdown.Toggle as={CustomToggle} href="#" variant="search-toggle iq-waves-effect text-gray rounded">
                                <span className="ripple rippleEffect" style={{width: '35px' , height: '35px', top: '0.5px' ,left: '-8.5px'}}></span>
                                    <i className="ri-notification-2-line"></i>
                                    <span className="bg-primary dots"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="iq-sub-dropdown m-0" align="right">
                                <Card className="shadow-none m-0">
                                    <Card.Body className="p-0">
                                        <div className="bg-primary p-3 d-flex justify-content-between">
                                            <h5 className="mb-0 text-white">All Notifications</h5>
                                        <small className="badge  badge-light float-right pt-1">4</small>
                                        </div>
                                        <Link to="#" className="iq-sub-card" >
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user01} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0">Emma Watson Barry</h6>
                                                <small className="float-right font-size-12 iq-text">Just Now</small>
                                                <p className="mb-0 iq-text">95 MB</p>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card" >
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user02} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">New customer is join</h6>
                                                <small className="float-right iq-text font-size-12">5 days ago</small>
                                                <p className="mb-0 iq-text">Cyst Barry</p>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card" >
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user03} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">Two customer is left</h6>
                                                <small className="float-right iq-text font-size-12">2 days ago</small>
                                                <p className="mb-0 iq-text">Cyst Barry</p>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card" >
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user04} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                <small className="float-right iq-text font-size-12">3 days ago</small>
                                                <p className="mb-0 iq-text">Cyst Barry</p>
                                            </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>    
                            </Dropdown.Menu>
                        </Dropdown> 
                        <Dropdown as="li" className="nav-item nav-icon dropdown">
                            <Dropdown.Toggle  as={CustomToggle} href="#"  variant="search-toggle" >
                                <div className="search-toggle iq-waves-effect text-gray rounded">
                                    <i className="ri-mail-line"></i>
                                    <span className="bg-primary dots"></span>
                                </div>    
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="iq-sub-dropdown"  align="right">
                                <Card className="shadow-none m-0">
                                    <Card.Body className="p-0">
                                        <div className="bg-primary p-3 d-flex justify-content-between">
                                            <h5 className="mb-0 text-white">All Messages</h5>
                                        <small className="badge  badge-light float-right pt-1">5</small>
                                        </div>
                                        <Link to="#" className="iq-sub-card">
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user01} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 text-white">Barry Emma Watson</h6>
                                                <small className="float-left iq-text font-size-12">13 Jun</small>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card">
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user02} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 text-white">Lorem Ipsum Watson</h6>
                                                <small className="float-left iq-text font-size-12">20 Apr</small>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card">
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user03} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">Why do we use it?</h6>
                                                <small className="float-left iq-text font-size-12">30 Jun</small>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card">
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user04} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">Variations Passages</h6>
                                                <small className="float-left iq-text font-size-12">12 Sep</small>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card">
                                            <div className="media align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded" src={user05} alt=""/>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                <small className="float-left text-white font-size-12">5 Dec</small>
                                            </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>        
                            </Dropdown.Menu>
                        </Dropdown> 
                        <Dropdown as="li" className="line-height pt-3">
                            <Dropdown.Toggle href="#" as={CustomToggle} variant="search-toggle iq-waves-effect d-flex align-items-center" >
                                    <img src={user1} className="img-fluid rounded-circle mr-3" alt="user"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="iq-sub-dropdown iq-user-dropdown m-0"  align="right">
                                <Card className="shadow-none m-0">
                                    <Card.Header className="d-flex justify-content-start bg-primary p-0">
                                        <div className="bg-primary p-3">
                                            <h5 className="mb-0 text-white line-height">Hello Barry Tech</h5>
                                            <span className="text-white font-size-12 iq-text">Available</span>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="p-0 ">
                                        <Link to="/user-profile" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="media align-items-center">
                                            <div className="rounded iq-card-icon iq-bg-primary">
                                                <i className="ri-file-user-line"></i>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">My Profile</h6>
                                                <p className="mb-0 font-size-12 iq-text">View personal profile details.</p>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="/user-profile-edit" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="media align-items-center">
                                            <div className="rounded iq-card-icon iq-bg-primary">
                                                <i className="ri-profile-line"></i>
                                            </div>
                                            <div className="media-body ml-3">   
                                                <h6 className="mb-0 ">Edit Profile</h6>
                                                <p className="mb-0 font-size-12 iq-text">Modify your personal details.</p>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="/user-account-setting" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="media align-items-center">
                                            <div className="rounded iq-card-icon iq-bg-primary">
                                                <i className="ri-account-box-line"></i>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">Account settings</h6>
                                                <p className="mb-0 font-size-12 iq-text">Manage your account parameters.</p>
                                            </div>
                                            </div>
                                        </Link>
                                        <Link to="/user-privacy-setting" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="media align-items-center">
                                            <div className="rounded iq-card-icon iq-bg-primary">
                                                <i className="ri-lock-line"></i>
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0 ">Privacy Settings</h6>
                                                <p className="mb-0 font-size-12 iq-text">Control your privacy parameters.</p>
                                            </div>
                                            </div>
                                        </Link>
                                        <div className="d-inline-block w-100 text-center p-3">
                                            <Link className="bg-primary iq-sign-btn" to="/auth/sign-in" role="button">Sign out<i className="ri-login-box-line ml-2"></i></Link>
                                        </div>
                                    </Card.Body>
                                </Card>    
                            </Dropdown.Menu>
                        </Dropdown>  
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
   



        </>
    )
}

export default HeaderStyle1
