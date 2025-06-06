import Dashboard from './Dashboard'
import './styles.css'

function App() {

  return (
    <div className='body'>
      <Dashboard/>
    </div>
  )
}

export default App

// Build the components with hard coded data: 
//   Dashboard
//   ToDoList
//   Task
//   NewTaskBtn
// Add some basic styling to assist with initial layout
// Functionality:
//   (Store them as state in the browser (non-persistent) for now)
//   How to add tasks
//   Delete tasks
//   Edit tasks
// Intermediate Functionality
//   Mark tasks as complete
//   Make data persistent via localStorage
// Finish up styling
// Add advanced features (redo this list with more specific steps)
//   drag and drop reorder
//   add multiple ToDoLists (add editListsView component)