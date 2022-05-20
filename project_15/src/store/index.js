// import { createStore } from "redux";
// configureStore is same as createStore but marging multipale reducers in one reduser
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import CounterReducer from "./counter-slice";

// never manipulate existing state but overwrite with new state

// const CounterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(CounterReducer);

const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: { counter: CounterReducer, auth: authReducer },
  // this two reducers are combined to form one resucer
});

export default store;
