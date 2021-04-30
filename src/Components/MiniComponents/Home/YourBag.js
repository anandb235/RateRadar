import React from 'react'

function YourBag() {

    const yourbag = { "margin": "12vh 10vw 0vh 70vw", "width": "25vw", "height": "45vh" }

    return (
        <div className="card" style={ yourbag }>
            <div className="bag-head">
                <span className="bag-title">Your Bag</span>
            </div>
            <div className="vals">
                <span className="current-val">000<span className="current-val-dec">.000</span><span className="currency">INR</span></span>
                <span className="gain-loss">Gain/Loss: <span className="gain-loss-val">-1.69</span> </span>
                <span className="invested">Invested: <span className="invested-val">200.00</span> </span>
            </div>
        </div>
    )
}

export default YourBag