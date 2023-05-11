import React, { useCallback, useState } from "react";

const CallbackHook = () => {
  const [data, setData] = useState("This is just a simple data");
  const [showHook, setShowHook] = useState(false);

  const showComponent = () => {
    setShowHook(!showHook);
  };

  const changeData = useCallback(
    (updatedData) => {
      return data + " " + updatedData;
    },
    [data]
  );
  return (
    <>
      <div>
        <button className="button" onClick={showComponent}>
          {showHook ? "Hide" : "Show"} useCallback Hook
        </button>
      </div>

      {showHook && (
        <>
          <h1>useCallback Hook</h1>
          {changeData("from useCallback Hook")}
        </>
      )}
    </>
  );
};

export default CallbackHook;
