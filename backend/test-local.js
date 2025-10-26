/**
 * Local test script for Lambda function
 * Run with: node test-local.js
 */

const handler = require('./index').handler;

// Test 1: Health check
const testHealthCheck = {
  httpMethod: 'GET',
  path: '/health',
  headers: {
    'Content-Type': 'application/json'
  },
  body: null
};

// Test 2: Resume upload
const testUpload = {
  httpMethod: 'POST',
  path: '/upload',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    resumeText: `John Doe
Software Engineer
Email: john@example.com

EXPERIENCE
Senior Developer at Tech Corp
- Built scalable web applications
- Led team of 5 developers

EDUCATION
BS Computer Science, University XYZ`,
    fileName: 'john_doe_resume.txt'
  })
};

// Test 3: Resume tailoring
const testTailor = {
  httpMethod: 'POST',
  path: '/tailor',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    resumeText: `John Doe
Software Engineer
john@example.com

EXPERIENCE
Developer at Tech Co (2020-2023)
- Built web applications
- Worked with teams

SKILLS
JavaScript, HTML, CSS`,
    jobDescription: `Looking for a React developer with Node.js experience 
and team leadership skills. Must know JavaScript and modern frameworks.`
  })
};

console.log('🧪 Testing Lambda function locally...\n');

// Run health check test
console.log('Test 1: Health Check');
console.log('='.repeat(50));
handler(testHealthCheck)
  .then(response => {
    console.log('✅ Status:', response.statusCode);
    console.log('Response:', JSON.parse(response.body));
    console.log('\n');
    
    // Run upload test
    console.log('Test 2: Resume Upload');
    console.log('='.repeat(50));
    return handler(testUpload);
  })
  .then(response => {
    console.log('✅ Status:', response.statusCode);
    console.log('Response:', JSON.parse(response.body));
    console.log('\n');
    
    // Run tailor test
    console.log('Test 3: Resume Tailoring (This will take a few seconds...)');
    console.log('='.repeat(50));
    return handler(testTailor);
  })
  .then(response => {
    console.log('✅ Status:', response.statusCode);
    const result = JSON.parse(response.body);
    
    if (result.success) {
      console.log('\n📊 Analysis:');
      console.log('  Original Score:', result.analysis.originalScore + '%');
      console.log('  New Score:', result.analysis.newScore + '%');
      console.log('  Improvement:', '+' + result.analysis.improvement + '%');
      console.log('\n💰 Cost:');
      console.log('  Tokens Used:', result.cost.tokensUsed);
      console.log('  Estimated Cost: $' + result.cost.estimatedCost.toFixed(4));
      console.log('\n📝 Tailored Resume:');
      console.log('-'.repeat(50));
      console.log(result.tailoredResume);
    } else {
      console.log('Error:', result);
    }
  })
  .catch(error => {
    console.error('❌ Error:', error);
  });
