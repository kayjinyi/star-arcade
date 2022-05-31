import './style/App.css';
import Navigation from './components/Navigation';
import PageContainer from './components/PageContainer';
import About from './components/pages/About';
import Leaderboard from './components/pages/Leaderboard';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      <Leaderboard/>
    </div>
  );
}

export default App;