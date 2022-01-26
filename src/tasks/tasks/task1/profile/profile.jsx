import style from './profile.module.css'

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.info}>@{tag}</p>
        <p className={style.info}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.list}>
          <span className={style.label}>Followers </span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.list}>
          <span className={style.label}>Views </span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.list}>
          <span className={style.label}>Likes </span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile
