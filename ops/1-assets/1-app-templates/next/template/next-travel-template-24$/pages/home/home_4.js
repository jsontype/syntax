import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/default";
import Header4 from "../../components/header/header-4";
import Hero4 from "../../components/hero/hero-4";
import BlockGuide from "../../components/block/BlockGuide";
import CallToActions from "../../components/home/home-4/CallToActions";
import Testimonial from "../../components/home/home-4/Testimonial";
import Blog4 from "../../components/blog/Blog4";
import Brand from "../../components/brand/Brand";
import Counter2 from "../../components/counter/Counter2";
import Counter from "../../components/counter/Counter";
import ParallaxBanner from "../../components/banner/ParallaxBanner";
import Hotels3 from "../../components/hotels/Hotels3";
import FilterHotelsTabs2 from "../../components/hotels/filter-tabs/FilterHotelsTabs2";
import FilterHotels2 from "../../components/hotels/FilterHotels2";
import Link from "next/link";
import Travellers from "../../components/home/home-4/Travellers";

const home_4 = () => {
  return (
    <>
      <Seo pageTitle="Home-4" />
      {/* End Page Title */}

      <Header4 />
      {/* End Header 4 */}

      <Hero4 />
      {/* End Hero 4 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Destinations Travellers Love
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="relative pt-40 ">
            <Travellers />
          </div>
        </div>
      </section>
      {/* End Travellers Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Hotels</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="tabs -pills-2 pt-40">
            <FilterHotelsTabs2 />
            <div className="tabs__content pt-40">
              <div className="row y-gap-30">
                <FilterHotels2 />
              </div>
            </div>
            {/* End .tabs__content */}

            <div className="row justify-center pt-60">
              <div className="col-auto">
                <Link
                  href="#"
                  className="button px-40 h-50 -outline-blue-1 text-blue-1"
                >
                  View All <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Hotels Section */}

      <ParallaxBanner />
      {/* End Parallax banner Section */}

      <section className="pt-50 pb-40 border-bottom-light">
        <div className="container">
          <div className="row justify-center text-center">
            <Counter />
          </div>
        </div>
      </section>
      {/* End counter up Section */}

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
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Block Guide Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best Seller</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col-auto */}

            <div className="col-auto tabs -pills-2 ">
              <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls"></div>
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="relative  pt-40 sm:pt-20">
            <div className="row y-gap-30">
              <Hotels3 />
            </div>
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End Best Seller Hotels Sections */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Overheard from Travelers
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="relative mt-80 md:mt-40  position-relative">
            <Testimonial />
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

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_4), { ssr: false });
