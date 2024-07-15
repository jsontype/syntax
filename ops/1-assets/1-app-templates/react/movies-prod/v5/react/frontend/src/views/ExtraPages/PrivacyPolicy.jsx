import { Fragment, memo } from "react";

//react bootstrap
import { Container } from "react-bootstrap";

// components
import BreadcrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const PrivacyPolicy = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("header.privacy_policy")} />
      <div className="section-padding">
        <Container>
          <div className="title-box">
            <h4 className="mb-4">1. {t("privacy_policy.waht_personal")}</h4>
            <p className="mb-0">{t("privacy_policy.desc1")}</p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">2. {t("privacy_policy.cookies_web")}</h4>
            <p className="">{t("privacy_policy.desc2")}</p>
            <p className="mb-0">{t("privacy_policy.desc3")}</p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">3. {t("privacy_policy.third_party")}</h4>
            <p className="mb-0">{t("privacy_policy.desc1")}</p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">4. {t("privacy_policy.disclousure")}</h4>
            <p className="mb-0">{t("privacy_policy.desc1")}</p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">
              5. {t("privacy_policy.transfer_storage")}{" "}&amp;{" "}
              {t("privacy_policy.processing_globally")}
            </h4>
            <p className="mb-0">{t("privacy_policy.desc1")}</p>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

PrivacyPolicy.displayName = "PrivacyPolicy";
export default PrivacyPolicy;
