import React from 'react'

const Todo = ({todo, dispatch}) => {
    function handleClick(e){
       return dispatch({type: 'toggle_todo', payload:{id:todo.id }})
    }
    return(
        <>
            <div>
            <h1>{todo.value}</h1>
            <button onClick={handleClick} style={{color:todo.complete? 'blue': 'yellow'}}>toggle</button>
            </div>
        </>
    )
  
}

export default Todo