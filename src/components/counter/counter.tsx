import React from "react";
import "./counter.style.css";
const Counter: React.FC<any> = () => {
  return (
    <div className="Container">
      <button className="CounterButton" data-testid="minus-btn">
        -
      </button>
      <div className="NumberContainer" data-testid="value">
        0
      </div>
      <button className="CounterButton" data-testid="plus-btn">
        +
      </button>
    </div>
  );
};

export default Counter;
