import React, { useReducer } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Card from '../UI/Card'
import Todos from '../Todo/Todos'

const todoReducer = (prevState, action) => {
	if (action.type === 'SAVE_TASK') {
		return {
            ...prevState,
			name: action.value,
			items: [
				...prevState.items,
				{
					name: action.value,
					id: Math.random().toString(),
				},
			],
		}
	}

    if(action.type === 'COMPLETE_TODO'){
        return {
            ...prevState,
            completed: {
                ...prevState.completed,
                [action.index] : !prevState.completed[action.index]
            }
        }
    }

	return {
		name: '',
		items: [],
		completed: {},
	}
}
const Wrapper = () => {
	const [todosState, dispatchTodo] = useReducer(todoReducer, {
		name: '',
		items: [
			{
				name: 'Learn Java-Script',
				id: 'h2',
			},
			{
				name: 'Learn Java',
				id: 'h3',
			},
		],
		completed: {},
	})

	const saveTask = (name) => {
		dispatchTodo({ type: 'SAVE_TASK', value: name })
	}
    const handleCheck = (index) => {
        dispatchTodo({type:'COMPLETE_TODO',index: [index]})
    }
	return (
		<Card>
			<AddTodo onSaveTask={saveTask} />
			<Todos todosState={todosState} onHandleCheck={handleCheck}/>
		</Card>
	)
}

export default Wrapper
