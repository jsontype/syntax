import { Fragment, memo } from "react";

//components
import TeamSection from "./AboutSections/TeamSection";
import ContactUs from "./AboutSections/ContactUs";
import WorkSection from "./AboutSections/WorkSection";
import BreadcrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const AboutPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("header.about_us")} />
      <TeamSection></TeamSection>
      <ContactUs></ContactUs>
      <WorkSection></WorkSection>
    </Fragment>
  );
});

AboutPage.displayName = "AboutPage";
export default AboutPage;
