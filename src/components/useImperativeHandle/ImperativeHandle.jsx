import React, { useRef, useState } from "react";
import Button from "./Button";

const ImperativeHandle = () => {
  const buttonRef = useRef(null);
  const [showHook, setShowHook] = useState(false);
  const showComponent = () => {
    setShowHook(!showHook);
  };

  const handleChildState = () => {
    buttonRef.current.showToggleFromParent();
  };
  return (
    <>
      <div>
        <button className="button" onClick={showComponent}>
          {showHook ? "Hide" : "Show"} useImperativeHandle Hook
        </button>
      </div>

      {showHook && (
        <>
          <div>
            <h1>useImperativeHandle</h1>
          </div>
          <div>
            <button className="button" onClick={handleChildState}>
              Parent Button
            </button>
            <Button ref={buttonRef} />
          </div>
        </>
      )}
    </>
  );
};
export default ImperativeHandle;
