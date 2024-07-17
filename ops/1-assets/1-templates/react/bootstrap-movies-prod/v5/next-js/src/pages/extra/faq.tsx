import { Fragment, memo, useState } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

const FAQPage = memo(() => {
  const [faq, setfaq] = useState("1");
  useBreadcrumb('FAQ')
  return (
    <Fragment>
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-accordian iq-accordian-square">
                <div
                  className={`iq-accordian-block ${
                    faq === "1" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("1");
                  }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title">
                      What Is Streamit?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${
                      faq === "1" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="mb-0">
                      {" "}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using ‘Content here, content here’, making it
                      look like readable English.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 2  ${
                    faq === "2" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("2");
                  }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title">
                      Will My Account Work Outside My Country?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${
                      faq === "2" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="mb-0">
                      {" "}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using ‘Content here, content here’, making it
                      look like readable English.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 3  ${
                    faq === "3" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("3");
                  }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title">
                      I Am Facing Video Playback Issues. What Do I Do?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${
                      faq === "3" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="mb-0">
                      {" "}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using ‘Content here, content here’, making it
                      look like readable English.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 4 ${
                    faq === "4" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("4");
                  }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title">
                      How Can I Manage Notifications?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${
                      faq === "4" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="mb-0">
                      {" "}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using ‘Content here, content here’, making it
                      look like readable English.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 5 ${
                    faq === "5" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("5");
                  }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title">
                      What Benefits Do I Get With The Packs?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${
                      faq === "5" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="mb-0">
                      {" "}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using ‘Content here, content here’, making it
                      look like readable English.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

FAQPage.displayName = "FAQPage";
export default FAQPage;
