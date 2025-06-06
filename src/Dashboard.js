import { useState } from "react"
import NewTaskBtn from "./NewTaskBtn"
import ToDoList from "./ToDoList"

function Dashboard() {
  const [tasks, setTasks] = useState([])

  const createTask = () => {
    const updatedTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999),
        text: '',
        isCompleted: false
      }
    ]
    setTasks(updatedTasks)
  }

  return (
    <div className='dashboard'>
      <input type='text' className='todoTitle' defaultValue='To do'/>
      <ToDoList tasks={tasks} setTasks={setTasks}/>
      <NewTaskBtn onCreate={createTask}/>
    </div>
  )
}

export default Dashboard
