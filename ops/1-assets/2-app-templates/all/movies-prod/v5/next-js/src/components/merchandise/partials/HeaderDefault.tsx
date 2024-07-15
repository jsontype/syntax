import React, { memo, Fragment, useState } from "react";

// react-bootstrap
import { Row, Col, Container, Nav, Button, Dropdown, Form, Offcanvas, Collapse, Navbar } from "react-bootstrap";

//router
import Link from "next/link";
import { useRouter } from "next/router";


// components
import Logo from "../../logo";
import CustomToggle from "../../CustomToggle";
import Counter from "../../counter";

const HeaderMerchandise = memo(() => {

  const location = useRouter();

  const cart = [
    {
      thumbnail: '/assets/images/shop/product/02.webp',
      name: 'Believe Mask',
      price: '$13.00',
      class: 'mb-4 pb-4 border-bottom'
    },
    {
      thumbnail: '/assets/images/shop/product/04.webp',
      name: 'Black Cap',
      price: '$18.00',
      class: 'mb-4 pb-4 border-bottom'
    },
    {
      thumbnail: '/assets/images/shop/product/05.webp',
      name: 'Boxing Gloves',
      price: '$18.00',
      class: ''
    },
  ]


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow2(false);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  return (
    <>
      <Fragment>
        <header
          className="header-center-home header-merchandise "
          id="default-header"
        >
          <div className="header-top d-xl-block d-none">
            <Container fluid>
              <Row className="align-items-center">
                <Col md="3">

                  <Logo />
                </Col>
                <Col md="9">
                  <div className="navbar-right menu-right">
                    <ul className="d-flex align-items-center justify-content-end gap-3 list-inline mb-0">
                      <li className="me-0">
                        <div className="search-box-2">
                          <Form>
                            <input type="text" className="form-control" placeholder="Search..." />
                            <i className="search-btn">
                              <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                </circle>
                                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                              </svg>
                            </i>
                          </Form>
                        </div>
                      </li>

                      <li className="me-0">
                        <Link
                          className="text-white"
                          href="#"
                          onClick={handleShow}
                        >
                          <span className="btn-icon rounded-pill user-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.0096 14.3334H4.44435C2.40011 14.3334 0.831841 13.595 1.2773 10.6232L1.79599 6.59575C2.07059 5.11292 3.01643 4.54541 3.84633 4.54541H10.632C11.4741 4.54541 12.365 5.15563 12.6823 6.59575L13.201 10.6232C13.5794 13.2594 12.0538 14.3334 10.0096 14.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M10.1008 4.39882C10.1008 2.80811 8.81129 1.51858 7.22057 1.51858V1.51858C6.45457 1.51533 5.71883 1.81735 5.17604 2.35786C4.63325 2.89836 4.32812 3.63282 4.32813 4.39882H4.32812" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M9.1983 7.4013H9.16779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M5.3106 7.4013H5.28009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <Dropdown as="li" className="nav-item nav-icon me-0">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          variant="text-white d-flex align-items-center"
                        >
                          <span className="btn-icon rounded-pill user-icons ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6.30173 10.0683L6.56105 10.0694C10.4141 10.1031 12.6035 10.9019 12.6035 13.0428C12.6035 15.1332 10.5186 15.9305 6.81654 15.9959L6.30173 16.0003C2.28774 16.0003 0 15.2143 0 13.0258C0 10.8398 2.27764 10.0683 6.30173 10.0683ZM6.30173 11.2807L6.03235 11.282C2.84275 11.3129 1.20002 11.8998 1.20002 13.0258C1.20002 14.1899 2.94049 14.7879 6.30173 14.7879C9.66723 14.7879 11.4034 14.1996 11.4034 13.0428C11.4034 11.8787 9.66297 11.2807 6.30173 11.2807ZM13.7632 4.78442C14.067 4.78442 14.318 5.01249 14.3578 5.30838L14.3632 5.39064L14.3627 6.40488L15.4 6.40496C15.7314 6.40496 16 6.67638 16 7.01118C16 7.31808 15.7743 7.57172 15.4814 7.61186L15.4 7.6174L14.3627 7.61732L14.3632 8.63188C14.3632 8.96669 14.0946 9.2381 13.7632 9.2381C13.4595 9.2381 13.2084 9.01004 13.1687 8.71414L13.1632 8.63188L13.1627 7.61732L12.1279 7.6174C11.7965 7.6174 11.5279 7.34598 11.5279 7.01118C11.5279 6.70428 11.7536 6.45064 12.0465 6.4105L12.1279 6.40496L13.1627 6.40488L13.1632 5.39064C13.1632 5.05584 13.4319 4.78442 13.7632 4.78442ZM6.30173 0C8.66194 0 10.5562 1.91386 10.5562 4.29848C10.5562 6.68256 8.66169 8.59696 6.30173 8.59696C3.94231 8.59696 2.04724 6.6823 2.04724 4.29848C2.04724 1.91412 3.94205 0 6.30173 0ZM6.30173 1.21243C4.60477 1.21243 3.24727 2.58377 3.24727 4.29848C3.24727 6.01269 4.60506 7.38453 6.30173 7.38453C7.99889 7.38453 9.35619 6.01299 9.35619 4.29848C9.35619 2.58346 7.99919 1.21243 6.30173 1.21243Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul" className="dropdown-menu-end border-0 p-0 m-0 dropdown-user">
                          <li className="user-info d-flex align-items-center gap-3 mb-3 me-0">
                            <img src="/assets/images/user/user1.webp" alt="user" loading="lazy" className="img-fluid" />
                            <span className="font-size-14 fw-500 text-capitalize text-white">Jenny</span>
                          </li>
                          <li>
                            <Link href="/play-list" className="iq-sub-card d-flex align-items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 22" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.84455 20.6621C4.15273 20.6621 1 20.0876 1 17.7868C1 15.486 4.13273 13.3621 7.84455 13.3621C11.5364 13.3621 14.6891 15.4654 14.6891 17.7662C14.6891 20.066 11.5564 20.6621 7.84455 20.6621Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.83725 10.1738C10.26 10.1738 12.2236 8.21015 12.2236 5.78742C12.2236 3.36469 10.26 1.40015 7.83725 1.40015C5.41452 1.40015 3.44998 3.36469 3.44998 5.78742C3.4418 8.20196 5.3918 10.1656 7.80634 10.1738C7.81725 10.1738 7.82725 10.1738 7.83725 10.1738Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                              <h6 className="mb-0 font-size-14 fw-normal">My Account</h6>
                            </Link>
                          </li>
                          <li>
                            <Link href="/play-list" className="iq-sub-card d-flex align-items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M6.425 13.75V7.575H0.25V6.425H6.425V0.25H7.575V6.425H13.75V7.575H7.575V13.75H6.425Z" fill="white"></path>
                              </svg>
                              <h6 className="mb-0 font-size-14 fw-normal">Watchlist</h6>
                            </Link>
                          </li>
                          <li>
                            <Link href="/pricing" className="iq-sub-card d-flex align-items-center gap-3">
                              <i className="fa-regular fa-star"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">Subscription</h6>
                            </Link>
                          </li>
                          <li>
                            <Link href="/auth/login" className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z" fill="currentColor"></path>
                              </svg>
                              <h6 className="mb-0 font-size-14 fw-normal">Logout</h6>
                            </Link>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="header-bottom header-sticky">
            <Navbar expand="xl" className="nav navbar-light iq-navbar header-hover-menu py-xl-0">
              <Container fluid className="navbar-inner">
                <div className="d-flex align-items-center justify-content-between w-100 landing-header">
                  <div className="d-xl-none d-flex gap-3 gap-xl-0 align-items-center">
                    <div>
                      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar_main" aria-controls="navbar_main" className="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn" onClick={() => setShow2(!show2)}>
                        <svg width="20px" className="icon-20" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z">
                          </path>
                        </svg>
                      </button>
                    </div>
                    <Logo />
                  </div>
                  <Navbar expand="xl" className={`offcanvas mobile-offcanvas nav hover-nav horizontal-nav py-xl-0 ${show2 === true ? 'show' : ''} `} style={{ visibility: `${show2 === true ? 'visible' : 'hidden'}` }}>
                    <Container fluid className="p-lg-0">
                      <Offcanvas.Header className="px-0" closeButton>
                        <div className="navbar-brand ms-3 ">
                          <Logo />
                        </div>
                      </Offcanvas.Header>
                      <ul className="navbar-nav iq-nav-menu  list-unstyled" id="header-menu">
                        <Nav.Item as="li">
                          <Nav.Link aria-expanded={open} href="" onClick={() => setOpen(!open)} className={`${location.pathname === '/merchandise' || location.pathname === '/' || location.pathname === '/home' || location.pathname === '/movies' || location.pathname === '/tv-shows' || location.pathname === '/videos' ? 'active' : ''}`}>
                            <span className="item-name">Home</span>
                            <span className="menu-icon ms-2">
                              <i className="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                              <span className="toggle-menu">
                                <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                                <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                              </span>
                            </span>
                          </Nav.Link>
                          <Collapse in={open} className="sub-nav list-unstyled">
                            <ul>
                              <Nav.Item as="li">
                                <Link href="/" className={`${location.pathname === '/' ? 'active' : ''} nav-link`}> OTT Home </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/home" className={`${location.pathname === '/home' ? 'active' : ''} nav-link`}> Home </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/movies" className={`${location.pathname === '/movies' ? 'active' : ''} nav-link`}> Movie </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/tv-shows" className={`${location.pathname === '/tv-shows' ? 'active' : ''} nav-link`}> TV Show </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/videos" className={`${location.pathname === '/videos' ? 'active' : ''} nav-link`}> Video </Link>
                              </Nav.Item>
                              <Nav.Item as="li" >
                                <Link href="/merchandise" className={`${location.pathname === '/merchandise' ? 'active' : ''} nav-link`}> Merchandise Store </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link aria-expanded={open1} href="" onClick={() => setOpen1(!open1)}>
                            <span className="item-name">Features</span>
                            <span className="menu-icon ms-2">
                              <i className="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                              <span className="toggle-menu">
                                <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                                <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                              </span>
                            </span>
                          </Nav.Link>
                          <Collapse in={open1} className="sub-nav list-unstyled">
                            <ul>
                              <Nav.Item as="li">
                                <Link href="/movies/restricted" className={`${location.pathname === '/movies/restricted' ? 'active' : ''} nav-link`}> Restricted Content </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/movies/related" className={`${location.pathname === '/movies/related' ? 'active' : ''} nav-link`}> Related Merchandise </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/play-list" className={`${location.pathname === '/play-list' ? 'active' : ''} nav-link`}> Playlist </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/genres" className={`${location.pathname === '/genres' ? 'active' : ''} nav-link`}> Genres </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/cast" className={`${location.pathname === '/cast' ? 'active' : ''} nav-link`}> Cast </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/tags" className={`${location.pathname === '/tags' ? 'active' : ''} nav-link`}> Tags </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link aria-expanded={open2} href="" onClick={() => setOpen2(!open2)} className={`${location.pathname === '/extra/about-us' || location.pathname === '/extra/contact-us' || location.pathname === '/fa1' || location.pathname === '/extra/privacy-policy' || location.pathname === '/pricing' || location.pathname === '/coming-soon' ? 'active' : ''}`}>
                            <span className="item-name">Pages</span>
                            <span className="menu-icon ms-2">
                              <i className="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                              <span className="toggle-menu">
                                <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                                <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                              </span>
                            </span>
                          </Nav.Link>
                          <Collapse in={open2} className="sub-nav list-unstyled">
                            <ul>
                              <Nav.Item as="li">
                                <Link href="/extra/about-us" className="nav-link"> About Us </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/extra/contact-us" className="nav-link"> Contact Us </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/extra/faq" className="nav-link"> FAQ </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/extra/privacy-policy" className="nav-link"> Privacy Policy </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/extra/pricing-plan" className="nav-link"> Pricing Plan </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/extra/coming-soon" className="nav-link"> Coming Soon </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link aria-expanded={open3} href="" onClick={() => setOpen3(!open3)}>
                                  <span className="item-name">Error Pages</span>
                                  <span className="menu-icon">
                                    <i className="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                                    <span className="toggle-menu">
                                      <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                                      <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                                    </span>
                                  </span>
                                </Nav.Link>
                                <Collapse in={open3} className="sub-nav list-unstyled">
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link href="/extra/error-page-one" className="nav-link"> Error Page 1 </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/extra/error-page-two" className="nav-link"> Error Page 2 </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link aria-expanded={open4} href="" onClick={() => setOpen4(!open4)} className={`${location.pathname === '/blogs' || location.pathname === '/blogs/grid/one-column' || location.pathname === '/blogs/grid/two-column' || location.pathname === '/blogs/grid/three-column' || location.pathname === 'blogs/small-grid' || location.pathname === '/blogs/sidebar/left' || location.pathname === '/blogs/sidebar/right' || location.pathname === '/blogs/template' || location.pathname === '/blogs-detail' || location.pathname === '/blogs/single/audio' || location.pathname === '/blogs/single/video' || location.pathname === '/blogs/single/link' || location.pathname === '/blogs/single/quote' || location.pathname === '/blogs/single/gallery' ? 'active' : ''}`}>
                            <span className="item-name">Blog</span>
                            <span className="menu-icon ms-2">
                              <i className="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                              <span className="toggle-menu">
                                <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                                <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                              </span>
                            </span>
                          </Nav.Link>
                          <Collapse in={open4} className="sub-nav list-unstyled">
                            <ul>
                              <Nav.Item as="li">
                                <Link href="/blogs" className={`${location.pathname === '/blogs' ? 'active' : ''} nav-link`}> Listing </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link aria-expanded={open5} href="" onClick={() => setOpen5(!open5)} className={`${location.pathname === '/blogs/grid/one-column' || location.pathname === '/blogs/grid/two-column' || location.pathname === '/blogs/grid/three-column' || location.pathname === '/blogs/grid/four-column' ? 'active' : ''}`}>
                                  <span className="item-name">Blog grid</span>
                                  <span className="menu-icon">
                                    <i className="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                                    <span className="toggle-menu">
                                      <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                                      <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                                    </span>
                                  </span>
                                </Nav.Link>
                                <Collapse in={open5} className="sub-nav list-unstyled">
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/grid/one-column" className={`${location.pathname === '/blogs/grid/one-column' ? 'active' : ''} nav-link`}> 1 Column </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/grid/two-column" className={`${location.pathname === '/blogs/grid/two-column' ? 'active' : ''} nav-link`}> 2 column</Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/grid/three-column" className={`${location.pathname === '/blogs/grid/three-column' ? 'active' : ''} nav-link`}> 3 column </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/grid/four-column" className={`${location.pathname === '/blogs/grid/four-column' ? 'active' : ''} nav-link`}> 4 column </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link aria-expanded={open6} href="" onClick={() => setOpen6(!open6)} className={`${location.pathname === '/blogs/sidebar/left' || location.pathname === '/blog-sidebar/right' ? 'active' : ''}`}>
                                  <span className="item-name">Blog Sidebar</span>
                                  <span className="menu-icon">
                                    <i className="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                                    <span className="toggle-menu">
                                      <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                                      <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                                    </span>
                                  </span>
                                </Nav.Link>
                                <Collapse in={open6} className="sub-nav list-unstyled">
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/sidebar/left" className={`${location.pathname === '/blog-sidebar/left' ? 'active' : ''} nav-link`}> Left Sidebar </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/sidebar/right" className={`${location.pathname === '/blog-sidebar/right' ? 'active' : ''} nav-link`}> Right Sidebar </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link aria-expanded={open7} href="" onClick={() => setOpen7(!open7)} className={`${location.pathname === '/blogs/template' || location.pathname === '/blogs-detail' || location.pathname === '/blogs/single/audio' || location.pathname === '/blogs/single/video' || location.pathname === '/blogs/single/link' || location.pathname === '/blogs/single/quote' || location.pathname === '/blogs/single/gallery' ? 'active' : ''}`}>
                                  <span className="item-name">Blog Single</span>
                                  <span className="menu-icon">
                                    <i className="fa fa-caret-right toggledrop-desktop right-icon" aria-hidden="true"></i>
                                    <span className="toggle-menu">
                                      <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                                      <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                                    </span>
                                  </span>
                                </Nav.Link>
                                <Collapse in={open7} className="sub-nav list-unstyled">
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/template" className={`${location.pathname === '/blogs/template' ? 'active' : ''} nav-link`}> Blog Template </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/detail" className={`${location.pathname === '/blogs/detail' ? 'active' : ''} nav-link`}> Standard </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/single/audio" className={`${location.pathname === '/blogs/single/audio' ? 'active' : ''} nav-link`}> Audio </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/single/video" className={`${location.pathname === '/blogs/single/video' ? 'active' : ''} nav-link`}> Video </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/single/link" className={`${location.pathname === '/blogs/single/link' ? 'active' : ''} nav-link`}> Link </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/single/quote" className={`${location.pathname === '/blogs/single/quote' ? 'active' : ''} nav-link`}> Quote </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link href="/blogs/single/gallery" className={`${location.pathname === '/blogs/single/gallery' ? 'active' : ''} nav-link`}> Gallery </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link aria-expanded={open8} href="" onClick={() => setOpen8(!open8)} className={`${location.asPath.split('/').includes('merchandise') && location.asPath.split('/').length > 2 ? 'active' : ''}`}>
                            <span className="item-name">Shop</span>
                            <span className="menu-icon ms-2">
                              <i className="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                              <span className="toggle-menu">
                                <i className="fa fa-plus arrow-active text-white" aria-hidden="true"></i>
                                <i className="fa fa-minus arrow-hover text-white" aria-hidden="true"></i>
                              </span>
                            </span>
                          </Nav.Link>
                          <Collapse in={open8} className="sub-nav list-unstyled">
                            <ul>
                              <Nav.Item as="li">
                                <Link href="/merchandise/shop" className={`${location.pathname === '/merchandise/shop' ? 'active' : ''} nav-link`}> Shop </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/merchandise/account" className={`${location.pathname === '/merchandise/account' ? 'active' : ''} nav-link`}> My Account Page </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/merchandise/cart" className={`${location.pathname === '/merchandise/cart' ? 'active' : ''} nav-link`}> Cart Page </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/merchandise/wishlist" className={`${location.pathname === '/merchandise/wishlist' ? 'active' : ''} nav-link`}> Wishlist Page </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/merchandise/checkout" className={`${location.pathname === '/merchandise/checkout' ? 'active' : ''} nav-link`}> Checkout Page </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link href="/merchandise/track-order" className={`${location.pathname === '/merchandise/track-order' ? 'active' : ''} nav-link`}> Order Tracking </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                      </ul>
                    </Container>


                    <div className="navbar-right menu-right">
                      <ul className="d-flex align-items-center list-inline m-0">
                        <Dropdown
                          as="li"
                          className="nav-item nav-icon position-relative"
                        >
                          <Dropdown.Menu
                            className="search-box iq-search-bar d-search p-0 m-0"
                          >
                            <Form action="#" className="search-form">
                              <div className="form-group position-relative">
                                <input
                                  type="search"
                                  className="text search-input font-size-12"
                                  placeholder="Search"
                                />
                                <Button type="submit" className="search-submit">
                                  <i className="ri-search-line d-flex justify-content-center"></i>
                                </Button>
                              </div>
                            </Form>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as="li" className="nav-item nav-icon">
                          <Dropdown.Menu
                            className="iq-sub-dropdown iq-user-dropdown"
                          >
                            <div className="iq-card shadow-none m-0">
                              <div className="iq-card-body p-0 ps-3 pe-3">
                                <Link
                                  href="/auth/login"
                                  className="iq-sub-card setting-dropdown"
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="right-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          d="M10.543 8.01449H2.51562"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M8.58984 6.0708L10.5418 8.0148L8.58984 9.9588"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M5.67188 4.92614V4.30414C5.67188 2.94748 6.77121 1.84814 8.12854 1.84814H11.3845C12.7379 1.84814 13.8345 2.94481 13.8345 4.29814V11.7248C13.8345 13.0815 12.7345 14.1815 11.3779 14.1815H8.12121C6.76854 14.1815 5.67188 13.0841 5.67188 11.7315V11.1035"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="media-body ms-3">
                                      <h6 className="mb-0 ">Logout</h6>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  href="/extra-pages/sign-up"
                                  className="iq-sub-card setting-dropdown"
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="right-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.58336 10.1377C4.0207 10.1377 1.83203 10.525 1.83203 12.077C1.83203 13.629 4.00736 14.0304 6.58336 14.0304C9.1467 14.0304 11.3347 13.6424 11.3347 12.091C11.3347 10.5397 9.16003 10.1377 6.58336 10.1377Z"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.58375 7.92416C8.26575 7.92416 9.62908 6.56083 9.62908 4.87883C9.62908 3.19683 8.26575 1.8335 6.58375 1.8335C4.90242 1.8335 3.53908 3.19683 3.53908 4.87883C3.53308 6.55483 4.88642 7.91816 6.56308 7.92416H6.58375Z"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M12.8021 5.77979V8.45312"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M14.1642 7.11605H11.4375"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="media-body ms-3">
                                      <h6 className="mb-0 ">Register</h6>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </ul>
                    </div>
                    {/* Myaccount navigate link */}
                  </Navbar>
                  <div className="right-panel">
                    <Button id="navbar-toggle" bsPrefix="navbar-toggler" type="button" aria-expanded={show1} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" onClick={() => setShow1(!show1)} >
                      <span className="navbar-toggler-btn">
                        <span className="navbar-toggler-icon"></span>
                      </span>
                    </Button>
                    <div className={`p-3 navbar-collapse ${show1 === true ? 'collapse show' : 'collapse'}`} id="navbarSupportedContent">
                      <div className="iq-meta-menu-container d-xl-block d-none">
                        <ul className="d-flex align-items-center m-0 list-inline iq-meta-menu">
                          <li>
                            <Link href="/merchandise/account">My Account</Link>
                          </li>
                          <li>
                            <Link href="https://iqonic.desky.support/">Customer Support</Link>
                          </li>
                          <li>
                            <Link href="/extra/contact-us">Help?</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="d-xl-none">
                        <ul className="d-flex align-items-center justify-content-end gap-3 list-inline mb-0">
                          <li>
                            <div className="search-box-2">
                              <form>
                                <input type="text" className="form-control" placeholder="Search..." />
                                <button type="submit" className="search-btn">
                                  <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    </circle>
                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                  </svg>
                                </button>
                              </form>
                            </div>
                          </li>
                          <li>
                            <Link href="#offcanvasCart" className="text-white" >
                              <span className="btn-icon rounded-pill user-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M10.0096 14.3334H4.44435C2.40011 14.3334 0.831841 13.595 1.2773 10.6232L1.79599 6.59575C2.07059 5.11292 3.01643 4.54541 3.84633 4.54541H10.632C11.4741 4.54541 12.365 5.15563 12.6823 6.59575L13.201 10.6232C13.5794 13.2594 12.0538 14.3334 10.0096 14.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M10.1008 4.39882C10.1008 2.80811 8.81129 1.51858 7.22057 1.51858V1.51858C6.45457 1.51533 5.71883 1.81735 5.17604 2.35786C4.63325 2.89836 4.32812 3.63282 4.32813 4.39882H4.32812" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M9.1983 7.4013H9.16779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M5.3106 7.4013H5.28009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li className="dropdown" id="itemdropdown2">
                            <Link className="text-white d-flex align-items-center" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <div className="btn-icon rounded-pill user-icons">
                                <span className="btn-inner">
                                  <svg className="icon-18" width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </span>
                              </div>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0" aria-labelledby="navbarDropdown2">
                              <div className="user-info d-flex align-items-center gap-3 mb-3">
                                <img src="/assets/images/user/user1.webp" className="img-fluid" alt="" loading="lazy" />
                                <span className="font-size-14 fw-500 text-capitalize text-white">Jenny</span>
                              </div>
                              <Link href="/play-list" className="iq-sub-card d-flex align-items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 22" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M7.84455 20.6621C4.15273 20.6621 1 20.0876 1 17.7868C1 15.486 4.13273 13.3621 7.84455 13.3621C11.5364 13.3621 14.6891 15.4654 14.6891 17.7662C14.6891 20.066 11.5564 20.6621 7.84455 20.6621Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M7.83725 10.1738C10.26 10.1738 12.2236 8.21015 12.2236 5.78742C12.2236 3.36469 10.26 1.40015 7.83725 1.40015C5.41452 1.40015 3.44998 3.36469 3.44998 5.78742C3.4418 8.20196 5.3918 10.1656 7.80634 10.1738C7.81725 10.1738 7.82725 10.1738 7.83725 10.1738Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <h6 className="mb-0 font-size-14 fw-normal">My Account</h6>
                              </Link>
                              <Link href="/play-list" className="iq-sub-card d-flex align-items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <path d="M6.425 13.75V7.575H0.25V6.425H6.425V0.25H7.575V6.425H13.75V7.575H7.575V13.75H6.425Z" fill="white"></path>
                                </svg>
                                <h6 className="mb-0 font-size-14 fw-normal">Watchlist</h6>
                              </Link>
                              <Link href="/pricing" className="iq-sub-card d-flex align-items-center gap-3">
                                <i className="fa-regular fa-star"></i>
                                <h6 className="mb-0 font-size-14 fw-normal">Subscription</h6>
                              </Link>
                              <Link href="/auth/login" className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z" fill="currentColor"></path>
                                </svg>
                                <h6 className="mb-0 font-size-14 fw-normal">Logout</h6>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </Container>
            </Navbar>
          </div>
        </header>
        <Offcanvas show={show} onHide={handleClose} placement="end" className="sidebar-cart border-0 on-rtl">
          <Offcanvas.Header closeButton className="py-4">
            <Offcanvas.Title as="h5">Shopping Cart (3)</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="py-5">
            <div className="sidebar-cart-content d-flex flex-column justify-content-between">
              <div className="cart-items-container">
                <ul className="cart-items-list m-0 list-inline">
                  {cart.map((item, index) => {
                    return (
                      <li className={"cart-item " + item.class} key={index}>
                        <div className="cart-item-block d-flex gap-3">
                          <div className="image flex-shrink-0">
                            <img src={item.thumbnail} alt="product-image" className="img-fluid object-cover" width={90} />
                          </div>
                          <div className="cart-block-content position-relative flex-grow-1 pe-5">
                            <h6 className="mb-36 text-capitalize">{item.name}</h6>
                            <span className="text-primary small">{item.price}</span>
                            <div className="mt-3">
                              <Counter />
                            </div>
                            <div className="position-absolute top-0 end-0">
                              <Link href="#" className="text-white delete-btn text-capitalize">delete</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="cart-progress-container mt-5 pt-5 border-top">
                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                  <h5 className="m-0 fw-bold">Subtotal</h5>
                  <h5 className="m-0 fw-bold">$49.00</h5>
                </div>
                <div className="d-grid gap-3 mt-4">
                  <Link href='/merchandise/checkout' className="btn bg-primary text-uppercase fw-medium w-100 text-white">
                    <span className="button-text small">checkout</span>
                  </Link>

                  <Link href='/merchandise/cart' className="btn bg-light text-uppercase fw-medium w-100 text-dark">
                    <span className="button-text small">view cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Fragment>
    </>
  );
});
HeaderMerchandise.displayName = "HeaderMerchandise";
export default HeaderMerchandise;
