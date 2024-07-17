import { Fragment, memo } from "react";

// react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import BreadcrumbWidget from "../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const PricingPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("header.pricing_plan")} />
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="4" md="6" className="mb-3 mb-lg-0">
              <div className="pricing-plan-wrapper">
                <div className="pricing-plan-header">
                  <h4 className="plan-name text-capitalize text-body mb-0">
                    {t("pricing.free")}
                  </h4>
                </div>
                <div className="pricing-details">
                  <div className="pricing-plan-description">
                    <ul className="list-inline p-0">
                      <li>
                        <i className="fas fa-check text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.free_movies")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-times"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.watch_on_tv")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-times"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.streamit_special")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-times"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.video_quality")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-plan-footer">
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">
                          {t("pricing.select_free")}
                        </span>{" "}
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-3 mb-lg-0">
              <div className="pricing-plan-wrapper">
                <div className="pricing-plan-discount bg-primary p-2 text-center">
                  <span className="text-white">{t("pricing.save")} 20%</span>
                </div>
                <div className="pricing-plan-header">
                  <h4 className="plan-name text-capitalize text-body">
                    {t("pricing.premium")}
                  </h4>
                  <span className="sale-price text-decoration-line-through">
                    $49
                  </span>{" "}
                  <span className="main-price text-primary">$39</span>{" "}
                  <span className="font-size-18">/ 3 {t("pricing.month")}</span>
                </div>
                <div className="pricing-details">
                  <div className="pricing-plan-description">
                    <ul className="list-inline p-0">
                      <li>
                        <i className="fas fa-check text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.free_movies")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.watch_on_tv")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.streamit_special")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.video_quality")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-plan-footer">
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">
                          {t("pricing.select_premium")}
                        </span>{" "}
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="pricing-plan-wrapper">
                <div className="pricing-plan-header">
                  <h4 className="plan-name text-capitalize text-body">
                    {t("pricing.basic")}
                  </h4>
                  <span className="main-price text-primary">$19</span>{" "}
                  <span className="font-size-18">/ 1 {t("pricing.month")}</span>
                </div>
                <div className="pricing-details">
                  <div className="pricing-plan-description">
                    <ul className="list-inline p-0">
                      <li>
                        <i className="fas fa-times"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.free_movies")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.watch_on_tv")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.streamit_special")}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("pricing.video_quality")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-plan-footer">
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">
                          {t("pricing.select_basic")}
                        </span>{" "}
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

PricingPage.displayName = "PricingPage";
export default PricingPage;
