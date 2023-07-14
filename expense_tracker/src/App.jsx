import AddTransaction from './components/AddTransaction/AddTransaction'
import History from './components/History/History'
import Balance from './components/Balance/Balance'
import './App.css'

export default function App() {
  return (
    <div>
      <AddTransaction />
      <Balance />
      <History />
    </div>
  )
}
