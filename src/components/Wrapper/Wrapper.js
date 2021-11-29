import React, { useEffect, useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
const Wrapper = () => {
	const [tasks, setTasks] = useState([])
	const dataTranslation = (task) => {
		setTasks((prevTask) => {
			const updateTask = [...prevTask]
			updateTask.unshift(task)
			return updateTask
		})
	}

	// useEffect(() => {
	//     const storageTodos = JSON.parse(localStorage.getItem('todos'));
	//     if (storageTodos) {
	//       setTodos(storageTodos);
	//     }
	//   }, []);
	//   useEffect(() => {
	//     localStorage.setItem('todos', JSON.stringify(todos));
	//   }, [todos]);
	//   const addTodo = (todo) => {
	//     setTodos([todo, ...todos]);
	//   };
	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('key'))
		if (storage) {
			setTasks(storage)
		}
	}, [])
	useEffect(() => {
		localStorage.setItem('key', JSON.stringify(tasks))
	}, [tasks])

	const fileterHandler = (id) => {
		setTasks((prevTask) => {
			const updateTask = prevTask.filter((item) => item.id !== id)
			return updateTask
		})
	}
	const checkedHandler = (id) => {
		setTasks(
			tasks.map((item) => {
                console.log(item);
				if (item.id === id) {
					item.completed = !item.completed
				}
				return item
			}),
		)
	}
	return (
		<main>
			<AddTodo onDataTranslation={dataTranslation} />
			<TodoList
				data={tasks}
				filter={fileterHandler}
				checked={checkedHandler}
			/>
		</main>
	)
}
export default Wrapper
