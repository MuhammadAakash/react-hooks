import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const LayoutEffect = () => {
  const [showHook, setShowHook] = useState(false);
  const inputEl = useRef(null);

  const showComponent = () => {
    setShowHook(!showHook);
  };

  useLayoutEffect(() => {
    if (showHook) {
      console.log(inputEl.current.value);
    }
  });

  useEffect(() => {
    if (showHook) {
      inputEl.current.value =
        "This time Hello again to the World! from useEffect";
    }
  });
  return (
    <>
      <div>
        <button className="button" onClick={showComponent}>
          {showHook ? "Hide" : "Show"} useLayout Hook
        </button>
      </div>

      {showHook && (
        <>
          <div>useLayout Effect</div>
          <input
            type="text"
            className="inputField"
            value="Hello World!"
            ref={inputEl}
          />
        </>
      )}
    </>
  );
};

export default LayoutEffect;
