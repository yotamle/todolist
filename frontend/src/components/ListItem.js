import axios from "axios";
import { FaTimes } from "react-icons/fa"

function ListItem(props) {
  function deleteTask() {
    axios
      .delete(`http://localhost:3030/task/${props._id}`)
      .then(() => props.refreshView())
      .catch((error) => error);
  }

  function updateTask() {
    axios
      .put(`http://localhost:3030/task/${props._id}`, { isDone: !props.isDone })
      .then(() => props.refreshView())
      .catch((error) => error);
  }

  return (
    <div className="item">
      <p className={props.isDone ? "show" : ""}>{props.title}</p>
      <div className="flex">
        <input
          type="checkbox"
          className='checkbox'
          onChange={updateTask}
          defaultChecked={props.isDone}
        />
        {props.isDone ? (
          ""
        ) : (
          <button onClick={deleteTask}>
            <FaTimes className='fa-times' />
          </button>
        )}
      </div>
    </div>
  )
}

export default ListItem;
