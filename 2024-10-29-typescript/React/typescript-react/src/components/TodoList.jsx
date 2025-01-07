import TodoItem from "./TodoItem"

const TodoList = ({data, onDeleteTodo}) => {
  return (
    <ul>
        {data.map(todo => <TodoItem key={todo.id} data={todo} onDeleteTodo={onDeleteTodo}/>)}
    </ul>
  )
}

export default TodoList