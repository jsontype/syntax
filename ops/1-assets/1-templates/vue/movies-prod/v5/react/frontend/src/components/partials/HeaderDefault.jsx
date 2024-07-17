import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import {
  Button,
  Nav,
  Collapse,
  Navbar,
  Offcanvas,
  Container,
  Dropdown,
} from "react-bootstrap";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

import { theme_scheme_direction } from "../../store/setting/actions";

// components
import Logo from "../logo";
import CustomToggle from "../CustomToggle";

// the hook
import { useTranslation } from "react-i18next";

// img
import user from "/assets/images/user/user1.webp";
import ott from "/assets/images/mega-menu/new-home.webp";
import home from "/assets/images/mega-menu/home.webp";
import movie from "/assets/images/mega-menu/movie.webp";
import tvshow from "/assets/images/mega-menu/tv-show.webp";
import video from "/assets/images/mega-menu/video.webp";
import shop from "/assets/images/mega-menu/shop-home.webp";

const HeaderDefault = memo(() => {
  const dispatch = useDispatch();
  const [isMega, setIsMega] = useState(true);
  const location = useLocation();

  //for translation
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    if (lng === 'ar') {
      dispatch(theme_scheme_direction('rtl'))
    }
    else {
      dispatch(theme_scheme_direction('ltr'))
    }
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

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
      setIsMega(location.pathname === "/");
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
                  <Offcanvas.Header className="px-0" closeButton onHide={() => setShow1(false)}>
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
                        className={`${location.pathname === "/" ||
                          location.pathname === "/home" ||
                          location.pathname === "/movies" ||
                          location.pathname === "/tv-shows" ||
                          location.pathname === "/videos" ||
                          location.pathname === "/merchandise-store"
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">{t("header.home")}</span>
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
                      <Collapse in={open}
                        className={`sub-nav justify-content-center list-unstyled ${isMega ? " mega-menu-item" : ""
                          }`}
                      >
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.pathname === "/" ? "active" : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              to="/"
                            >
                              {isMega ? (
                                <img
                                  src={ott}
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("header.ott_home")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.pathname === "/home" ? "active" : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              to="/home"
                            >
                              {isMega ? (
                                <img
                                  src={home}
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("header.home")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.pathname === "/movies" ? "active" : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              to="/movies"
                            >
                              {isMega ? (
                                <img
                                  src={movie}
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("header.movie")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.pathname === "/tv-shows"
                                ? "active"
                                : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              to="/tv-shows"
                            >
                              {isMega ? (
                                <img
                                  src={tvshow}
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("header.tv_show")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.pathname === "/videos" ? "active" : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              to="/videos"
                            >
                              {isMega ? (
                                <img
                                  src={video}
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("header.video")}
                              </span>
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              className={`${location.pathname === "/merchandise-store"
                                ? "active"
                                : ""
                                } nav-link ${isMega ? "p-0" : ""}`}
                              to="./merchandise-store"
                            >
                              {isMega ? (
                                <img
                                  src={shop}
                                  alt="img"
                                  className="img-fluid d-xl-block d-none"
                                />
                              ) : (
                                ""
                              )}
                              <span className="d-inline-block">
                                {t("header.merchandise_store")}
                              </span>
                            </Link>
                          </Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open1}
                        href="#homePages"
                        onClick={() => setOpen1(!open1)}
                        className={`${location.pathname === "/related-merchandise" ||
                          location.pathname === "/restricted-content" ||
                          location.pathname === "/playlist" ||
                          location.pathname === "/geners" ||
                          location.pathname === "/cast" ||
                          location.pathname === "/tags" ||
                          location.pathname === "/watchlist-detail"
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">
                          {t("header.features")}
                        </span>
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
                              to="/restricted-content"
                              className={`${location.pathname === "/restricted-content"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.restricted_content")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/related-merchandise"
                              className={`${location.pathname === "/related-merchandise"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.related_merchandise")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/playlist"
                              className={`${location.pathname === "/playlist" ||
                                location.pathname === "/watchlist-detail"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.playlist")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/geners"
                              className={`${location.pathname === "/geners" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.geners")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/cast"
                              className={`${location.pathname === "/cast" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.cast")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/tags"
                              className={`${location.pathname === "/tags" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.tags")}{" "}
                            </Link>
                          </Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open2}
                        href="#homePages"
                        onClick={() => setOpen2(!open2)}
                        className={`${location.pathname === "/about-us" ||
                          location.pathname === "/contact-us" ||
                          location.pathname === "/faq" ||
                          location.pathname === "/PrivacyPolicy" ||
                          location.pathname === "/pricing" ||
                          location.pathname === "/coming-soon"
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">{t("header.pages")}</span>
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
                              to="/about-us"
                              className={`${location.pathname === "/about-us"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.about_us")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/contact-us"
                              className={`${location.pathname === "/contact-us"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.contact_us")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/faq"
                              className={`${location.pathname === "/faq" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.faq")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/PrivacyPolicy"
                              className={`${location.pathname === "/PrivacyPolicy"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.privacy_policy")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/pricing"
                              className={`${location.pathname === "/pricing" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.pricing_plan")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/coming-soon"
                              className={`${location.pathname === "/coming-soon"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.coming_soon")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              aria-expanded={open3}
                              href="#homePages"
                              onClick={() => setOpen3(!open3)}
                              className={`${location.pathname === "/error-page-one" ||
                                location.pathname === "/error-page-two"
                                ? "active"
                                : ""
                                }`}
                            >
                              <span className="item-name">
                                {t("header.error_page")}
                              </span>
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
                                    to="/error-page-one"
                                    className={`${location.pathname === "/error-page-one"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.error_page")} 1{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/error-page-two"
                                    className={`${location.pathname === "/error-page-two"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.error_page")} 2{" "}
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
                        href="#homePages"
                        onClick={() => setOpen4(!open4)}
                        className={`${location.pathname === "/blogs" ||
                          location.pathname === "/blogs/single" ||
                          location.pathname === "/blogs/double" ||
                          location.pathname === "/blogs/large-grid" ||
                          location.pathname === "/blogs/small-grid" ||
                          location.pathname === "/blogs-sidebar/left" ||
                          location.pathname === "/blogs-sidebar/right" ||
                          location.pathname === "/blog-template" ||
                          location.pathname === "/blogs-detail" ||
                          location.pathname === "/blog-single/audio" ||
                          location.pathname === "/blog-single/video" ||
                          location.pathname === "/blog-single/link" ||
                          location.pathname === "/blog-single/quote" ||
                          location.pathname === "/blog-single/gallery"
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">{t("header.blog")}</span>
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
                              to="/blogs"
                              className={`${location.pathname === "/blogs" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.listing")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              aria-expanded={open5}
                              href="#homePages"
                              onClick={() => setOpen5(!open5)}
                              className={`${location.pathname === "/blogs/single" ||
                                location.pathname === "/blogs/double" ||
                                location.pathname === "/blogs/large-grid" ||
                                location.pathname === "/blogs/small-grid"
                                ? "active"
                                : ""
                                }`}
                            >
                              <span className="item-name">
                                {t("header.blog_grid")}
                              </span>
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
                                    to="/blogs/single"
                                    className={`${location.pathname === "/blogs/single"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    1 {t("header.column")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blogs/double"
                                    className={`${location.pathname === "/blogs/double"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    2 {t("header.column")}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blogs/large-grid"
                                    className={`${location.pathname === "/blogs/large-grid"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    3 {t("header.column")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blogs/small-grid"
                                    className={`${location.pathname === "/blogs/small-grid"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    4 {t("header.column")}{" "}
                                  </Link>
                                </Nav.Item>
                              </ul>
                            </Collapse>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              aria-expanded={open6}
                              href="#homePages"
                              onClick={() => setOpen6(!open6)}
                              className={`${location.pathname === "/blogs-sidebar/left" ||
                                location.pathname === "/blogs-sidebar/right"
                                ? "active"
                                : ""
                                }`}
                            >
                              <span className="item-name">
                                {t("header.blog_sidebar")}
                              </span>
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
                                    to="/blogs-sidebar/left"
                                    className={`${location.pathname ===
                                      "/blogs-sidebar/left"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.left_sidebar")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blogs-sidebar/right"
                                    className={`${location.pathname ===
                                      "/blogs-sidebar/right"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.right_sidebar")}{" "}
                                  </Link>
                                </Nav.Item>
                              </ul>
                            </Collapse>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              aria-expanded={open7}
                              href="#homePages"
                              onClick={() => setOpen7(!open7)}
                              className={`${location.pathname === "/blog-template" ||
                                location.pathname === "/blogs-detail" ||
                                location.pathname === "/blog-single/audio" ||
                                location.pathname === "/blog-single/video" ||
                                location.pathname === "/blog-single/link" ||
                                location.pathname === "/blog-single/quote" ||
                                location.pathname === "/blog-single/gallery"
                                ? "active"
                                : ""
                                }`}
                            >
                              <span className="item-name">
                                {t("header.blog_single")}
                              </span>
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
                                    to="/blog-template"
                                    className={`${location.pathname === "/blog-template"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.blog_template")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blogs-detail"
                                    className={`${location.pathname === "/blogs-detail"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.standard")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blog-single/audio"
                                    className={`${location.pathname === "/blog-single/audio"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.audio")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blog-single/video"
                                    className={`${location.pathname === "/blog-single/video"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.video")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blog-single/link"
                                    className={`${location.pathname === "/blog-single/link"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.link")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blog-single/quote"
                                    className={`${location.pathname === "/blog-single/quote"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.quote")}{" "}
                                  </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Link
                                    to="/blog-single/gallery"
                                    className={`${location.pathname ===
                                      "/blog-single/gallery"
                                      ? "active"
                                      : ""
                                      } nav-link`}
                                  >
                                    {" "}
                                    {t("header.gallery")}{" "}
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
                        href="#homePages"
                        onClick={() => setOpen8(!open8)}
                        className={`${location.pathname === "/shop" ||
                          location.pathname === "/account" ||
                          location.pathname === "/cart" ||
                          location.pathname === "/wishlist" ||
                          location.pathname === "/checkout" ||
                          location.pathname === "/track-order"
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">{t("header.shop")}</span>
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
                              to="/shop"
                              className={`${location.pathname === "/shop" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.shop")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/account"
                              className={`${location.pathname === "/account" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.my_account_page")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/cart"
                              className={`${location.pathname === "/cart" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.cart_page")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/wishlist"
                              className={`${location.pathname === "/wishlist"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.wishlist_page")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/checkout"
                              className={`${location.pathname === "/checkout"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.checkout_page")}{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              to="/track-order"
                              className={`${location.pathname === "/track-order"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              {t("header.order_tracking")}{" "}
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
                  className={`navbar-collapse collapse ${show ? "show" : ""}`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav align-items-center ms-auto mb-2 mb-xl-0 gap-3">
                    <Dropdown
                      as="li"
                      className="nav-item dropdown iq-responsive-menu"
                    >
                      <div className="search-box">
                        <Link
                          to="#"
                          onClick={() => setShow2(!show2)}
                          className={` nav-link p-0 ${show2 ? "show" : ""
                            }`}
                          id="search-drop"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
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
                        </Link>
                        <ul
                          className={`dropdown-menu p-0 dropdown-search m-0 iq-search-bar ${show2 ? "show" : ""
                            }`}
                          style={{ width: "10rem" }}
                          data-bs-popper="static"
                        >
                          <li className="p-0">
                            <div className="form-group input-group mb-0">
                              <input
                                type="text"
                                className="form-control border-0"
                                placeholder={t("blogs.search")}
                              />
                              <button
                                onClick={() => setShow2(!show2)}
                                type="submit"
                                className={` search-submit ${show === false ? "show" : ""
                                  }`}
                              >
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
                        </ul>
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
                                placeholder="t('header.search_dot')"
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
                    <Dropdown as="li" className="nav-items">
                      <Dropdown.Toggle
                        as={CustomToggle}
                        href="#"
                        variant=" nav-link d-flex align-items-center px-0"
                        id="langDropdown"
                      >
                        <i className="fa-solid fa-language" size="md"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        as="ul"
                        className="dropdown-menu-end border-0 p-0 m-0"
                      >
                        <Dropdown.Item
                          to="#"
                          onClick={() => changeLanguage("en")}
                        >
                          en
                        </Dropdown.Item>
                        <Dropdown.Item
                          to="#"
                          onClick={() => changeLanguage("ar")}
                        >
                          ar
                        </Dropdown.Item>
                        <Dropdown.Item
                          to="#"
                          onClick={() => changeLanguage("de")}
                        >
                          de
                        </Dropdown.Item>
                        <Dropdown.Item
                          to="#"
                          onClick={() => changeLanguage("fr")}
                        >
                          fr
                        </Dropdown.Item>
                        <Dropdown.Item
                          to="#"
                          onClick={() => changeLanguage("gr")}
                        >
                          gr
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as="li" className="nav-item">
                      <Dropdown.Toggle
                        as={CustomToggle}
                        href="#"
                        variant=" nav-link d-flex align-items-center px-0"
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
                            src={user}
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                          <span className="font-size-14 fw-500 text-capitalize text-white">
                            {t("header.jenny")}
                          </span>
                        </li>
                        <li>
                          <Link
                            to="/playlist"
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
                              {t("header.my_account")}
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/playlist"
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
                              {t("header.watchlist")}
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/pricing"
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
                              {t("header.subscription")}
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/login"
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
                              {t("header.logout")}
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
