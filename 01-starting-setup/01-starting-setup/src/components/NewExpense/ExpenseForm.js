import React, { useState } from "react";
import "./ExpenseFrom.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterTitle] = useState("");
  const [enterdAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
  //   const [userInput, setuserInput] = useState({
  //     enterdTitle: "",
  //     enterdAmount: "",
  //     enterDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enterdTitle: event.target.value,
    // });
    // setuserInput((prevState) => {
    //   return { ...prevState, enterdTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enterdAmount: event.target.value,
    // });
    // setuserInput((prevState) => {
    //   return { ...prevState, enterdAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enterdDate: event.target.value,
    // });
    // setuserInput((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            setup="0.01"
            value={enterdAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-03-26"
            value={enterDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expence</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
