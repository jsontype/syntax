const TopHeaderFilter = () => {
  return (
    <>
      <div className="col-auto">
        <div className="text-18">
          <span className="fw-500">3,269 properties</span> in Europe
        </div>
      </div>
      {/* End .col */}
      <div className="col-auto">
        <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
          <i className="icon-up-down text-14 mr-10" />
          Sort
        </button>
      </div>
      {/* End .col */}
    </>
  );
};

export default TopHeaderFilter;
