import React,{useEffect, useState} from 'react'
// import React,{useEffect,useState} from 'react'
import { Link,useLocation} from 'react-router-dom'
// import { Link} from 'react-router-dom'
import {Accordion,Button} from 'react-bootstrap'
import Scrollbar from 'smooth-scrollbar'

// import {connect} from "react-redux";
// import {getDarkMode} from '../../../../store/mode'

//img
import logo from '../../../../../src/assets/images/logo.png'


// function mapStateToProps(state) {
//     return {
//         darkMode: getDarkMode(state)
//     };
// }


const minisidbar =() =>{
    document.body.classList.toggle('sidebar-main')
}


const SidebarStyle = (props) => {
    
    //Collapse state
    const[activeMenu,setActiveMenu] = useState(false)
    const[activesubMenu,setSubmenu] = useState(false)
    const[activesubMenu1,setSubmenu1] = useState(false)
    // const[activesubMenu2,setSubmenu2] = useState(false)
    
   
    //location
    let location = useLocation();

//     const urlParams = new URLSearchParams(window.location.search);
//     const sidebar = urlParams.get('sidebar');
//     var variant='';
//     if (sidebar !== null) {
//         variant='';
//         switch (sidebar) {
//             case "0":
//                 variant ='sidebar-dark';
//             break;
//             case "1":
//                 variant ='sidebar-light';
//             break;
//             default:
//                 variant ='';
//                 break;
//         }
//     }
    
//     // Collapse state
//     const[activeMenu,setActiveMenu] = useState(false)
//     const[activesubMenu,setSubmenu] = useState(false)
    useEffect(
    () =>{
        Scrollbar.init(document.querySelector('#sidebar-scrollbar'))  
    }
)
    return(
        <>
            <div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                    <Link to="/" className="header-logo">
                    <img src={logo} className="img-fluid rounded-normal" alt=""/>
                    <div className="logo-title">
                        <span className="text-primary text-uppercase">Streamit</span>
                    </div>
                    </Link>
                    <div className="iq-menu-bt-sidebar">
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu" onClick={minisidbar}>
                            <div className="main-circle"><i className="las la-bars"></i></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="data-scrollbar" data-scroll="1" id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                    <Accordion as="ul" id="iq-sidebar-toggle" className="iq-menu" onSelect={(e) => setActiveMenu(e)}>
                        <li className={`${location.pathname === '/' ? 'active' : ''} `}>
                            <Link to="/" className="text-primary">
                                <i className="ri-arrow-right-line"></i>
                                <span>Visit site</span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/' ? 'active' : ''} `}>
                            <Link to="/" className="iq-waves-effect">
                                <i className="las la-home iq-arrow-left"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/rating' ? 'active' : ''} `}>
                            <Link to="/rating" className="iq-waves-effect">
                                <i className="las la-star-half-alt"></i>
                                <span>Rating </span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/comment' ? 'active' : ''} `}>
                            <Link to="/comment" className="iq-waves-effect">
                                <i className="las la-comments"></i>
                                <span>Comment</span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/user' ? 'active' : ''} `}>
                            <Link to="/user" className="iq-waves-effect">
                                <i className="las la-user-friends"></i>
                                <span>User</span>
                            </Link>
                        </li>
                        <li className={activeMenu === '0' ? 'active' : ''}>
                            <Accordion.Toggle as={Button} href="#" eventKey="0" variant=" collapsed" data-toggle="collapse" aria-expanded={activeMenu === '0' ? 'true' : 'false'}><i className="las la-list-ul"></i><span>Category</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                            <Accordion.Collapse  className="submenu" eventKey="0">
                            <ul id="category" className="iq-submenu " data-parent="#iq-sidebar-toggle">
                                <li className={`${location.pathname === '/add-category' ? 'active' : ''} `}><Link to="/add-category"><i className="las la-user-plus"></i>Add Category</Link></li>
                                <li className={`${location.pathname === '/category-list' ? 'active' : ''} `}><Link to="/category-list"><i className="las la-eye"></i>Category List</Link></li>
                            </ul>
                            </Accordion.Collapse>
                        </li>
                        <li className={activeMenu === '1' ? 'active' : ''}>
                            <Accordion.Toggle as={Button} href="#" eventKey="1" variant=" collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-film"></i><span>Movie</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                            <Accordion.Collapse  className="submenu" eventKey="1">
                            <ul id="movie" className="iq-submenu" data-parent="#iq-sidebar-toggle">
                                <li className={`${location.pathname === '/add-movie' ? 'active' : ''} `}><Link to="/add-movie"><i className="las la-user-plus"></i>Add Movie</Link></li>
                                <li className={`${location.pathname === '/movie-list' ? 'active' : ''} `}><Link to="/movie-list"><i className="las la-eye"></i>Movie List</Link></li>
                            </ul>
                            </Accordion.Collapse>
                        </li>
                        <li className={activeMenu === '2' ? 'active' : ''}>
                            <Accordion.Toggle as={Button} href="#" eventKey="2" variant=" collapsed" data-toggle="collapse" aria-expanded="false"><i
                                className="las la-film"></i><span>Show</span><i
                                className="ri-arrow-right-s-line iq-arrow-right"></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse  className="submenu" eventKey="2">
                            <ul id="show" className="iq-submenu" data-parent="#iq-sidebar-toggle">
                                <li className={`${location.pathname === '/add-show' ? 'active' : ''} `}><Link to="/add-show"><i className="las la-user-plus"></i>Add Show</Link></li>
                                <li className={`${location.pathname === '/show-list' ? 'active' : ''} `}><Link to="/show-list"><i className="las la-eye"></i>Show List</Link></li>
                            </ul>
                            </Accordion.Collapse>
                        </li>
                        <li className={`${location.pathname === '/pages-pricing' ? 'active' : ''} `}><Link to="/pages-pricing" className="iq-waves-effect"><i className="ri-price-tag-line"></i><span>Pricing</span></Link></li>
                        <li className={activeMenu === '3' ? 'active' : ''}>
                            <Accordion.Toggle as={Button} href="#" eventKey="3" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu === '3' ? 'true' : 'false'}><i className="lab la-elementor iq-arrow-left"></i><span>UI Elements</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                            <Accordion.Collapse  className="submenu" eventKey="3">
                            <Accordion as="ul" id="ui-elements" className="iq-submenu" data-parent="#iq-sidebar-toggle" onSelect={(e) => setSubmenu(e)}>
                                <li className={`elements  ${location.pathname === '/ui-colors' || location.pathname === '/ui-typography' || location.pathname === '/ui-alerts' || location.pathname === '/ui-badges' || location.pathname === '/ui-breadcrumb'|| location.pathname === '/ui-buttons'|| location.pathname === '/ui-cards'|| location.pathname === '/ui-carousel'|| location.pathname === '/ui-embed-video'|| location.pathname === '/ui-grid'|| location.pathname === '/ui-images'|| location.pathname === '/ui-list-group'|| location.pathname === '/ui-media-object'|| location.pathname === '/ui-modal'|| location.pathname === '/ui-notifications'|| location.pathname === '/ui-pagination' || location.pathname === '/ui-popovers' || location.pathname === '/ui-progressbars' || location.pathname === '/ui-tabs' || location.pathname === '/ui-tooltips' ? 'active' :'' }`}>
                                <Accordion.Toggle as={Button} eventKey="0" href="#" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu === '0' ? 'true' : 'false'}><i className="ri-play-circle-line"></i><span>UI Kit</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                                <Accordion.Collapse className="submenu" eventKey="0">
                                <ul id="sub-menu" className="iq-submenu" data-parent="#ui-elements">
                                    <li className={`${location.pathname === '/ui-colors' ? 'active' : ''} `}><Link to="/ui-colors"><i className="las la-palette"></i>colors</Link></li>
                                    <li className={`${location.pathname === '/ui-typography' ? 'active' : ''} `}><Link to="/ui-typography"><i className="las la-keyboard"></i>Typography</Link></li>
                                    <li className={`${location.pathname === '/ui-alerts' ? 'active' : ''} `}><Link to="/ui-alerts"><i className="las la-tag"></i>Alerts</Link></li>
                                    <li className={`${location.pathname === '/ui-badges' ? 'active' : ''} `}><Link to="/ui-badges"><i className="lab la-atlassian"></i>Badges</Link></li>
                                    <li className={`${location.pathname === '/ui-breadcrumb' ? 'active' : ''} `}><Link to="/ui-breadcrumb"><i className="las la-bars"></i>Breadcrumb</Link></li>
                                    <li className={`${location.pathname === '/ui-buttons' ? 'active' : ''} `}><Link to="/ui-buttons"><i className="las la-tablet"></i>Buttons</Link></li>
                                    <li className={`${location.pathname === '/ui-cards' ? 'active' : ''} `}><Link to="/ui-cards"><i className="las la-credit-card"></i>Cards</Link></li>
                                    <li className={`${location.pathname === '/ui-carousel' ? 'active' : ''} `}><Link to="/ui-carousel"><i className="las la-film"></i>Carousel</Link></li>
                                    <li className={`${location.pathname === '/ui-embed-video' ? 'active' : ''} `}><Link to="/ui-embed-video"><i className="las la-video"></i>Video</Link></li>
                                    <li className={`${location.pathname === '/ui-grid' ? 'active' : ''} `}><Link to="/ui-grid"><i className="las la-border-all"></i>Grid</Link></li>
                                    <li className={`${location.pathname === '/ui-images' ? 'active' : ''} `}><Link to="/ui-images"><i className="las la-images"></i>Images</Link></li>
                                    <li className={`${location.pathname === '/ui-list-group' ? 'active' : ''} `}><Link to="/ui-list-group"><i className="las la-list"></i>list Group</Link></li>
                                    <li className={`${location.pathname === '/ui-media-object' ? 'active' : ''} `}><Link to="/ui-media-object"><i className="las la-ad"></i>Media</Link></li>
                                    <li className={`${location.pathname === '/ui-modal' ? 'active' : ''} `}><Link to="/ui-modal"><i className="las la-columns"></i>Modal</Link></li>
                                    <li className={`${location.pathname === '/ui-notifications' ? 'active' : ''} `}><Link to="/ui-notifications"><i className="las la-bell"></i>Notifications</Link></li>
                                    <li className={`${location.pathname === '/ui-pagination' ? 'active' : ''} `}><Link to="/ui-pagination"><i className="las la-ellipsis-h"></i>Pagination</Link></li>
                                    <li className={`${location.pathname === '/ui-popovers' ? 'active' : ''} `}><Link to="/ui-popovers"><i className="las la-eraser"></i>Popovers</Link></li>
                                    <li className={`${location.pathname === '/ui-progressbars' ? 'active' : ''} `}><Link to="/ui-progressbars"><i className="las la-hdd"></i>Progressbars</Link></li>
                                    <li className={`${location.pathname === '/ui-tabs' ? 'active' : ''} `}><Link to="/ui-tabs"><i className="las la-database"></i>Tabs</Link></li>
                                    <li className={`${location.pathname === '/ui-tooltips' ? 'active' : ''} `}><Link to="/ui-tooltips"><i className="las la-magnet"></i>Tooltips</Link></li>
                                </ul>
                                </Accordion.Collapse>
                                </li>
                                <li className={`form ${location.pathname === '/form-layout' || location.pathname === '/form-validation' || location.pathname === '/form-switch' || location.pathname === '/form-checkbox' || location.pathname === '/form-radio'  ? 'active' : ''} `}>
                                <Accordion.Toggle as={Button} eventKey="1" href="#" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu === '1' ? 'true' : 'false'}><i className="lab la-wpforms"></i><span>Forms</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                                <Accordion.Collapse className="submenu" eventKey="1">
                                <ul id="forms" className="iq-submenu" data-parent="#ui-elements">
                                    <li className={`${location.pathname === '/form-layout' ? 'active' : ''} `}><Link to="/form-layout"><i className="las la-book"></i>Form Elements</Link></li>
                                    <li className={`${location.pathname === '/form-validation' ? 'active' : ''} `}><Link to="/form-validation"><i className="las la-edit"></i>Form Validation</Link></li>
                                    <li className={`${location.pathname === '/form-switch' ? 'active' : ''} `}><Link to="/form-switch"><i className="las la-toggle-off"></i>Form Switch</Link></li>
                                    <li className={`${location.pathname === '/form-checkbox' ? 'active' : ''} `}><Link to="/form-chechbox"><i className="las la-check-square"></i>Form Checkbox</Link></li>
                                    <li className={`${location.pathname === '/form-radio' ? 'active' : ''} `}><Link to="/form-radio"><i className="ri-radio-button-line"></i>Form Radio</Link></li>
                                </ul>
                                </Accordion.Collapse>
                                </li>
                                <li className={`${location.pathname === '/form-wizard' || location.pathname === '/form-wizard-validate' || location.pathname === '/form-wizard-vertical' ? 'active' : ''}`}>
                                <Accordion.Toggle as={Button} eventKey="2" href="#" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu === '2' ? 'true' : 'false'}><i className="ri-archive-drawer-line"></i><span>Forms Wizard</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                                <Accordion.Collapse className="submenu" eventKey="2">
                                <ul id="wizard-form" className="iq-submenu" data-parent="#ui-elements">
                                    <li className={`${location.pathname === '/form-wizard' ? 'active' : ''} `}><Link to="/form-wizard"><i className="ri-clockwise-line"></i>Simple Wizard</Link></li>
                                    <li className={`${location.pathname === '/form-wizard-validate' ? 'active' : ''} `}><Link to="/form-wizard-validate"><i className="ri-clockwise-2-line"></i>Validate Wizard</Link></li>
                                    <li className={`${location.pathname === '/form-wizard-vertical' ? 'active' : ''} `}><Link to="/form-wizard-vertical"><i className="ri-anticlockwise-line"></i>Vertical Wizard</Link></li>
                                </ul>
                                </Accordion.Collapse>
                                </li>
                                <li className={`${location.pathname === '/tables-basic' || location.pathname === '/data-table' || location.pathname === '/table-editable' ? 'active' : ''}`}>
                                <Accordion.Toggle as={Button} eventKey="3" href="#" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu === '3' ? 'true' : 'false'}><i className="ri-table-line"></i><span>Table</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                                <Accordion.Collapse className="submenu" eventKey="3">
                                <ul id="tables" className="iq-submenu" data-parent="#ui-elements">
                                    <li className={`${location.pathname === '/tables-basic' ? 'active' : ''} `}><Link to="/tables-basic"><i className="ri-table-line"></i>Basic Tables</Link></li>
                                    <li className={`${location.pathname === '/data-table' ? 'active' : ''} `}><Link to="/data-table"><i className="ri-database-line"></i>Data Table</Link></li>
                                    <li className={`${location.pathname === '/table-editable' ? 'active' : ''} `}><Link to="/table-editable"><i className="ri-refund-line"></i>Editable Table</Link></li>
                                </ul>
                                </Accordion.Collapse>
                                </li>
                                <li className={`${location.pathname === '/icon-dripicons' || location.pathname === '/icon-fontawesome-5' || location.pathname === '/icon-lineawesome' || location.pathname === '/icon-remixicon' || location.pathname === '/icon-unicons' ? 'active' : ''}`}>
                                <Accordion.Toggle as={Button} eventKey="4" href="#" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu === '4' ? 'true' : 'false'}><i className="ri-list-check"></i><span>Icons</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                                <Accordion.Collapse className="submenu" eventKey="4">
                                <ul id="icons" className="iq-submenu" data-parent="#ui-elements">
                                    <li className={`${location.pathname === '/icon-dripicons' ? 'active' : ''} `}><Link to="/icon-dripicons"><i className="ri-stack-line"></i>Dripicons</Link></li>
                                    <li className={`${location.pathname === '/icon-fontawesome-5' ? 'active' : ''} `}><Link to="/icon-fontawesome-5"><i className="ri-facebook-fill"></i>Font Awesome 5</Link></li>
                                    <li className={`${location.pathname === '/icon-lineawesome' ? 'active' : ''} `}><Link to="/icon-lineawesome"><i className="ri-keynote-line"></i>line Awesome</Link></li>
                                    <li className={`${location.pathname === '/icon-remixicon' ? 'active' : ''} `}><Link to="/icon-remixicon"><i className="ri-remixicon-line"></i>Remixicon</Link></li>
                                    <li className={`${location.pathname === '/icon-unicons' ? 'active' : ''} `}><Link to="/icon-unicons"><i className="ri-underline"></i>unicons</Link></li>
                                </ul>
                                </Accordion.Collapse>
                                </li>
                            </Accordion>
                            </Accordion.Collapse>
                        </li>
                        <li className={activeMenu === '4' ? 'active' : ''}>
                            <Accordion.Toggle as={Button} href="#" eventKey="4" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu === '4' ? 'true' : 'false'}><i className="las la-file-alt iq-arrow-left"></i><span>Pages</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                            <Accordion.Collapse  className="submenu" eventKey="4">
                            <Accordion as="ul" id="pages" className="iq-submenu" data-parent="#iq-sidebar-toggle" onSelect={(e) => setSubmenu1(e)}>
                                <li className={`${location.pathname === '/auth/sign-in' || location.pathname === '/auth/sign-up' || location.pathname === '/auth/pages-recoverpw' || location.pathname === '/auth/pages-confirm-mail' || location.pathname === '/auth/pages-lock-screen' ? 'active' : ''}`}>
                                <Accordion.Toggle as={Button} eventKey="0" href="#" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu1 === '0' ? 'true' : 'false'}><i className="ri-pages-line"></i><span>Authentication</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                                <Accordion.Collapse className="submenu" eventKey="0">
                                <ul id="authentication" className="iq-submenu" data-parent="#pages">
                                    <li className={`${location.pathname === '/auth/sign-in' ? 'active' : ''} `}><Link to="/auth/sign-in"><i className="las la-sign-in-alt"></i>Login</Link></li>
                                    <li className={`${location.pathname === '/auth/sign-up' ? 'active' : ''} `}><Link to="/auth/sign-up"><i className="ri-login-circle-line"></i>Register</Link></li>
                                    <li className={`${location.pathname === '/auth/pages-recoverpw' ? 'active' : ''} `}><Link to="/auth/pages-recoverpw"><i className="ri-record-mail-line"></i>Recover Password</Link></li>
                                    <li className={`${location.pathname === '/auth/pages-confirm-mail' ? 'active' : ''} `}><Link to="/auth/pages-confirm-mail"><i className="ri-file-code-line"></i>Confirm Mail</Link></li>
                                    <li className={`${location.pathname === '/auth/pages-lock-screen' ? 'active' : ''} `}><Link to="/auth/pages-lock-screen"><i className="ri-lock-line"></i>Lock Screen</Link></li>
                                </ul>
                                </Accordion.Collapse>
                                </li>
                                <li className={`${location.pathname === '/pages-timeline'  || location.pathname === '/pages-invoice'  || location.pathname === '/blank-page'  || location.pathname === '/extra-pages/pages-error'  || location.pathname === '/extra-pages/pages-error-500'  || location.pathname === '/extra-pages/pages-maintenance'  || location.pathname === '/extra-pages/pages-comingsoon'  ? 'active' : '' }`}>
                                <Accordion.Toggle as={Button} eventKey="1" href="#" variant=" collapsed" data-toggle="collapse" aria-expanded={activesubMenu1 === '1' ? 'true' : 'false'}><i className="ri-pantone-line"></i><span>Extra Pages</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Accordion.Toggle>
                                <Accordion.Collapse className="submenu" eventKey="1">
                                <ul id="extra-pages" className="iq-submenu" data-parent="#pages">
                                    <li className={`${location.pathname === '/pages-timeline' ? 'active' : ''} `}><Link to="/pages-timeline"><i className="ri-map-pin-time-line"></i>Timeline</Link></li>
                                    <li className={`${location.pathname === '/pages-invoice' ? 'active' : ''} `}><Link to="/pages-invoice"><i className="ri-question-answer-line"></i>Invoice</Link></li>
                                    <li className={`${location.pathname === '/blank-page' ? 'active' : ''} `}><Link to="/blank-page"><i className="ri-invision-line"></i>Blank Page</Link></li>
                                    <li className={`${location.pathname === '/extra-pages/pages-error' ? 'active' : ''} `}><Link to="/extra-pages/pages-error"><i className="ri-error-warning-line"></i>Error 404</Link></li>
                                    <li className={`${location.pathname === '/extra-pages/pages-error-500' ? 'active' : ''} `}><Link to="/extra-pages/pages-error-500"><i className="ri-error-warning-line"></i>Error 500</Link></li>
                                    <li className={`${location.pathname === '/extra-pages/pages-maintenance' ? 'active' : ''} `}><Link to="/extra-pages/pages-maintenance"><i className="ri-archive-line"></i>Maintenance</Link></li>
                                    <li className={`${location.pathname === '/extra-pages/pages-comingsoon' ? 'active' : ''} `}><Link to="/extra-pages/pages-comingsoon"><i className="ri-mastercard-line"></i>Coming Soon</Link></li>
                                    <li className={`${location.pathname === '/pages-faq' ? 'active' : ''} `}><Link to="/pages-faq"><i className="ri-compasses-line"></i>Faq</Link></li>
                                </ul>
                                </Accordion.Collapse>
                                </li>
                            </Accordion>
                            </Accordion.Collapse>
                        </li>
                    </Accordion>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SidebarStyle;
