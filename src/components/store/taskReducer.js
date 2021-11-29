


const taskReducer = (prevState,action) =>{
    if(action.type === 'TASKA'){
        return {
            ...prevState,
            task: action.value,
            taskIsValid: action.value.trim().length > 0
        }
    }
    if(action.type === 'ERROR'){
        return {
            ...prevState,
            taskIsValid:prevState.task.trim().length > 0
        }
    }
    if(action.type === 'CLEAR'){
        return {
            ...prevState,
            task: ''
        }
    }

}

export default taskReducer