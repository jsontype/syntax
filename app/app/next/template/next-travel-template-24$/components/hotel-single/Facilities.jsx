const Facilities = () => {
  const facilitiesContent = [
    {
      id: 1,
      items: [
        {
          id: 1,
          icon: "icon-bathtub ",
          title: "Bathroom",
          facilities: [
            "Towels",
            "Bath or shower",
            "Private bathroom",
            "Toilet",
            "Free toiletries",
            "Hairdryer",
            "Bath",
          ],
        },
        {
          id: 2,
          icon: "icon-bed ",
          title: "Bedroom",
          facilities: ["Linen", "Wardrobe or closet"],
        },
        {
          id: 3,
          icon: "icon-bell-ring ",
          title: "Reception services",
          facilities: [
            "Invoice provided",
            "Private check-in/check-out",
            "Luggage storage",
            "24-hour front desk",
          ],
        },
      ],
    },

    {
      id: 2,
      items: [
        {
          id: 1,
          icon: "icon-tv",
          title: "Media & Technology",
          facilities: [
            "Flat-screen TV",
            "Satellite channels",
            "Radio",
            "Telephone",
            "TV",
          ],
        },
        {
          id: 2,
          icon: "icon-juice",
          title: "Food & Drink",
          facilities: [
            "Kid meals",
            "Special diet menus (on request)",
            "Breakfast in the room",
            "Bar",
            "Restaurant",
            "Tea/Coffee maker",
          ],
        },
        {
          id: 3,
          icon: "icon-washing-machine",
          title: "Cleaning services",
          facilities: ["Daily housekeeping", "Dry cleaning", "Laundry"],
        },
      ],
    },

    {
      id: 3,
      items: [
        {
          id: 1,
          icon: "icon-shield",
          title: "Safety & security",
          facilities: [
            "Fire extinguishers",
            "CCTV in common areas",
            "Smoke alarms",
            "24-hour security",
          ],
        },
        {
          id: 2,
          icon: "icon-city-2",
          title: "General",
          facilities: [
            "Hypoallergenic",
            "Non-smoking throughout",
            "Wake-up service",
            "Heating",
            "Packed lunches",
            "Carpeted",
            "Lift",
            "Fan",
            "Family rooms",
            "Facilities for disabled guests",
            "Ironing facilities",
            "Non-smoking rooms",
            "Iron",
            "Room service",
          ],
        },
      ],
    },
  ];

  return (
    <>
      {facilitiesContent.map((item) => (
        <div className="col-xl-4" key={item.id}>
          <div className="row y-gap-30">
            {item?.items?.map((facility) => (
              <div className="col-12" key={facility.id}>
                <div>
                  <div className="d-flex items-center text-16 fw-500">
                    <i className={`${facility.icon} text-20 mr-10`} />
                    {facility.title}
                  </div>
                  <ul className="text-15 pt-10">
                    {facility?.facilities?.map((val, i) => (
                      <li className="d-flex items-center" key={i}>
                        <i className="icon-check text-10 mr-20" />
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Facilities;
