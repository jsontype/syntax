import React, { memo, Fragment } from "react";

// react-bootsrap
import { Container, Col, Row, Form } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const LockScreen = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section className="sign-in-page">
        <Container className="h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col md="6" sm="12" className="col-12">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h4 className="mt-3 mb-0 text-center">
                      {t("authentication.michael_smith")}
                    </h4>
                    <p className="text-gray text-center">
                      {t("authentication.admin_password")}
                    </p>
                    <Form className="mt-4">
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          className="mb-0"
                          id="exampleInputEmail2"
                          placeholder={t("authentication.password")}
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <div className="d-inline-block w-100">
                        <Link
                          to="/auth/sign-in"
                          className="btn btn-primary float-right"
                        >
                          {t("authentication.log_in")}
                        </Link>
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

LockScreen.displayName = "LockScreen";
export default LockScreen;
