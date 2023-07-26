
const Balance = ({ transactions = []}) => {
    const amount = transactions.map((transaction) => Number(transaction.amount))
    const total = amount.reduce((acc, item) => acc + item, 0);

  return (
    <>
        <header className="header">
            <h1 >Expense Tracker</h1>
        </header>
        <div className="your-balance">
            <h3 className="your-balance_header">Your Balance</h3>
            <h1 className="your-balance_amount">${total}</h1>
        </div>
        <div className="balance">
            <div className="income element">
                <h5 className="income_header bal-header">Income</h5>
                <h3 className="income_amount">$1500</h3>
            </div>
            <div className="vertical-seperator"></div>
            <div className="expense element">
                <h5 className="expense_header bal-header">Expense</h5>
                <h3 className="expense_amount">$1500</h3>
            </div>
        </div>
    </>
  )
}

export default Balance;
