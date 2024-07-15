import React, { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Container, Card } from "react-bootstrap";

//component
import IconComponent from "../../../components/icon-component";

// the hook
import { useTranslation } from "react-i18next";

const FontAwesome = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Card>
            <Card.Body>
              <h4 className="fw-bold">{t("header.icons")}</h4>
              <div className="border-bottom mt-3"></div>
              <Row>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-address-book"
                    name={t("fontawesome.address_book")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-envelope-open"
                    name={t("fontawesome.envelope_open")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-id-card"
                    name={t("fontawesome.id_card")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-telegram"
                    name={t("fontawesome.telegram")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-circle-user"
                    name={t("fontawesome.circle_user")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-chart-area"
                    name={t("fontawesome.chart_area")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-asterisk"
                    name={t("fontawesome.asterisk")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-car"
                    name={t("fontawesome.car")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-bars"
                    name={t("fontawesome.bars")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-battery-full"
                    name={t("fontawesome.battery_full")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-bluetooth"
                    name={t("fontawesome.bluetooth")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-book "
                    name={t("fontawesome.book")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-bug "
                    name={t("fontawesome.bug")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-building "
                    name={t("fontawesome.building")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-calculator "
                    name={t("fontawesome.calculator")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-calendar-days"
                    name={t("fontawesome.calendar_days")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-camera"
                    name={t("fontawesome.camera")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-commenting"
                    name={t("fontawesome.commenting")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-crop"
                    name={t("fontawesome.crop")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-download"
                    name={t("fontawesome.download")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-folder"
                    name={t("fontawesome.folder")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-gift"
                    name={t("fontawesome.gift")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-users"
                    name={t("fontawesome.users")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-hashtag"
                    name={t("fontawesome.hashtag")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-house-chimney"
                    name={t("fontawesome.house_chimney")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-lock"
                    name={t("fontawesome.lock")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-graduation-cap"
                    name={t("fontawesome.graduation_cap")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-paper-plane"
                    name={t("fontawesome.paper_plane")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-star"
                    name={t("fontawesome.star")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-tag"
                    name={t("fontawesome.tag")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-trash"
                    name={t("fontawesome.trash")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-upload"
                    name={t("fontawesome.upload")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-university"
                    name={t("fontawesome.university")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-wifi"
                    name={t("fontawesome.wifi")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-thumbs-up"
                    name={t("fontawesome.thumbs_up")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-train"
                    name={t("fontawesome.train")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-solid fa-file"
                    name={t("fontawesome.file")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-snapchat"
                    name={t("fontawesome.snapchat")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-twitter"
                    name={t("fontawesome.twitter")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="fa-brands fa-wordpress"
                    name={t("fontawesome.wordpress")}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
});

FontAwesome.displayName = "FontAwesome";
export default FontAwesome;
