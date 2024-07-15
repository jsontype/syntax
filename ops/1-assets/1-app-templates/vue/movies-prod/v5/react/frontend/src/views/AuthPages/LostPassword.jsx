import React, { Fragment, memo } from "react";

//react bootstrap
import { Col, Container, Form, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const LostPassword = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <main className="main-content">
        <div
          className="vh-100"
          style={{
            backgroundImage: "url(assets/images/pages/01.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "500px",
          }}
        >
          <Container>
            <Row className="justify-content-center align-items-center height-self-center vh-100">
              <Col lg="5" md="12" className="align-self-center">
                <div className="user-login-card bg-body">
                  <p> {t("form.desc_enter1")}</p>
                  <Form action="post">
                    <Form.Group className="mb-5">
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.username_or_email")}
                      </Form.Label>
                      <Form.Control type="text" className="rounded-0" />
                    </Form.Group>
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">
                          {t("form.new_password")}
                        </span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                    <div className="seperator d-flex justify-content-center align-items-center">
                      <span className="line"></span>
                    </div>
                    <div className="iq-button">
                      <Link
                        to="/login"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">{t("form.log_in")}</span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
});

LostPassword.displayName = "LostPassword";
export default LostPassword;
