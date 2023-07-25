export const Add_Transaction = "Add_Transaction"

export const addTransaction = (transaction) => ({
    type: Add_Transaction,
    payload: transaction
})