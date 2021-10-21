import './Comment.css'
import React, { useState } from 'react'
function Form(props) {
	let today = new Date()
	let hours = today.toLocaleTimeString()

	const [input, setInput] = useState('')
	const [name, setName] = useState('')

	const inputChangeHandler = (event) => {
		setInput(event.target.value)
	}
	const nameChangeHandler = (event) => {
		setName(event.target.value)
	}

	const acceptHandler = (event) => {
		event.preventDefault()
		let data = {
			input,
			hours,
			name,
		}
		props.onAdd(data)
		setInput('')
		setName('')
	}

	return (
		<form onSubmit={acceptHandler} className='mainBlog'>
			<h1>HomeWork</h1>
			<div className='ui-input'>
				<p>Comment</p>
				<input
					placeholder='write your name'
					type='text'
					onChange={nameChangeHandler}
					value={name}
				/>
				<br />
				<input
					onChange={inputChangeHandler}
					placeholder={hours}
					type='text'
					value={input}
                    // type='time'
				/>
				<p>{hours}</p>
			</div>
			<div>
				<br />
				<button type='submit'>Accept</button>
			</div>
		</form>
	)
}
export default Form
