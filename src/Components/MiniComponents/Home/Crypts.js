import React from 'react'

function Crypts() {

    const currency = { "margin": "12vh 0vw 0vh 5vw", "width": "60vw", "height": "45vh" }

    const baseUrl = process.env.REACT_APP_API_URL
    const proxyUrl = process.env.REACT_APP_PROXY_SERVER_URL
    const apiKey = process.env.REACT_APP_API_KEY

    let coinData = ''

    fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${apiKey}`,
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then((response) => {
        if(response.ok) {
            response.json().then((res) => {

                res.data.coins.forEach((coin) => {

                    let price = Math.round((parseFloat(coin.price) + Number.EPSILON) * 1000) / 1000
                    let change = Math.round((parseFloat(coin.change) + Number.EPSILON) * 100) / 100

                    let bgcolor = '#1F1B24'
                    let color = 'white'

                    if(change < 0) {
                        bgcolor = '#CF6679'
                        color = 'black'
                    }

                    coinData += `<tr key=${coin.uuid}>`
                    coinData +=     `<td>${coin.name}</td>`
                    coinData +=     `<td>${price}</td>`
                    coinData +=     `<td style=color:${color};background-color:${bgcolor};border-radius:5px;>${change}</td>`
                    coinData += `</tr>`

                })

                document.getElementById('coins').innerHTML = coinData
            })
        }
    })
    .catch((err) => {console.log(err)})


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