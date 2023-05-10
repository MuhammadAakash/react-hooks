import React, { useContext } from "react";
import { UserContext } from "./ContextHook";

const Login = () => {
  const { setUserName } = useContext(UserContext);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
