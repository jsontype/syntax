const CounterDark = () => {
  return (
    <div className="row y-gap-30 text-white sm:text-center">
      <div className="col-sm-5 col-6">
        <div className="text-30 lh-15 fw-600">13m+</div>
        <div className="lh-15">Happy People</div>
      </div>
      {/* End .col */}

      <div className="col-sm-5 col-6">
        <div className="text-30 lh-15 fw-600">4.88</div>
        <div className="lh-15">Overall rating</div>
        <div className="d-flex x-gap-5 items-center pt-10">
          <div className="icon-star text-white text-10" />
          <div className="icon-star text-white text-10" />
          <div className="icon-star text-white text-10" />
          <div className="icon-star text-white text-10" />
          <div className="icon-star text-white text-10" />
        </div>
      </div>
    </div>
  );
};

export default CounterDark;
