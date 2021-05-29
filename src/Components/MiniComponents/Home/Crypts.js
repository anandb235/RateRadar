import React from 'react'
import axios from 'axios'

function Crypts() {

    const currency = { "margin": "12vh 0vw 0vh 5vw", "width": "60vw", "height": "45vh" }

    const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
    let coinData = ""

    axios
        .get(baseUrl)
        .then(res => {
            res.data.map((coin) => {
                let price = Math.round((parseFloat(coin.current_price) + Number.EPSILON) * 1000) / 1000
                let change = Math.round((parseFloat(coin.price_change_percentage_24h) + Number.EPSILON) * 100) / 100

                let bgcolor = '#1F1B24'
                let color = 'white'

                if(change < 0) {
                    bgcolor = '#CF6679'
                    color = 'black'
                }

                coinData += `<tr key=${coin.id}>`
                coinData +=     `<td>${coin.name}</td>`
                coinData +=     `<td class="price-column">${price}</td>`
                coinData +=     `<td style=color:${color};background-color:${bgcolor};border-radius:5px;>${change}</td>`
                coinData += `</tr>`

                return null

            })

            document.getElementById("coins").innerHTML = coinData
        })
        .catch(err => {
            console.log(err);
        })

    return (
        <div className="card" style={ currency }>
            <card-head>
                <card-title>Crypts</card-title>
                <currency-converter style={ { "textAlign": "right" } }>
                    Currency: <current-currency>USD</current-currency>
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
                <tbody id="coins"></tbody>
            </table>
        </div>
    )
}

export default Crypts