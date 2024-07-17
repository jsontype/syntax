import { Fragment, memo } from "react";

//react bootstrap
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

//function
import { generateImgPath } from "../StaticData/data";

//img
const imagePath = generateImgPath("/assets/images/pages/01.webp");
// the hook
import { useTranslation } from "react-i18next";

const BreadCrumbWidget = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div
        className="iq-breadcrumb"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col sm="12">
              <nav className="text-center">
                <h2 className={`title ${props.class === false ? '' : 'text-capitalize'}`}>{t(props.title)}</h2>
                <Breadcrumb
                  className="main-bg"
                  listProps={{
                    className: "text-center justify-content-center",
                  }}
                >
                  <Breadcrumb.Item>{t("header.home")}</Breadcrumb.Item>
                  <Breadcrumb.Item active>{t(props.title)}</Breadcrumb.Item>
                </Breadcrumb>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

BreadCrumbWidget.displayName = "BreadCrumbWidget";
export default BreadCrumbWidget;
