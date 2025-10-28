import './App.css';
import { useState } from 'react';

function App() {
  // State to track if dark mode is active
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
     
      <header className="header">
        <nav className="nav">
         
          <div className="nav-left">
            <a href="/" className="nav-brand">Resumize</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#builder" className="nav-link">Builder</a>
            <a href="#analyzer" className="nav-link">Analyzer</a>
          </div>
          
          <div className="nav-right">
            <button className="theme-button" onClick={toggleTheme}>
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button className="nav-button">Login</button>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="hero">
          <h1 className="title">Resumize</h1>
          <p className="subtitle">AI-powered resume tailoring</p>
          <p className="description">
            Transform your resume to match any job description with intelligent optimization
          </p>
          <button className="cta-button">Get Started</button>
          <footer className="footer"> 
            <div className = "footer-content">
              <div className = "footer-links">
                <a href="#">About</a>
                <a href="#">Contact Us</a>
              </div>
              <div className = "footer-social">
                <a href="https://github.com/PeterMeas/resumize">Github</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
