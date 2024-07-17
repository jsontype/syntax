import { Fragment, memo, useState } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//components
import BreadcrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const FAQPage = memo(() => {
  const { t } = useTranslation();
  const [faq, setfaq] = useState("1");
  return (
    <Fragment>
      <BreadcrumbWidget title={t("header.faq")} />
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-accordian iq-accordian-square">
                <div
                  className={`iq-accordian-block ${faq === "1" ? "iq-active" : ""
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
                      {t("faq.what_is_streamit")}
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "1" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("faq.desc")} </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 2  ${faq === "2" ? "iq-active" : ""
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
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      {t("faq.will_account")}
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "2" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("faq.desc")}. </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 3  ${faq === "3" ? "iq-active" : ""
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
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      {t("faq.video_issue")}
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "3" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("faq.desc")}. </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 4 ${faq === "4" ? "iq-active" : ""
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
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      {t("faq.manage_notification")}
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "4" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("faq.desc")}. </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 5 ${faq === "5" ? "iq-active" : ""
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
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      {t("faq.what_benefits")}
                    </h4>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "5" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("faq.desc")}. </p>
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
