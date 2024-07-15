import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// img
import mail from "/assets/images/login/mail.png";

// the hook
import { useTranslation } from "react-i18next";

const ConfirmMail = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section className="sign-in-page">
        <Container className="h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col md="6" sm="12" className="col-12 ">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <img src={mail} width="80" alt="" />
                    <h3 className="mt-3 mb-0">{t("authentication.success")}</h3>
                    <p className="text-gray">
                      {t("authentication.email_send")}{" "}
                      <Button
                        href="#"
                        className="__cf_email__ bg-dark border-0 p-0"
                        data-cfemail="5f26302a2d3a323e36331f3b30323e3631713c303271"
                      >
                        [email&#160;protected]
                      </Button>{" "}
                      {t("authentication.email_check")}
                    </p>
                    <div className="d-inline-block w-100">
                      <Link to="/" className="btn btn-primary mt-3">
                        {t("authentication.back_to_home")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

ConfirmMail.displayName = "ConfirmMail";
export default ConfirmMail;
