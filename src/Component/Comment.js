import Form from './Form'
import React, { useState } from 'react'
import './Comment.css'

function Comment(props) {
	const [bigData, setBigData] = useState([])
	const onAddComment = (data) => {
		setBigData([...bigData, data])
		localStorage.setItem('name', JSON.stringify([...bigData, data]))
	}
	let localData = JSON.parse(localStorage.getItem('name')) || []
	return (
		<div className='main-wrapper'>
			<Form onAdd={onAddComment} />
			<div className='Comment-blog'>
				<div className='header-wrapper'>
					<p>UserName</p>
					<p>Comment</p>
					<p>time</p>
				</div>
				<div>
					{localData.map((item) => {
						return (
							<div className='item-blog'>
								<p>{item.name}</p>
								<p>{item.input}</p>
								<p>{item.hours}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Comment
