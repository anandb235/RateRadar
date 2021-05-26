import React from 'react'

import YourBag from './MiniComponents/Home/YourBag'
import Crypts from './MiniComponents/Home/Crypts'
import PinCharts1 from './MiniComponents/Home/PinCharts1'
import Pins from './MiniComponents/Home/Pins'
import PinCharts2 from './MiniComponents/Home/PinCharts2'

import '../style/Card.css'
import '../style/Home.css'

function Home() {
    return (
        <div>
			<Crypts />
			<YourBag />
			<PinCharts1 />
			<Pins />
			<PinCharts2 />
		</div>
    )
}

export default Home