import React from "react"
import RenderList from "../RenderList/RenderList"
const TodoList = (props) =>{
    return (
        <ul>
            {props.data.map((item)=>{
                return <RenderList
                data = {item}
                id={item.id}
                completed={item.completed}
                >{item.task} <input checked={item.completed} type='checkbox' onChange={()=>props.checked(item.id)}/> <button onClick={()=>props.filter(item.id)}>Delete</button></RenderList>
            })}
        </ul>
    )
}
export default TodoList