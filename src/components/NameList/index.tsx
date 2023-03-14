import React, { memo } from "react";
import { useEffect, useState } from "react";

type name = {
  firstName: string;
  age: number;
};

interface INameList {
  names: name[];
}

const NameList = ({ names }: INameList) => {
  const [userData, setUserData] = useState<name[]>([]);

  useEffect(() => {
    if (userData.length === 0) {
      setUserData(names);
    }
  }, [names, userData]);

  const handleClick = () => {
    const newUser = [...userData];
    newUser.forEach((item: name) => item.age++);
    setUserData(newUser);
  };
  return (
    <>
      {userData.map((item) => {
        return (
          <div key={`${item.firstName}${item.age}`}>
            <div>
              <span>Name: </span> {item.firstName} - <span>Age:</span>{" "}
              {item.age}{" "}
            </div>
          </div>
        );
      })}
      <button onClick={handleClick}>Pass one year</button>
    </>
  );
};

export default memo(NameList);
