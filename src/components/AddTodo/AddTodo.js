import React, { useReducer } from "react";
import taskReducer from "../store/taskReducer";
const AddTodo = (props) =>{
    const initTask = {task: '', taskIsValid: false, id: ''}
    const [allTask,dispatchTask] = useReducer(taskReducer,initTask)

    const taskChangeHandler = (e) =>{
        if(e.target.value.trim().length > 0){
            dispatchTask({type:'TASKA', value: e.target.value})
        }
    }
    const validTaskHandler = () =>{
        dispatchTask({type: 'ERROR'})
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        if(allTask.task.trim().length === 0){
            return
        }
        let validTask = {
            task: allTask.task,
            id: Math.random().toString(),
            completed: false
        }
        props.onDataTranslation(validTask)
        dispatchTask({type: 'CLEAR'})
    
    }
    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <h1>App to task</h1>
                <label id='taska'>Task it</label>
                <input value={allTask.task} style={{borderColor: !allTask.taskIsValid ? 'red' : 'black'}} id='taska'  onBlur={validTaskHandler} type='text' onChange={taskChangeHandler}/>
                <button disabled={!allTask.taskIsValid} type='submit'>Add new Task</button>
            </form>
        </React.Fragment>
    )
}
export default AddTodo