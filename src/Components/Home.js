import React from 'react'

import YourBag from './MiniComponents/Home/YourBag'
import Crypts from './MiniComponents/Home/Crypts'
import Pins from './MiniComponents/Home/Pins'

import '../style/Card.css'
import '../style/Home.css'

const Home = () => {
    return (
        <div className="home-container">
			<Crypts />
			<YourBag />
			<Pins />
		</div>
    )
}

export default Home;