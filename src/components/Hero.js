import React from 'react'
import {NavLink} from 'react-router-dom'
import Typewriter from './Typewriter'

const Header = (props) => { 
    return (
       <div className="hero-container">
           <Typewriter className="hero-title" text={`Kyle Roath`}/>
           <div className="hero-description">
            I am a software engineer with a passion for creating intuitive and functioning user experiences.
           <p className="hero-subdescription">Check out my <NavLink to="/projects">projects</NavLink>.</p>
           </div>
       </div> 
    )
}

export default Header