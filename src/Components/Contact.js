import React from 'react'

import '../style/Card.css'
import '../style/Contact.css'

function Contact() {
    const contactCss = { "margin": "22vh 0vw 0vh 33vw", "width": "34vw", "height": "63vh" }

    return (
        <div className="card contact-card" style={ contactCss }>
            <span className="quote">Don't Feel Shy<br />To Say Hi !</span>

            <div className="socials">
                <a href="#">Github</a>
                <a href="#">LinkedIn</a>
                <a href="#">Gmail</a>
                <a href="#">Instagram</a>
            </div>
        </div>
    )
}

export default Contact