import React from 'react'
import Markets from './MiniComponents/Home/Markets'
import Pins from './MiniComponents/Home/Pins'

import '../Style/Card.css'
import '../Style/Home.css'

const Home = () => {
    return (
        <div className="home-container">
			<Markets />
			<Pins />
		</div>
    )
}

export default Home;