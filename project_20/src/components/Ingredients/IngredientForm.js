import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";
import LoadingIndicator from "../UI/LoadingIndicator";

const IngredientForm = React.memo((props) => {
  // const [inputstate, setinputstate] = useState({ title: "", amount: "" });
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredint({ title: title, amount: amount });
  };

  const changetitle = (e) => {
    const newvalue = e.target.value;
    // setinputstate((previnstate) => ({
    //   title: newvalue,
    //   amount: previnstate.amount,
    // }));
    settitle(newvalue);
    // console.log(title);
  };

  const changeamount = (e) => {
    const newvalue = e.target.value;
    // setinputstate((previnstate) => ({
    //   title: previnstate.title,
    //   amount: newvalue,
    // }));
    setamount(newvalue);
    // console.log(amount);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={changetitle}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={changeamount}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator></LoadingIndicator>}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
