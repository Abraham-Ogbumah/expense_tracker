import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerReducer from "./reducer";

const store = configureStore({
  reducer: {expenseTrackerReducer},
});

export default store;