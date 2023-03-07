import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header />

      <div className="main">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
