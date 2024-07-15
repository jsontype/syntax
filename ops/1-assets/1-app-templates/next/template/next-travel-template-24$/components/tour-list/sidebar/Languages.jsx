const Languages = () => {
  const languages = [
    { name: "English", count: 92 },
    { name: "Spanish", count: 45 },
    { name: "French", count: 21 },
    { name: "Turkish", count: 78 },
  ];

  return (
    <>
      {languages.map((language, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{language.name}</div>
            </div>
          </div>
          {/* End .col */}
          <div className="col-auto">
            <div className="text-15 text-light-1">{language.count}</div>
          </div>
        </div>
        /* End .row */
      ))}
    </>
  );
};

export default Languages;
