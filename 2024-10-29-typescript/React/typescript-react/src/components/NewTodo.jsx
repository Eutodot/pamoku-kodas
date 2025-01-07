import { useRef } from "react"

const NewTodo = ({ onAddTodo }) => {
    const todoInputRef = useRef()

    const todoSubmitHandler = event => {
        event.preventDefault()

        console.log(todoInputRef)
        const todoText = todoInputRef.current.value

        onAddTodo(todoText)
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <label htmlFor='todo-text'>Todo :</label>
            <input type='text' id='todo-text' ref={todoInputRef}/>

            <button type='submit'>Add</button>
        </form>
    )
}

export default NewTodo