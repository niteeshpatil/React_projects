import classes from "./MealItem.module.css";
import MealItemFrom from "./MealItemForm";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.descripstion}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom ></MealItemFrom>
      </div>
    </li>
  );
};

export default MealItem;
