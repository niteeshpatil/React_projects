import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // dispactch an action agenest store
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  //funtion determin which freacher we want to extreact
  // auto changing when

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const derementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 2 });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 2</button>
        <button onClick={derementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
