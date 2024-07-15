import React, { Fragment, memo } from "react";

//react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

//component
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import CastCard from "../../components/cards/CastCard";
import PersonalityCard from "../../components/cards/PersonalityCard";

// the hook
import { useTranslation } from "react-i18next";

const CastViewAll = memo(() => {
  const { t } = useTranslation();
  const cast = [
    {
      id: "01",
      thumbnail: "/assets/images/cast/01.webp",
      name: "ott_home.john_abraham",
      category: "detail_page.actor",
    },
    {
      id: "02",
      thumbnail: "/assets/images/cast/02.webp",
      name: "ott_home.leena_burton",
      category: "detail_page.Actress",
    },
    {
      id: "03",
      thumbnail: "/assets/images/cast/03.webp",
      name: "ott_home.lorina_williams",
      category: "detail_page.actor",
    },
    {
      id: "04",
      thumbnail: "/assets/images/cast/04.webp",
      name: "ott_home.davina_decorous",
      category: "detail_page.Actress",
    },
    {
      id: "05",
      thumbnail: "/assets/images/cast/05.webp",
      name: "ott_home.thomas_bailey",
      category: "detail_page.Producer",
    },
    {
      id: "06",
      thumbnail: "/assets/images/cast/06.webp",
      name: "ott_home.kelly_reilly",
      category: "detail_page.Actress",
    },
    {
      id: "07",
      thumbnail: "/assets/images/cast/07.webp",
      name: "ott_home.smith_jonas",
      category: "detail_page.Director",
    },
    {
      id: "08",
      thumbnail: "/assets/images/cast/08.webp",
      name: "ott_home.angel_louis",
      category: "detail_page.Producer",
    },
    {
      id: "09",
      thumbnail: "/assets/images/cast/09.webp",
      name: "ott_home.millar_joseph",
      category: "detail_page.actor",
    },
    {
      id: "10",
      thumbnail: "/assets/images/cast/10.webp",
      name: "ott_home.mark_wilson",
      category: "detail_page.actor",
    },
    {
      id: "11",
      thumbnail: "/assets/images/cast/11.webp",
      name: "ott_home.kelley_walker",
      category: "detail_page.Director",
    },
    {
      id: "12",
      thumbnail: "/assets/images/cast/12.webp",
      name: "ott_home.amy_sedaris",
      category: "detail_page.Actress",
    },
  ];
  return (
    <Fragment>
      <BreadCrumbWidget title="View All" />
      <div className="section-padding">
        <Container fluid>
          <Row>
            <Col sm="12" className="my-4">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="main-title text-capitalize mb-0">
                  favourite-personality
                </h5>
              </div>
            </Col>
          </Row>
          <div className="card-style-grid">
            <Row xl="5" md="2" className="row-cols-1 personality-card">
              {cast.map((item, index) => {
                return (
                  <Col className="mb-4" key={index}>
                    <PersonalityCard
                      image={item.thumbnail}
                      title={t(item.name)}
                      category={t(item.category)}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

CastViewAll.displayName = "CastViewAll";
export default CastViewAll;
