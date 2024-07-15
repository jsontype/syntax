import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = () => {
  const [dates, setDates] = useState([new DateObject().setDay(5)]);

  return (
    <div className="w-230 single-field relative d-flex items-center ">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker date-input bg-white text-dark-1 h-50 rounded-8 pl-30"
        value={dates}
        onChange={setDates}
        numberOfMonths={1}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />

      <button className="absolute d-flex items-center h-full pointer-events-none">
        <i className="icon-calendar text-20 px-15 text-dark-1" />
      </button>
    </div>
  );
};

export default DateSearch;
