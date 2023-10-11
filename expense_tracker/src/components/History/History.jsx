import PropTypes from 'prop-types'
import HistoryList from "./HistoryList";

const History = ({ transactions }) => {
  return (
    <div className="history">
      <h3 className="sub-header">History</h3>
        <hr></hr>
       {transactions.map(transaction => (
        <HistoryList key={transaction.id} transaction={transaction} />
       ))}
    </div> 
  )
}

History.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      amount: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default History;