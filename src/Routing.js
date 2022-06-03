import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Leaderboard from './components/pages/Leaderboard'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Leaderboard from './components/pages/Leaderboard'

function Routing () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/leaderboard" element={<Leaderboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;