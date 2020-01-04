import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './Header'
import Projects from './Projects'
import NotFound from '../pages/404'
import Home from '../pages/home'


const AppRouter = () => { 
    const location = useLocation()

    return (
        <div>
                <div className="hero-container">
                    <Header className="hero-title"/>
                </div>
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            <Route path="/" component={Home} exact={true}></Route>
                            <Route path="/projects" component={Projects}/>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </AnimatePresence>
        </div>
        
    )
}

export default AppRouter