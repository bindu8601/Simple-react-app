import React, { useState } from "react";
import Adduser from "./components/UI/Users/AddUser";
import { UserList } from "./components/UI/Users/Userslist";


function App() {
  const [usersList, setUserlist] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserlist((prevUserlist) => {
      return [
        ...prevUserlist,
        { name: uName, age: uAge, id: Math.random().toString },
      ];
    });
  };
  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
