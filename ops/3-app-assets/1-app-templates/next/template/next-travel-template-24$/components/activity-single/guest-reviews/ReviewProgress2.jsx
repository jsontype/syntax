const ReviewProgress2 = () => {
  const reviewProgressContent = [
    { id: 1, reviewReason: "Location", ratings: "9.4", progressPercent: "90%" },
    { id: 2, reviewReason: "Staff", ratings: "8.4", progressPercent: "84%" },
    {
      id: 3,
      reviewReason: "Cleanliness",
      ratings: "9.4",
      progressPercent: "90%",
    },
    {
      id: 4,
      reviewReason: "Value for money",
      ratings: "8",
      progressPercent: "80%",
    },
    { id: 5, reviewReason: "Comfort", ratings: "9.4", progressPercent: "90%" },
    {
      id: 6,
      reviewReason: "Facilities",
      ratings: "8.5",
      progressPercent: "85%",
    },
    {
      id: 7,
      reviewReason: "Free WiFi",
      ratings: "9.4",
      progressPercent: "90%",
    },
  ];
  return (
    <>
      <div className="d-flex items-center mt-20">
        <div className="flex-center bg-blue-1 rounded-4 size-70 text-22 fw-600 text-white">
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
              <div className="text-15 text-light-1">{item.ratings}</div>
            </div>
            <div className="progressBar mt-10">
              <div className="progressBar__bg bg-blue-2" />
              <div
                className="progressBar__bar bg-dark-1"
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
