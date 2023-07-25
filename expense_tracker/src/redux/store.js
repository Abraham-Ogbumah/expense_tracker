import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerReducer from "./reducer";

const store = configureStore(expenseTrackerReducer);

export default store;