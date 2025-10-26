/**
 * Test NLP helper functions
 * Run with: node test-nlp.js
 */

const {
  extractKeywords,
  extractSkills,
  calculateMatchScore,
  analyzeResume
} = require('./nlp-helper');

const sampleResume = `John Doe
Software Engineer
john@example.com | (555) 123-4567

EXPERIENCE
Senior Software Engineer at Tech Corp (2020-2023)
- Developed scalable web applications using React and Node.js
- Implemented microservices architecture with Docker and Kubernetes
- Led team of 5 developers in agile environment
- Built REST APIs using Express and MongoDB

EDUCATION
BS Computer Science, University XYZ (2016-2020)

SKILLS
JavaScript, Python, React, Node.js, AWS, Docker, SQL, Git`;

const sampleJobDescription = `
We're looking for a Senior Full Stack Developer with experience in:
- React and Node.js development
- AWS cloud infrastructure
- Docker and Kubernetes
- Leading development teams
- Agile/Scrum methodologies
- RESTful API design
- Strong communication skills
`;

console.log('🧪 Testing NLP Helper Functions\n');
console.log('='.repeat(60));

console.log('\n1. Extract Keywords from Job Description:');
console.log('-'.repeat(60));
const jobKeywords = extractKeywords(sampleJobDescription);
console.log('Keywords:', jobKeywords.slice(0, 10));

console.log('\n2. Extract Skills from Resume:');
console.log('-'.repeat(60));
const resumeSkills = extractSkills(sampleResume);
console.log('Skills found:', resumeSkills);

console.log('\n3. Calculate Match Score:');
console.log('-'.repeat(60));
const matchScore = calculateMatchScore(sampleResume, sampleJobDescription);
console.log('Match Score:', matchScore.score + '%');
console.log('Matched Keywords:', matchScore.matchedKeywords.slice(0, 8));
console.log('Missing Keywords:', matchScore.missingKeywords.slice(0, 5));

console.log('\n4. Analyze Resume Structure:');
console.log('-'.repeat(60));
const analysis = analyzeResume(sampleResume);
console.log(analysis);

console.log('\n✅ NLP tests complete!\n');
