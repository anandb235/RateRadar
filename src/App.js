import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Components/Home'
import Compare from './Components/Compare'
import About from './Components/About'
import Contact from './Components/Contact'

import Navbar from './Components/Navbar'

import './App.css'

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/compare" component={ Compare } />
				<Route path="/about" component={ About } />
				<Route path="/contact" component={ Contact } />
			</Switch>
		</Router>
	)
}

export default App