const Surroundings = () => {
  const surroundingsContent = [
    {
      id: 1,
      items: [
        {
          id: 1,
          title: "What's nearby",
          icon: "icon-nearby",
          list: [
            { name: "Royal Pump Room Museum", distance: "0.1" },
            { name: "Harrogate Turkish Baths", distance: "0.1" },
            { name: "Royal Hall Theatre", distance: "0.1" },
            { name: "Harrogate Theatre", distance: "0.1" },
            { name: "Harrogate Library", distance: "0.1" },
            { name: "The Valley Gardens", distance: "0.1" },
            { name: "Harrogate District Hospital", distance: "0.1" },
          ],
        },
      ],
    },

    {
      id: 2,
      items: [
        {
          id: 1,
          title: "Closest airports",
          icon: "icon-airplane",
          list: [
            {
              name: "Leeds Bradford International Airport",
              distance: "57.9",
            },
            { name: "Durham Tees Valley Airport", distance: "57.9" },
            { name: "Doncaster Sheffield Airport", distance: "57.9" },
          ],
        },
        {
          id: 2,
          title: "Restaurants & cafes",
          icon: "icon-food",
          list: [
            { name: "Cafe/bar Bettys Café Tea Rooms", distance: "57.9" },
            { name: "Cafe/bar Bettys Café Tea Rooms", distance: "57.9" },
          ],
        },
      ],
    },

    {
      id: 3,
      items: [
        {
          id: 1,
          title: "Top attractions",
          icon: "icon-ticket",
          list: [
            { name: "Ripley Castle", distance: "57.9" },
            { name: "Roundhay Park", distance: "57.9" },
            { name: "Bramham Park", distance: "57.9" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {surroundingsContent.map((item) => (
        <div className="col-lg-4 col-md-6 " key={item.id}>
          {item?.items?.map((single) => (
            <div className="mb-40 md:mb-30" key={single.id}>
              <div className="d-flex items-center mb-20">
                <i className="icon-nearby text-20 mr-10"></i>
                <div className="text-16 fw-500">{single.title}</div>
              </div>

              <div className="row y-gap-20 x-gap-0 pt-10">
                {single?.list?.map((val, i) => (
                  <div className="col-12 border-top-light" key={i}>
                    <div className="row items-center justify-between">
                      <div className="col-auto">
                        <div className="text-15">{val.name}</div>
                      </div>

                      <div className="col-auto">
                        <div className="text-15 text-right">
                          {val.distance} km
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Surroundings;
