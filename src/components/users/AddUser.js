import React,{useState} from "react";
import Card from "../UI/card";
import Button from "../UI/Button";
import "./AddUser.css";
const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const nameHandleChange = (event) => {
    setUserName(event.target.value)
  };
   const ageHandleChange = (event) => {
    setAge(event.target.value)
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const details = {
      userName: userName,
      age: age
    };
    console.log(details.userName,details.age);
    setUserName("");
    setAge("");
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="name" 
          value={userName}
          onChange={nameHandleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={ageHandleChange}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;