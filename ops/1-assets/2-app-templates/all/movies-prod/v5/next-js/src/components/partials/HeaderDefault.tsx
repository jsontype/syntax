import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import { Button, Nav, Collapse, Navbar, Offcanvas, Container, Dropdown } from "react-bootstrap";

//router
import Link from "next/link";
import { useRouter } from "next/router";


// components
import Logo from "../logo";
import CustomToggle from "../CustomToggle";


const HeaderDefault = memo(() => {
  const [isMega, setIsMega] = useState(true);
  const location = useRouter();

  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerSticky = document.querySelector(".header-sticky");
      if (headerSticky) {
        if (window.scrollY > 1) {
          headerSticky.classList.add("sticky");
        } else {
          headerSticky.classList.remove("sticky");
        }
      }
    };

    const updateIsMega = () => {
      setIsMega(location.asPath === "/");
    };

    window.addEventListener("scroll", handleScroll);
    updateIsMega();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
  return (
    <Fragment>
      <header className="header-center-home header-default header-sticky">
        <Navbar
          expand="xl"
          className="nav navbar-light iq-navbar header-hover-menu py-xl-0"
        >
          <Container fluid className="navbar-inner">
            <div className="d-flex align-items-center justify-content-between w-100 landing-header">
              <div className="d-flex gap-3 gap-xl-0 align-items-center">
                <div>
                  <button
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbar_main"
                    aria-controls="navbar_main"
                    className="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn"
                    onClick={() => setShow1(!show1)}
                  >
                    <svg width="20px" className="icon-20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Logo></Logo>
              </div>
              <Navbar
                expand="xl"
                className={`offcanvas mobile-offcanvas nav hover-nav horizontal-nav py-xl-0 ${show1 === true ? "show" : ""
                  } ${isMega ? "mega-menu-content" : ""}`}
                style={{
                  visibility: `${show1 === true ? "visible" : "hidden"}`,
                }}
                id="navbar_main"
              >
                <Container fluid className="container-fluid p-lg-0">
                  <Offcanvas.Header className="px-0" closeButton>
                    <div className="navbar-brand ms-3">
                      <Logo></Logo>
                    </div>
                  </Offcanvas.Header>
                  <ul
                    className="navbar-nav iq-nav-menu list-unstyled"
                    id="header-menu"
                  >
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                        className={`${location.asPath === "/" ||
                          location.asPath === "/home" ||
                          location.asPath === "/movies" ||
                          location.asPath === "/tv-shows" ||
                          location.asPath === "/videos" ||
                          location.asPath === "/merchandise"
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">Home</span>
                        <span className="menu-icon ms-2">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Nav.Link>
                      <Collapse
                        className={`sub-nav justify-content-center list-unstyled ${isMega ? " mega-menu-item" : ""
                          }`}
                      >
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.asPath === "/" ? "active" : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              href="/"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/new-home.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">OTT Home</span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.asPath === "/home" ? "active" : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              href="/home"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/home.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">Home</span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.asPath === "/movies" ? "active" : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              href="/movies"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/movie.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">Movie</span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.asPath === "/tv-shows"
                                ? "active"
                                : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              href="/tv-shows"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/tv-show.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">TV Show</span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.asPath === "/videos" ? "active" : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              href="/videos"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/video.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">Video</span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.asPath === "/merchandise"
                                ? "active"
                                : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              href="/merchandise"
                            >
                              {isMega ? (
                                <img
                                  src="/assets/images/mega-menu/shop-home.webp"
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                Merchandise Store
                              </span>
                            </Link>
                          </Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open1}
                        href=""
                        onClick={() => setOpen1(!open1)}
                        className={`${location.asPath === "/movies/related" ||
                          location.asPath === "/movies/restricted" ||
                          location.asPath === "/play-list" ||
                          location.asPath === "/genres" ||
                          location.asPath === "/cast" ||
                          location.asPath === "/tags" || location.asPath === "/watchlist-detail"
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">Features</span>
                        <span className="menu-icon ms-2">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus  arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus  arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Nav.Link>
                      <Collapse in={open1} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              href="/movies/restricted"
                              className={`${location.asPath === "/movies/restricted"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Restricted Content{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/movies/related"
                              className={`${location.asPath === "/movies/related"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Related Merchandise{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/play-list"
                              className={`${location.asPath === "/play-list" || location.asPath === "/watchlist-detail"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Playlist{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/genres"
                              className={`${location.asPath === "/genres" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Genres{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/cast"
                              className={`${location.asPath === "/cast" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Cast{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/tags"
                              className={`${location.asPath === "/tags" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Tags{" "}
                            </Link>
                          </Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open2}
                        href=""
                        onClick={() => setOpen2(!open2)}
                        className={`${location.asPath.split('/').includes('extra')
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">Pages</span>
                        <span className="menu-icon ms-2">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus  arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus  arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Nav.Link>
                      <Collapse in={open2} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              href="/extra/about-us"
                              className={`${location.asPath === "/extra/about-us"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              About Us{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/extra/contact-us"
                              className={`${location.asPath === "/extra/contact-us"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Contact Us{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/extra/faq"
                              className={`${location.asPath === "/extra/faq" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              FAQ{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/extra/privacy-policy"
                              className={`${location.asPath === "/extra/privacy-policy"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Privacy Policy{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/extra/pricing-plan"
                              className={`${location.asPath === "/extra/pricing-plan" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Pricing Plan{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/extra/coming-soon"
                              className={`nav-link`}
                            >
                              {" "}
                              Coming Soon{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              aria-expanded={open3}
                              href=""
                              onClick={() => setOpen3(!open3)}
                            >
                              <span className="item-name">Error Pages</span>
                              <span className="menu-icon">
                                <i
                                  className="fa fa-caret-right toggledrop-desktop right-icon"
                                  aria-hidden="true"
                                ></i>
                                <span className="toggle-menu">
                                  <i
                                    className="fa fa-plus  arrow-active text-white"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-minus  arrow-hover text-white"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </span>
                            </Nav.Link>
                            <Collapse
                              in={open3}
                              className="sub-nav list-unstyled"
                            >
                              <ul>
                                <Nav.Item as="li">
                                  <Link
                                    href="/extra/error-page-one"
                                    className={`nav-link`}
                                  >
                                    {" "}
                                    Error Page 1{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/extra/error-page-two"
                                    className={`nav-link`}
                                  >
                                    {" "}
                                    Error Page 2{" "}
                                  </Link>
                                </Nav.Item>
                              </ul>
                            </Collapse>
                          </Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open4}
                        href=""
                        onClick={() => setOpen4(!open4)}
                        className={`${location.asPath.split('/').includes('blogs')
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">Blog</span>
                        <span className="menu-icon ms-2">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus  arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus  arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Nav.Link>
                      <Collapse in={open4} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              href="/blogs"
                              className={`${location.asPath === "/blogs" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Listing{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              className={`${location.asPath.split('/').includes('blogs') && location.asPath.split('/').includes('grid')
                                ? "active"
                                : ""
                                }`}
                              aria-expanded={open5}
                              href=""
                              onClick={() => setOpen5(!open5)}
                            >
                              <span className="item-name">Blog grid</span>
                              <span className="menu-icon">
                                <i
                                  className="fa fa-caret-right toggledrop-desktop right-icon"
                                  aria-hidden="true"
                                ></i>
                                <span className="toggle-menu">
                                  <i
                                    className="fa fa-plus  arrow-active text-white"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-minus  arrow-hover text-white"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </span>
                            </Nav.Link>
                            <Collapse
                              in={open5}
                              className="sub-nav list-unstyled"
                            >
                              <ul>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/grid/one-column"
                                    className={`${location.asPath === "/blogs/grid/one-column"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    1 Column{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/grid/two-column"
                                    className={`${location.asPath === "/blogs/grid/two-column"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    2 column
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/grid/three-column"
                                    className={`${location.asPath === "/blogs/grid/three-column"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    3 column{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/grid/four-column"
                                    className={`${location.asPath === "/blogs/grid/four-column"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    4 column{" "}
                                  </Link>
                                </Nav.Item>
                              </ul>
                            </Collapse>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              aria-expanded={open6}
                              href=""
                              onClick={() => setOpen6(!open6)}
                              className={`${location.asPath.split('/').includes('blogs') && location.asPath.split('/').includes('sidebar')
                                ? "active"
                                : ""
                                }`}
                            >
                              <span className="item-name">Blog Sidebar</span>
                              <span className="menu-icon">
                                <i
                                  className="fa fa-caret-right toggledrop-desktop right-icon"
                                  aria-hidden="true"
                                ></i>
                                <span className="toggle-menu">
                                  <i
                                    className="fa fa-plus  arrow-active text-white"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-minus  arrow-hover text-white"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </span>
                            </Nav.Link>
                            <Collapse
                              in={open6}
                              className="sub-nav list-unstyled"
                            >
                              <ul>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/sidebar/left"
                                    className={`${location.asPath ===
                                      "/blogs/sidebar/left"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Left Sidebar{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/sidebar/right"
                                    className={`${location.asPath ===
                                      "/blogs/sidebar/right"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Right Sidebar{" "}
                                  </Link>
                                </Nav.Item>
                              </ul>
                            </Collapse>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              aria-expanded={open7}
                              href=""
                              onClick={() => setOpen7(!open7)}
                              className={`${location.asPath ===
                                "/blogs/template" ||
                                location.asPath ===
                                "/blogs/detail" ||
                                location.asPath.split('/').includes('blogs') && location.asPath.split('/').includes('single')
                                ? "active"
                                : ""
                                }`}
                            >
                              <span className="item-name">Blog Single</span>
                              <span className="menu-icon">
                                <i
                                  className="fa fa-caret-right toggledrop-desktop right-icon"
                                  aria-hidden="true"
                                ></i>
                                <span className="toggle-menu">
                                  <i
                                    className="fa fa-plus  arrow-active text-white"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    className="fa fa-minus  arrow-hover text-white"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </span>
                            </Nav.Link>
                            <Collapse
                              in={open7}
                              className="sub-nav list-unstyled"
                            >
                              <ul>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/template"
                                    className={`${location.asPath ===
                                      "/blogs/template"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Blog Template{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/detail"
                                    className={`${location.asPath ===
                                      "/blogs/detail"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Standard{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/single/audio"
                                    className={`${location.asPath === "/blogs/single/audio"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Audio{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/single/video"
                                    className={`${location.asPath === "/blogs/single/video"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Video{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/single/link"
                                    className={`${location.asPath === "/blogs/single/link"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Link{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/single/quote"
                                    className={`${location.asPath === "/blogs/single/quote"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Quote{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    href="/blogs/single/gallery"
                                    className={`${location.asPath ===
                                      "/blogs/single/gallery"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    Gallery{" "}
                                  </Link>
                                </Nav.Item>
                              </ul>
                            </Collapse>
                          </Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open8}
                        href=""
                        onClick={() => setOpen8(!open8)}
                        className={`${location.asPath.split('/').includes('merchandise') && location.asPath.split('/').length > 2
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">Shop</span>
                        <span className="menu-icon ms-2">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Nav.Link>
                      <Collapse in={open8} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/shop"
                              className={`${location.asPath === "/merchandise/shop" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Shop{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/account"
                              className={`${location.asPath === "/merchandise/account" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              My Account Page{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/cart"
                              className={`${location.asPath === "/merchandise/cart" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Cart Page{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/wishlist"
                              className={`${location.asPath === "/merchandise/wishlist"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Wishlist Page{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/checkout"
                              className={`${location.asPath === "/merchandise/checkout"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Checkout Page{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/track-order"
                              className={`${location.asPath === "/merchandise/track-order"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Order Tracking{" "}
                            </Link>
                          </Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                  </ul>
                </Container>
              </Navbar>
              <div className="right-panel">
                <Button
                  id="navbar-toggle"
                  bsPrefix="navbar-toggler"
                  type="button"
                  aria-expanded={show}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  onClick={() => setShow(!show)}
                >
                  <span className="navbar-toggler-btn">
                    <span className="navbar-toggler-icon"></span>
                  </span>
                </Button>
                <div
                  className={`navbar-collapse ${show === true ? "collapse show" : "collapse"
                    }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav align-items-center ms-auto mb-2 mb-xl-0">
                    <Dropdown
                      as="li"
                      className="nav-item dropdown iq-responsive-menu"
                    >
                      <div className="search-box">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          href="#"
                          variant="nav-link p-0"
                        >
                          <div className="btn-icon btn-sm rounded-pill btn-action">
                            <span className="btn-inner">
                              <svg
                                className="icon-20"
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="11.7669"
                                  cy="11.7666"
                                  r="8.98856"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></circle>
                                <path
                                  d="M18.0186 18.4851L21.5426 22"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          as="ul"
                          className="p-0 dropdown-search m-0 iq-search-bar"
                          style={{ width: "20rem" }}
                        >
                          <li className="p-0">
                            <div className="form-group input-group mb-0">
                              <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Search..."
                              />
                              <button type="submit" className="search-submit">
                                <svg
                                  className="icon-15"
                                  width="15"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="11.7669"
                                    cy="11.7666"
                                    r="8.98856"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></circle>
                                  <path
                                    d="M18.0186 18.4851L21.5426 22"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </li>
                        </Dropdown.Menu>
                      </div>
                    </Dropdown>
                    <Dropdown as="li" className="nav-item">
                      <Dropdown.Toggle
                        as={CustomToggle}
                        href="#"
                        variant=" nav-link d-flex align-items-center"
                        size="sm"
                        id="dropdownMenuButton1"
                      >
                        <div className="btn-icon rounded-pill user-icons">
                          <span className="btn-inner">
                            <svg
                              className="icon-18"
                              width="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M19.2036 8.66919V12.6792"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M21.2497 10.6741H17.1597"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        as="ul"
                        className="dropdown-menu-end dropdown-user border-0 p-0 m-0"
                      >
                        <li className="user-info d-flex align-items-center gap-3 mb-3">
                          <img
                            src="/assets/images/user/user1.webp"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                          <span className="font-size-14 fw-500 text-capitalize text-white">
                            Jenny
                          </span>
                        </li>
                        <li>
                          <Link
                            href="/play-list"
                            className="iq-sub-card d-flex align-items-center gap-3"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 22"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.84455 20.6621C4.15273 20.6621 1 20.0876 1 17.7868C1 15.486 4.13273 13.3621 7.84455 13.3621C11.5364 13.3621 14.6891 15.4654 14.6891 17.7662C14.6891 20.066 11.5564 20.6621 7.84455 20.6621Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.83725 10.1738C10.26 10.1738 12.2236 8.21015 12.2236 5.78742C12.2236 3.36469 10.26 1.40015 7.83725 1.40015C5.41452 1.40015 3.44998 3.36469 3.44998 5.78742C3.4418 8.20196 5.3918 10.1656 7.80634 10.1738C7.81725 10.1738 7.82725 10.1738 7.83725 10.1738Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              My Account
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/play-list"
                            className="iq-sub-card d-flex align-items-center gap-3"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m0 0h24v24h-24z"
                                fill="#fff"
                                opacity="0"
                                transform="matrix(-1 0 0 -1 24 24)"
                              />
                              <path
                                d="m19 11h-6v-6a1 1 0 0 0 -2 0v6h-6a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"
                                fill="currentColor"
                              />
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              Watchlist
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/extra/pricing-plan"
                            className="iq-sub-card d-flex align-items-center gap-3"
                          >
                            <svg
                              width="16"
                              height="16"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              Subscription
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/auth/login"
                            className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              Logout
                            </h6>
                          </Link>
                        </li>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
});

HeaderDefault.displayName = "HeaderDefault";
export default HeaderDefault;
