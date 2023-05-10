import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const UserContext = createContext(null);

const ContextHook = () => {
  const [username, setUserName] = useState("");
  const [showHook, setShowHook] = useState(false);
  const showComponent = () => {
    setShowHook(!showHook);
  };

  return (
    <>
      <div>
        <button className="button" onClick={showComponent}>
          Show useContext Hook
        </button>
      </div>

      {showHook && (
        <UserContext.Provider value={{ username, setUserName }}>
          <Login />
          <User />
        </UserContext.Provider>
      )}
    </>
  );
};

export default ContextHook;
