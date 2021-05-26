import React, { useState, useEffect } from 'react'
import CompareCoin from './MiniComponents/Compare/CompareCoin'
import VersusAnimation from './MiniComponents/Compare/VersusAnimation'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'

import '../style/Compare.css'
import '../style/Card.css'

function Compare() {
	const compareChart = {
		margin: '27vh 0vw 0vh 20vh',
		width: '80vw',
		height: '65vh'
	}

	const [opts, setOpts] = useState([])
	const [selectedCoin1, setselectedCoin1] = useState('bitcoin')
	const [selectedCoin2, setselectedCoin2] = useState('ethereum')

	const dropdownData = () => {
		let listItems = []

		axios
			.get('https://api.coingecko.com/api/v3/coins')
			.then(res => {
				res.data.map(coin => {
					listItems.push({
						key: coin.id,
						text: coin.id,
						value: coin.id
					})
					return null
				})
				setOpts(listItems)
			})
			.catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		dropdownData()
	}, [])

	const handleDropDownSelect1 = (event, data) => {
		setselectedCoin1(data.value)
	}

	const handleDropDownSelect2 = (event, data) => {
		setselectedCoin2(data.value)
	}

	return (
		<>
			<div
				style={{
					position: 'absolute',
					margin: '20vh 0vw 0vh 39vw',
					display: 'flex'
				}}
			>
				<div className="drop-a">
					<Dropdown
						defaultValue="bitcoin"
						placeholder="Coin 1"
						onChange={handleDropDownSelect1}
						search
						selection
						style={{ innerWidth: '2em' }}
						options={opts}
					/>
				</div>
				<span
					style={{
						color: '#3b4ab8',
						fontWeight: 'bolder',
						marginTop: '14px'
					}}
				>
					V/S
				</span>
				<div className="drop-b">
					<Dropdown
						defaultValue="ethereum"
						placeholder="Coin 2"
						onChange={handleDropDownSelect2}
						search
						selection
						style={{ innerWidth: '2em' }}
						options={opts}
					/>
				</div>
			</div>
			<div className="card" style={compareChart}>
				<div class="container">
					<CompareCoin coin={selectedCoin1} />

					<VersusAnimation />

					<CompareCoin coin={selectedCoin2} />
				</div>
			</div>
		</>
	)
}

export default Compare
