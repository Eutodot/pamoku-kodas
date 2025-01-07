const TodoItem = ({data, onDeleteTodo}) => {
  return (
    <li>
        <span>{data.content}</span>

        <button onClick={() => onDeleteTodo(data.id)}>Delete</button>
    </li>
  )
}

export default TodoItem