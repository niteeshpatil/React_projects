import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "User_Input")
    return { value: action.val, isValid: action.val.includes("@") };
  if (action.type === "Input_Blur") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: null };
};

const passwordReducer = (state, action) => {
  if (action.type === "User_Input")
    return { value: action.val, isValid: action.val.trim().length > 6 };
  if (action.type === "Input_Blur") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: null };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();

  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   setFormIsValid(
  //     enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //   );
  // }, []);
  //only rune once above code

  const [emileState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // useEffect(() => {
  //   console.log("Effect Running");

  //   return () => {
  //     console.log("EFFect cleanup");
  //   };
  // }, []);

  const { isValid: emailIsValid } = emileState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const idetifier = setTimeout(() => {
      // console.log("cheking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      // console.log("cleanup!");
      clearTimeout(idetifier);
    };
    // return runs before sideeffect funtion
  }, [emailIsValid, passwordIsValid]);

  //above code run when there is change in enteredEmail,enteredPassword changes;

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "User_Input", val: event.target.value });

    // setFormIsValid(emileState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "User_Input", val: event.target.value });

    // setFormIsValid(passwordState.isValid && emileState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "Input_Blur" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "Input_Blur" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authctx.onLogin(emileState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.activate();
    } else {
      passwordInputRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emileState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>

        <Input
          ref={passwordInputRef}
          id="Password"
          label="Password"
          type="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
