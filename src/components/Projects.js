import React from 'react'
import Typewriter from './Typewriter'
import Project from './Project-Builds'
import ProjectData from '../content/My-Projects'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../content/Transition'
import Footer from './Footer'

const Projects = (props) => { 
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="hero-container">
            <Typewriter className="hero-title" text={`My Projects`}/>
            <div className="hero-description">
                A few of the fun and challenge based side projects I've done.
            </div>
                <Project projects={ProjectData}/>
            <Footer/> 
            </div> 
        </motion.div>
     )
}

export default Projects