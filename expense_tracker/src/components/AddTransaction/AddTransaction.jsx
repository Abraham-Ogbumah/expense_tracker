

const AddTransaction = () => {
  return (
    <>
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
