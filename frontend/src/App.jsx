import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Builder from './pages/Builder';
import Analyzer from './pages/Analyzer';

function App() {
  return (
    <main>
    <Router>
      <div className="App">
        <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="nav-brand">RESUMIZE</Link>
            <Link to="/" className="nav-link-brutal active">HOME</Link>
            <Link to="/about" className="nav-link-brutal">ABOUT</Link>
            <Link to="/builder" className="nav-link-brutal">BUILD</Link>
            <Link to="/analyzer" className="nav-link-brutal">ANALYZE</Link>
          </div>
        <div className="nav-right">
          <button className="nav-button">LOGIN</button>
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
    </main>
  );
}

export default App;
