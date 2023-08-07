import { createStore } from "redux";
import expenseTrackerReducer from "./reducer";
import { addTransaction } from "./actions";

let store = createStore(expenseTrackerReducer)

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTransaction())

unsubscribe()