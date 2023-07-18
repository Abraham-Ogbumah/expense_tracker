

const AddTransaction = () => {
  return (
    <>
      <h3 className="sub-header">Add Transaction</h3>
      <hr></hr>
      <div className="form">
      <form>
        <div>
          <label htmlFor="title" className="label">Text</label>
          <input id="title" name="name" type="text" placeholder="Enter description" className="input"/>
        </div>
        <br/>
        <div>
          <label htmlFor="amount" className="label">Amount</label>
          <input type="text" placeholder="Enter Amount" className="input"/>
        </div>
        <br />
        <input type="submit" value="Add Transaction" className="submit"/>
      </form>
      </div>
    </>
  )
}

export default AddTransaction;
