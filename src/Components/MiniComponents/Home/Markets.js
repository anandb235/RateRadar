import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../../Style/Markets.css'

const Markets = () => {

    const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(res => {
                const formattedData = res.data.map(coin => {
                    const price = Math.round((parseFloat(coin["current_price"]) + Number.EPSILON) * 1000) / 1000;
                    const change = Math.round((parseFloat(coin["price_change_percentage_24h"]) + Number.EPSILON) * 100) / 100;

                    return {
                        id: coin.id,
                        name: coin.name,
                        price: price,
                        change: change,
                        bgColor: change < 0 ? 'var(--error)' : 'var(--surface)',
                        color: change < 0 ? 'var(--on-error)' : 'var(--secondary)',
                    };
                });
                setCoinData(formattedData);
            })
            .catch(err => {
                console.log(err);
            });
    }, [baseUrl]);

    return (
        <div className="card market-card">
            <div className="card-head">
                <div className="card-title">The Market</div>
                <div className="currency-converter">
                    Currency: <span className="current-currency">USD</span>
                </div>
            </div>
            <div className="horizontal-divider"></div>
            <table>
                <thead className="header-row">
                <tr>
                    <th>Currency</th>
                    <th>Price</th>
                    <th>Growth</th>
                </tr>
                </thead>
                <tbody>
                {coinData.map(coin => (
                    <tr key={coin.id}>
                        <td>{coin.name}</td>
                        <td>{coin.price}</td>
                        <td style={{ color: coin.color, backgroundColor: coin.bgColor, borderRadius: '5px' }}>
                            {coin.change}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Markets;