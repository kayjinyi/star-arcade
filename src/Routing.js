import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Leaderboard from './components/pages/Leaderboard'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Leaderboard from './components/pages/Leaderboard'
import Match from './components/Match'
import Snake from './components/Snake'
import Flappy from './components/Flappy'
import Dinorun from './components/Dinorun'




function Routing () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/leaderboard" element={<Leaderboard/>}/>
                <Route path="/match" element={<Match/>}/>
                <Route path="/snake" element={<Snake/>}/>
                <Route path="/flappy" element={<Flappy/>}/>
                <Route path="/dino" element={<Dinorun/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Routing;