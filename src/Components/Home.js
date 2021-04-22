import React from 'react'
import '../style/Card.css'
import '../style/Home.css'

// import "../data/crypts.json"

// const data = {
//     "one": {
//         "name": "Bitcoin",
//         "price": 43278273.323,
//         "growth": -2.33
//     },
//     "two": {
//         "name": "Bitcoin",
//         "price": 43278273.323,
//         "growth": -2.33
//     }
// }

function Home() {

	const currency = { "margin": "12vh 0vw 0vh 5vw", "width": "60vw", "height": "45vh" }
	const yourbag = { "margin": "12vh 10vw 0vh 70vw", "width": "25vw", "height": "45vh" }
	const pincharts_1 = { "margin": "62vh 0vw 0vh 5vw", "width": "40vw", "height": "35vh" }
	const pincharts_2 = { "margin": "62vh 0vw 0vh 55vw", "width": "40vw", "height": "35vh" }
    
    return (
        <card>
			<card className="card" style={ currency }>
				<card-head>
					<card-title>Crypts</card-title>
					<currency-converter style={ { "text-align": "right" } }>
						Currency: <current-currency>INR</current-currency>
					</currency-converter>
				</card-head>
				<table>
					<tbody>
						<tr>
							<th>Currency</th>
							<th>Price</th>
							<th>Growth</th>
						</tr>
					</tbody>
				</table>

				<table className="data-table">

					{/* {data.map(data => (
						<tr>
							<td>{data.name}</td>
							<td>{data.price}</td>
							<td>{data.growth}</td>
						</tr>
					))} */}

					<tbody>
						<tr>
							<td>BitCoin</td>
							<td>4423923.233</td>
							<td>-2.33</td>
						</tr>

						<tr>
							<td>BitCoin</td>
							<td>4423923.233</td>
							<td>-2.33</td>
						</tr>

						<tr>
							<td>BitCoin</td>
							<td>4423923.233</td>
							<td>-2.33</td>
						</tr>

						<tr>
							<td>BitCoin</td>
							<td>4423923.233</td>
							<td>-2.33</td>
						</tr>

						<tr>
							<td>BitCoin</td>
							<td>4423923.233</td>
							<td>-2.33</td>
						</tr>

						<tr>
							<td>BitCoin</td>
							<td>4423923.233</td>
							<td>-2.33</td>
						</tr>

						<tr>
							<td>BitCoin</td>
							<td>4423923.233</td>
							<td>-2.33</td>
						</tr>

						<tr>
							<td>BitCoin</td>
							<td>4423923.233</td>
							<td>-2.33</td>
						</tr>
					</tbody>
				</table>
			</card>
			<card className="card" style={ yourbag }></card>
			<card className="card" style={ pincharts_1 }></card>
			<card className="card" style={ pincharts_2 }></card>
		</card>
    )
}

export default Home