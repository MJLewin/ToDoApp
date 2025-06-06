function NewTaskBtn({ onCreate }) {
  return (
    <button className='addTaskButton' onClick={onCreate}>Add New Task</button>
  )
}

export default NewTaskBtn
