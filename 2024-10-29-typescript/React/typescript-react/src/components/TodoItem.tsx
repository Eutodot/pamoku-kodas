import React from "react"
import { Todo } from "../App"

type TodoItemProps = {
  data: Todo
  onDeleteTodo: (id: number) => void
}

const TodoItem: React.FC <TodoItemProps> = ({data, onDeleteTodo}) => {
  return (
    <li>
        <span>{data.content}</span>

        <button onClick={() => onDeleteTodo(data.id)}>Delete</button>
    </li>
  )
}

export default TodoItem