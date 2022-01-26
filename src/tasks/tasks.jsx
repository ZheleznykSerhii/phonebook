import { Route, Routes } from 'react-router-dom'
import Task1 from './tasks/task1'
import Task2 from './tasks/task2'
import Task3 from './tasks/task3'
import Task4 from './tasks/task4'
import Task5 from './tasks/task5'
import Task6 from './tasks/task6'
import Task7 from './tasks/task7'

const Tasks = () => {
  return (
    <Routes>
      <Route path="/task1" element={<Task1 />} />
      <Route path="/task2" element={<Task2 />} />
      <Route path="/task3" element={<Task3 />} />
      <Route path="/task4" element={<Task4 />} />
      <Route path="/task5" element={<Task5 />} />
      <Route path="/task6" element={<Task6 />} />
      <Route path="/task7" element={<Task7 />} />
    </Routes>
  )
}
export default Tasks
