import './App.css';

function App() {
  return (
    <div className="App">
     
      <header className="header">
        <nav className="nav">
         
          <div className="nav-left">
            <button className="nav-button">Resumize</button>
            <button className="nav-button">About</button>
            <button className="nav-button">Builder</button>
            <button className="nav-button">Analyzer</button>
          </div>
          
          <div className="nav-right">
            <button className="nav-button">Theme</button>
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
    </div>
  );
}

export default App;
