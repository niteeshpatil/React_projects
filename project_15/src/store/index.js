// import { createStore } from "redux";
// configureStore is same as createStore but marging multipale reducers in one reduser
import { createSlice, configureStore } from "@reduxjs/toolkit";

// never manipulate existing state but overwrite with new state

const initialState = { counter: 0, showCounter: true };

const createdSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
      // @reduxjs/toolkit will create new object for thise updated state
      // but this sholud not be done normal metheads
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
  // reducres is object map
});

const CounterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

// const store = createStore(CounterReducer);
const store = configureStore({
  reducer: createdSlice.reducer,
});

export const counterActions = createdSlice.actions;

export default store;
