import HistoryList from "./HistoryList";

const History = () => {
  return (
    <>
    <div className="history">
      <h3 className="sub-header">History</h3>
        <hr></hr>
      <div className="history-element">
        <HistoryList />
      </div>
    </div>
      
    </>
  )
}

export default History;