import React from 'react'
import '../../../Style/Markets.css'
import {useMarketData} from "../../../Hooks/useMarketData";

const Markets = () => {
    const { marketData, loading, error } = useMarketData(); // Corrected destructuring

    if (loading) {
        return <div>Loading...</div>; // Optional: Show loading state
    }

    if (error) {
        return <div>Error: {error}</div>; // Optional: Show error state
    }

    return (
        <div className="card market-card">
            <div className="card-head">
                <div className="card-title">The Market</div>
                <div className="currency-converter">
                    Currency: <span className="current-currency">USD</span>
                </div>
            </div>
            <div className="horizontal-divider"></div>
            <table className="market-price-table">
                <thead className="header-row">
                <tr>
                    <th>Currency</th>
                    <th>Price</th>
                    <th>Growth</th>
                </tr>
                </thead>
                <tbody>
                {marketData.map(coin => ( // Use marketData instead of data
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