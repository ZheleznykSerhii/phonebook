import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'

function Nav() {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.title}>Homework 1</li>
        <li className={style.li}>
          <NavLink to="/task1">Task 1</NavLink>
        </li>
        <li className={style.li}>
          <NavLink to="/task2">Task 2 </NavLink>
        </li>
        <NavLink to="/task3">
          <li className={style.li}>Task 3</li>
        </NavLink>
        <NavLink to="/task4">
          <li className={style.li}>Task 4</li>
        </NavLink>
        <li className={style.title}>Homework 2</li>
        <li className={style.li}>
          <NavLink to="/task5">Task 1</NavLink>
        </li>
        <li className={style.li}>
          <NavLink to="/task6">Task 2 </NavLink>
        </li>
        <li className={style.title}>Homework 3</li>
        <li className={style.li}>
          <NavLink to="/task7">Task 1 </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Nav
