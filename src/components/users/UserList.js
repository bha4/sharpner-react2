import React from "react";
import Card from "../UI/card";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <Card className="users">
         <ul>
      {props.users.length === 0 }
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>

    </Card>
  );
};

export default UsersList;
