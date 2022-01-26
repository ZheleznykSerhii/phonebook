import style from './friends.module.css'

const FriendList = ({ friends }) => {
  let friendsCards = friends.map((data) => (
    <li className={style.card} key={data.id}>
      <span
        className={data.isOnline === true ? style.online : style.offline}
      ></span>
      <img className={style.img} src={data.avatar} alt="" width="48" />
      <p className={style.name}>{data.name}</p>
    </li>
  ))

  return <ul className="friend-list">{friendsCards}</ul>
}

export default FriendList
