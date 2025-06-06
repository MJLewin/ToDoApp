import Task from './Task'

function ToDoList({ tasks, setTasks }) {

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(updatedTasks)
  }

  console.log("tasks: ", tasks)
  const todoList = tasks.map(({ id, text, isCompleted }) => (
    <Task
      key={id}
      id={id}
      text={text}
      isCompleted={isCompleted}
      onDelete={deleteTask}
    />
  ))
  
  // TODO later. totalCompletedTasks is likely state itself that lives here in this component
  // when a tasks checkbox is clicked the handler will update state here by + or - 1 respectively

  const taskCount = tasks.length
  const completedTasksTotal = 0

  return (
    <div className='todoList'>
      <label className='taskStatus'>
        Completed items: {completedTasksTotal}/{taskCount}
      </label>
      {todoList}
    </div>
  )
}

export default ToDoList
