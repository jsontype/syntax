const Specifications = () => {
  const speciContent = [
    { id: 1, name: "Make", content: "Honda" },
    { id: 2, name: "Model", content: "Honda" },
    { id: 3, name: "Made Year", content: "2022" },
    { id: 4, name: "Mileage", content: "120,556" },
    { id: 5, name: "Mileage", content: "120,556" },
    { id: 6, name: "Version", content: "2.0 Turbo" },
    { id: 7, name: "Horsepower (hp)", content: "200" },
    { id: 8, name: "Transmission", content: "Auto" },
    { id: 9, name: "Condition", content: "New" },
  ];
  return (
    <div className="row y-gap-30 pt-15">
      {speciContent.map((item) => (
        <div className="col-sm-4" key={item.id}>
          <div className="fw-500">{item.name}</div>
          <div className="text-15">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Specifications;
