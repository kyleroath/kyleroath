import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => { 
    return (
        <div>
            <div className="hero-container">
                <div className="hero-warning">
                <p>404 Not Found!</p>
                </div>
                <FontAwesomeIcon className="hero-icon" color="#525f7f" icon={faSadTear}/>
            </div>
            <div className="footer footer--tm">
            <span>Made by Kyle Roath © {new Date().getFullYear()}</span>
            </div>
        </div>
    )
}

export default NotFound