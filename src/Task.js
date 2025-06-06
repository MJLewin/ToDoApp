
function Task({ id, text, isCompleted, onDelete }) {

  return (
    <div className='todoItem'>
      <div className='todoItemLeft'>
        <input
          type='checkbox'
          className='todoCheckbox'
          checked={isCompleted}
        >
        </input>
        <input
          type='text'
          className='todoLabel'
          defaultValue={text}
        >
        </input>
      </div>
      <button 
        className='todoDelete'
        onClick={() => onDelete(id)}
      >
        X
      </button>
    </div>
  )
}

export default Task
