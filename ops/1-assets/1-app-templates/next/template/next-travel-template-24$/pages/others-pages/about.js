import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import WhyChoose from "../../components/block/BlockGuide";
import Block1 from "../../components/about/Block1";
import Image from "next/image";
import Counter from "../../components/counter/Counter";
import Team1 from "../../components/team/Team1";
import Testimonial from "../../components/testimonial/Testimonial";
import Counter2 from "../../components/counter/Counter2";
import Brand from "../../components/brand/Brand";

const About = () => {
  return (
    <>
      <Seo pageTitle="About" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

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
                Looking for joy?
              </h1>
              <div className="text-white mt-15">
                Your trusted trip companion
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 />
          </div>
        </div>
      </section>
      {/* End about block section */}

      <section className="pt-60">
        <div className="container">
          <div className="border-bottom-light pb-40">
            <div className="row y-gap-30 justify-center text-center">
              <Counter />
            </div>
          </div>
        </div>
      </section>
      {/* End counter Section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Our Team</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className=" pt-40 js-section-slider">
            <div className="item_gap-x30">
              <Team1 />
            </div>
          </div>
          {/* End  js-section-slider */}
        </div>
        {/* End container */}
      </section>
      {/* End team section */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Overheard from travelers
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden pt-80 js-section-slider">
            <div className="item_gap-x30">
              <Testimonial />
            </div>
          </div>
          {/* End .overflow-hidden */}

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <Counter2 />
            </div>
            {/* End .col */}

            <div className="col-xl-8">
              <div className="row y-gap-30 justify-between items-center">
                <Brand />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End testimonial section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
