

const AddTransaction = () => {
  return (
    <>
      <h3 className="sub-header">Add Transaction</h3>
      <hr></hr>
      <form>
        <label htmlFor="title">
          <input type="text" placeholder="Income / Expense"/>
        </label>
        <br/>
        <label htmlFor="amount">
          <input type="text" placeholder="Income / Expense"/>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default AddTransaction;
