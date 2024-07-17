const attractionsData = [
  { name: "Tours", count: 92 },
  { name: "Attractions", count: 45 },
  { name: "Day Trips", count: 21 },
  { name: "Outdoor Activities", count: 78 },
  { name: "Concerts & Shows", count: 679 },
];

const PopularAttractions = () => {
  return (
    <>
      {attractionsData.map((attraction) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={attraction.name}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{attraction.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{attraction.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularAttractions;
