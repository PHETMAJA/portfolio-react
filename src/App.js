import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header />

      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
