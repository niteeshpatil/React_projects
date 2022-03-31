import React from "react";
import "./MultiExpence.css";
import ExpenseTtem from "./Expenseltem";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
const MultiExpence = (props) => {
  const expenses = props.expense;

  const YearValue = function (passedYear) {
    const Year = passedYear;
    console.log(Year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearValue={YearValue}></ExpensesFilter>
        <ExpenseTtem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseTtem>
        <ExpenseTtem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseTtem>
        <ExpenseTtem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseTtem>
        <ExpenseTtem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseTtem>
      </Card>
    </div>
  );
};

export default MultiExpence;
