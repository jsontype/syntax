import { useState } from "react";

const Dropdown = ({ title, value, options, onChange }) => {
  return (
    <div className="col-auto">
      <div className="dropdown js-dropdown js-amenities-active">
        <div
          className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
          data-bs-offset="0,10"
        >
          <span className="js-dropdown-title">{value}</span>
          <i className="icon icon-chevron-sm-down text-7 ml-10" />
        </div>

        <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
          <div className="text-15 y-gap-15 js-dropdown-list">
            {options.map((item, index) => (
              <div key={index}>
                <button
                  className={`${
                    item === value ? "text-blue-1 " : ""
                  }d-block js-dropdown-link`}
                  onClick={() => onChange(item)}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DropdownItem = ({ dropdowns }) => {
  return (
    <>
      {dropdowns.map((dropdown, index) => (
        <Dropdown key={index} {...dropdown} />
      ))}
    </>
  );
};

const initialDropdowns = [
  {
    title: "Cabin Type",
    value: "Cabin Type",
    options: ["Small", "Medium", "Large"],
  },
  {
    title: "Price",
    value: "Price",
    options: ["Less than $500", "$500 - $1000", "$1000 - $2000", "$2000+"],
  },
  {
    title: "Length",
    value: "Length",
    options: [
      "Less than 16 feet",
      "12 - 26 feet",
      "26 - 40 feet",
      "40 - 65 feet",
    ],
  },
  {
    title: "Cruise Style",
    value: "Cruise Style",
    options: ["Trawler", "Deck boat", "Bay boat"],
  },
];

const DropdownSelelctBar = () => {
  const [dropdowns, setDropdowns] = useState(initialDropdowns);

  const handleDropdownChange = (index, value) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index].value = value;
    setDropdowns(newDropdowns);
  };

  return (
    <DropdownItem
      dropdowns={dropdowns.map((dropdown, index) => ({
        ...dropdown,
        onChange: (value) => handleDropdownChange(index, value),
      }))}
    />
  );
};

export default DropdownSelelctBar;
