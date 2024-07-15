import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col } from "react-bootstrap";

//react router-dom
import { Link } from "react-router-dom";

// components
import GenersCard from "../components/cards/GanresCard";
import BreadcrumbWidget from "../components/BreadcrumbWidget";

// data
import { geners, tvShowGenres, videoGenres } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const GenresPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("ott_home.genres")} />
      <section className="section-padding">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("ott_home.movie_genres")}
            </h4>
          </div>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {geners.map((item, index) => (
              <Col key={index} className="mb-4">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
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
        </div>
      </section>
      <section className="section-padding-bottom">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("ott_home.tv_show_genres")}
            </h4>
          </div>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {tvShowGenres.map((item, index) => (
              <Col key={index} className="mb-4">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
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
        </div>
      </section>
      <section className="section-padding-bottom">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("ott_home.video_genres")}
            </h4>
          </div>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {videoGenres.map((item, index) => (
              <Col key={index} className="mb-4">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
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
        </div>
      </section>
    </Fragment>
  );
});

GenresPage.displayName = "GenresPage";
export default GenresPage;
