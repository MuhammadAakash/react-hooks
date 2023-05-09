import React, { useState } from "react";

const StateHook = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const increment = () => {
    setCounter(counter + 1);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>useState Hook</h1>
      <div>{counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <input type="text" placeholder="Enter anything" onChange={handleChange} />
      {inputValue && <div>{inputValue}</div>}
    </>
  );
};

export default StateHook;
