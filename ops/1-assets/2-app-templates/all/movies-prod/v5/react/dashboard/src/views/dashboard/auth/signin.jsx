import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Button, Form } from "react-bootstrap";

// react-router
import { Link, useNavigate } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const SignIn = memo(() => {
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
                      {t("authentication.sign_in")}
                    </h3>
                    <Form className="mt-4" action="">
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          className="mb-0"
                          id="exampleInputEmail1"
                          placeholder={t("authentication.enter_email")}
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          className="mb-0"
                          id="exampleInputPassword2"
                          placeholder={t("authentication.password")}
                          required
                        />
                      </Form.Group>
                      <div className=" d-flex justify-content-between align-items-cente sign-info">
                        <Button
                          type="button"
                          onClick={() => history.push("/")}
                          variant="btn btn-primary"
                        >
                          {t("authentication.sign_in")}
                        </Button>
                        <div className="custom-control custom-checkbox d-inline-block">
                          <input
                            type="checkbox"
                            className="form-check-input mx-2"
                            id="customCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck"
                          >
                            {t("authentication.remember_me")}
                          </label>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    {t("authentication.dont_have_an_account")}{" "}
                    <Link to="/auth/sign-up" className="text-primary ms-2">
                      {t("authentication.sign_up")}
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link to="/auth/recoverpw" className="f-link">  
                      {t("authentication.forgot_your_password")}
                    </Link>
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

SignIn.displayName = "SignIn";
export default SignIn;
