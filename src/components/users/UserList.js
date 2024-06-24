import React from "react" ;
import "./UsersList.css";
import Card from "../UI/card";

const UsersList =(props)=>{
  return(
    <Card className="users">
    <ul>
      {props.users.map((user)=>{
      return(<li>
        ${user.name} (${user.age} years old)
      </li>)
      })}
    </ul>
    </Card>
  )
}
export default UsersList;