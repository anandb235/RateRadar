import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../../../style/Pins.css'
import DropdownPin from './DropdownPin'

function Pins() {

	const [opts, setOpts] = useState([])

	const dropdownData = () => {

		let listItems = []

		axios
			.get('https://api.coingecko.com/api/v3/coins')
			.then(res => {
				res.data.map(coin => {
					listItems.push({key: coin.id, text: coin.id, value: coin.id})
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

	return (
		<div className="pins" style={{ position: "absolute" }}>
			<span className="pin-head" style={{marginBottom: '10px'}} >Pins</span>
			<DropdownPin default="bitcoin" opts={ opts } />
			<DropdownPin default="ethereum" opts={ opts } />
			<button className="apply-btn" style={{marginTop: '10px'}} >Show Charts</button>
		</div>
	)
}

export default Pins