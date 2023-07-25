
export default function HistoryList({transaction}) {
    let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <>
        <p className="history-title">Groceries</p>
        <p className="history-amount">$50</p>
    </>
  )
}
