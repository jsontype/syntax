import React from "react";

//react-bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";
// the hook
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.what_lorem")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line1")}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.we_use")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line2")}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.where_it")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line2")}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.get_some")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line2")}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.we_use")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line2")}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.we_use")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line2")}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.we_use")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line2")}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.we_use")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line2")}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("privacy_policy.we_use")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("privacy_policy.line2")}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PrivacyPolicy;
