import React, { useState } from 'react';

function AddUser(){
  const[UserName,setUserName]=useState("");
  const[Age,setAge]=useState("")
  
    function addUserHandler(event){
      event.preventDefault();
      setUserName("");
      setAge("")
    }
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
  <input type="text" id="username" />

  <label htmlFor="age">Age</label>
  <input type="number" id="age" />
      <button type="submit">Add User</button>
    </form>
      )
}

export default AddUser;