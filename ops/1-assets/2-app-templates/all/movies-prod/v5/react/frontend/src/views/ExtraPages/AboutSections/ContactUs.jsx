import { memo, Fragment } from "react";

// react-bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

// img
import img1 from "/assets/images/pages/map.webp";

// the hook
import { useTranslation } from "react-i18next";

const ContactUs = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bs-gray-900)" }}
      >
        <Container>
          <Row className="about-us-row text-center align-items-center">
            <Col lg="6" md="5">
              <div className="text-center">
                <Image
                  width="497"
                  height="477"
                  src={img1}
                  className=" img-fluid attachment-large size-large"
                  alt=""
                  loading="lazy"
                />
              </div>
            </Col>
            <Col lg="6" md="7">
              <h2 className="text-capitalize text-start">
                {t("about_us.contact_here")}
              </h2>
              <p className="mb-0 text-start">
                {t("about_us.streamit_located")}{" "}
                <Link to="mailto:info@medyapim.com">hello@streamit.com</Link>{" "}
                {t("about_us.tech_related")}
              </p>
              <Row className="mt-2 iq-rtl-direction">
                <Col md="4">
                  <div className="counter">
                    <span className="counter-number">4</span>
                  </div>
                  <div className="counter-title">{t("about_us.branch")}</div>
                </Col>
                <Col md="4">
                  <div className="iq-contact-list">
                    <div className="counter">
                      <span className="counter-number"> 500 + </span>
                    </div>
                    <div className="counter-title">
                      {t("about_us.employee")}
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="iq-contact-list">
                    <div className="counter">
                      <span className="counter-number"> 1000 + </span>
                    </div>
                    <div className="counter-title">{t("about_us.client")}</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

ContactUs.displayName = "ContactUs";
export default ContactUs;
