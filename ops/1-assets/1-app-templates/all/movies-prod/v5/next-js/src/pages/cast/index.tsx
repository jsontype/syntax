import React, { Fragment, memo } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//router
import Link from "next/link";

// components
import CastCard from "../../components/cards/CastCard";

// data
import { cast } from "../../StaticData/data";

//custom hooks
import { useBreadcrumb } from "@/utilities/usePage";

export const CastPage = memo(() => {
  useBreadcrumb('Cast')
  return (
    <Fragment>
      <section className="section-padding">
        <Container fluid>
          <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
            {cast.map((item, index) => (
              <Col key={index}>
                <CastCard
                  title={item.title}
                  category={item.designation}
                  image={item.profile_image}
                />
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <div className="iq-button">
              <Link
                href="#"
                className="btn text-uppercase position-relative"
              >
                <span className="button-text">load more</span>{" "}
                <i className="fa-solid fa-play"></i>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
});

CastPage.displayName = "CastPage";
export default CastPage;
