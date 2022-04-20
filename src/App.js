import './App.css';
import React, {useState, useReducer} from 'react';
import Todo from './Todo'

function reducer(todos, action){
  switch(action.type){
    case 'add_todo':
      return [...todos,{complete:false, id:Date.now(), value:action.payload.value}]
    case 'toggle_todo':
      return todos.map(todo =>{
      if(todo.id == action.payload.id){
          return {...todo,complete: !todo.complete}
        }
      })
  }
}
function App() {
  const[value, setValue] = useState('')
  const[todos, dispatch] = useReducer(reducer, [])

  function handleChange(e){
    setValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type:'add_todo', payload:{value:value}})
    setValue('')
  }
  
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" />
      </form>
      {todos.map((todo, index) =>{
        return <Todo key={index} todo={todo} dispatch={dispatch} />
    })}
      
    </>
  );
}

export default App;
