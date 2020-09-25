import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import useExchange from "./hooks/useExchange";

function App() {
  const { realValue } = useExchange("USD");
  return (
    <div className="App">
      <div className="AppContainer">
        <Counter />
        <div className="Exchange">{`1 USD = ${realValue.toFixed(2)} BRL`}</div>
      </div>
    </div>
  );
}

export default App;
