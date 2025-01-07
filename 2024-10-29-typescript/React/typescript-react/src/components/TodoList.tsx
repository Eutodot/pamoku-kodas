import React from "react"
import TodoItem from "./TodoItem"
import { Todo } from "../App"

type TodoListProps = {
  data: Todo[]
  onDeleteTodo: (id: number) => void
}

const TodoList: React.FC <TodoListProps> = ({data, onDeleteTodo}) => {
  return (
    <ul>
        {data.map(todo => <TodoItem key={todo.id} data={todo} onDeleteTodo={onDeleteTodo}/>)}
    </ul>
  )
}

export default TodoList
