import { Add_Transaction } from "./actions";

const expenseTrackerReducer = (state = [], action) => {
    if (action.type === Add_Transaction)
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
    return state;
}

export default expenseTrackerReducer;