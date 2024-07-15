import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// components
import Logo from "../logo";

// image
import apple from "/assets/images/footer/apple.webp";
import playstore from "/assets/images/footer/google-play.webp";

// the hook
import { useTranslation } from "react-i18next";

const FooterMega = memo(() => {
  const { t } = useTranslation();
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");
  const location = useLocation();

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

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
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
                    {t("footer.email_us")}:{" "}
                    <span className="text-white">
                      {t("footer.customer@stremit")}
                    </span>
                  </p>
                  <p className="text-uppercase letter-spacing-1 font-size-14 mb-1">
                    {t("footer.customer_services")}
                  </p>
                  <p className="mb-0 contact text-white">+ (480) 555-0103</p>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">
                    {t("footer.quick_links")}
                  </h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link to="./about-us" className="ms-3">
                        {t("header.about_us")}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="/blogs" className="ms-3">
                        {t("header.blog")}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="./pricing" className="ms-3">
                        {t("header.pricing_plan")}
                      </Link>
                    </li>
                    <li>
                      <Link to="./faq" className="ms-3">
                        {t("header.faq")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">
                    {t("footer.movies_to_watch")}
                  </h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link to="/view-all" className="ms-3">
                        {t("footer.top_trending")}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="/view-all" className="ms-3">
                        {t("footer.recommended")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/view-all" className="ms-3">
                        {t("footer.popular")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">
                    {t("footer.about_company")}
                  </h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link to="/contact-us" className="ms-3">
                        {t("header.contact_us")}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="/PrivacyPolicy" className="ms-3">
                        {t("header.privacy_policy")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-of-use" className="ms-3">
                        {t("footer.terms_of_use")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={3} lg={6}>
                  <h4 className="footer-link-title">
                    {t("footer.newsletter")}
                  </h4>
                  <div className="mailchimp mailchimp-dark">
                    <div className="input-group mb-3 mt-4">
                      <input
                        type="text"
                        className="form-control mb-0 font-size-14"
                        placeholder={t("footer.email")}
                        aria-describedby="button-addon2"
                      />
                      <div className="iq-button">
                        <button
                          type="submit"
                          className="btn btn-sm"
                          id="button-addon2"
                        >
                          {t("footer.subscribe")}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-5">
                    <span className="font-size-14 me-2">
                      {t("footer.follow_us")}
                    </span>
                    <ul className="p-0 m-0 list-unstyled widget_social_media">
                      <li className="">
                        <Link
                          to="https://www.facebook.com/"
                          className="position-relative"
                        >
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to="https://twitter.com/"
                          className="position-relative"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to="https://github.com/"
                          className="position-relative"
                        >
                          <i className="fab fa-github"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to="https://www.instagram.com/"
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
                      <Link to="/terms-of-use">
                        {" "}
                        {t("footer.terms_of_use")}
                      </Link>
                    </li>
                    <li id="menu-item-7316" className="menu-item">
                      <Link to="/privacyPolicy">
                        {" "}
                        {t("footer.privacy-policy")}
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/faq"> {t("header.faq")}</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/playlist"> {t("footer.watch_list")}</Link>
                    </li>
                  </ul>
                  <p className="font-size-14">
                    © <span className="currentYear">2024</span>{" "}
                    <span className="text-primary">STREAMIT</span>.{" "}
                    {t("footer.desc")}
                  </p>
                </Col>
                <Col md={3}></Col>
                <Col md={3}>
                  <h6 className="font-size-14 pb-1">
                    {t("footer.download_app")}
                  </h6>
                  <div className="d-flex align-items-center">
                    <Link className="app-image" to="#">
                      <img src={playstore} loading="lazy" alt="play-store" />
                    </Link>
                    <br />
                    <Link className="ms-3 app-image" to="#">
                      <img src={apple} loading="lazy" alt="app-store" />
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
            to="#top"
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
