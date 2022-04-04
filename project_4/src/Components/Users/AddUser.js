import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModule";

const AddUser = (props) => {
  const [enterUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnterdAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enterUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        meassage: "Please enter valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        meassage: "Please enter a valid age",
      });
      return;
    }

    props.onAddUser(enterUsername, enteredAge);
    console.log(enterUsername, enteredAge);
    setEnterdAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterdAge(event.target.value);
  };

  const errorHandeler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          meassage={error.meassage}
          onConfirm={errorHandeler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enterUsername}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">ADD</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
