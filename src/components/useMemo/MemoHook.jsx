import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const MemoHook = () => {
  const [usersData, setUsersData] = useState([]);
  const [showHook, setShowHook] = useState(false);
  const showComponent = () => {
    setShowHook(!showHook);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsersData(res.data);
    });
  }, []);

  const findLargestName = (names) => {
    if (!names || names.length === 0) return undefined;
    let longestName = "";
    for (let i = 0; i < names.length; i++) {
      if (names[i].name.length > longestName.length) {
        longestName = names[i].name;
      }
    }
    return longestName;
  };

  const getTheLongestName = useMemo(
    () => findLargestName(usersData),
    [usersData]
  );

  return (
    <>
      <div>
        <button className="button" onClick={showComponent}>
          {showHook ? "Hide" : "Show"} useMemo Hook
        </button>
      </div>

      {showHook && (
        <div>
          <h1>useMemo Hook</h1>
          <p>{getTheLongestName}</p>
        </div>
      )}
    </>
  );
};

export default MemoHook;
