import { useState } from "react";

const DropdownSelectBar = () => {
  const [plcaeValue, setPlaceValue] = useState("Type of Place");
  const [priceValue, setPriceValue] = useState("Price");
  const [amenitiesValue, setAmenitiesValue] = useState("Amenities");

  const handlePlaceValueChange = (value) => {
    setPlaceValue(value);
  };

  const handlePriceValueChange = (value) => {
    setPriceValue(value);
  };

  const handleAmenitesValueChange = (value) => {
    setAmenitiesValue(value);
  };

  const dropdowns = [
    {
      title: "Type of Place",
      value: plcaeValue,
      options: ["Desert", "Mountains", "Ocean"],
      onChange: handlePlaceValueChange,
    },
    {
      title: "Price",
      value: priceValue,
      options: ["Less than $500", "$500 - $1000", "$1000 - $2000", "$2000+"],
      onChange: handlePriceValueChange,
    },
    {
      title: "Amenities",
      value: amenitiesValue,
      options: ["Swimming pool", "Laundry", "Outdoor spaces", "Security"],
      onChange: handleAmenitesValueChange,
    },
  ];

  // for rating code
  const [activeRating, setActiveRating] = useState(0);

  const handleRatingClick = (rating) => {
    setActiveRating(rating);
  };

  return (
    <>
      {dropdowns.map((dropdown, index) => (
        <div className="col-auto" key={index}>
          <div className="dropdown js-dropdown js-amenities-active">
            <div
              className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              data-bs-offset="0,10"
            >
              <span className="js-dropdown-title">{dropdown.value}</span>
              <i className="icon icon-chevron-sm-down text-7 ml-10" />
            </div>
            {/* End dropdown__button */}

            <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
              <div className="text-15 y-gap-15 js-dropdown-list">
                {dropdown.options.map((item, index) => (
                  <div key={index}>
                    <button
                      className={`${
                        item === dropdown.value ? "text-blue-1 " : ""
                      }d-block js-dropdown-link`}
                      onClick={() => dropdown.onChange(item)}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* End dropdown-menu */}
          </div>
          {/* End dropdown */}
        </div>
      ))}

      <div className="col-auto">
        <div className="relative js-form-dd">
          <button
            className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-100 border-light -dd-button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            {activeRating === 0 ? "Star Rating" : activeRating + " Star Rating"}
            <i className="icon icon-chevron-sm-down text-7 ml-15" />
          </button>

          <div className="dropRating dropdown-menu">
            <div className="px-20 py-20 rounded-4 bg-white border-light">
              <h5 className="text-18 fw-500 mb-10">Guest Rating</h5>
              <div className="row x-gap-10 y-gap-10 pt-10">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <div className="col-auto" key={rating}>
                    <button
                      className={`button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20 rounded-100 ${
                        activeRating === rating ? "active" : ""
                      }`}
                      onClick={() => handleRatingClick(rating)}
                    >
                      {rating}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .col-auto */}
    </>
  );
};

export default DropdownSelectBar;
