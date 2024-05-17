import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Compare from './components/Compare'
import About from './components/About'

import Navbar from './components/Navbar'

import './App.css'
import {useUser} from "./hooks/useUser";
import Bag from "./components/Bag";

const App = () => {
    const {user} = useUser();

    return (
        <Router>
            <div className="router-container">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/compare" component={Compare}/>
                    <Route path="/bag" render={() => user ? <Bag/> : <Redirect to="/"/>}/>
                    <Route path="/about" component={About}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}

export default App