import React from "react"
import UserList from "../UserList/UserList"
import './Todos.css'
const Todos = props =>{ 
    return (
        <div className='todos_component'>
            <ul>
                {props.todosState.items.map((item,index)=>{
                    return <UserList 
                    key={item.id} 
                    id={item.id} 
                    onClick={()=> props.onHandleCheck(index)}
                    completed={props.todosState.completed[index]}
                    >
                        {item.name}
                    </UserList>
                })}
            </ul>
        </div>
    )
}
export default Todos