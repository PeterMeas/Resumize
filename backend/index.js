/**
 * AWS Lambda handler for Resumize
 * Routes requests to appropriate handlers
 */

require('dotenv').config();
const { tailorResume } = require('./ai-helper');

// CORS headers for all responses
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
};

/**
 * Handle resume upload
 */
const handleUpload = async (body) => {
  const { resumeText, fileName } = body;
  
  if (!resumeText) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Resume text is required' })
    };
  }
  
  // For now, we'll just validate and return success
  // Later we can add S3 storage or processing
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Resume uploaded successfully!',
      fileName: fileName || 'resume.txt',
      resumeLength: resumeText.length,
      timestamp: new Date().toISOString()
    })
  };
};

/**
 * Handle resume tailoring
 */
const handleTailor = async (body) => {
  const { resumeText, jobDescription } = body;
  
  // Validate inputs
  if (!resumeText || !jobDescription) {
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: 'Both resumeText and jobDescription are required' 
      })
    };
  }
  
  try {
    // Use hybrid NLP + AI tailoring
    const result = await tailorResume(resumeText, jobDescription);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        tailoredResume: result.tailoredResume,
        analysis: result.analysis,
        cost: {
          tokensUsed: result.tokensUsed,
          estimatedCost: result.estimatedCost
        },
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Tailoring error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to tailor resume',
        message: error.message
      })
    };
  }
};

/**
 * Health check endpoint
 */
const handleHealthCheck = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'ok',
      message: 'Resumize API is running!',
      timestamp: new Date().toISOString()
    })
  };
};

/**
 * Main Lambda handler
 */
exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  
  try {
    // Parse the request body
    const body = event.body ? JSON.parse(event.body) : {};
    const path = event.path || '/';
    const method = event.httpMethod || 'GET';
    
    let result;
    
    // Route to appropriate handler based on path
    if (path === '/upload' && method === 'POST') {
      result = await handleUpload(body);
    } else if (path === '/tailor' && method === 'POST') {
      result = await handleTailor(body);
    } else if (path === '/health' || path === '/') {
      result = await handleHealthCheck();
    } else {
      result = {
        statusCode: 404,
        body: JSON.stringify({ error: 'Endpoint not found' })
      };
    }
    
    // Add CORS headers to response
    result.headers = {
      'Content-Type': 'application/json',
      ...corsHeaders,
      ...result.headers
    };
    
    return result;
    
  } catch (error) {
    console.error('Error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      },
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};
