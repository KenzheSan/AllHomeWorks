import React from "react"
const RenderList = (props) =>{
    return (
        <li style={{textDecoration: props.data.completed ? 'line-through ' : ''}}>{props.children}</li>
    )
}
export default RenderList