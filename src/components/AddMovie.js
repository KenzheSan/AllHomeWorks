import classes from './AddMovie.module.css'
import React, { useRef } from 'react'

const AddMovie = (props) => {
	const titleRef = useRef('')
	const openingTextRef = useRef('')
	const releaseDateRef = useRef('')

	function submitHandler(e) {
		e.preventDefault()

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
        }

		props.onAddMovie(movie)
	}
	return (
		<form onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor='title'>Title</label>
				<input type='text' id='title' ref={titleRef} />
			</div>
			<div className={classes.control}>
                <label htmlFor='opening-text'>Opening Text</label>
                <textarea id='opening-text' rows ='5' ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='date'>Release Date</label>
                <input type='text' id='date' ref={releaseDateRef}/>
            </div>
            <button type='submit'>Add Movie</button>
		</form>
	)
}

export default AddMovie
