import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    showToggleFromParent() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <div>
        <button ref={ref} className="button">
          Child Button
        </button>
      </div>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
