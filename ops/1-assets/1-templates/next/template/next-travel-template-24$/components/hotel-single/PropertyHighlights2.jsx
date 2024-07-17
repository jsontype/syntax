const PropertyHighlights2 = () => {
  const highlightsContent = [
    {
      id: 1,
      icon: "icon-city",
      text: `In London City Centre`,
    },
    {
      id: 2,
      icon: "icon-airplane",
      text: `Airport transfer`,
    },
    {
      id: 3,
      icon: "icon-bell-ring",
      text: `Front desk [24-hour]`,
    },
    {
      id: 4,
      icon: "icon-tv",
      text: `Premium TV channels`,
    },
  ];

  return (
    <div className="px-30 py-30 border-light rounded-4 mt-30">
      <div className="text-18 fw-500 pb-30">Property highlights</div>

      {highlightsContent.map((item) => (
        <div className="row x-gap-20 y-gap-20" key={item.id}>
          <div className="col-auto">
            <i className={`${item.icon} text-24 text-blue-1`} />
          </div>
          <div className="col-auto">
            <div className="text-15 ">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights2;
