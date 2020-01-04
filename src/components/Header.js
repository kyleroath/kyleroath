import React from 'react'
import { Link } from 'react-router-dom'


const DashboardPortfolio = () => { 
    return (
        <div className="header-container">
            <header className="header">
                <Link to="/">Home</Link>
                <Link to="Projects">Projects</Link>
            </header>
        </div>
    )
}

export default DashboardPortfolio