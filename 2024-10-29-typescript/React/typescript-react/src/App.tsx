import React, { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

export type Todo = {
  id: number
  content: string
}

const App: React.FC = () => {
    // const [todos, setTodos] = useState<{id: number, content: string}[]>([])
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (text: string) => setTodos(prevState => [{ id: Math.random(), content: text }, ...prevState])
    const deleteTodoHandler = (id: number) => setTodos(prevState => prevState.filter(todo => todo.id !== id))

    return (
      <div>
        {/* <NewTodo onAddTodo={addTodoHandler}/> */}

        {/* <TodoList data={todos} onDeleteTodo={deleteTodoHandler}/> */}
      </div>
    )
}

export default App
