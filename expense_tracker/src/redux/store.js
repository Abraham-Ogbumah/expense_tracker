import { createStore } from "redux";
import expenseTrackerReducer from "./reducer";

let store = createStore(expenseTrackerReducer)

const unsubscribe = store.subscribe(() => console.log(store.getState()));

unsubscribe()

export default store;