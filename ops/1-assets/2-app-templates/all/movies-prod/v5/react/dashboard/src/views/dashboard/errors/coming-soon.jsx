import React, { Fragment, memo } from "react";

//react-bootstrap
import { Container, Form, Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

import Logo from '/assets/images/logo-full.png'

const ComingSoon = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="wrapper vh-100">
        <div className="iq-comingsoon pt-5 h-100 d-flex align-items-center">
          <Container fluid>
            <div className="d-flex justify-content-center">
              <div className="col-sm-8 text-center">
                <div className="iq-comingsoon-info">
                  <Link to="/">
                    <img src={Logo}
                      className="img-fluid w-25"
                      alt=""
                    />
                  </Link>
                  <h2 className="mt-4 mb-1">
                    {t("authentication.stay_tunned")}
                  </h2>
                  <p>{t("authentication.best_experience")}</p>
                  <ul
                    className="countdown d-flex align-items-center list-inline row"
                    data-date="sep 02 2022 20:20:22"
                  >
                    <li className="col-md-6 col-lg-3">
                      <Card>
                        <Card.Body>
                          <span data-days>300</span>
                          {t("authentication.days")}
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="col-md-6 col-lg-3">
                      <Card>
                        <Card.Body>
                          <span data-hours>15</span>
                          {t("authentication.hours")}
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="col-md-6 col-lg-3">
                      <Card>
                        <Card.Body>
                          <span data-minutes>40</span>
                          {t("authentication.minutes")}
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="col-md-6 col-lg-3">
                      <Card>
                        <Card.Body>
                          <span data-seconds>10</span>
                          {t("authentication.seconds")}
                        </Card.Body>
                      </Card>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-lg-4">
                <Form className="iq-comingsoon-form mt-5">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control comming mb-0 me-2"
                      id="exampleInputEmail1"
                      placeholder="Enter email address"
                    />
                    <Button type="submit" className="btn btn-primary p-2">
                      {t("authentication.subscribe")}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
});

export default ComingSoon;
