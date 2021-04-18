import './App.css'
// import Welcome from './Components/Welcome'
import Cardone from './Components/Cardone'

function App() {
	const cardone = { "margin": "10vh 0vw 0vh 5vw" }
	const cardtwo = { "margin": "10vh 0vw 0vh 40vw" }
	const cardthree = { "margin": "55vh 0vw 0vh 5vw", "width": "65vw", "height": "40vh" }
	const cardfour = { "margin": "10vh 0vw 0vh 73vw", "width": "25vw", "height": "60vh" }
	return (
		<div>
			<Cardone prop = { cardone } />
			<Cardone prop = { cardtwo } />
			<Cardone prop = { cardthree } />
			<Cardone prop = { cardfour } />
		</div>
	)
}

export default App