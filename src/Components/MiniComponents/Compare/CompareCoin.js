import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CompareCoin(props) {

	const dataObj = {
		marketRank: "NA",
		currentPrice: "NA",
		marketCap: "NA",
		circSupply: "NA",
		totalSupply: "NA",
		percentChange: {
			day: "NA",
			week: "NA",
			month: "NA",
			year: "NA"
		}
	}

	function bigNumFormat(num, digits) {

		const lookup = [
			{ value: 1, symbol: "" },
			{ value: 1e3, symbol: "k" },
			{ value: 1e6, symbol: "M" },
			{ value: 1e9, symbol: "B" }
		]

		const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
		var item = lookup.slice().reverse().find(item => num >= item.value)

		return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + " " + item.symbol : "0"
	}

	const coinName = props.coin
	const [data, setData] = useState(dataObj)

	const compareChart = () => {
		axios
			.get("https://api.coingecko.com/api/v3/coins/" + coinName + "/")
			.then(res => {

				const obj = res.data
				const marketData = obj.market_data
				const cap = marketData.market_cap.usd
				const circ = marketData.circulating_supply
				const tot = marketData.total_supply

				setData({
					marketRank: obj.market_cap_rank,
					currentPrice: marketData.current_price.usd,
					marketCap: bigNumFormat(parseFloat(cap), cap.length),
					circSupply: bigNumFormat(parseFloat(circ), circ.length),
					totalSupply: (tot !== null) ? bigNumFormat(parseFloat(tot), tot.length) : "na",
					percentChange: {
						day: marketData.price_change_percentage_24h,
						week: marketData.price_change_percentage_7d,
						month: marketData.price_change_percentage_30d,
						year: marketData.price_change_percentage_1y
					}
				})
			})
	}

	useEffect(() => {
		compareChart()
	})

	return (
		<div class="coin">
			<span class="coin-head">{props.coin}</span>
			<div className="lists">
				<ul>
					<li>Rank</li>
					<li>Current Price</li>
					<li>Market Capital</li>
					<li>Circulating Supply</li>
					<li>Total Supply</li>
				</ul>
				<ul>
					<li>:</li>
					<li>:</li>
					<li>:</li>
					<li>:</li>
					<li>:</li>
				</ul>
				<ul>
					<li>{data.marketRank}</li>
					<li>{data.currentPrice}</li>
					<li>{data.marketCap}</li>
					<li>{data.circSupply}</li>
					<li>{data.totalSupply}</li>
				</ul>
			</div>
			<span className="percent-change">Percent Change in Last...</span>
			<table className="percent-table">
				<tr className="t-head">
					<td style={{ width: "10vw" }}>24 Hrs</td>
					<td>1 Week</td>
					<td>1 Month</td>
					<td>1 Year</td>
				</tr>
				<tr>
					<td style={{ width: "10vw" }}>{data.percentChange.day}</td>
					<td>{data.percentChange.week}</td>
					<td>{data.percentChange.month}</td>
					<td>{data.percentChange.year}</td>
				</tr>
			</table>
		</div>
	)
}

export default CompareCoin
