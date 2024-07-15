import { Fragment, memo } from "react";

//react bootstrap
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

//function
import { generateImgPath } from "../StaticData/data";

//react-redux
import { useSelector } from "react-redux";
import { getBreadcrumb } from "@/store/streamit/selectors";

//img
const imagePath = generateImgPath("/assets/images/pages/01.webp");

const BreadCrumbWidget = memo(() => {
  const breadcrumb = useSelector(getBreadcrumb)
  return (
    <Fragment>
      {breadcrumb.show ?
        <div
          className="iq-breadcrumb"
          style={{ backgroundImage: `url(${imagePath})` }}
        >
          <Container fluid>
            <Row className="align-items-center">
              <Col sm="12">
                <nav className="text-center">
                  <h2 className="title text-capitalize">{breadcrumb.name}</h2>
                  <Breadcrumb
                    className="main-bg"
                    listProps={{
                      className: "text-center justify-content-center",
                    }}
                  >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{breadcrumb.name}</Breadcrumb.Item>
                  </Breadcrumb>
                </nav>
              </Col>
            </Row>
          </Container>
        </div> : ''}
    </Fragment>
  );
});

BreadCrumbWidget.displayName = "BreadCrumbWidget";
export default BreadCrumbWidget;
