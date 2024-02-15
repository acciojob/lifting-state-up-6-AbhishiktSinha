
import React from "react";
import './../styles/App.css';
import TodoList from './TodoList.js'
import { useState } from "react";

let id = 0;
const App = () => {

  const initialState = [
    {
      id: id++,
      title: 'Learn React',
      completed: false
    },
    {
      id: id++,
      title: 'Build a React App',
      completed: false
    },
    {
      id: id++,
      title: 'Deploy the React App',
      completed: false
    },

  ];
  
  const[todos, setTodos] = useState([...initialState]);

  
  function handleComplete(todoId) {
    setTodos( todos.map( item => {
      if (item.id == todoId) {
        return {...item, completed: true};
      }
      return {...item};
    }) );
  }

  return (
    <div>
        <TodoList todos={todos} 
          handleComplete={handleComplete}
        ></TodoList>
    </div>
  )
}

export default App;
