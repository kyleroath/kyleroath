import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Footer = () => { 
    return (
        <div>
        <div className="footer">
            <p className="footer--title">Get in touch/check out my work!</p>
        </div>
        <div className="footer footer--icon">
            {/* <FontAwesomeIcon color="#27b1e8" icon={['fab', 'twitter']} /> */}
            <a href="https://www.linkedin.com/in/kyleroath/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color="#0d75b5" icon={['fab', 'linkedin']}/></a>    
            <a href="https://github.com/kyleroath" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color="#2d264e" icon={['fab', 'github']}/></a>  
            <a href="https://stackoverflow.com/users/9990273/khyy" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color="#f17507" icon={['fab', 'stack-overflow']}/></a>                
        </div>
        <div className="footer footer--tm">
            <span>Made by Kyle Roath © {new Date().getFullYear()}</span>
        </div>
        </div>
    )
}

export default Footer