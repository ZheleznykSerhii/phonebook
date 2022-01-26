import style from './statistic.module.css'

const Statistics = ({ stats, title }) => {
  let items = stats.map((data) => (
    <li className={style.item} key={data.id}>
      <span>{data.label}</span>
      <span> {data.percentage}%</span>
    </li>
  ))

  return (
    <section className={style.section}>
      <h2 className={style.label}>{title}</h2>
      <ul className={style.wrapper}>{items}</ul>
    </section>
  )
}

export default Statistics
