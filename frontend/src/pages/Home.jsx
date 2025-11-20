import './Home.css';
import React, { useState, useEffect, useRef } from 'react';

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
        <div className="container hero-split">
          <div className="hero-content">
            {/* Small badge */}
            <div className="hero-badge">
              <span className="badge badge-indigo">v2.0.0-beta</span>
              <span className="badge badge-outline">MIT LICENSED</span>
            </div>

            {/* HUGE Brutal Headline (animated) */}
            <h1 className="hero-title">
              <TypingHeadline />
            </h1>

            {/* Subheadline */}
            <p className="hero-subtitle">
              The open-source career infrastructure for developers. Version control your resume, track applications with git-like precision, and deploy your career.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg">
                INITIALIZE REPO
              </button>
              <button className="btn btn-outline btn-lg">
                <span className="icon-github">★</span> STAR ON GITHUB
              </button>
            </div>
          </div>

          {/* Visual Feature: Code Editor + Preview */}
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <div className="window-title">resume.json</div>
              </div>
              <div className="window-body">
                <div className="code-line"><span className="c-purple">"basics"</span>: {'{'}</div>
                <div className="code-line indent">
                  <span className="c-attr">"name"</span>: <span className="c-string">"Alex Dev"</span>,
                </div>
                <div className="code-line indent">
                  <span className="c-attr">"label"</span>: <span className="c-string">"Full Stack Engineer"</span>,
                </div>
                <div className="code-line indent">
                  <span className="c-attr">"status"</span>: <span className="c-green">"HIRED"</span>
                </div>
                <div className="code-line">{'}'},</div>
                <div className="code-line"><span className="c-purple">"skills"</span>: [</div>
                <div className="code-line indent">
                  <span className="c-string">"React"</span>, <span className="c-string">"Node.js"</span>, <span className="c-string">"TypeScript"</span>
                </div>
                <div className="code-line">]</div>
                <div className="cursor-block"></div>
              </div>
            </div>
            
            {/* Floating "Compiled" Card */}
            <div className="compiled-card">
              <div className="compiled-header">BUILD SUCCESS</div>
              <div className="compiled-body">
                <div className="mini-resume">
                  <div className="mini-line title"></div>
                  <div className="mini-line subtitle"></div>
                  <div className="mini-block"></div>
                  <div className="mini-block"></div>
                </div>
                <div className="build-badge">ATS SCORE: 98%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview - Bento Grid Layout */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            SYSTEM<br />
            MODULES
          </h2>

          <div className="bento-grid">
            {/* Resume Optimizer - Large */}
            <div className="bento-card glass span-2">
              <div className="bento-header">
                <span className="feature-icon">⚡</span>
                <h3 className="feature-title">KEYWORD INJECTION ENGINE</h3>
              </div>
              <p className="feature-description">
                Powered by open-source LLMs to analyze job descriptions and intelligently inject high-value keywords into your resume schema. Maximizes ATS pass rates without sounding robotic.
              </p>
              <div className="feature-status">
                <span className="badge badge-success">v1.0.0</span>
              </div>
            </div>

            {/* Job Tracker - Large */}
            <div className="bento-card glass span-2">
              <div className="bento-header">
                <span className="feature-icon">🔄</span>
                <h3 className="feature-title">APPLICATION STATE MANAGEMENT</h3>
              </div>
              <p className="feature-description">
                Kanban-style tracking for your application lifecycle. Monitor state changes from "Applied" to "Offer" with zero latency.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">BETA</span>
              </div>
            </div>

            {/* Portfolio Generator */}
            <div className="bento-card glass">
              <div className="feature-icon">⚛️</div>
              <h3 className="feature-title">STATIC SITE GEN</h3>
              <p className="feature-description">
                Compile your resume JSON into a performant personal website.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">SOON</span>
              </div>
            </div>

            {/* Interview Prep */}
            <div className="bento-card glass">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">INTERVIEW RUNTIME</h3>
              <p className="feature-description">
                Simulate technical interviews with AI-driven context.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">SOON</span>
              </div>
            </div>

            {/* Career Analytics */}
            <div className="bento-card glass">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">METRICS</h3>
              <p className="feature-description">
                Visualize funnel conversion rates and response times.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">SOON</span>
              </div>
            </div>

            {/* Cover Letters */}
            <div className="bento-card glass">
              <div className="feature-icon">📝</div>
              <h3 className="feature-title">COVER LETTER COMPILER</h3>
              <p className="feature-description">
                Auto-generate context-aware cover letters.
              </p>
              <div className="feature-status">
                <span className="badge badge-indigo">SOON</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source / Community Section */}
      <section className="open-source-section">
        <div className="container">
          <div className="os-content">
            <div className="os-badge">
              <span className="badge badge-indigo">OPEN SOURCE</span>
            </div>
            <h2 className="section-title">
              BUILT IN<br />
              PUBLIC
            </h2>
            <p className="os-description">
              Resumize is free, open-source software. We believe career tools should be transparent, not black boxes. 
              Audit our algorithms, contribute to the codebase, or self-host your own instance.
            </p>
            
            <div className="os-stats-grid">
              <div className="os-stat-card glass">
                <div className="stat-value">MIT</div>
                <div className="stat-label">License</div>
              </div>
              <div className="os-stat-card glass">
                <div className="stat-value">100%</div>
                <div className="stat-label">Transparent</div>
              </div>
              <div className="os-stat-card glass">
                <div className="stat-value">Local</div>
                <div className="stat-label">Privacy First</div>
              </div>
            </div>

            <div className="os-actions">
              <a href="https://github.com/PeterMeas/resumize" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <span className="icon-github">★</span> STAR ON GITHUB
              </a>
              <a href="https://github.com/PeterMeas/resumize/fork" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
                FORK REPO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Example - Git Diff Style */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title center">
            REVIEW<br />
            CHANGES
          </h2>

          <div className="diff-editor glass">
            <div className="editor-tabs">
              <div className="editor-tab active">
                <span className="tab-icon">�</span>
                resume.md <span className="tab-status">M</span>
              </div>
              <div className="editor-actions">
                <span className="action-dot"></span>
                <span className="action-dot"></span>
                <span className="action-dot"></span>
              </div>
            </div>
            
            <div className="diff-view">
              {/* Line 12 */}
              <div className="diff-row">
                <div className="diff-gutter">12</div>
                <div className="diff-code">### Experience</div>
              </div>
              
              {/* Deletion */}
              <div className="diff-row deletion">
                <div className="diff-gutter">13</div>
                <div className="diff-code">
                  <span className="diff-marker">-</span>
                  Worked on various projects using React and Node.js
                </div>
              </div>
              
              {/* Addition */}
              <div className="diff-row addition">
                <div className="diff-gutter">13</div>
                <div className="diff-code">
                  <span className="diff-marker">+</span>
                  Architected scalable frontend architecture using React and Node.js
                </div>
              </div>

              {/* Deletion */}
              <div className="diff-row deletion">
                <div className="diff-gutter">14</div>
                <div className="diff-code">
                  <span className="diff-marker">-</span>
                  Helped team with tasks and fixed bugs
                </div>
              </div>

              {/* Addition */}
              <div className="diff-row addition">
                <div className="diff-gutter">14</div>
                <div className="diff-code">
                  <span className="diff-marker">+</span>
                  Led team of 5 engineers and reduced technical debt by 40%
                </div>
              </div>

               {/* Deletion */}
               <div className="diff-row deletion">
                <div className="diff-gutter">15</div>
                <div className="diff-code">
                  <span className="diff-marker">-</span>
                  Made the website faster
                </div>
              </div>

              {/* Addition */}
              <div className="diff-row addition">
                <div className="diff-gutter">15</div>
                <div className="diff-code">
                  <span className="diff-marker">+</span>
                  Optimized critical rendering path, improving Core Web Vitals by 25%
                </div>
              </div>
            </div>
            
            <div className="editor-statusbar">
              <div className="status-item">master*</div>
              <div className="status-item">Ln 15, Col 82</div>
              <div className="status-item">UTF-8</div>
              <div className="status-item">Markdown</div>
            </div>
          </div>

          <div className="comparison-note">
            <p className="mono-text">$ git commit -m "feat: optimize resume for senior role"</p>
          </div>
        </div>
      </section>

      {/* Roadmap Section - Kanban Board */}
      <section className="roadmap-section">
        <div className="container">
          <h2 className="section-title center">
            SYSTEM<br />
            ROADMAP
          </h2>

          <div className="kanban-board">
            {/* Column 1: Shipped */}
            <div className="kanban-column">
              <div className="kanban-header">
                <span className="status-dot success"></span>
                <span className="column-title">SHIPPED (v1.0)</span>
                <span className="column-count">1</span>
              </div>
              
              <div className="kanban-card glass">
                <div className="card-tags">
                  <span className="tag tag-core">CORE</span>
                </div>
                <h4 className="card-title">Resume Optimizer</h4>
                <p className="card-desc">AI-powered resume tailoring for any job description.</p>
              </div>
            </div>

            {/* Column 2: In Progress */}
            <div className="kanban-column">
              <div className="kanban-header">
                <span className="status-dot warning"></span>
                <span className="column-title">IN PROGRESS</span>
                <span className="column-count">3</span>
              </div>

              <div className="kanban-card glass active-card">
                <div className="card-tags">
                  <span className="tag tag-feature">FEATURE</span>
                </div>
                <h4 className="card-title">Keyword Injection</h4>
                <p className="card-desc">Intelligent keyword extraction and placement.</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '40%'}}></div>
                </div>
              </div>

              <div className="kanban-card glass active-card">
                <div className="card-tags">
                  <span className="tag tag-feature">FEATURE</span>
                </div>
                <h4 className="card-title">Application Tracker</h4>
                <p className="card-desc">Kanban board for tracking job applications.</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '75%'}}></div>
                </div>
              </div>

              <div className="kanban-card glass">
                <div className="card-tags">
                  <span className="tag tag-integration">INTEGRATION</span>
                </div>
                <h4 className="card-title">Job Search Hub</h4>
                <p className="card-desc">Unified search across LinkedIn, Indeed, Glassdoor.</p>
              </div>
            </div>

            {/* Column 3: Backlog */}
            <div className="kanban-column">
              <div className="kanban-header">
                <span className="status-dot neutral"></span>
                <span className="column-title">BACKLOG (v2.0)</span>
                <span className="column-count">3</span>
              </div>

              <div className="kanban-card glass">
                <h4 className="card-title">Interview Prep</h4>
                <p className="card-desc">AI mock interviews with voice feedback.</p>
              </div>

              <div className="kanban-card glass">
                <h4 className="card-title">Career Analytics</h4>
                <p className="card-desc">Funnel visualization and metrics.</p>
              </div>
              
              <div className="kanban-card glass">
                <h4 className="card-title">Cover Letter AI</h4>
                <p className="card-desc">Context-aware cover letter generation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-box glass">
            <h2 className="cta-title">
              READY TO<br />
              DEPLOY?
            </h2>
            <p className="cta-description">
              Initialize your career infrastructure today.<br />
              Open source. Local-first. Developer ready.
            </p>
            <button className="btn btn-primary btn-lg">
              INITIALIZE CAREER
            </button>
            <p className="cta-fine-print">
              <span className="mono-text">npm install resumize@latest</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;