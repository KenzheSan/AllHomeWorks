import React from "react"
const Taska = props =>{

    return (
        <ul>
            {props.taska.items.map((item,index)=>{
                return <li 
                style={{textDecoration: props.taska.completed[index] ? 'line-through' : ''}}
                
                onClick={()=> props.handleCheck(index)}>
                    {item.value}
                </li>
            })}
        </ul>
    )
}

export default Taska