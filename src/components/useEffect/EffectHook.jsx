import React, { useEffect, useState } from "react";
import "./effectHook.css";
import axios from "axios";

const EffectHook = () => {
  const [showHook, setShowHook] = useState(false);

  const [usersData, setUsersData] = useState([]);
  const showComponent = () => {
    setShowHook(!showHook);
  };

  useEffect(() => {
    console.log("Coming in the useEffect Hook");
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsersData(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <button className="button" onClick={showComponent}>
          Show useEffect Hook
        </button>
      </div>

      {showHook && (
        <>
          <h1>useEffect Hook</h1>
          <div className="container">
            {usersData.map((user) => (
              <div className="card" key={user.id}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {user.email}
                  </h6>
                  <p className="card-text">{user.company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EffectHook;
