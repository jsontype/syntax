import { useState } from "react";

const DropdownFilter = () => {
  const [selectedItem, setSelectedItem] = useState("Services");

  const handleItemClick = (event) => {
    setSelectedItem(event.target.textContent);
  };

  const options = [
    "Services",
    "Animation",
    "Design",
    "Illustration",
    "Lifestyle",
    "Business",
  ];

  return (
    <div className="dropdown js-dropdown js-services-active">
      <div
        className="dropdown__button d-flex items-center justify-between bg-white rounded-4 w-230 text-14 px-20 h-50 text-14"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <span className="js-dropdown-title">{selectedItem}</span>
        <i className="icon icon-chevron-sm-down text-7 ml-10" />
      </div>
      <div className="toggle-element -dropdown  dropdown-menu">
        <div className="text-14 y-gap-15 js-dropdown-list">
          {options.map((option, index) => (
            <div
              key={index}
              className={`${
                selectedItem === option ? "text-blue-1" : ""
              } js-dropdown-link`}
              onClick={handleItemClick}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownFilter;
