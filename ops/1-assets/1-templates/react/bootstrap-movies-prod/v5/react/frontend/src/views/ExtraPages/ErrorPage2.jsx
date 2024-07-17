import React, { Fragment, memo } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ErrorPage2 = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div
        className="section-padding vh-100 image-flip-rtl"
        style={{
          backgroundImage: `url(${generateImgPath(
            "/assets/images/pages/404-two.webp"
          )})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "500px",
        }}
      >
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col lg="6"></Col>
            <Col lg="5">
              <img src={generateImgPath("/assets/images/pages/404-text.webp")}
                alt="404"
                loading="lazy"
                className="mb-5"
              />
              <h4 className="fw-bold text-center">{t("error.ohhh_no")}</h4>
              <p className="text-center">{t("error.page_deosn't_exit")}</p>
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
            <Col lg="1"></Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

export default ErrorPage2;
