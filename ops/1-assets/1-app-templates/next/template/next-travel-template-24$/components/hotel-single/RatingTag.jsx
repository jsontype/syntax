const RatingTag = () => {
  return (
    <>
      <div className="px-24 py-20 rounded-4 bg-green-1">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-auto">
            <div className="flex-center size-60 rounded-full bg-white">
              <i className="icon-star text-yellow-1 text-30"></i>
            </div>
          </div>

          <div className="col-auto">
            <h4 className="text-18 lh-15 fw-500">
              This property is in high demand!
            </h4>
            <div className="text-15 lh-15">7 travelers have booked today.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingTag;
