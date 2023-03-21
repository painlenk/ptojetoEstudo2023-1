import { useEffect, useState } from "react";

type name = {
  firstName: string;
  age: number;
};

interface INameList {
  names: name[];
}

const namesMock: name[] = [
  { firstName: "leonardo", age: 25 },
  { firstName: "gabi", age: 23 },
];

const NameList = () => {
  const [userData, setUserData] = useState<name[]>([]);

  useEffect(() => {
    if (userData.length === 0) {
      setUserData(namesMock);
    }
  }, [namesMock, userData]);

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

export default NameList;
