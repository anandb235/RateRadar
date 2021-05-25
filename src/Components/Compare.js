import React from 'react'
import CompareCoin from './MiniComponents/Compare/CompareCoin'
import VersusAnimation from './MiniComponents/Compare/VersusAnimation'

import '../style/Compare.css'
import '../style/Card.css'

function Compare() {

    const compareChart = {
        "margin": "27vh 0vw 0vh 20vh",
        "width": "80vw",
        "height": "65vh"
    }

    return (
        <>
            <div className="card" style={compareChart}>
                <div class="container">

                    <CompareCoin coin="bitcoin" />

                    <VersusAnimation />

                    <CompareCoin coin="ethereum" />

                </div>
            </div>
        </>
    )
}

export default Compare