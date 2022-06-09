import Navigation from './components/Navigation';
import About from './components/pages/About';
import Leaderboard from './components/pages/Leaderboard';
import Home from './components/pages/Home';
import Match from './components/Match';
import Snake from './components/Snake';
import Flappy from './components/Flappy';
import Dino from './components/dino/Game';


import  { api } from "./util/api"

import './style/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dinorun from './components/Dinorun';


function App() {
  

  return (
    <div className="App">
      <div className='BGAnimation' >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      </div>
      <BrowserRouter>
          <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/match" element={<Match />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/flappy" element={<Flappy />} />
          <Route path="/dino" element={<Dinorun />} /> 


        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;