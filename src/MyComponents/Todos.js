import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.map((todo) => {
                return <TodoItems todo={todo} key={todo.sno}  onDelete={props.onDelete} />
            })}
        </div>
    )
}

export default Todos
