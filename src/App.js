import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import Home from './Components/Home'
import Compare from './Components/Compare'
import About from './Components/About'

import Navbar from './Components/Navbar'

import './App.css'
import {useUser} from "./Hooks/useUser";

const App = () => {
    const {user} = useUser();
    return (
        <Router>
            <div className="router-container">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/compare" component={Compare}/>
                    <Route path="/bag" render={() => user ? <Compare/> : <Redirect to="/"/>}/>
                    <Route path="/about" component={About}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}

export default App