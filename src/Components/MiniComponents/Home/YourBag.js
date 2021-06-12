import React from 'react'
import "../../../style/YourBag.css"

const YourBag = () => {
    const gain = -1.69
    const invested = 200.00
    const total = invested + gain
    const total_int = Math.floor(total)
    const total_decimal = Math.floor((total - total_int).toFixed(3)*1000)

    return (
        <div className="card your-bag-card">
            <div className="bag-head">
                <span className="bag-title">Your Bag</span>
                <div className="coming-soon-tag">Feature Coming Soon!</div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="bag-value">
                <span className="current-val">{total_int}
                    <span className="current-val-dec">.{total_decimal}</span>
                    <span className="currency">USD</span>
                </span>
                <span className="gain-loss">Gain/Loss:
                    <span className={`gain-loss-val ${gain < 0 ? "loss" : "gain"}`}>{gain}</span>
                </span>
                <span className="invested">Invested: <span className="invested-val">{invested}</span></span>
            </div>
        </div>
    )
}

export default YourBag