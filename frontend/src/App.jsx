import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Builder from './pages/Builder';
import Analyzer from './pages/Analyzer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav className="nav">
            <div className="nav-left">
              <Link to="/" className="nav-brand">Resumize</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/builder" className="nav-link">Builder</Link>
              <Link to="/analyzer" className="nav-link">Analyzer</Link>
            </div>
            
            <div className="nav-right">
              <button className="theme-button" onClick={toggleTheme}>
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <button className="nav-button">Login</button>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/analyzer" element={<Analyzer />} />
        </Routes>

        <footer className="footer"> 
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-social">
              <a href="https://github.com/PeterMeas/resumize" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <p className="footer-copyright">&copy; 2025 Resumize. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
