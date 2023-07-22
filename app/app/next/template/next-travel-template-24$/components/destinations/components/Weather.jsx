const Weather = () => {
  const weatherContent = [
    {
      id: 1,
      month: "DEC - FEB",
      highestTemperature: "7°",
      lowestTemperature: "3°",
    },
    {
      id: 2,
      month: "MAR - MAY",
      highestTemperature: " 17°",
      lowestTemperature: "3°",
    },
    {
      id: 3,
      month: "JUN - AUG",
      highestTemperature: " 27°",
      lowestTemperature: "3°",
    },
    {
      id: 4,
      month: "SEP - NOV",
      highestTemperature: "7°",
      lowestTemperature: "3°",
    },
  ];

  return (
    <>
      {weatherContent.map((item) => (
        <div className="col-xl-3 col-6" key={item.id}>
          <div className="text-15 lh-1 fw-500">{item.date}</div>
          <div className="text-22 fw-500 mt-10">
            {item.highestTemperature}{" "}
            <span className="text-light-1 ml-15">{item.lowestTemperature}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Weather;
