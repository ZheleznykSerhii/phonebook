import transactions from '../../data/transactions.json'
import style from '../task4/table.module.css'

const Task4 = () => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((data) => (
          <tr key={data.id}>
            <td>{data.type}</td>
            <td>{data.amount}</td>
            <td>{data.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Task4
