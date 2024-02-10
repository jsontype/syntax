import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import Image from "next/image";
import HowWorks from "../../components/block/HowWorks";
import Block2 from "../../components/about/Block2";
import Faq from "../../components/faq/Faq";
import Link from "next/link";

const BecomeExpert = () => {
  return (
    <>
      <Seo pageTitle="Become Expert" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={400}
            src="/img/pages/about/1.png"
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                Let&apos;s Show the Beauty of Your City to the World
              </h1>
              <div className="text-white mt-15">
                Discover amzaing places at exclusive deals
              </div>
              <div className="d-inline-block">
                <Link
                  href="/pages/signup"
                  className="button -md -blue-1 w-180 bg-white text-dark-1 mt-30 md:mt-20"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">How does it work?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-between pt-40">
            <HowWorks />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End how works Section */}

      <section className="section-bg layout-pt-lg layout-pb-lg md:pt-0 md:pb-60 sm:pb-40 bg-blue-2 z-auto">
        <Block2 />
      </section>
      {/* End about section block */}

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

      <DefaultHeader />
      {/* End Header 1 */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(BecomeExpert), { ssr: false });
