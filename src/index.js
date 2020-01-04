import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


import AppRouter from './components/AppRouter'
import './scss/index.scss'


const App = () => { 
    return (
        <div>
            <Router>
                <AppRouter/>
            </Router>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))