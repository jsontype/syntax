import { useState } from "react";

const ActionsButton = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filters = [
    { label: "All", value: "all" },
    { label: "Details", value: "details" },
    { label: "Invoice", value: "invoice" },
    { label: "Confirm", value: "confirm" },
    { label: "Cancel", value: "cancel" },
  ];

  return (
    <div className="dropdown js-dropdown js-actions-1-active">
      <div
        className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <span className="js-dropdown-title">
          {activeFilter === "all"
            ? "Actions"
            : filters.find((f) => f.value === activeFilter)?.label}
        </span>
        <i className="icon icon-chevron-sm-down text-7 ml-10" />
      </div>
      <div className="toggle-element -dropdown-2 js-click-dropdown dropdown-menu">
        <div className="text-14 fw-500 js-dropdown-list">
          {filters.map((filter) => (
            <div key={filter.value}>
              <button
                className={`d-block js-dropdown-link ${
                  activeFilter === filter.value ? "text-blue-1" : ""
                }`}
                onClick={() => handleFilterClick(filter.value)}
              >
                {filter.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionsButton;
