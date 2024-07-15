import React from "react";

//react-bootstrap
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";

const TermsofService = () => {
  const { t } = useTranslation();
  return (
    <div id="faqAccordion">
      <Row>
        <Col lg={12}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{t("terms_service.line1")}</Accordion.Header>
                <Accordion.Body>
                  <strong>{t("terms_service.line2")},</strong>{" "}
                  {t("terms_service.line3")}.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {t("terms_service.consectetur")}
                </Accordion.Header>
                <Accordion.Body>
                  <strong>{t("terms_service.line2")},</strong>{" "}
                  {t("terms_service.line3")}.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{t("terms_service.etiam")}</Accordion.Header>
                <Accordion.Body>
                  <strong>{t("terms_service.line2")},</strong>{" "}
                  {t("terms_service.line3")}.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card>
              <Accordion.Item eventKey="3">
                <Accordion.Header>{t("terms_service.velit")}</Accordion.Header>
                <Accordion.Body>
                  <strong>{t("terms_service.line2")},</strong>{" "}
                  {t("terms_service.line3")}.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card>
              <Accordion.Item eventKey="4">
                <Accordion.Header>{t("terms_service.donec")}</Accordion.Header>
                <Accordion.Body>
                  <strong>{t("terms_service.line2")},</strong>{" "}
                  {t("terms_service.line3")}.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default TermsofService;
