const Brand2 = () => {
  const brandImages = ["1", "2", "3", "4", "5", "6"];
  return (
    <>
      {brandImages.map((item, i) => (
        <div className="col-md-auto col-sm-6" key={i}>
          <div className="d-flex justify-center">
            <img src={`/img/clients/${item}.svg`} alt="image" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Brand2;
