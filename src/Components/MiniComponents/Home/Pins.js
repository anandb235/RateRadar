import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../../../style/Pins.css'
import PinCharts1 from './PinCharts1'
import PinCharts2 from './PinCharts2'
import ArrowSvg from './ArrowSvg'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/components/dropdown.css'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/transition.css'

function Pins() {

	const [opts, setOpts] = useState([])
	const [selectedCoin1, setselectedCoin1] = useState('bitcoin')
	const [selectedCoin2, setselectedCoin2] = useState('ethereum')

	const dropdownData = () => {

		let listItems = []

		axios
			.get('https://api.coingecko.com/api/v3/coins/list')
			.then(res => {
				res.data.map(coin => {
					listItems.push({ key: coin.id, text: coin.name, value: coin.id })
					return null
				})
				setOpts(listItems)
			})
			.catch(err => {
				console.log(err);
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
			<PinCharts1 coin={selectedCoin1} />
			<div className="pins" style={{ position: "absolute" }}>
				<span className="pin-head" style={{ marginBottom: '10px' }} >Pins</span>
				<div style={{ zIndex: 4 }}>
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
				<ArrowSvg />
				<div style={{ zIndex: 4 }}>
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
			<PinCharts2 coin={selectedCoin2} />
		</>
	)
}

export default Pins