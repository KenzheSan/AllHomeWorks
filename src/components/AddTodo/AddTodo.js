import React, { useState} from 'react'
import classes from './AddTodo.module.css'

const AddTodo = (props) => {
    const [task,setTask] = useState('')
    const sumbitHandler = e =>{
        e.preventDefault()
        props.onSaveTask(task)
		setTask('')
    }

	return (
		<form onSubmit={sumbitHandler} className={classes.form_control}>
			<h1>App to note</h1>
			<label id='label'>Task list</label>
			<input id='label' type='text' onChange={(e)=>setTask(e.target.value)} value={task}/>
            <button type="submit">Task IT</button>
		</form>
	)
}
export default AddTodo
