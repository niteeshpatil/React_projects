import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModule";
import Wrapper from "../Helpers/Wrappar";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enteredage = ageInputRef.current.value;

    if (enterdName.trim().length === 0 || enteredage.trim().length === 0) {
      setError({
        title: "Invalid input",
        meassage: "Please enter valid name and age",
      });
      return;
    }

    if (+enteredage < 1) {
      setError({
        title: "Invalid age",
        meassage: "Please enter a valid age",
      });
      return;
    }

    props.onAddUser(enterdName, enteredage);
    console.log(enterdName, enteredage);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // rearely use this above method or use sate based method
  };

  const errorHandeler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="text" ref={ageInputRef}></input>
          <Button type="submit">ADD</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
