import React from 'react'

import '../../../style/Card.css'
import '../../../style/Contact.css'
import {GitHubLogo} from '../../../assets/svg'
import Linkedin from '../../../assets/LinkedIn_icon.svg'
import Gmail from '../../../assets/Gmail_icon_(2020).svg'
import Instagram from '../../../assets/Instagram_logo_2016.svg'

function Contact() {

    return (
        <div className="card contact-card">
            <span className="quote">Don't Feel Shy<br/>To Say Hi!</span>

            <div className="socials">
                <Social link="https://github.com/anandb235" name="GitHub" logo={GitHubLogo} svg/>
                <Social link="https://www.linkedin.com/in/anand-borkar/" name="LinkedIn" logo={Linkedin}/>
                <Social link="mailto:borkaranand121@gmail.com" name="Gmail" logo={Gmail}/>
                <Social link="https://www.instagram.com/borkaranand/" name="Instagram" logo={Instagram}/>
            </div>
        </div>
    )
}

const Social = ({link, name, logo, svg}) => {
    return (
        <div className="social">
            {
                svg ?
                    logo:
                    <img src={logo} alt={`${name} Logo`} />
            }

            <a href={link} target="_new">{name}</a>
        </div>
    )
}

export default Contact