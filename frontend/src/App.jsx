import './App.css';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
        </div>
      </div>

      {/* Overview Section */}
      <section className="overview-section">
        <h2 className="overview-title">Overview</h2>
      </section>

      {/* Feature Section 1 */}
      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-text">
            <h2 className="feature-title">Smart Resume Analysis</h2>
            <p className="feature-description">
              Our AI-powered system analyzes your resume and compares it against job descriptions 
              to identify key areas for improvement. Get instant feedback on keyword optimization, 
              skill matching, and content relevance.
            </p>
            <ul className="feature-list">
              <li>✓ Keyword density analysis</li>
              <li>✓ ATS compatibility check</li>
              <li>✓ Skills gap identification</li>
              <li>✓ Industry-specific recommendations</li>
            </ul>
          </div>
          <div className="feature-animation">
            <div className="animation-placeholder">
              <p>Animation Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Reversed */}
      <section className="feature-section reverse">
        <div className="feature-container">
          <div className="feature-animation">
            <div className="animation-placeholder">
              <p>Animation Placeholder</p>
            </div>
          </div>
          <div className="feature-text">
            <h2 className="feature-title">Instant Optimization</h2>
            <p className="feature-description">
              Transform your resume in seconds with our intelligent content optimization. 
              Our system rewrites and restructures your experience to perfectly align with 
              your target role while maintaining authenticity.
            </p>
            <ul className="feature-list">
              <li>✓ Action-oriented language</li>
              <li>✓ Quantifiable achievements</li>
              <li>✓ Industry buzzwords</li>
              <li>✓ Format standardization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Section 3 */}
      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-text">
            <h2 className="feature-title">Export & Apply</h2>
            <p className="feature-description">
              Download your optimized resume in multiple formats ready for immediate submission. 
              Track your applications and get insights on your job search performance.
            </p>
            <ul className="feature-list">
              <li>✓ PDF, DOCX, and TXT formats</li>
              <li>✓ One-click downloads</li>
              <li>✓ Application tracking</li>
              <li>✓ Success analytics</li>
            </ul>
          </div>
          <div className="feature-animation">
            <div className="animation-placeholder">
              <p>Animation Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer"> 
        <div className="footer-content">
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/PeterMeas/resumize" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <p className="footer-copyright">&copy; 2025 Resumize. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
