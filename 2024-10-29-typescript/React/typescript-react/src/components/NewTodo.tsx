import React, { useRef } from "react"

type NewTodoProps = {
  onAddTodo: (text: string) => void
}


const NewTodo: React.FC <NewTodoProps> = ({ onAddTodo }) => {
    const todoInputRef = useRef<HTMLInputElement>(null) 

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        console.log(todoInputRef)
        const todoText = todoInputRef.current!.value

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