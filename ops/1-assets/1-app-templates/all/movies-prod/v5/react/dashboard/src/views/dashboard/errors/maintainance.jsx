import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// component
import Card from "../../../components/partials/dashboard/bootstrap/card";

// img
import maintenance from "/assets/images/error/02.png";

// the hook
import { useTranslation } from "react-i18next";

const Maintainance = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="mt-0 iq-maintenance">
        <Container fluid className="p-0">
          <Row className="no-gutters">
            <Col sm="12" className="text-center">
              <div className="">
                <img src={maintenance} className="img-fluid" alt="" />
                <h3 className="mt-4 mb-1">{t("authentication.performing_maintenance")}</h3>
                <p>{t("authentication.back_in_somtime")}</p>
              </div>
            </Col>
          </Row>
          <Container className="mt-3">
            <Row>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-3x text-primary">
                      <i className="fa-regular fa-window-maximize"></i>
                    </i>
                    <h5 className="card-title mt-1">
                      {t("authentication.why_down")}
                    </h5>
                    <p className="mb-0">{t("authentication.why_down_desc")}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-3x text-primary">
                      <i className="fa-regular fa-clock"></i>
                    </i>
                    <h5 className="card-title mt-1">
                      {t("authentication.downtime")}
                    </h5>
                    <p className="mb-0">{t("authentication.why_down_desc")}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="ri-3x text-primary">
                      <i className="fa-solid fa-circle-info"></i>
                    </i>
                    <h5 className="card-title mt-1">
                      {t("authentication.do_you_need_support")}
                    </h5>
                    <p className="mb-0">{t("authentication.why_down_desc")}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </Fragment>
  );
});

Maintainance.displayName = "Maintainance";
export default Maintainance;
