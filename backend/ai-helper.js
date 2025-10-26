/**
 * AI Helper for resume tailoring
 * Combines NLP analysis with OpenAI for intelligent tailoring
 */

require('dotenv').config();
const OpenAI = require('openai');
const { extractKeywords, extractSkills, calculateMatchScore } = require('./nlp-helper');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Tailor resume using hybrid NLP + AI approach
 */
async function tailorResume(resumeText, jobDescription) {
  try {
    // Step 1: Use NLP to analyze (FREE)
    console.log('Step 1: Analyzing with NLP...');
    const jobKeywords = extractKeywords(jobDescription);
    const resumeSkills = extractSkills(resumeText);
    const matchScore = calculateMatchScore(resumeText, jobDescription);
    
    console.log(`Initial match score: ${matchScore.score}%`);
    console.log(`Missing keywords: ${matchScore.missingKeywords.slice(0, 5).join(', ')}`);
    
    // Step 2: Build intelligent prompt with NLP insights
    const prompt = buildTailoringPrompt(
      resumeText, 
      jobDescription, 
      jobKeywords,
      matchScore.missingKeywords
    );
    
    // Step 3: Use OpenAI to tailor (PAID - but cheap)
    console.log('Step 2: Tailoring with OpenAI...');
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Cheaper model, still good quality
      messages: [
        {
          role: 'system',
          content: 'You are an expert resume writer. Tailor resumes to job descriptions while maintaining authenticity. Keep the same format and only enhance relevant sections.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1500
    });
    
    const tailoredResume = response.choices[0].message.content;
    
    // Step 4: Calculate new match score
    const newMatchScore = calculateMatchScore(tailoredResume, jobDescription);
    
    return {
      success: true,
      tailoredResume,
      originalResume: resumeText,
      analysis: {
        originalScore: matchScore.score,
        newScore: newMatchScore.score,
        improvement: newMatchScore.score - matchScore.score,
        keywordsAdded: matchScore.missingKeywords.filter(kw => 
          tailoredResume.toLowerCase().includes(kw)
        ),
        skillsFound: resumeSkills
      },
      tokensUsed: response.usage.total_tokens,
      estimatedCost: (response.usage.total_tokens / 1000) * 0.002 // ~$0.002 per 1K tokens
    };
    
  } catch (error) {
    console.error('Tailoring error:', error);
    throw new Error(`Failed to tailor resume: ${error.message}`);
  }
}

/**
 * Build intelligent prompt using NLP insights
 */
function buildTailoringPrompt(resumeText, jobDescription, keywords, missingKeywords) {
  return `Tailor this resume to match the job description. Focus on incorporating these missing keywords naturally: ${missingKeywords.slice(0, 10).join(', ')}.

IMPORTANT RULES:
1. Keep the same format and structure
2. Don't fabricate experience - only enhance existing content
3. Emphasize relevant skills and achievements
4. Use keywords naturally, not keyword stuffing
5. Keep it professional and authentic

ORIGINAL RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Please provide the tailored resume, maintaining the original format:`;
}

/**
 * Test OpenAI connection
 */
async function testConnection() {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say "Hello from OpenAI!"' }],
      max_tokens: 10
    });
    
    return {
      success: true,
      message: response.choices[0].message.content,
      model: response.model
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

module.exports = {
  tailorResume,
  testConnection
};
