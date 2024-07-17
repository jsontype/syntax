import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Form, Button } from "react-bootstrap";

// react-router
import { Link, useNavigate } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const SignUp = memo(() => {
  const { t } = useTranslation();
  let history = useNavigate();

  return (
    <Fragment>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="7" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <Form className="" action="/">
                      <Row>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>
                              {t("authentication.username")}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="mb-0"
                              id="exampleInputEmail2"
                              placeholder={t("authentication.enter_full_name")}
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>
                              {t("authentication.e_mail")}
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className="mb-0"
                              id="exampleInputEmail3"
                              placeholder={t("authentication.enter_email")}
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>
                              {t("authentication.first_name")}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="mb-0"
                              id="exampleInputEmail4"
                              placeholder={t("authentication.first_name")}
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>
                              {t("authentication.last_name")}
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className="mb-0"
                              id="exampleInputEmail5"
                              placeholder={t("authentication.last_name")}
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>
                              {t("authentication.password")}
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className="mb-0"
                              id="exampleInputPassword6"
                              placeholder={t("authentication.password")}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>
                              {t("authentication.repeat_password")}
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className="mb-0"
                              id="exampleInputPassword7"
                              placeholder={t("authentication.password")}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="form-check my-2">
                        <input
                          type="radio"
                          id="customRadio1"
                          name="customRadio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio1"
                        >
                          {t("authentication.premium")}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="customRadio2"
                          name="customRadio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio2"
                        >
                          {" "}
                          {t("authentication.basic")}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="customRadio3"
                          name="customRadio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio3"
                        >
                          {t("authentication.free-free")}
                        </label>
                      </div>
                      <Button
                        type="button"
                        onClick={() => history.push("/")}
                        variant="btn btn-primary my-2"
                      >
                        {t("authentication.sign_up")}
                      </Button>
                    </Form>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    {t("authentication.already_have_an_account")}{" "}
                    <Link to="/auth/sign-in" className="text-primary ms-2">
                      {t("authentication.sign_in")}
                    </Link>{" "}
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

SignUp.displayName = "SignUp";
export default SignUp;
