import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Components/Home'
import Compare from './Components/Compare'
import About from './Components/About'

import Navbar from './Components/Navbar'

import './App.css'

const App = () => {
    return (
        <Router>
            <div className="router-container">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/compare" component={Compare}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App