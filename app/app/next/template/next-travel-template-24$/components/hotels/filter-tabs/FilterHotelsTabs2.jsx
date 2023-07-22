import { useState } from "react";

const FilterHotelsTabs2 = () => {
  const [filterOption, setFilterOption] = useState("new_york");

  const filterOptions = [
    { label: "New York", value: "new_york" },
    { label: "London", value: "london" },
    { label: "Paris", value: "paris" },
    { label: "Istanbul", value: "istanbul" },
    // add more options as needed
  ];

  return (
    <div className="tabs__controls row x-gap-15 justify-center js-tabs-controls">
      {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 ${
              filterOption === option.value ? "is-tab-el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterHotelsTabs2;
