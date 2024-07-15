const ReplyFormReview = () => {
  const replyReviewContent = [
    {
      id: 1,
      reasonOfreview: "Location",
      ratings: (
        <>
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
        </>
      ),
    },
    {
      id: 2,
      reasonOfreview: "Staff",
      ratings: (
        <>
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
        </>
      ),
    },
    {
      id: 3,
      reasonOfreview: "Cleanliness",
      ratings: (
        <>
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
        </>
      ),
    },
    {
      id: 4,
      reasonOfreview: "Value for money",
      ratings: (
        <>
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
        </>
      ),
    },
    {
      id: 5,
      reasonOfreview: "Comfort",
      ratings: (
        <>
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
        </>
      ),
    },
    {
      id: 6,
      reasonOfreview: "Facilities",
      ratings: (
        <>
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
        </>
      ),
    },
    {
      id: 7,
      reasonOfreview: "Free WiFi",
      ratings: (
        <>
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
          <div className="icon-star text-10 text-yellow-1" />
        </>
      ),
    },
  ];

  return (
    <div className="row y-gap-30 pt-30">
      {replyReviewContent.map((item) => (
        <div className="col-xl-4" key={item.id}>
          <div className="text-15 lh-1 fw-500">{item.reasonOfreview}</div>
          <div className="d-flex x-gap-5 items-center pt-10">
            {item.ratings}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReplyFormReview;
