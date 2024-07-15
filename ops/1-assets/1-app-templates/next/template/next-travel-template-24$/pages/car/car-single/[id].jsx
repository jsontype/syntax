import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import carsData from "../../../data/cars";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import Overview from "../../../components/car-single/Overview";
import PropertyHighlights from "../../../components/car-single/PropertyHighlights";
import TopBreadCrumb from "../../../components/car-single/TopBreadCrumb";
import ReviewProgress2 from "../../../components/car-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "../../../components/car-single/guest-reviews/DetailsReview2";
import ReplyForm from "../../../components/car-single/ReplyForm";
import ReplyFormReview2 from "../../../components/car-single/ReplyFormReview2";
import CallToActions from "../../../components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import SlideGallery from "../../../components/car-single/SlideGallery";
import FilterBox from "../../../components/car-single/filter-box";
import Faq from "../../../components/faq/Faq";
import MapPropertyFinder from "../../../components/car-single/MapPropertyFinder";

const TourSingleV1Dynamic = () => {
  const router = useRouter();
  const [car, setCar] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setCar(carsData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Car Single" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <TopBreadCrumb />
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-8">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-24 fw-600">{car?.title}</h1>
                  <div className="row x-gap-10 items-center pt-10">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-location text-16 text-light-1" />
                        <div className="text-15 text-light-1">
                          {car?.location}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div>
                  </div>
                </div>
                {/* End title and other info */}

                <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1">
                        <i className="icon-share mr-10" />
                        Share
                      </button>
                    </div>
                    {/* End .col */}
                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1 bg-light-2">
                        <i className="icon-heart mr-10" />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/* End col button group */}
              </div>
              {/* End .row */}

              <div className="mt-40">
                <SlideGallery />
              </div>
            </div>
            {/* End col-lg-8 left car gallery */}

            <div className="col-lg-4">
              <div className="d-flex justify-end">
                <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
                  <div className="row y-gap-15 items-center justify-between">
                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From
                        <span className="text-20 fw-500 text-dark-1 ml-5">
                          US{car?.price}
                        </span>
                      </div>
                    </div>
                    {/* End .col-auto */}

                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="text-14 text-right mr-10">
                          <div className="lh-15 fw-500">Exceptional</div>
                          <div className="lh-15 text-light-1">
                            {car?.numberOfReviews} reviews
                          </div>
                        </div>
                        {/* End div */}

                        <div className="size-40 flex-center bg-yellow-1 rounded-4">
                          <div className="text-14 fw-600 text-dark-1">
                            {car?.ratings}
                          </div>
                        </div>
                        {/* End div */}
                      </div>
                    </div>
                    {/* End .col-auto */}
                  </div>
                  {/* End .row */}

                  <div className="row y-gap-20 pt-20">
                    <FilterBox />
                  </div>
                  {/* End .row */}
                </div>
                {/* End px-30 */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col right car sidebar filter box */}
          </div>
          {/* End .row */}
        </div>
        {/* End .containar */}
      </section>
      {/* End Galler single */}

      <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <h3 className="text-22 fw-500">Property highlights</h3>
                <PropertyHighlights />
                <Overview />
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End pt-40 */}

      {/* End main content section */}

      <section className="mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Car Location</h3>
          <div className=" rounded-4 overflow-hidden map-500">
            <MapPropertyFinder />
          </div>
        </div>
      </section>
      {/* End Map */}

      <section className="pt-40">
        <div className="container ">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-22 fw-500">
                FAQs about
                <br /> The New Car Model
              </h2>
            </div>
            {/* End .row */}

            <div className="col-lg-8">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Faq about sections */}

      <section className="mt-40 border-top-light pt-40">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-3">
              <h3 className="text-22 fw-500">Guest reviews</h3>
              <ReviewProgress2 />
              {/* End review with progress */}
            </div>
            {/* End col-xl-3 */}

            <div className="col-xl-8">
              <DetailsReview2 />
            </div>
            {/* End col-xl-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        {/* End container */}
      </section>
      {/* End Review section */}

      <section className="mt-40 border-top-light pt-40 layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-3">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>
              {/* End .row */}

              <ReplyFormReview2 />
              {/* End ReplyFormReview */}
            </div>
            {/* End .col-xl-3 */}

            <div className="col-xl-8">
              <ReplyForm />
            </div>
            {/* End .col-xl-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Reply Comment box section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
