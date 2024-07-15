const ReviewProgress2 = () => {
  const reviewProgressContent = [
    {
      id: 1,
      reviewReason: "Excellent",
      reviews: "1,050",
      progressPercent: "90%",
    },
    {
      id: 2,
      reviewReason: "Very good",
      reviews: "341",
      progressPercent: "84%",
    },
    {
      id: 3,
      reviewReason: "Average",
      reviews: "100",
      progressPercent: "60%",
    },
    {
      id: 4,
      reviewReason: "Poor",
      reviews: "20",
      progressPercent: "20%",
    },
    { id: 5, reviewReason: "Terrible", reviews: "40", progressPercent: "40%" },
  ];
  return (
    <>
      <div className="d-flex items-center mt-20">
        <div className="flex-center bg-yellow-1 rounded-4 size-70 text-22 fw-600 text-cark-1">
          4.8
        </div>
        <div className="ml-20">
          <div className="text-16 text-dark-1 fw-500 lh-14">Exceptional</div>
          <div className="text-15 text-light-1 lh-14 mt-4">3,014 reviews</div>
        </div>
      </div>
      {/* End .d-flex */}

      <div className="row y-gap-20 pt-20">
        {reviewProgressContent.map((item) => (
          <div className="col-12" key={item.id}>
            <div className="d-flex items-center justify-between">
              <div className="text-15 fw-500">{item.reviewReason}</div>
              <div className="text-15 text-light-1">{item.reviews}</div>
            </div>
            <div className="progressBar mt-10">
              <div className="progressBar__bg bg-blue-2" />
              <div
                className="progressBar__bar bg-yellow-1"
                style={{ width: item.progressPercent }}
              />
            </div>
          </div>
        ))}

        {/* End .col-md-4 */}
      </div>
      {/* End .row */}
    </>
  );
};

export default ReviewProgress2;
