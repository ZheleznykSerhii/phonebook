import Profile from './profile'
import user from '../../data/user.json'

const Task1 = () => {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  )
}

export default Task1
