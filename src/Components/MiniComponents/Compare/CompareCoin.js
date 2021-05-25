import React from 'react'

function CompareCoin(props) {

	const dataObj = {
		marketRank: "12",
		currentPrice: "2342423",
		marketCap: "3234234",
		circSupply: "243423323",
		totalSupply: "324324423",
		percentChange: {
			day: "1.23",
			week: "-4.58",
			month: "21.23",
			year: "-22.23"
		}
	}

	// const [data, setData] = useState(dataObj)

	// const compareChart = () => {
	//     axios
	//         .get(url)
	// }

	// useEffect(() => {
	//     compareChart()
	// }, [])

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
					<li>{dataObj.marketRank}</li>
					<li>{dataObj.currentPrice}</li>
					<li>{dataObj.marketCap}</li>
					<li>{dataObj.circSupply}</li>
					<li>{dataObj.totalSupply}</li>
				</ul>
			</div>
			<span className="percent-change">Percent Change in Last...</span>
			<table className="percent-table">
				<tr className="t-head">
					<td style={{width: "10vw"}}>24 Hrs</td>
					<td>1 Day</td>
					<td>1 Week</td>
					<td>1 Year</td>
				</tr>
				<tr>
					<td style={{width: "10vw"}}>{dataObj.percentChange.day}</td>
					<td>{dataObj.percentChange.week}</td>
					<td>{dataObj.percentChange.month}</td>
					<td>{dataObj.percentChange.year}</td>
				</tr>
			</table>
		</div>
	)
}

export default CompareCoin
