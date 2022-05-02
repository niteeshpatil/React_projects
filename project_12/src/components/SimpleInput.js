import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enterdname, setEnterName] = useState("");
  const [enterdnameisvalid, setEnterNameIsValid] = useState(false);
  const [enterdnameistoched, setEnterNameIsToched] = useState(false);
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
    if (enterdname.trim() !== "") {
      setEnterNameIsValid(true);
      return;
    }
  };

  const nameINputBlurHandler = (event) => {
    setEnterNameIsToched(true);

    if (enterdname.trim() === "") {
      setEnterNameIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnterNameIsToched(true);

    if (enterdname.trim() === "") {
      setEnterNameIsValid(false);
      return;
    }
    setEnterNameIsValid(true);
    console.log(enterdname);
    setEnterName("");
  };

  const nameInputIsvalid = !enterdnameisvalid && enterdnameistoched;

  const nameInputClasses = nameInputIsvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameINputBlurHandler}
          value={enterdname}
        />
        {nameInputIsvalid && <p className="error-text">Name not be empty..</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
