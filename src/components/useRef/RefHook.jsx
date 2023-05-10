import React, { useState, useRef } from "react";

const RefHook = () => {
  const [showHook, setShowHook] = useState(false);
  const inputEl = useRef(null);

  const showComponent = () => {
    setShowHook(!showHook);
  };

  const focusInput = () => {
    inputEl.current.focus();
  };
  const clearInput = () => {
    inputEl.current.value = "";
  };

  return (
    <>
      <div>
        <button className="button" onClick={showComponent}>
          Show useRef Hook
        </button>
      </div>

      {showHook && (
        <>
          <h1>Let's play with useRef</h1>

          <input type="text" placeholder="Enter anything" ref={inputEl} />

          <div>
            <button onClick={focusInput} className="button">
              Focus Input
            </button>
            <button className="button" onClick={clearInput}>
              Clear Input
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default RefHook;
