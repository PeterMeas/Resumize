import './App.css';

function App() {
  return (
    <div className="App">
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
