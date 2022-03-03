import axios from "axios"
import { FaPlus } from "react-icons/fa"
function TaskForm(props) {
  function createTask(e) {
    e.preventDefault()
    const data = e.target.input.value
    axios
      .post("http://localhost:3030/task/", { title: data })
      .then(() => {
        props.refreshView()
        e.target.reset()
      })
      .catch((error) => error)
  }

  return (
    <div className='submit' >
      <form onSubmit={createTask}>
        <input
          className="todo-input"
          type="text"
          placeholder="Enter todo.."
          name="input"
        ></input>
        <button className="todo-submit" type="submit" 
        ><FaPlus/></button>
      </form>
    </div>
  )
}

export default TaskForm
