import ListItem from "./ListItem";

function List(props) {
  const list = props.list;
  return (
    <div>
      {list.map((item) => {
        return (
          <ListItem key={item.id} refreshView={props.refreshView} {...item} />
        )
      })}
    </div>
  )
}

export default List;

// key={item.id} id={item._id} title={item.title} done={item.isDone}
