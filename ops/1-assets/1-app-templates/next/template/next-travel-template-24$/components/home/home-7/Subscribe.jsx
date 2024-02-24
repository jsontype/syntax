const Subscribe = () => {
  return (
    <section
      className="layout-pt-md layout-pb-md is-in-view"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row ml-0 mr-0 items-center justify-between">
          <div className="col-xl-5 px-0">
            <img
              className="col-12 h-400"
              src="/img/newsletter/1.png"
              alt="image"
            />
          </div>
          {/* End .col */}

          <div className="col px-0">
            <div className="d-flex justify-center flex-column h-400 px-80 py-40 md:px-30 bg-green-1">
              <div className="icon-newsletter text-60 sm:text-40 text-dark-1" />
              <h2 className="text-30 sm:text-24 lh-15 mt-20">
                Your Travel Journey Starts Here
              </h2>
              <p className="text-dark-1 mt-5">
                Sign up and we&apos;ll send the best deals to you
              </p>

              <div className="single-field -w-410 d-flex x-gap-10 flex-wrap y-gap-20 pt-30">
                <div className="col-auto">
                  <input
                    className="col-12 bg-white h-60"
                    type="text"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-auto">
                  <button
                    type="submit"
                    className="button -md h-60 -blue-1 bg-yellow-1 text-dark-1"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              {/* End single-field */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
