import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };

    case "INPUT_CHANGE":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, inputValue: "" });

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleChange = (e) => {
    dispatch({ type: "INPUT_CHANGE", payload: e.target.value });
  };

  const decrement = () => {
    if (state.counter > 0) {
      dispatch({ type: "DECREMENT" });
    }
  };
  return (
    <>
      <h1>useReducer Hook</h1>
      <div>{state.counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <input type="text" placeholder="Enter anything" onChange={handleChange} />
      {state.inputValue && <div>{state.inputValue}</div>}
    </>
  );
};

export default ReducerHook;
