function About() {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="title">About Resumize</h1>
        <p className="description">
          Learn more about our mission to help job seekers land their dream roles
        </p>
      </div>
      <section className="feature-section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
          <h2 className="feature-title">Our Mission</h2>
          <p className="feature-description">
            We believe that everyone deserves a chance to showcase their best self when applying for jobs. 
            Resumize uses AI technology to help you tailor your resume to any job description, 
            increasing your chances of getting noticed by recruiters and landing interviews.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
