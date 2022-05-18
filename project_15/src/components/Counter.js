import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // dispactch an action agenest store
  const counter = useSelector((state) => state.counter);
  //funtion determin which freacher we want to extreact
  // auto changing when

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const derementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={derementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
