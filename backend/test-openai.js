/**
 * Test OpenAI connection
 * Run with: node test-openai.js
 */

const { testConnection, tailorResume } = require('./ai-helper');

console.log('🧪 Testing OpenAI Connection...\n');

// Test 1: Check if API key works
testConnection()
  .then(result => {
    if (result.success) {
      console.log('✅ OpenAI connected successfully!');
      console.log('Response:', result.message);
      console.log('Model:', result.model);
      console.log('\n' + '='.repeat(60));
      
      // Test 2: Try tailoring a simple resume
      console.log('\n🧪 Testing Resume Tailoring...\n');
      
      const testResume = `John Doe
Software Engineer
john@example.com

EXPERIENCE
Developer at Tech Co (2020-2023)
- Built web applications
- Worked with teams

SKILLS
JavaScript, HTML, CSS`;

      const testJob = `Looking for a React developer with Node.js experience 
and team leadership skills. Must know JavaScript and modern frameworks.`;

      return tailorResume(testResume, testJob);
    } else {
      console.error('❌ OpenAI connection failed:', result.error);
      throw new Error(result.error);
    }
  })
  .then(result => {
    console.log('\n✅ Tailoring successful!\n');
    console.log('Original Score:', result.analysis.originalScore + '%');
    console.log('New Score:', result.analysis.newScore + '%');
    console.log('Improvement:', '+' + result.analysis.improvement + '%');
    console.log('Keywords Added:', result.analysis.keywordsAdded.join(', '));
    console.log('\nTokens Used:', result.tokensUsed);
    console.log('Estimated Cost: $' + result.estimatedCost.toFixed(4));
    console.log('\nTailored Resume:');
    console.log('-'.repeat(60));
    console.log(result.tailoredResume);
  })
  .catch(error => {
    console.error('\n❌ Test failed:', error.message);
  });
