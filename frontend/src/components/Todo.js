import { useState, useEffect } from "react"
import List from "./List"
import TaskForm from "./TaskForm"
import axios from "axios"
import Title from "./Title"

function Todo() {
  const [tasksList, setTasksList] = useState([])

  useEffect(getTasks, [])

  function getTasks() {
    axios
      .get("http://localhost:3030/task/")
      .then((result) => setTasksList(result.data))
      .catch((error) => error)
  }

  return (
    <div className="todo-panel">
      <Title />

      <TaskForm refreshView={getTasks} />

      <div className={`todo-list ${tasksList.length ? "" : "blank"}`}>
        {tasksList.length ? (
          <div>
            <span>Task:</span>
            <List
              list={tasksList.filter((t) => !t.isDone)}
              refreshView={getTasks}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={`todo-list ${tasksList.length ? "" : "blank"}`}>
        {tasksList.length ? (
          <div>
            <span>Completed:</span>
            <List
              list={tasksList.filter((t) => t.isDone)}
              refreshView={getTasks}
            />
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  )
}

export default Todo
