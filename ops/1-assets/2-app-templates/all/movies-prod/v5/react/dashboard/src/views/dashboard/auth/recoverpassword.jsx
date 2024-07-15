import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Form, Button } from "react-bootstrap";

// react-router
import { useNavigate } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const RecoverPassword = memo(() => {
  const { t } = useTranslation();
  let history = useNavigate();

  return (
    <Fragment>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">
                      {t("authentication.reset_password")}
                    </h3>
                    <p className="text-body">
                      {t("authentication.email_address")}.
                    </p>
                    <Form className="mt-4" action="/">
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          className="mb-0"
                          id="exampleInputEmail2"
                          placeholder={t("authentication.enter_email")}
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <div className="sign-info">
                        <Button
                          type="button"
                          onClick={() => history.push("/auth/sign-in")}
                          variant="btn btn-primary"
                        >
                          {t("authentication.reset")}
                        </Button>
                      </div>
                    </Form>
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

RecoverPassword.displayName = "RecoverPassword";
export default RecoverPassword;
