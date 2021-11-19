import React from 'react'
const UserList = (props) => {
	return (
		<li
			onClick={props.onClick}
			style={{ textDecoration: props.completed ? 'line-through' : '' }}
		>
			{/* <input type={props.completed ? 'checkbox' : 'radio'} /> */}
			{props.children}
		</li>
	)
}

export default UserList
