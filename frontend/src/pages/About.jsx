function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="status-badge-wrapper">
             <span className="status-badge badge-pulse">🚧 FRONTEND PROTOTYPE</span>
          </div>
          <h1 className="about-title">
            CAREER<br />
            ENGINEERING
          </h1>
          <p className="about-subtitle">
            We're building the open-source standard for job application infrastructure.
            <br />
            <span className="text-accent">Currently in active development.</span>
          </p>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="container">
          <div className="manifesto-grid">
            <div className="manifesto-card glass">
              <div className="card-icon">💡</div>
              <h3>The Origin Story</h3>
              <p>
                We got tired of maintaining 5 different versions of our resumes in Word documents. 
                We got tired of guessing which keywords the ATS wanted. 
                We realized that as developers, we treat our code with version control, CI/CD, and linting... so why do we treat our careers like it's 1999?
              </p>
            </div>
            
            <div className="manifesto-card glass">
              <div className="card-icon">🚧</div>
              <h3>Current Status</h3>
              <p>
                <strong>Honesty time:</strong> What you see right now is the <em>frontend architecture</em>. We are actively building the backend services to deploy on <strong>AWS</strong>.
                <br/><br/>
                We are "building in public." This means you can see the code, critique the design, and help us build the actual logic that powers this thing.
              </p>
            </div>

             <div className="manifesto-card glass">
              <div className="card-icon">🔓</div>
              <h3>The Philosophy</h3>
              <p>
                <strong>Open Source + Cloud:</strong> We host the official instance on AWS for convenience, but the code is 100% public.
                <br/>
                <strong>No Vendor Lock-in:</strong> Don't like our cloud? Self-host it on your own server.
                <br/>
                <strong>Developer Centric:</strong> CLI tools, JSON schemas, and Git integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title center">HELP US BUILD</h2>
          <p className="stack-description">
            We need contributors! If you know Node.js, Python, or have experience with LLM APIs, grab an issue on GitHub.
          </p>
          <div className="stack-grid">
            <div className="stack-item active">React (Frontend)</div>
            <div className="stack-item active">Vite (Build Tool)</div>
            <div className="stack-item pending">Node.js (Backend)</div>
            <div className="stack-item pending">Ollama (Local AI)</div>
            <div className="stack-item pending">PostgreSQL (DB)</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
