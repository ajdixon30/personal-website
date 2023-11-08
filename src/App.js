import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Headshot from './components/Headshot';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App bg-dark bg-gradient pb-5 text-light">
      <Navbar />
      <About />
      <Portfolio />
      <Resume />
      <Headshot />
    </div>
  );
}

export default App;
