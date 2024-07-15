import React, { Fragment, memo } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ErrorPage1 = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="section-padding vh-100">
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col lg="2"></Col>
            <Col lg="8">
              <img src={generateImgPath("/assets/images/pages/404.webp")}
                alt="404"
                loading="lazy"
              />
              <div
                className="py-3 text-center mt-5 mb-4"
                style={{
                  background: `url(${generateImgPath(
                    "/assets/images/pages/404-bg-patten.webp"
                  )})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "68% auto",
                }}
              >
                <h4 className="fw-semibold mb-0">
                  {t("error.something_wrong")}
                </h4>
              </div>
              <p className="text-center">{t("error.looking_for")}</p>
              <div className="text-center mt-4 pt-3">
                <div className="iq-button">
                  <Link to="/" className="btn text-uppercase position-relative">
                    <span className="button-text">
                      {t("error.back_home")}
                    </span>{" "}
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

ErrorPage1.displayName = "ErrorPage1";
export default ErrorPage1;
