import { Fragment, memo, useState } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//components
import ProfileCard from "../../../components/cards/ProfileCard";

//function
import { generateImgPath } from "../../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";
const TeamSection = memo(() => {
  const { t } = useTranslation();
  const [lists] = useState([
    {
      image: generateImgPath("/assets/images/pages/team1.webp"),
      designation: "about_us.ceo",
      name: "about_us.tonny_smith",
    },
    {
      image: generateImgPath("/assets/images/pages/team2.webp"),
      designation: "about_us.designer",
      name: "about_us.barry_tech",
    },
    {
      image: generateImgPath("/assets/images/pages/team3.webp"),
      designation: "about_us.developer",
      name: "about_us.kep_john",
    },
    {
      image: generateImgPath("/assets/images/pages/team4.webp"),
      designation: "about_us.designer",
      name: "about_us.monty_rock",
    },
  ]);
  return (
    <Fragment>
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg="3"></Col>
            <Col lg="6" md="12">
              <div className="title-box text-center">
                <h2>{t("about_us.mastermind_team")}</h2>
                <p className="mb-0">{t("about_us.streamit_build")}</p>
              </div>
            </Col>
            <Col lg="3"></Col>
          </Row>
          <div className="row about-us-detail">
            {lists.map((data, index) => (
              <Col md="3" key={index} className="mb-4">
                <ProfileCard
                  name={t(data.name)}
                  designation={t(data.designation)}
                  image={data.image}
                ></ProfileCard>
              </Col>
            ))}
          </div>
        </Container>
      </section>
    </Fragment>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
