import { Fragment, memo } from "react";

//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import CardStyle from "../components/cards/CardStyle";
import BreadCrumbWidget from "../components/BreadcrumbWidget";

//function
import { generateImgPath } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ViewAll = memo(() => {
  const { t } = useTranslation();
  const viewAll = [
    {
      image: generateImgPath("/assets/images/movies/related/01.webp"),
      title: "episode_page.giikre",
      movieTime: "2hr: 12mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/02.webp"),
      title: "episode_page.yoshi",
      movieTime: "1hr: 22mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/03.webp"),
      title: "episode_page.we_gare",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/04.webp"),
      title: "episode_page.avengers",
      movieTime: "1hr: 45mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/05.webp"),
      title: "episode_page.chosfies",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/06.webp"),
      title: "episode_page.tf_oaler",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/related/07.webp"),
      title: "episode_page.another_danger",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/01.webp"),
      title: "episode_page.crw",
      movieTime: "2hr: 12mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/02.webp"),
      title: "episode_page.batte_wiire",
      movieTime: "1hr: 22mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/03.webp"),
      title: "episode_page.goal",
      movieTime: "2hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/04.webp"),
      title: "episode_page.dandacg",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/05.webp"),
      title: "episode_page.mexcan",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/06.webp"),
      title: "episode_page.oit_moleld",
      movieTime: "1hr: 30mins",
    },
    {
      image: generateImgPath("/assets/images/movies/popular/07.webp"),
      title: "episode_page.Another Danger",
      movieTime: "1hr: 30mins",
    },
  ];
  return (
    <Fragment>
      <BreadCrumbWidget title={t("ott_home.view_all")} />
      <div className="section-padding">
        <Container fluid>
          <div className="card-style-grid">
            <Row className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
              {viewAll.map((item, index) => (
                <Col key={index} className="mb-4">
                  <CardStyle
                    image={item.image}
                    title={t(item.title)}
                    movieTime={item.movieTime}
                    watchlistLink="/playlist"
                    link="/movies-detail"
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

ViewAll.displayName = "ViewAll";
export default ViewAll;
