import React from "react";

let id = 1;
const TodoList = ({todos, handleComplete})=>{ 

    return (
        <ul>
            {
                todos.map((item)=>{

                    return (
                        <div key={item.id}>
                            <span>{item.title}</span>

                            {!item.completed && (
                                <button onClick={()=>handleComplete(item.id)}>Complete</button>
                            )}
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default TodoList;