import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {
  return (
    <section className="masthead -type-6">
      <div className="masthead__bg bg-dark-3">
        <img alt="image" src="/img/masthead/6/bg.png" className="js-lazy" />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-9">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                The World is Waiting For You
              </h1>
              <p
                className="text-white mt-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Discover amzaing places at exclusive deals
              </p>
            </div>
            {/* End hero title */}
            <MainFilterSearchBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
