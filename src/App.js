import Navigation from './components/Navigation';
import About from './components/pages/About';
import Leaderboard from './components/pages/Leaderboard';
import Home from './components/pages/Home';
import Match from './components/Match';
import Snake from './components/Snake';
import  { api } from "./util/api"

import './style/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
          <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/match" element={<Match />} />
          <Route path="/snake" element={<Snake />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;