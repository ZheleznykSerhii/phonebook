import Task1 from '../tasks/tasks/task1'
import Task2 from '../tasks/tasks/task2'
import Task3 from '../tasks/tasks/task3'
import Task4 from '../tasks/tasks/task4'
import Task5 from '../tasks/tasks/task5'
import Task6 from '../tasks/tasks/task5'

import urls from './urls'

const routes = [
  {
    path: urls.task1,
    exact: true,
    component: Task1,
  },
  {
    path: urls.task2,
    exact: true,
    component: Task2,
  },
  {
    path: urls.task3,
    exact: true,
    component: Task3,
  },
  {
    path: urls.task4,
    exact: true,
    component: Task4,
  },
  {
    path: urls.task5,
    exact: true,
    component: Task5,
  },
  {
    path: urls.task6,
    exact: true,
    component: Task6,
  },
]

export default routes
