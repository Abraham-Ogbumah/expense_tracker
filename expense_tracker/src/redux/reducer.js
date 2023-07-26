import { ADD_TRANSACTION } from "./actions";

const expenseTrackerReducer = (state = [], action) => {
    if (action.type === ADD_TRANSACTION)
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
    return state;
}

export default expenseTrackerReducer;