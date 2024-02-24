import FilterBox from "../../components/rental-single/filter-box";

const SidebarRight = ({ rental }) => {
  return (
    <div className="d-flex justify-end js-pin-content">
      <div className="px-30 py-30 rounded-4 border-light bg-white w-360">
        <div className="row y-gap-15 items-center justify-between">
          <div className="col-auto">
            <div className="text-14 text-light-1">
              <span className="text-20 fw-500 text-dark-1 mr-5">
                US${rental?.price}
              </span>{" "}
              nights
            </div>
          </div>
          {/* End .col-auto */}

          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="text-14 text-right mr-10">
                <div className="lh-15 fw-500">Exceptional</div>
                <div className="lh-15 text-light-1">
                  {rental?.numberOfReviews} reviews
                </div>
              </div>
              {/* End text-14 */}
              <div className="size-40 flex-center bg-blue-1 rounded-4">
                <div className="text-14 fw-600 text-white">
                  {rental?.ratings}
                </div>
              </div>
              {/* End text-14 */}
            </div>
            {/* End d-flex */}
          </div>
          {/* End .col-auto */}
        </div>
        {/* End .row */}

        <div className="row y-gap-20 pt-30">
          <FilterBox />
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
