import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import Faq from "../../components/faq/Faq";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import HelpSearchBlock from "../../components/block/HelpSearchBlock";
import HelpBlock from "../../components/block/HelpBlock";

const HelpCenter = () => {
  return (
    <>
      <Seo pageTitle="Help Center" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Welcome to the Help Center
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum is placeholder text commonly used in site.
                </p>
              </div>
              {/* End .sectiontitle */}

              <HelpSearchBlock />
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-60 lg:pt-40">
            <HelpBlock />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End search and search block section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Frequently Asked Questions
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(HelpCenter), { ssr: false });
