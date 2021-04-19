import React from 'react'
import Card from './MiniComponents/Card'

function Home() {

	const currency = { "margin": "12vh 0vw 0vh 5vw", "width": "60vw", "height": "45vh" }
	const yourbag = { "margin": "12vh 10vw 0vh 70vw", "width": "25vw", "height": "45vh" }
	const pincharts_1 = { "margin": "62vh 0vw 0vh 5vw", "width": "40vw", "height": "35vh" }
	const pincharts_2 = { "margin": "62vh 0vw 0vh 55vw", "width": "40vw", "height": "35vh" }
    
    return (
        <div>
			<Card prop = { currency } />
			<Card prop = { yourbag } />
			<Card prop = { pincharts_1 } />
			<Card prop = { pincharts_2 } />
		</div>
    )
}

export default Home