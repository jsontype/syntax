import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import rentalsData from "../../../data/rentals";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import Overview from "../../../components/rental-single/Overview";
import PropertyHighlights from "../../../components/rental-single/PropertyHighlights";
import TopBreadCrumb from "../../../components/rental-single/TopBreadCrumb";
import SidebarRight from "../../../components/rental-single/SidebarRight";
import ReviewProgress2 from "../../../components/rental-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "../../../components/rental-single/guest-reviews/DetailsReview2";
import ReplyForm from "../../../components/rental-single/ReplyForm";
import ReplyFormReview2 from "../../../components/rental-single/ReplyFormReview2";
import CallToActions from "../../../components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import SlideGallery from "../../../components/rental-single/SlideGallery";
import MapPropertyFinder from "../../../components/rental-single/MapPropertyFinder";
import HelpfulFacts from "../../../components/rental-single/HelpfulFacts";

const TourSingleV1Dynamic = () => {
  const router = useRouter();
  const [rental, setRental] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setRental(rentalsData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Rental Single" />
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
            <div className="col-12">
              <div className="row justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-26 fw-600">{rental?.title}</h1>
                  <div className="row x-gap-20 y-gap-20 items-center pt-10">
                    <div className="col-auto">
                      <div className="row x-gap-10 items-center">
                        <div className="col-auto">
                          <div className="d-flex x-gap-5 items-center">
                            <i className="icon-location-2 text-16 text-light-1" />
                            <div className="text-15 text-light-1">
                              {rental?.location}
                            </div>
                          </div>
                        </div>
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
                  </div>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1 mt-10">
                        <i className="icon-share  mr-10" />
                        Share
                      </button>
                    </div>
                    {/* End .col-auto */}

                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1 bg-light-2 mt-10">
                        <i className="icon-heart  mr-10" />
                        Save
                      </button>
                    </div>
                    {/* End .col-auto */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End sections pt-40 */}

      <section className="pt-40">
        <div className="container">
          <SlideGallery rental={rental} />
        </div>
      </section>
      {/* End gallery grid wrapper */}

      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <h3 className="text-22 fw-500">Property highlights</h3>
              <PropertyHighlights />
              {/* End toursnapshot */}
              <div className="border-top-light mt-40 mb-40"></div>

              <Overview />
              {/* End  Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight rental={rental} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

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

      <section className="mt-40 border-top-light pt-40">
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

      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Where you’ll be</h3>
          <p className="mb-20">Greater London, England, United Kingdom</p>
          <div className=" rounded-4 overflow-hidden map-500">
            <MapPropertyFinder />
          </div>
        </div>
      </section>
      {/* End Map */}

      <section className="pt-40 layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Things to know</h3>
            </div>
          </div>
          {/* End .row */}

          <div className="row x-gap-50 y-gap-30 pt-20">
            <HelpfulFacts />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Map */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
