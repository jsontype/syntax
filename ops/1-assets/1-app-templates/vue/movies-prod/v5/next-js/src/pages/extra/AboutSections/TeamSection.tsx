import { Fragment, memo, useState } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//components
import ProfileCard from "../../../components/cards/ProfileCard";

//function
import { generateImgPath } from "../../../StaticData/data";

const TeamSection = memo(() => {
  const [lists] = useState([
    {
      image: generateImgPath("/assets/images/pages/team1.webp"),
      designation: "CEO",
      name: "Tonny Smith",
    },
    {
      image: generateImgPath("/assets/images/pages/team2.webp"),
      designation: "Designer",
      name: "Barry Tech",
    },
    {
      image: generateImgPath("/assets/images/pages/team3.webp"),
      designation: "Developer",
      name: "kep John",
    },
    {
      image: generateImgPath("/assets/images/pages/team4.webp"),
      designation: "Designer",
      name: "Monty Rock",
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
                <h2>Masterminds Team</h2>
                <p className="mb-0">
                  Your Streamit is build by one of the best and well experienced
                  web developers and an awarded Envato Elite Author.
                </p>
              </div>
            </Col>
            <Col lg="3"></Col>
          </Row>
          <Row className="about-us-detail">
            {lists.map((data, index) => (
              <Col md="3" className="mb-4" key={index} >
                <ProfileCard
                  name={data.name}
                  designation={data.designation}
                  image={data.image}
                ></ProfileCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
