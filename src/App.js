import Navigation from './components/Navigation';
import About from './components/pages/About';
import Leaderboard from './components/pages/Leaderboard';
import Home from './components/pages/Home';


import './style/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      <Leaderboard/>

      <BrowserRouter>
          <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;