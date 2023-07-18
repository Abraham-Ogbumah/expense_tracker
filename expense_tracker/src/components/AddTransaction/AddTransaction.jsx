import { useState } from "react";


const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount ] = useState("");
  return (
    <>
      <h3 className="sub-header">Add Transaction</h3>
      <hr></hr>
      <div className="form">
      <form>
        <div>
          <label htmlFor="text" className="label">Text</label>
          <input name="text" value={text} type="text" placeholder="Enter description" className="input" onChange={(e) => setText(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label htmlFor="amount" className="label">Amount</label>
          <input name="amount" value={amount} type="text" placeholder="Enter Amount" className="input"/>
        </div>
        <br />
        <input type="submit" value="Add Transaction" className="submit"/>
      </form>
      </div>
    </>
  )
}

export default AddTransaction;
