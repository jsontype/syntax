const Duration = () => {
  const durationOptions = [
    { label: "Up to 1 hour", count: 92 },
    { label: "1 to 4 hours", count: 45 },
    { label: "4 hours to 1 day", count: 21 },
  ];

  return (
    <>
      {durationOptions.map((option, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{option.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{option.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Duration;
