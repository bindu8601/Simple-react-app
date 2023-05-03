import React from "react";
import "./userlist.css";
export const UserList = (props) => {
  return (
    <div className="userlist">
      <ul>
        {props.users.map((user) => (
          <li className="li" key={user.id}>
            {user.name} ({user.age} year old)
          </li>
        ))}
      </ul>
    </div>
  );
};
