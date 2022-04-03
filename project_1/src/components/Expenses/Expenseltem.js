import React, { useState } from "react";

import "./Expenseltem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenceDate";

const ExpenseTtem = (props) => {
  const [expenseTitle, setexpenseTitle] = useState(props.title);

  const expenseprice = props.amount;

  const clickHandler = () => {
    setexpenseTitle("update!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseprice}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseTtem;
