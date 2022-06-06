import Navigation from './components/Navigation';
import About from './components/pages/About';
import Leaderboard from './components/pages/Leaderboard';
import Home from './components/pages/Home';
import Match from './components/Match';
import Snake from './components/Snake';


import './style/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


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
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;