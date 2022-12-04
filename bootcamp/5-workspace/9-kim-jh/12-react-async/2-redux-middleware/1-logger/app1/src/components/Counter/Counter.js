import React from "react";
import "./style.css";

export default function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1 className="number">{number}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}
