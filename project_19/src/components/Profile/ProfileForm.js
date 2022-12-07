import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
const ProfileForm = () => {
  const history = useHistory();
  const newpass = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();

    const newpasstoset = newpass.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDkQZ3ZaXVLmfOMBc7affkhGNxy8pFMu7U",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newpasstoset,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assumption: Always succeeds!

      // console.log(res);
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password" ref={newpass}>
          New Password
        </label>
        <input type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
