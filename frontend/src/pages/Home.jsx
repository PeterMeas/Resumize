import './Home.css';
import React, { useState, useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';

// Typing headline component
function TypingHeadline() {
  const lines = ['YOUR', 'CAREER', 'COMMAND', 'CENTER.'];
  const [typed, setTyped] = useState(Array(lines.length).fill(''));
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let timeoutId;

    function typeNext() {
      if (lineIdx >= lines.length) return;

      const current = lines[lineIdx];
      if (charIdx <= current.length) {
        setTyped(prev => {
          const copy = [...prev];
          copy[lineIdx] = current.slice(0, charIdx);
          return copy;
        });
        setCurrentLine(lineIdx);
        charIdx += 1;
        timeoutId = setTimeout(typeNext, 80);
      } else {
        // move to next line after short pause
        lineIdx += 1;
        charIdx = 0;
        timeoutId = setTimeout(typeNext, 300);
      }
    }

    typeNext();
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {typed.map((t, i) => (
        <span key={i} className="typing-line">
          {t}
          {i === currentLine && <span className="typing-cursor" />}
          <br />
        </span>
      ))}
    </>
  );
}

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <ParticleBackground />

        {/* Decorative command-center HUD behind the content */}
        <div className="command-hud" aria-hidden="true">
          <div className="hud-panel hud-top-left">
            <div className="hud-title">SYSTEM</div>
            <div className="hud-value">OK</div>
          </div>

          <div className="hud-panel hud-top-right">
            <div className="hud-title">ATS MATCH</div>
            <div className="hud-value">72%</div>
          </div>

          <div className="hud-floating hud-center-left">
            <div className="hud-line">RESUME ANALYSIS</div>
            <div className="hud-mini">last scan: 2m ago</div>
          </div>

          <div className="hud-scanline" />
        </div>

        <div className="container">
          <div className="hero-content">
            {/* Small badge */}
            <div className="hero-badge">
              <span className="badge badge-indigo">AI-POWERED CAREER TOOL</span>
            </div>

            {/* HUGE Brutal Headline (animated) */}
            <h1 className="hero-title">
              <TypingHeadline />
            </h1>

            {/* Subheadline */}
            <p className="hero-subtitle">
              Resume optimization. Job tracking. Interview analytics.<br />
              Everything you need to land your next role.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg">
                Get Started →
              </button>
              <button className="btn btn-glass btn-lg">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            EVERYTHING<br />
            YOU NEED
          </h2>

          <div className="features-grid">
            {/* Resume Optimizer */}
            <div className="feature-card glass">
              <div className="feature-icon">📄</div>
              <h3 className="feature-title">RESUME OPTIMIZER</h3>
              <p className="feature-description">
                Upload your resume and paste any job description. Our AI instantly rewrites your experience to match what hiring managers are looking for.
              </p>
              <div className="feature-status">
                <span className="badge badge-success">AVAILABLE NOW</span>
              </div>
            </div>

            {/* Job Tracker */}
            <div className="feature-card glass">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">APPLICATION TRACKER</h3>
              <p className="feature-description">
                Track every application, interview, rejection, and offer in one place. See your progress, analyze patterns, and stay organized.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">COMING SOON</span>
              </div>
            </div>

            {/* Job Search */}
            <div className="feature-card glass">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">JOB SEARCH HUB</h3>
              <p className="feature-description">
                Search across multiple job boards from one interface. Save listings, track applications, and never lose a promising opportunity.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">COMING SOON</span>
              </div>
            </div>

            {/* Interview Prep */}
            <div className="feature-card glass">
              <div className="feature-icon">💡</div>
              <h3 className="feature-title">INTERVIEW INSIGHTS</h3>
              <p className="feature-description">
                Get AI-generated interview questions based on the job description. Practice your answers and track your interview performance.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">COMING SOON</span>
              </div>
            </div>

            {/* Career Analytics */}
            <div className="feature-card glass">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">CAREER ANALYTICS</h3>
              <p className="feature-description">
                See your job search metrics: application-to-interview rate, response times, success patterns. Know what's working.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">COMING SOON</span>
              </div>
            </div>

            {/* Cover Letters */}
            <div className="feature-card glass">
              <div className="feature-icon">✉️</div>
              <h3 className="feature-title">COVER LETTER GENERATOR</h3>
              <p className="feature-description">
                Generate tailored cover letters that complement your optimized resume. Personalized for each application in seconds.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">COMING SOON</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Resume Tool */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">
            START WITH<br />
            YOUR RESUME
          </h2>

          <div className="process-grid">
            <div className="process-card glass">
              <div className="process-number">01</div>
              <h3 className="process-title">UPLOAD</h3>
              <p className="process-description">
                Drop your current resume (PDF or DOCX). No signup required. Your data stays private.
              </p>
            </div>

            <div className="process-card glass">
              <div className="process-number">02</div>
              <h3 className="process-title">PASTE JOB</h3>
              <p className="process-description">
                Copy the job description you're targeting. Our AI analyzes keywords, skills, and requirements.
              </p>
            </div>

            <div className="process-card glass">
              <div className="process-number">03</div>
              <h3 className="process-title">DOWNLOAD</h3>
              <p className="process-description">
                Get your optimized, ATS-friendly resume instantly. Ready to submit and land interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Example */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title center">
            SEE THE<br />
            DIFFERENCE
          </h2>

          <div className="comparison-grid">
            {/* Before */}
            <div className="comparison-card glass before">
              <div className="comparison-label">
                <span className="badge badge-red">BEFORE</span>
              </div>
              <div className="resume-content">
                <h4>Software Developer</h4>
                <ul className="resume-bullets">
                  <li>Worked on various projects</li>
                  <li>Used Python and JavaScript</li>
                  <li>Helped team with tasks</li>
                  <li>Fixed bugs and issues</li>
                </ul>
              </div>
              <div className="ats-score bad">
                <span className="score-label">ATS MATCH</span>
                <span className="score-value">LOW</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="comparison-arrow">→</div>

            {/* After */}
            <div className="comparison-card glass after">
              <div className="comparison-label">
                <span className="badge badge-success">OPTIMIZED</span>
              </div>
              <div className="resume-content">
                <h4>Senior Software Engineer</h4>
                <ul className="resume-bullets">
                  <li>Architected and deployed 3 full-stack applications serving 50K+ active users</li>
                  <li>Built scalable microservices using Python, React, and AWS with 99.9% uptime</li>
                  <li>Led team of 5 engineers through agile sprints and code review processes</li>
                  <li>Reduced critical bugs by 40% through automated testing implementation</li>
                </ul>
              </div>
              <div className="ats-score good">
                <span className="score-label">ATS MATCH</span>
                <span className="score-value">HIGH</span>
              </div>
            </div>
          </div>

          <div className="comparison-note">
            <p>* Example transformation. Actual results depend on your experience and target role.</p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-section">
        <div className="container">
          <h2 className="section-title center">
            WHAT'S<br />
            COMING
          </h2>

          <div className="roadmap-grid">
            <div className="roadmap-item glass">
              <div className="roadmap-status">
                <span className="badge badge-success">✓ LIVE</span>
              </div>
              <h3 className="roadmap-title">Resume Optimizer</h3>
              <p className="roadmap-description">
                AI-powered resume tailoring for any job description
              </p>
            </div>

            <div className="roadmap-item glass">
              <div className="roadmap-status">
                <span className="badge badge-indigo">Q1 2025</span>
              </div>
              <h3 className="roadmap-title">Application Tracker</h3>
              <p className="roadmap-description">
                Track applications, interviews, rejections, and offers
              </p>
            </div>

            <div className="roadmap-item glass">
              <div className="roadmap-status">
                <span className="badge badge-indigo">Q1 2025</span>
              </div>
              <h3 className="roadmap-title">Job Search Hub</h3>
              <p className="roadmap-description">
                Unified search across all major job boards
              </p>
            </div>

            <div className="roadmap-item glass">
              <div className="roadmap-status">
                <span className="badge badge-indigo">Q2 2025</span>
              </div>
              <h3 className="roadmap-title">Interview Prep</h3>
              <p className="roadmap-description">
                AI-generated practice questions and mock interviews
              </p>
            </div>

            <div className="roadmap-item glass">
              <div className="roadmap-status">
                <span className="badge badge-indigo">Q2 2025</span>
              </div>
              <h3 className="roadmap-title">Career Analytics</h3>
              <p className="roadmap-description">
                Data-driven insights on your job search performance
              </p>
            </div>

            <div className="roadmap-item glass">
              <div className="roadmap-status">
                <span className="badge badge-indigo">Q2 2025</span>
              </div>
              <h3 className="roadmap-title">Cover Letter AI</h3>
              <p className="roadmap-description">
                Generate tailored cover letters in seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-box glass">
            <h2 className="cta-title">
              START YOUR<br />
              JOB SEARCH<br />
              TODAY.
            </h2>
            <p className="cta-description">
              Begin with our resume optimizer.<br />
              More tools coming soon.
            </p>
            <button className="btn btn-primary btn-lg">
              Optimize Your Resume — Free
            </button>
            <p className="cta-fine-print">
              No credit card • No signup • Takes 2 minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;