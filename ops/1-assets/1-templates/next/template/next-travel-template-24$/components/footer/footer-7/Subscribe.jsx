const Subscribe = () => {
  return (
    <div className="row y-gap-30 justify-between items-center layout-pb-md">
      <div className="col-auto">
        <div className="d-flex y-gap-20 flex-wrap items-center">
          <div className="icon-newsletter text-60 sm:text-40 text-white" />
          <div className="ml-30">
            <h4 className="text-26 text-white fw-600">
              Your Travel Journey Starts Here
            </h4>
            <div className="text-white">
              Sign up and we&apos;ll send the best deals to you
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-auto">
        <form className="single-field -w-410 d-flex x-gap-10 y-gap-20">
          <div>
            <input
              className="bg-white h-60"
              type="text"
              placeholder="Your Email"
              required
            />
          </div>
          {/* End input */}

          <div>
            <button
              type="submit"
              className="button -md h-60 bg-yellow-1 text-dark-1"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Subscribe;
