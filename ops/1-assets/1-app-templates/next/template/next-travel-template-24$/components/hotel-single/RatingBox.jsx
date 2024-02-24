const RatingBox = ({ hotel }) => {
  const recommendRatings = [
    {
      id: 1,
      name: "Breakfast",
      numberOfRatings: "25",
    },
    {
      id: 2,
      name: "WiFi",
      numberOfRatings: "14",
    },
    {
      id: 3,
      name: "Food & Dining",
      numberOfRatings: "67",
    },
  ];

  return (
    <div className="px-30 py-30 border-light rounded-4 mt-30">
      <div className="d-flex items-center">
        <div className="size-40 flex-center bg-blue-1 rounded-4">
          <div className="text-14 fw-600 text-white">{hotel?.ratings}</div>
        </div>
        <div className="text-14 ml-10">
          <div className="lh-15 fw-500">Exceptional</div>
          <div className="lh-15 text-light-1">
            {hotel?.numberOfReviews} reviews
          </div>
        </div>
      </div>
      {/* End d-flex */}

      <div className="d-flex mt-20">
        <i className="icon-group text-16 mr-10 pt-5" />
        <div className="text-15">
          Highly rated by guests – 86% would recommend
        </div>
      </div>
      {/* End d-flex */}

      <div className="border-top-light mt-20 mb-20" />

      <div className="row x-gap-10 y-gap-10">
        {recommendRatings.map((item) => (
          <div className="col-auto" key={item.id}>
            <div className="d-flex items-center py-5 px-20 rounded-100 border-light">
              <i className={`icon-like text-12 text-blue-1 mr-10`} />
              <div className="text-14 lh-15">
                {item.name}
                <span className="fw-500 text-blue-1 ml-5">
                  {item.numberOfRatings}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End .row */}
    </div>
  );
};

export default RatingBox;
