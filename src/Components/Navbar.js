import React from 'react'

function Navbar() {

    const navStyle = {
        "position": "absolute",
        "margin": "3vh 0vw 0vh 2vw",
        "display": "flex",
        "justifyContent": "center"
    }

    return (
        <div style={ navStyle }>
            <ham-burger style={{ "height": "3vh", "width": "4vw" }}>
                <svg viewBox="0 0 120 120">
                    <line x1="10" y1="0" x2="100" y2="0" style={{ "stroke": "#3b4ab8", "stroke-width": "11" }} />
                    <line x1="10" y1="25" x2="100" y2="25" style={{ "stroke": "#3b4ab8", "stroke-width": "5.5" }} />
                    <line x1="10" y1="50" x2="100" y2="50" style={{ "stroke": "#3b4ab8", "stroke-width": "6.5" }} />
                </svg>
            </ham-burger>
            <rate-radar style={ { "color": "#fff", "fontSize": "40px", "marginTop": "-2vh", "marginLeft": "1vw" } }>
                <span>Rate</span>
                <span style={ { "color": "#3b4ab8" } }>Radar</span>
            </rate-radar>
        </div>
    )
}

export default Navbar