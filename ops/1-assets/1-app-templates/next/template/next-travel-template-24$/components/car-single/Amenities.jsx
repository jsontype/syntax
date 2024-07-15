const Amenities = () => {
  const amenitiesContent = [
    { id: 1, name: "Airbag" },
    { id: 2, name: "FM Radio" },
    { id: 3, name: "Power Windows" },
    { id: 4, name: "Sensor" },
    { id: 5, name: "Speed Km" },
    { id: 6, name: "Steering Wheel" },
  ];
  return (
    <>
      <div className="row y-gap-10 pt-15">
        {amenitiesContent.map((item) => (
          <div className="col-sm-5" key={item.id}>
            <div className="d-flex items-center">
              <i className="icon-check text-10 mr-15" />
              <div className="text-15">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Amenities;
