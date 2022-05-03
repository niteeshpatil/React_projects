import { useState } from "react";
import validator from "validator";

const SimpleInput = (props) => {
  const [enterdname, setEnterName] = useState("");
  const [enterdnameistoched, setEnterNameIsToched] = useState(false);
  const [enterdemail, setEnterEmail] = useState("");
  const [enterdemailistoched, setEnterEmailIsToched] = useState(false);

  const enterdnameisvalid = enterdname.trim() !== "";
  const nameInputIsvalid = !enterdnameisvalid && enterdnameistoched;

  const enterdemailisvalid =
    validator.isEmail(enterdemail) && enterdemail.trim() !== "";
  const emailInputIsvalid = !enterdemailisvalid && enterdemailistoched;

  let formIsValid = false;

  if (enterdnameisvalid && enterdemailisvalid) formIsValid = true;

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnterEmail(event.target.value);
  };

  const nameINputBlurHandler = (event) => {
    setEnterNameIsToched(true);
  };

  const emailINputBlurHandler = (event) => {
    setEnterEmailIsToched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnterNameIsToched(true);
    setEnterEmailIsToched(true);

    if (!enterdnameisvalid && !enterdemailisvalid) {
      return;
    }
    console.log(enterdname);
    console.log(enterdemail);
    setEnterName("");
    setEnterEmail("");
    setEnterNameIsToched(false);
    setEnterEmailIsToched(false);
  };

  const nameInputClasses = nameInputIsvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsvalid
    ? "form-control invalid"
    : "form-control";
  let emailerror = "";
  if (enterdemail.trim() === "" && enterdemailistoched)
    emailerror = <p className="error-text">email not be empty..</p>;
  else if (!enterdemailisvalid && enterdemailistoched) {
    emailerror = <p className="error-text">enter valid email</p>;
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameINputBlurHandler}
          value={enterdname}
        />
        {nameInputIsvalid && <p className="error-text">Name not be empty..</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailINputBlurHandler}
          value={enterdemail}
        />
        {emailerror}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
