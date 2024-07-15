const Amenities = () => {
  const amenitiesContent = [
    { id: 1, icon: "icon-no-smoke", name: "Non-smoking rooms" },
    { id: 2, icon: "icon-wifi", name: "Free WiFi" },
    { id: 3, icon: "icon-parking", name: "Parking" },
    { id: 4, icon: "icon-kitchen", name: "Kitchen" },
    { id: 5, icon: "icon-living-room", name: "Living Area" },
    { id: 6, icon: "icon-shield", name: "Safety & security" },
    { id: 7, icon: "icon-tv", name: "Media & Technology" },
    { id: 8, icon: "icon-food", name: "Food & Drink" },
    { id: 9, icon: "icon-bell-ring", name: "Reception Services" },
    { id: 10, icon: "icon-washing-machine", name: "Cleaning Services" },
  ];
  return (
    <>
      <div className="row y-gap-15 pt-15">
        {amenitiesContent.map((item) => (
          <div className="col-sm-5" key={item.id}>
            <div className="d-flex items-center">
              <i className={`${item.icon} text-20 mr-10`} />
              <div className="text-15">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Amenities;
