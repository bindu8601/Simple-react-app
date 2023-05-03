import React, { useState } from "react";
import "./style.css";
import Modal from "antd/es/modal/Modal";
const Adduser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);
  const Adduserhandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name and age (non-empty values).",
      });
      setVisible(true);
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "please enter a valid age.",
      });
      setVisible(true);
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setAge("");
    setUsername("");
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const handleclose = () => {
    setVisible(false);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          visible={visible}
          onOk={handleclose}
          onCancel={handleclose}
        >
          {error.message}
        </Modal>
      )}
      <div className="card">
        <form onSubmit={Adduserhandler}>
          <label htmlFor="username">UserName</label>
          <input
            value={enteredUsername}
            onChange={usernameHandler}
            className="username"
            id="username"
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredAge}
            onChange={ageHandler}
            className="age"
            type="number"
            id="age"
          />
          <button className="submit" type="submit">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
export default Adduser;
