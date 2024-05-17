import React from 'react'
import Markets from './mini-components/Home/Markets'
import Pins from './mini-components/Home/Pins'

import '../style/Card.css'
import '../style/Home.css'

const Home = () => {
    return (
        <div className="home-container">
			<Markets />
			<Pins />
		</div>
    )
}

export default Home;