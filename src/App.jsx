import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

const App = () => {
	const [message, setMessage] = useState(null)
	const handleClick = (e) => {
		e.preventDefault()
		fetch('http://localhost:3732/api/greeting')
			.then((res) => res.json())
			.then((res) => {
				setMessage(res.message)
			})
	}

	return (
		<>
			<main className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<button onClick={(e) => handleClick(e)} className="btn">
						Click me
					</button>
					<h2>{message}</h2>
				</div>
			</main>
		</>
	)
}

export default App
