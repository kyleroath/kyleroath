import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Statements from '../content/About-Me'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../content/Transition'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <div>
                    <Hero/>
                    <div className="container-lg">
                    <About statements={Statements}/>
                    </div>
                    <Footer/> 
                </div>
        </motion.div>
        
    )
}

export default Home