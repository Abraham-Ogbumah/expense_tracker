import { useState } from "react";
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const AddTransaction = ({ addTransaction }) => {

  const [text, setText] = useState("");
  const [amount, setAmount ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction ={
      id: uuidv4(),
      text,
      amount: Number(amount)
    }
    addTransaction(newTransaction)
    setText("")
    setAmount("")
  }

  return (
    <div className="form">
      <h3 className="sub-header">Add Transaction</h3>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text" className="label">Text</label>
          <input
            id="text"
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
            id="amount"
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
        />
      </form>
    </div>

  )
}

AddTransaction.propTypes = {
  addTransaction: PropTypes.func.isRequired,
  id: PropTypes.number
};

export default AddTransaction;
