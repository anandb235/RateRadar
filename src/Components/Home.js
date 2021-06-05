import React from 'react'

import YourBag from './MiniComponents/Home/YourBag'
import Markets from './MiniComponents/Home/Markets'
import Pins from './MiniComponents/Home/Pins'

import '../style/Card.css'
import '../style/Home.css'

const Home = () => {
    return (
        <div className="home-container">
			<Markets />
			<YourBag />
			<Pins />
		</div>
    )
}

export default Home;