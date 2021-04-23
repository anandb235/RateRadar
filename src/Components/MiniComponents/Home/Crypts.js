import React from 'react'

import data from '../../../data/Data'

function Crypts() {

    const currency = { "margin": "12vh 0vw 0vh 5vw", "width": "60vw", "height": "45vh" }

    return (
        <card className="card" style={ currency }>
            <card-head>
                <card-title>Crypts</card-title>
                <currency-converter style={ { "text-align": "right" } }>
                    Currency: <current-currency>INR</current-currency>
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
                <tbody>
                    {data.map(data => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.growth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </card>
    )
}

export default Crypts