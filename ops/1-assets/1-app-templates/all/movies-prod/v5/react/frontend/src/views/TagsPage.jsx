import React, { Fragment, memo } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import TagsCard from "../components/cards/TagsCard";
import BreadcrumbWidget from "../components/BreadcrumbWidget";

// data
import { movieTags, tvShowsTags, videoTags } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const TagsPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("detail_page.tags")} />
      <section className="section-padding">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("ott_home.movie_tag")}
            </h4>
          </div>
          <Row as="ul" className="mb-0 list-inline">
            {movieTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
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
      <section className="section-padding-bottom">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">{t("ott_home.tv_show_tag")}</h4>
          </div>
          <Row as="ul" className="row mb-0 list-inline">
            {tvShowsTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
                />
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <div className="iq-button">
              <Link to="#" className="btn text-uppercase position-relative ">
                <span className="button-text">{t("ott_home.load_more")}</span>{" "}
                <i className="fa-solid fa-play"></i>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="section-padding-bottom">
        <Container fluid>
          <div className="iq-main-header d-flex align-items-center justify-content-between mb-4">
            <h4 className="text-capitalize mb-0">{t("ott_home.video_tag")}</h4>
          </div>
          <Row as="ul" className="mb-0 list-inline">
            {videoTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
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

TagsPage.displayName = "TagsPage";
export default TagsPage;
