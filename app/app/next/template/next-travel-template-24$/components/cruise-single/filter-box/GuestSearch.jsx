import React, { useState } from "react";
const counters = [
  { name: "Adults", defaultValue: 1 },
  { name: "Children", defaultValue: 0 },
  { name: "Rooms", defaultValue: 1 },
];

const Counter = ({ name, defaultValue, onCounterChange }) => {
  const [count, setCount] = useState(defaultValue);
  const incrementCount = () => {
    setCount(count + 1);
    onCounterChange(name, count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      onCounterChange(name, count - 1);
    }
  };

  return (
    <div>
      <div className="row y-gap-10 justify-between items-center">
        <div className="col-auto">
          <div className="text-15 lh-12 fw-500">{name}</div>
          {name === "Children" && (
            <div className="text-14 lh-12 text-light-1 mt-5">Ages 0 - 17</div>
          )}
        </div>
        {/* End .col-auto */}
        <div className="col-auto">
          <div className="d-flex items-center js-counter">
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"
              onClick={decrementCount}
            >
              <i className="icon-minus text-12" />
            </button>
            {/* decrement button */}
            <div className="flex-center size-20 ml-15 mr-15">
              <div className="text-15 js-count">{count}</div>
            </div>
            {/* counter text  */}
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"
              onClick={incrementCount}
            >
              <i className="icon-plus text-12" />
            </button>
            {/* increment button */}
          </div>
        </div>
        {/* End .col-auto */}
      </div>
      {/* End .row */} <div className="border-top-light mt-24 mb-24" />
    </div>
  );
};

const GuestSearch = () => {
  const [guestCounts, setGuestCounts] = useState({
    Adults: 1,
    Children: 0,
    Rooms: 1,
  });
  const handleCounterChange = (name, value) => {
    setGuestCounts((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="bg-white px-30 py-20 rounded-4">
      {counters.map((counter) => (
        <Counter
          key={counter.name}
          name={counter.name}
          defaultValue={counter.defaultValue}
          onCounterChange={handleCounterChange}
        />
      ))}
      <div>
        <strong>Counts:</strong> Adults - {guestCounts.Adults}, Children -{" "}
        {guestCounts.Children}, Rooms - {guestCounts.Rooms}
      </div>
    </div>
  );
};
export default GuestSearch;
