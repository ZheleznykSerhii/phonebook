import style from '../task5.module.css'

const Notification = ({ message }) => {
  return <div className={style.wrapperComp}>{message}</div>
}

export default Notification
