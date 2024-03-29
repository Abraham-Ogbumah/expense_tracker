import PropTypes from "prop-types";
export default function HistoryList({ transaction }) {
  let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <div className="history-element">
      <p className="history-title">{transaction.text}</p>
      <p className="history-amount">
        {sign}${Math.abs(transaction.amount).toLocaleString()}
      </p>
    </div>
  );
}

HistoryList.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.number.isRequired,
    text: PropTypes.string,
  }).isRequired,
};
