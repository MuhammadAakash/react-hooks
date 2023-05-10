import React, { useContext } from "react";
import { UserContext } from "./ContextHook";

const User = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h1>User is : {username}</h1>
    </div>
  );
};

export default User;
