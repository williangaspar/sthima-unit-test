import React from "react";
import "./counter.style.css";
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "./counter.duck";
import { ApplicationState } from "../../store/store";

const Counter: React.FC<any> = () => {
  const dispatch = useDispatch();

  const { value } = useSelector((state: ApplicationState) => state.counter);

  const onClick = (value: number) => {
    dispatch(setCounter(value));
  };
  return (
    <div className="Container">
      <button className="CounterButton" data-testid="minus-btn" onClick={() => onClick(-1)}>
        -
      </button>
      <div className="NumberContainer" data-testid="value">
        {value}
      </div>
      <button className="CounterButton" data-testid="plus-btn" onClick={() => onClick(1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
