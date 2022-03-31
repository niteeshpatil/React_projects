import React, { useState } from "react";
import "./MultiExpence.css";

import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Expenseslist from "./Expenseslist";

const MultiExpence = (props) => {
  const [Year, setYear] = useState("2020");

  const YearValue = function (passedYear) {
    setYear(passedYear);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === Year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearValue={YearValue}></ExpensesFilter>
        <Expenseslist items={filterdExpenses}></Expenseslist>
      </Card>
    </div>
  );
};

export default MultiExpence;
