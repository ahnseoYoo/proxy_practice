import React from 'react'
import { getAllTodos, createTodo} from '../services/TodoService';

const FetchButton = () => {
    
    return(
        <div className="display-wrapper">
            <button onClick={() => {getAllTodos()}}>Get Todos</button>
            <button onClick={() => {createTodo()}}>Create Todo</button>
        </div>
    )
}

export default FetchButton;