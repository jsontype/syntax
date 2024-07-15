import React, { Fragment, memo } from "react";

//react-bootstrap
import { Container } from "react-bootstrap";

//components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const TermsofUse = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title={t("footer.terms_of_use")} />
      <div className="section-padding">
        <Container>
          <div className="title-box">
            <h4 className="mb-4">
              1. {t("terms_of_uses.description_service")}
            </h4>
            <p>{t("terms_of_uses.desc1")}</p>
            <p>{t("terms_of_uses.desc1")}.</p>
            <p>{t("terms_of_uses.desc2")}</p>
            <p className="mb-0">{t("terms_of_uses.desc1")}</p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">{t("terms_of_uses.streamit_website")}:</h4>
            <ul>
              <li>{t("terms_of_uses.google_chrome")}</li>
              <li>{t("terms_of_uses.firefox")}</li>
              <li>{t("terms_of_uses.safari")}</li>
              <li>{t("terms_of_uses.cookies_enabled")}</li>
            </ul>
          </div>
          <div className="title-box">
            <h4 className="mb-4">
              2.{t("terms_of_uses.subscription_service")}
            </h4>
            <p>{t("terms_of_uses.desc2")}</p>
            <p>{t("terms_of_uses.desc2")}.</p>
            <p className="mb-0">{t("terms_of_uses.desc2")}</p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">
              3. {t("terms_of_uses.third_party_payment")}
            </h4>
            <p className="mb-0">{t("terms_of_uses.desc1")}</p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">
              4. {t("terms_of_uses.childrens_privacy")}
            </h4>
            <p className="mb-0">{t("terms_of_uses.desc1")}</p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">5. {t("terms_of_uses.data_transfer")}</h4>
            <p className="mb-0">{t("terms_of_uses.desc1")}</p>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

export default TermsofUse;
