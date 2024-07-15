const data = [{ label: "Free Cancellation", count: 92 }];

const OthersFilters = () => {
  return (
    <>
      {data.map((item, i) => (
        <div className="row y-gap-10 items-center justify-between" key={i}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{item.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{item.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OthersFilters;
