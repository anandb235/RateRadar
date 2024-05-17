import React from "react";

export const RateTable = ({data, columns}) =>
    <table className="market-price-table">
        <thead className="header-row">
        <tr>
            {
                columns.map((i) =>
                    <th key={i}>{i}</th>
                )
            }
        </tr>
        </thead>
        <tbody>
        {data.map(coin => (
            <tr key={coin.id}>
                <td>{coin.name}</td>
                <td>{coin.price}</td>
                <td style={{color: coin.color, backgroundColor: coin.bgColor, borderRadius: '5px'}}>
                    {coin.change}
                </td>
            </tr>
        ))}
        </tbody>
    </table>