import React, { Fragment, memo } from "react";

//react-bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import Logo from "../../logo";

// the hook
import { useTranslation } from "react-i18next";
import { generateImgPath } from "../../../StaticData/data";

const MerchandiseFooter = memo(() => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <footer className="footer-merchandise">
        <div className="footer-top">
          <Container fluid>
            <Row>
              <Col lg="4" sm="6">
                <div className="footer-inner">
                  <p className="text-uppercase letter-spacing-1 font-size-14 mb-1">
                    {t("footer.customer_services")}
                  </p>
                  <h4 className="mb-0 contact text-white fw-bold">
                    <Link to="tel:+4805550103"> + (480) 555-0103</Link>
                  </h4>
                  <span className="d-inline-block mt-4 mb-0 font-size-14">
                    {" "}
                    {t("footer.email_us")}:{" "}
                    <Link to="maito:customer@streamit.com">
                      {t("footer.customer@stremit")}
                    </Link>
                  </span>
                  <div className="mt-5">
                    <p className="letter-spacing-1 font-size-14 mb-1 text-uppercase">
                      {t("footer.stay_connected")}:
                    </p>
                    <ul className="p-0 mt-4 mb-0 list-unstyled widget_social_media d-flex gap-1">
                      <li className="">
                        <Link
                          to="https://www.facebook.com/"
                          target="_blank"
                          className="position-relative"
                        >
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="https://twitter.com/"
                          target="_blank"
                          className="position-relative"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="https://github.com/"
                          target="_blank"
                          className="position-relative"
                        >
                          <i className="fab fa-github"></i>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="https://www.instagram.com/"
                          target="_blank"
                          className="position-relative"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="4" sm="6" className="mt-sm-0 mt-5">
                <div className="footer-inner position-relative text-center px-xl-5 px-3">
                  <div className="vr text-dark opacity-100 h-100 position-absolute end-0 top-0 d-lg-inline-block d-none"></div>
                  <div className="footer-logo">
                    <Logo />
                  </div>
                  <p className="mt-lg-5 mt-4 mb-3 text-uppercase letter-spacing-1 font-size-14 mb-1">
                    {t("footer.best_deals")}
                  </p>
                  <div className="mailchimp mailchimp-dark">
                    <div className="input-group mb-3 mt-4">
                      <Form.Control
                        type="text"
                        className="mb-0 font-size-14"
                        placeholder={t("footer.email")}
                      />
                      <div className="iq-button">
                        <Button
                          type="submit"
                          className="btn btn-sm"
                          id="button-addon2"
                        >
                          {t("footer.subscribe")}
                        </Button>
                      </div>
                    </div>
                    <span className="d-inline-block font-size-14">
                      * {t("footer.email_anyone")}
                    </span>
                  </div>
                  <div className="vr text-dark opacity-100 h-100 position-absolute start-0 top-0 d-lg-inline-block d-none"></div>
                </div>
              </Col>
              <Col lg="4" sm="12" className="mt-lg-0 mt-5">
                <div className="footer-inner">
                  <h5 className="footer-link-title mb-3">
                    {t("footer.quick_links")}
                  </h5>
                  <Row>
                    <Col lg="6">
                      <ul className="list-unstyled footer-menu mb-0">
                        <li className="mb-2">
                          <Link to="/contact-us" className="ms-3">
                            {t("header.contact_us")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/PrivacyPolicy" className="ms-3">
                            {t("header.privacy_policy")}
                          </Link>
                        </li>
                      </ul>
                    </Col>
                    <div className="col-lg-6 mt-lg-0 mt-2">
                      <ul className="list-unstyled footer-menu mb-0">
                        <li>
                          <Link to="/terms-of-use" className="ms-3">
                            {t("footer.terms_of_use")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Row>
                  <div className="mt-5">
                    <p className="pt-3 mb-3 text-uppercase">
                      {t("footer.payments")}
                    </p>
                    <ul className="list-inline d-flex align-items-center flex-wrap gap-3 m-0">
                      <li>
                        <img src={generateImgPath("/assets/images/footer/01.webp")} alt="visa" />
                      </li>
                      <li>
                        <img src={generateImgPath("/assets/images/footer/02.webp")} alt="visa" />
                      </li>
                      <li>
                        <img src={generateImgPath("/assets/images/footer/03.webp")} alt="visa" />
                      </li>
                      <li>
                        <img src={generateImgPath("/assets/images/footer/04.webp")} alt="visa" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom bg-body py-3">
          <Container fluid>
            <Row className="align-items-center">
              <Col md="6" className="text-md-start text-center">
                <p className="m-0 font-size-14 text-capitalize">
                  © <span className="currentYear">{currentYear}</span>
                  <Link to="/"> STREAMIT </Link>{" "}
                  {t("footer.all_right_reserved")}.
                </p>
              </Col>
              <Col md="6" className="text-md-end text-center">
                <p className="m-0 font-size-14">
                  {t("footer.powered_by")}{" "}
                  <Link to="https://iqonic.design/" target="_blank">
                    IQONIC DESIGN
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </Fragment>
  );
});

MerchandiseFooter.displayName = "MerchandiseFooter";
export default MerchandiseFooter;
