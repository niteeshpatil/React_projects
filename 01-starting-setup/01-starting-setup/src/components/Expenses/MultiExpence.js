import React, { useState } from "react";
import "./MultiExpence.css";
import ExpenseTtem from "./Expenseltem";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

const MultiExpence = (props) => {
  const [Year, setYear] = useState("2020");

  const YearValue = function (passedYear) {
    setYear(passedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearValue={YearValue}></ExpensesFilter>
        {props.items
          .filter((fexpense) => Year === fexpense.date.getFullYear().toString())
          .map((expense) => (
            <ExpenseTtem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseTtem>
          ))}
      </Card>
    </div>
  );
};

export default MultiExpence;
