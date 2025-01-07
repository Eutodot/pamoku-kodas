import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = text => setTodos(prevState => [{ id: Math.random(), content: text }, ...prevState])
    const deleteTodoHandler = id => setTodos(prevState => prevState.filter(todo => todo.id !== id))

    return (
      <div>
        <NewTodo onAddTodo={addTodoHandler}/>

        <TodoList data={todos} onDeleteTodo={deleteTodoHandler}/>
      </div>
    )
}

export default App
