import HistoryList from "./HistoryList";

const History = ({ transactions }) => {
  return (
    <>
    <div className="history">
      <h3 className="sub-header">History</h3>
        <hr></hr>
      <div className="history-element">
       {transactions.map(transaction => (
        <HistoryList key={transaction.text} transaction={transaction} />
       ))}
      </div>
    </div>
      
    </>
  )
}

export default History;