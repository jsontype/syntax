import MainFilterSearchBox from "./MainFilterSearchBox";

const SearchBoxContent = () => {
  return (
    <div className="offcanvas-body d-flex flex-column justify-content-center bg-light-2">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-9">
            <div className="text-center">
              <div className="text-dark fw-500 uppercase mb-10">
                TOUR EXPERIENCE
              </div>
              <h1 className="text-80 lg:text-60 sm:text-40 text-dark">
                Find The Best Cruise
              </h1>
            </div>

            <div className="masthead-bottom mt-40 md:mt-4">
              <MainFilterSearchBox />
              {/* End Search filter box */}
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}
    </div>
  );
};

export default SearchBoxContent;
