import { memo, Fragment, useState, useEffect } from "react";

import Link from "next/link";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";



// components
import Logo from "../logo";


const FooterMega = memo(() => {
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");
  // const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
      setAnimationClass("animate__fadeIn");
    } else {
      setAnimationClass("animate__fadeOut");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   scrollToTop();
  // }, [location.pathname]);
  return (
    <>
      <Fragment>
        <footer className="footer footer-default">
          <Container fluid>
            <div className="footer-top">
              <Row>
                <Col xl={3} lg={6} className="mb-5 mb-lg-0">
                  <div className="footer-logo">
                    <Logo></Logo>
                  </div>
                  <p className="mb-4 font-size-14">
                    Email us:{" "}
                    <span className="text-white">customer@streamit.com</span>
                  </p>
                  <p className="text-uppercase letter-spacing-1 font-size-14 mb-1">
                    customer services
                  </p>
                  <p className="mb-0 contact text-white">+ (480) 555-0103</p>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">Quick Links</h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link href="/extra/about-us" className="ms-3">
                        about us
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/blogs" className="ms-3">
                        Blog
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/extra/pricing-plan" className="ms-3">
                        Pricing Plan
                      </Link>
                    </li>
                    <li>
                      <Link href="/extra/faq" className="ms-3">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">Movies to watch</h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link href="/view-all" className="ms-3">
                        Top trending
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/view-all" className="ms-3">
                        Recommended
                      </Link>
                    </li>
                    <li>
                      <Link href="/view-all" className="ms-3">
                        Popular
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">About company</h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link href="/extra/contact-us" className="ms-3">
                        contact us
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/extra/privacy-policy" className="ms-3">
                        privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/extra/terms-of-use" className="ms-3">
                        Terms of use
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={3} lg={6}>
                  <h4 className="footer-link-title">Subscribe Newsletter</h4>
                  <div className="mailchimp mailchimp-dark">
                    <div className="input-group mb-3 mt-4">
                      <input
                        type="text"
                        className="form-control mb-0 font-size-14"
                        placeholder="Email*"
                        aria-describedby="button-addon2"
                      />
                      <div className="iq-button">
                        <button
                          type="submit"
                          className="btn btn-sm"
                          id="button-addon2"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-5">
                    <span className="font-size-14 me-2">Follow Us:</span>
                    <ul className="p-0 m-0 list-unstyled widget_social_media">
                      <li className="">
                        <Link
                          href="https://www.facebook.com/"
                          className="position-relative"
                        >
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://twitter.com/"
                          className="position-relative"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://github.com/"
                          className="position-relative"
                        >
                          <i className="fab fa-github"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://www.instagram.com/"
                          className="position-relative"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="footer-bottom border-top">
              <Row className="align-items-center">
                <Col md={6}>
                  <ul className="menu list-inline p-0 d-flex flex-wrap align-items-center">
                    <li className="menu-item">
                      <Link href="/extra/terms-of-use"> Terms Of Use </Link>
                    </li>
                    <li id="menu-item-7316" className="menu-item">
                      <Link href="/extra/privacy-policy"> Privacy-Policy </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/faq"> FAQ </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/play-list"> Watch List </Link>
                    </li>
                  </ul>
                  <p className="font-size-14">
                    © <span className="currentYear">2023</span>{" "}
                    <span className="text-primary">STREAMIT</span>. All Rights
                    Reserved. All videos and shows on this platform are
                    trademarks of, and all related images and content are the
                    property of, Streamit Inc. Duplication and copy of this is
                    strictly prohibited. All rights reserved.
                  </p>
                </Col>
                <Col md={3}></Col>
                <Col md={3}>
                  <h6 className="font-size-14 pb-1">Download Streamit Apps</h6>
                  <div className="d-flex align-items-center">
                    <Link className="app-image" href="#">
                      <img src="/assets/images/footer/google-play.webp" loading="lazy" alt="play-store" />
                    </Link>
                    <br />
                    <Link className="ms-3 app-image" href="#">
                      <img src="/assets/images/footer/apple.webp" loading="lazy" alt="app-store" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </footer>
        <div
          id="back-to-top"
          style={{ display: "none" }}
          className={`animate__animated ${animationClass}`}
          onClick={scrollToTop}
        >
          <Link
            className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle"
            id="top"
            href="#top"
          >
            <i className="fa-solid fa-chevron-up"></i>
          </Link>
        </div>
      </Fragment>
    </>
  );
});
FooterMega.displayName = "FooterMega";
export default FooterMega;
