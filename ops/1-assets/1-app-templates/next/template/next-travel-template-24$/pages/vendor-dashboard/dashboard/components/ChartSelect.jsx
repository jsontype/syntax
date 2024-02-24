import { useState } from "react";

const ChartSelect = () => {
  const options = [
    "This Week",
    "Animation",
    "Design",
    "Illustration",
    "Business",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="dropdown js-dropdown js-category-active">
      <div
        className="dropdown__button d-flex items-center bg-white border-light rounded-100 px-15 py-10 text-14 lh-12"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <span className="js-dropdown-title">{selectedOption}</span>
        <i className="icon icon-chevron-sm-down text-7 ml-10" />
      </div>
      <div className="toggle-element -dropdown  dropdown-menu">
        <div className="text-14 y-gap-15 js-dropdown-list">
          {options.map((option, index) => (
            <div key={index}>
              <button
                className={`d-block js-dropdown-link ${
                  selectedOption === option ? "text-blue-1 " : ""
                }`}
                onClick={() => {
                  setSelectedOption(option);
                  document.querySelector(".js-dropdown-title").textContent =
                    option;
                  // TODO: Apply filter based on selected option
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartSelect;
