import Navigation from './components/Navigation';
import PageContainer from './components/PageContainer';
import About from './components/pages/About';
import Leaderboard from './components/pages/Leaderboard';
import Home from './components/pages/Home';
import ChromeDinoGame from 'react-chrome-dino';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <ChromeDinoGame />
      <Navigation/>
      <Home/>
      <About/>
      <Leaderboard/>
    </div>
  );
}

export default App;