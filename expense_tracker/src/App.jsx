import { connect } from "react-redux";
import { addTransaction } from "./redux/actions";

import AddTransaction from './components/AddTransaction/AddTransaction'
import History from './components/History/History'
import Balance from './components/Balance/Balance'
import './App.css'

export function App(props) {
  const {transactions, addTransaction} = props

  return (
    <div className='main'>
      <Balance transactions={transactions} />
      <History transactions={transactions} />
      <AddTransaction
        addTransaction={(transaction) => addTransaction(transaction)}
        // id={transactions[0] ? transactions[0].id + 1 : 1}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);