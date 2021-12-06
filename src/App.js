import React, { useState, useEffect, useCallback } from 'react'
import MoviesList from './components/MoviesList'
import './App.css'
import AddMovie from './components/AddMovie'

function App() {
	const [movies, setMovies] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const fetchMoviesHandler = useCallback(async () => {
		setError(null)
		setLoading(true)
		try {
			const response = await fetch('https://react-http-test-a5917-default-rtdb.firebaseio.com/movies.json')
			if (!response.ok) {
				throw new Error('Something wrong')
			}
			const data = await response.json()

			const loadedMovies = []

			for(const key in data) {
				loadedMovies.push({
					id: key,
					title: data[key].title,
					openingText: data[key].openingText,
					releaseDate: data[key].releaseDate
				})
			}
			// const transformedMovies = data.results.map((movieData) => {
			// 	return {
			// 		id: movieData.episode_id,
			// 		title: movieData.title,
			// 		openingText: movieData.opening_crawl,
			// 		releaseDate: movieData.release_date,
			// 	}
			// })
			setMovies(loadedMovies)
		} catch (error) {
			setError(error.message)
		}

		setLoading(false)
	}, [])

	useEffect(() => {
		fetchMoviesHandler()
	}, [fetchMoviesHandler])

	async function addMovieHandler(movie) {
	    const response = await	fetch('https://react-http-test-a5917-default-rtdb.firebaseio.com/movies.json',{
			method: 'POST',
			body: JSON.stringify(movie),
			headers: {
				'Content-type' : 'application/json'
			}
		})
		const data = await response.json()
		console.log(data)
	}

	let content = <p>Found no movies...</p>

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />
	}
	if (loading) {
		content = <p>loading ...</p>
	}
	if (error) {
		content = <p>{error}</p>
	}
	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler}/>
				{/* <button onClick={fetchMoviesHandler}>Fetch Movies</button> */}
			</section>
			<section>{content}</section>
		</React.Fragment>
	)
}

export default App
