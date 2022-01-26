import React from 'react'
import style from './task5.module.css'
import NotificationStat from './feedbackStat'

class Task5 extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  }
  goodhandler = () => {
    this.setState((prev) => ({
      good: prev.good + 1,
    }))
  }
  neutralhandler = () => {
    this.setState((prev) => ({
      neutral: prev.neutral + 1,
    }))
  }
  badhandler = () => {
    this.setState((prev) => ({
      bad: prev.bad + 1,
    }))
  }

  render() {
    let { good, neutral, bad } = this.state
    return (
      <div className={style.wrapper}>
        <NotificationStat
          goodhandler={this.goodhandler}
          neutralhandler={this.neutralhandler}
          badhandler={this.badhandler}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    )
  }
}
export default Task5
