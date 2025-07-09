import { useState, useEffect } from "react"

function Task({ id, text, isCompleted, onDelete, onEdit }) {
  const [textValue, setTextValue] = useState(text)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (textValue !== text) {
        onEdit(id, textValue)
      }
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [textValue, text, id, onEdit])

  const handleChange = (e) => {
    setTextValue(e.target.value)
  }

  const handleBlur = () => {
    if (textValue !== text) {
      onEdit(id, textValue)
    }
  }

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
          value={textValue}
          onChange={handleChange}
          onBlur={handleBlur}
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
