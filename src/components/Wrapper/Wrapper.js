import React, { useState } from "react";

const Wrapper = props =>{
    const [task,setTask] = useState('')
    const taskChangeHandler = e =>{
        setTask(e.target.value)
    }
    const submitHandler = e =>{
        e.preventDefault()
        props.onTransfer(task)
    }
    return (
        <form onSubmit={submitHandler}>
            <h1>App to Do</h1>
            <div>
                <label name='label'>Task</label>
                <input onChange={taskChangeHandler} value={task} name='label' type='text'/>
            </div>
            <button type='submit'>Add Task</button>
        </form>
    )
}

export default Wrapper