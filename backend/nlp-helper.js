/**
 * NLP Helper functions
 * Uses natural and compromise for text analysis
 */

const natural = require('natural');
const nlp = require('compromise');

/**
 * Extract keywords from job description
 */
function extractKeywords(text) {
  if (!text) return [];
  
  // Use TF-IDF to find important words
  const tokenizer = new natural.WordTokenizer();
  const words = tokenizer.tokenize(text.toLowerCase());
  
  // Remove common stop words
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should',
    'could', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
  ]);
  
  const keywords = words.filter(word => 
    word.length > 3 && !stopWords.has(word)
  );
  
  // Get unique keywords with frequency
  const frequency = {};
  keywords.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  // Sort by frequency and return top keywords
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([word]) => word);
}

/**
 * Extract skills and technologies from text
 */
function extractSkills(text) {
  if (!text) return [];
  
  const doc = nlp(text);
  
  // Common tech skills to look for
  const techKeywords = [
    'javascript', 'python', 'java', 'react', 'node', 'aws', 'docker',
    'kubernetes', 'sql', 'mongodb', 'postgresql', 'git', 'agile',
    'scrum', 'rest', 'api', 'microservices', 'typescript', 'html',
    'css', 'angular', 'vue', 'express', 'django', 'flask', 'spring',
    'machine learning', 'data science', 'analytics', 'leadership',
    'management', 'communication', 'problem solving'
  ];
  
  const foundSkills = [];
  const lowerText = text.toLowerCase();
  
  techKeywords.forEach(skill => {
    if (lowerText.includes(skill)) {
      foundSkills.push(skill);
    }
  });
  
  return [...new Set(foundSkills)];
}

/**
 * Calculate match score between resume and job description
 */
function calculateMatchScore(resumeText, jobDescription) {
  const jobKeywords = new Set(extractKeywords(jobDescription));
  const resumeKeywords = new Set(extractKeywords(resumeText));
  
  // Calculate overlap
  const intersection = [...jobKeywords].filter(keyword => 
    resumeKeywords.has(keyword)
  );
  
  const score = jobKeywords.size > 0 
    ? (intersection.length / jobKeywords.size) * 100 
    : 0;
  
  return {
    score: Math.round(score),
    matchedKeywords: intersection,
    missingKeywords: [...jobKeywords].filter(k => !resumeKeywords.has(k))
  };
}

/**
 * Analyze resume structure
 */
function analyzeResume(text) {
  const doc = nlp(text);
  
  return {
    wordCount: text.split(/\s+/).length,
    hasContactInfo: /email|phone|@/.test(text.toLowerCase()),
    hasExperience: /experience|work|employment/i.test(text),
    hasEducation: /education|degree|university|college/i.test(text),
    hasSkills: /skills|technologies|proficient/i.test(text)
  };
}

module.exports = {
  extractKeywords,
  extractSkills,
  calculateMatchScore,
  analyzeResume
};
