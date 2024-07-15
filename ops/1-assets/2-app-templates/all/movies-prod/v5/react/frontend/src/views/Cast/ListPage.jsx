import React, { Fragment, memo } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

// components
import BreadcrumbWidget from "../../components/BreadcrumbWidget";
import CastCard from "../../components/cards/CastCard";

// data
import { cast } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

export const ListPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("header.cast")} />
      <section className="section-padding">
        <Container fluid>
          <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
            {cast.map((item, index) => (
              <Col key={index}>
                <CastCard
                  title={t(item.title)}
                  category={item.designation}
                  image={item.profile_image}
                />
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <div className="iq-button">
              <Link to="#" className="btn text-uppercase position-relative">
                <span className="button-text">{t("ott_home.load_more")}</span>{" "}
                <i className="fa-solid fa-play"></i>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
});

ListPage.displayName = "ListPage";
export default ListPage;
