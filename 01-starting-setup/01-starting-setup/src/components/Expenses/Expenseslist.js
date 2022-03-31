import React from "react";

import ExpenseTtem from "./Expenseltem";

import "./Expenseslist.css";

const Expenseslist = (props) => {
  let expenceContent = (
    <h2 className="expenses-list__fallback">No expenses found</h2>
  );

  if (props.items.length > 0) {
    expenceContent = props.items.map((expense) => (
      <li>
        <ExpenseTtem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseTtem>
      </li>
    ));
  }
  return <uL className="expenses-list">{expenceContent}</uL>;
};

export default Expenseslist;
