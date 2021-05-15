import React from 'react'

function Crypts() {

    const currency = { "margin": "12vh 0vw 0vh 5vw", "width": "60vw", "height": "45vh" }

    const baseUrl = process.env.REACT_APP_API_URL
    const proxyUrl = process.env.REACT_APP_PROXY_SERVER_URL

    let coinData = ''

    fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then((response) => {
        if(response.ok) {
            response.json().then((res) => {

                res.forEach((coin) => {

                    let price = Math.round((parseFloat(coin.market_data.current_price.usd) + Number.EPSILON) * 1000) / 1000
                    let change = Math.round((parseFloat(coin.market_data.price_change_percentage_24h) + Number.EPSILON) * 100) / 100

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

                })

                document.getElementById('coins').innerHTML = coinData
            })
        }
    })
    .catch((err) => {console.log(err)})


    // finalResult
    // fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly")
    // .then(res => {
    // let result = []
    // res.json().then(ans => {
    //     ans.prices.map((data, index) => {
    //     let date = formatter(data[0])
    //     let price = Math.round((parseFloat(data[1]) + Number.EPSILON)*1000)/1000
    //     result.push([date, price])
    //     })
    //     finalResult = [...result]
    // })
    // })

    // function formatter(timestamp) {
    // var date = new Date(timestamp).getDate()
    // var month = new Date(timestamp).getMonth() + 1
    // var hour = new Date(timestamp).getHours()
    // return date + "/" + month + ": " + hour;
    // }


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