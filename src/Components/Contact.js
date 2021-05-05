import React from 'react'

import '../style/Card.css'
import '../style/Contact.css'

function Contact() {
    const contactCss = { "margin": "22vh 0vw 0vh 33vw", "width": "34vw", "height": "63vh" }

    return (
        <div className="card contact-card" style={ contactCss }>
            <span className="quote">Don't Feel Shy<br />To Say Hi !</span>

            <div className="socials">
                <a href="https://github.com/anandb235" target="_new" className="social">Github</a>
                <a href="https://www.linkedin.com/in/anand-borkar/" target="_new" className="social">LinkedIn</a>
                <a href="mailto:borkaranand121@gmail.com" target="_new" className="social">Gmail</a>
                <a href="https://www.instagram.com/borkaranand/" target="_new" className="social">Instagram</a>
            </div>
        </div>
    )
}

export default Contact