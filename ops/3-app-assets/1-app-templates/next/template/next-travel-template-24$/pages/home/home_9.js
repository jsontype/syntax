import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer7 from "../../components/footer/footer-7";
import Header9 from "../../components/header/header-9";
import Hero9 from "../../components/hero/hero-9";
import TopHeader from "../../components/header/header-9/top-header";
import Blog4 from "../../components/blog/Blog4";
import Testimonial from "../../components/home/home-9/Testimonial";
import PopularDestinations from "../../components/home/home-9/PoularDestinations";
import Cruise2 from "../../components/cruise/Cruise2";
import Link from "next/link";
import AboutIntro from "../../components/home/home-9/AboutIntro";
import WhyChoose from "../../components/home/home-9/WhyChoose";
import Cruise3 from "../../components/cruise/Cruise3";
import SearchBoxContent from "../../components/hero/hero-9/SearchBoxContent";

const home_9 = () => {
  return (
    <>
      <Seo pageTitle="Home-9" />
      {/* End Page Title */}

      <TopHeader />
      {/* End Header top Banner */}

      <div
        className="offcanvas offcanvas-top vh-100"
        tabIndex={-1}
        id="offcanvasTop2"
        aria-labelledby="offcanvasTopLabel"
        style={{ zIndex: 1200 }}
      >
        <div className="offcanvas-header position-absolute top-0 end-0">
          <button
            type="button"
            className="btn-close text-reset "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        {/* End header */}
        <SearchBoxContent />
      </div>
      {/* End searchBar Offcanvas Popup */}

      <Header9 />
      {/* End Header 9 */}

      <Hero9 />
      {/* End Hero 9 */}

      <section
        className="layout-pt-lg layout-pb-md relative"
        id="secondSection"
      >
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row x-gap-10 y-gap-10 pt-40 sm:pt-20 item_gap-x10">
            <PopularDestinations />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Hero 9 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Featured Cruise Deals</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/cruise/cruise-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Cruise3 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

      <AboutIntro />
      {/* About Intro Cruise  Sections */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-4 col-lg-5">
              <h2 className="text-30 fw-600">Why Choose Us</h2>
              <p className="mt-5">
                These popular destinations have a lot to offer
              </p>
              <p className="text-dark-1 mt-40 sm:mt-20">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <div className="d-inline-block mt-40 sm:mt-20">
                <a
                  href="#"
                  className="button -md -blue-1 bg-yellow-1 text-dark-1"
                >
                  Learn More <div className="icon-arrow-top-right ml-15" />
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="row y-gap-60">
                <WhyChoose />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Why Choose  Sections */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Cruise</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="pt-40 sm:pt-20 item_gap-x30">
            <Cruise2 />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Cruise Sections */}

      <section className="section-bg layout-pt-lg layout-pb-lg bg-light-2">
        <div className="section-bg__item col-12">
          <img src="/img/backgrounds/11.png" alt="image" />
        </div>
        {/* End section bg */}

        <div className="container">
          <div className="row justify-center pt-50 md:pt-30">
            <div className="col-xl-7 col-lg-10">
              <div className="overflow-hidden">
                <Testimonial />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .contaienr */}
      </section>
      {/* End testimonial section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog4 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <Footer7 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_9), { ssr: false });
