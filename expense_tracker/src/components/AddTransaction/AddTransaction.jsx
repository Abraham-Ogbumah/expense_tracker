import { useState } from "react";


const AddTransaction = ( {id, addTransaction} ) => {

  const [text, setText] = useState("");
  const [amount, setAmount ] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    const newTransaction ={
      id,
      text,
      amount
    }
    addTransaction(newTransaction)
    setText("")
    setAmount(0)
  }

  return (
    <>
      <h3 className="sub-header">Add Transaction</h3>
      <hr></hr>
      <div className="form">
      <form>
        <div>
          <label htmlFor="text" className="label">Text</label>
          <input 
            name="text"
            value={text}
            type="text"
            placeholder="Enter description"
            className="input"
            onChange={(e) => setText(e.target.value)}
          
          />
        </div>

        <br/>
        
        <div>
          <label htmlFor="amount" className="label">Amount</label>
          <input
            name="amount"
            value={amount}
            type="number"
            placeholder="Enter Amount"
            className="input"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <br />

        <input
          type="submit"
          value="Add Transaction"
          className="submit"
          onClick={handleClick}
        />
      </form>
      </div>
    </>
  )
}

export default AddTransaction;
