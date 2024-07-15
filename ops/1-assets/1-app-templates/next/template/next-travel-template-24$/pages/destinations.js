import dynamic from "next/dynamic";
import CallToActions from "../components/common/CallToActions";
import Seo from "../components/common/Seo";
import DefaultHeader from "../components/header/default-header";
import DefaultFooter from "../components/footer/default";
import TopDestinations2 from "../components/destinations/TopDestinations2";
import Faq from "../components/faq/Faq";
import TestimonialLeftCol from "../components/home/home-1/TestimonialLeftCol";
import Testimonial from "../components/home/home-1/Testimonial";
import Link from "next/link";
import Slights from "../components/block/Slights";
import Blog from "../components/blog/Blog3";
import LocationTopBar from "../components/common/LocationTopBar";
import Banner from "../components/destinations/components/Banner";
import Categories from "../components/destinations/components/Categories";
import IntroTown from "../components/destinations/components/IntroTown";
import Weather from "../components/destinations/components/Weather";
import GeneralInfo from "../components/destinations/components/GeneralInfo";
import Cars from "../components/cars/Cars";
import Tours from "../components/tours/Tours";
import Activity from "../components/activity/Activity";
import Rentals from "../components/rentals/Rentals";
import Hotels from "../components/hotels/Hotels2";

const Destinations = () => {
  return (
    <>
      <Seo pageTitle="Destinations" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pb-md">
        <div className="container">
          <div className="row">
            <Banner />
          </div>
          {/* End .row */}

          <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>What to know before visiting London</h2>
            </div>
            {/* End .col-auto */}

            <IntroTown />
          </div>
          {/* End .row */}

          <div className="pt-30 mt-30 border-top-light" />
          {/* border separation */}

          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">Local weather</h2>
            </div>
            {/* End. col-12 */}

            <Weather />
          </div>
          {/* End local weather */}

          <div className="pt-30 mt-30 border-top-light" />
          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
            {/* End .col */}
            <GeneralInfo />
          </div>
          {/* End .row */}
          <div className="mt-30 border-top-light" />
          {/* border separation */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Banner,categorie,intro,weather, generic info section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Hotels</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels />
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End  Hotel sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Trending Activity</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Trending Activity Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Featured Holiday Rentals
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Rentals />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Featured Rentals Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Car Hire</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cars />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Popular Car Hire Sections */}

      <section className="layout-pt-md layout-pb-md">
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
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top sights in London</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Slights />
          </div>
          {/* End .row */}

          <div className="row justify-center mt-40">
            <div className="col-auto">
              <Link
                href="#"
                className="button h-50 w-250 -outline-blue-1 text-blue-1"
              >
                Explore more <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top sights in London */}

      <section className="layout-pt-lg layout-pb-lg bg-light-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                FAQs about
                <br />
                London
              </h2>
            </div>
            {/* End .col */}

            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq />
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Faq Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Destinations near London
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="pt-40 relative">
            <TopDestinations2 />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End top destinations */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
