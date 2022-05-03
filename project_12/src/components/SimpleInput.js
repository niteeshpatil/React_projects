import validator from "validator";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterdemail,
    isValid: enterdemailisvalid,
    isTouched: enterdemailistoched,
    hasError: emailInputIsvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => validator.isEmail(value) && value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enterdemailisvalid) formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();

    if (!formIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enterdemail);
  };

  const nameInputClasses = nameInputHasError
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
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name not be empty..</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
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
