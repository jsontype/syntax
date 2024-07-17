import { Fragment, memo } from "react";

// Next-Link
import Link from "next/link";

const ParallexSection =  memo(()=> {
  return (
    <Fragment>
      <section
        id="parallex"
        className="parallax-window bg-attachment-fixed"
        style={{
          background: "url(assets/images/parallax/parallex.webp) fixed",
        }}
      >
        <div className="container-fluid h-100">
          <div className="row align-items-center justify-content-center h-100 parallaxt-details">
            <div className="col-xl-5 col-lg-12 col-md-12 r-mb-23">
              <div className="text-start">
                <h2 className="big-font-5 text-uppercase texture-text mb-0">
                  bailey
                </h2>
                <div className="d-flex flex-wrap align-items-center r-mb-23 my-4">
                  <div className="slider-ratting d-flex align-items-center">
                    <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </li>
                    </ul>
                    <span className="text-white ms-2 font-size-14 fw-500">
                      4.2
                    </span>
                    <span className="ms-2">
                      <img
                        src="/assets/images/movies/imdb-logo.svg"
                        alt="imdb logo"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">
                    15+
                  </span>
                  <span className="font-size-14 fw-500">2 Hr : 6 Mins</span>
                </div>
                <h4 className="iq-title mb-2 fw-bold">Movie of the year</h4>
                <p className="line-count-2 w-75 mb-5">
                  Baileys Irish Cream is an Irish cream liqueur an alcoholic
                  beverage flavoured with cream, cocoa, and Irish whiskey made
                  by Diageo at Republic of Ireland and in Mallusk, Northern
                  Ireland.
                </p>
                <div className="iq-button">
                  <Link
                    href="/movies/detail"
                    className="btn text-uppercase position-relative"
                  >
                    <span className="button-text">play now</span>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12 mt-5 mt-xl-0">
              <div className="parallax-img">
                <Link href="#">
                  <img
                    src="/assets/images/parallax/parallex.webp"
                    className="img-fluid w-100"
                    loading="lazy"
                    alt="bailey"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
})

ParallexSection.displayName = 'ParallexSection'
export default ParallexSection