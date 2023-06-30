import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  return (
    <div className="userCard">
      <h1>CountFuntion = {count}</h1>
      <h3>{name}</h3>
      <h3>{location}</h3>
    </div>
  );
};

export default User;
