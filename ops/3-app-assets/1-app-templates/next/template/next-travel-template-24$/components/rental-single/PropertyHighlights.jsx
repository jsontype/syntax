const PropertyHighlights = () => {
  const propertyContent = [
    {
      id: 1,
      icon: "icon-bed",
      name: "Bedrooms",
      content: "5",
    },
    {
      id: 2,
      icon: "icon-bathtub",
      name: "Bathrooms",
      content: "3",
    },
    {
      id: 3,
      icon: "icon-customer",
      name: "Guests",
      content: "11",
    },
    {
      id: 4,
      icon: "icon-day-night",
      name: "Night minimum",
      content: "2",
    },
  ];

  return (
    <div className="row y-gap-30 justify-between pt-20">
      {propertyContent.map((item) => (
        <div className="col-md-auto col-6" key={item.id}>
          <div className="d-flex">
            <i className={`${item.icon} text-22 text-blue-1 mr-10`}></i>
            <div className="text-15 lh-15">
              {item.name}
              <br /> {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights;
