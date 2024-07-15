import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// data
import { geners } from "../StaticData/data";

//components
import BreadCrumbWidget from "../components/BreadcrumbWidget";
import GenersCard from "../components/cards/GanresCard";

// the hook
import { useTranslation } from "react-i18next";
const AllGenres = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title={t("ott_home.view_all")} />
      <section className="section-padding">
        <Container fluid>
          <Row>
            <Col sm="12" className="my-4">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="main-title text-capitalize mb-0">
                  {t("episode_page.geners")}
                </h5>
              </div>
            </Col>
          </Row>
          <Row
            xl="5"
            md="2"
            className="row-cols-1 geners-card geners-style-grid"
          >
            {geners.map((item, index) => (
              <Col key={index} className="slide-items">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

AllGenres.displayName = "AlGenres";
export default AllGenres;
