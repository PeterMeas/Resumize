# Resumize

AI-powered resume tailoring application that optimizes your resume to match specific job descriptions.
![gg](https://github.com/user-attachments/assets/7b3739f9-ff42-4122-95f8-b42d81aae985)

## 🚀 Project Status: In Development (Frontend Phase)

## 📋 Development Roadmap

### Phase 1: Frontend Design & UI (Current Phase) ✅ In Progress
- [x] Initial project setup with React + Vite
- [x] Landing page hero section
- [x] Navigation header with theme toggle
- [x] Feature sections with placeholder animations
- [x] Responsive design (mobile/desktop)
- [x] Footer with social links
- [ ] Complete "About" page
- [ ] Complete "Builder" page UI mockup
- [ ] Complete "Analyzer" page UI mockup
- [ ] User authentication UI (login/signup forms)
- [ ] Resume upload interface design
- [ ] Job description input interface
- [ ] Results/comparison view UI
- [ ] Dark/Light theme implementation
- [ ] Animation polish and transitions

### Phase 2: Frontend Logic & Routing
- [ ] Set up React Router for navigation
- [ ] Implement state management (Context API or Redux)
- [ ] Form validation and error handling
- [ ] File upload functionality (client-side)
- [ ] Local storage for user preferences
- [ ] Mock data integration for testing UI flows
- [ ] Loading states and skeleton screens
- [ ] Error boundary implementation
- [ ] Accessibility (a11y) improvements

### Phase 3: Backend Architecture & API
- [ ] Set up Express.js server structure
- [ ] Design RESTful API endpoints
- [ ] Set up development/production environments
- [ ] Implement CORS and security middleware
- [ ] Error handling and logging system
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Rate limiting and request validation

### Phase 4: Resume Processing
- [ ] Implement file upload to temporary storage
- [ ] PDF parsing using pdf-parse or similar
- [ ] DOCX parsing for Word documents
- [ ] Text extraction and cleaning
- [ ] Resume structure detection (sections, bullets)
- [ ] Regex patterns for contact info, dates, etc.
- [ ] NLP integration for skill extraction
- [ ] Keyword frequency analysis

### Phase 5: AI Integration
- [ ] Research and select AI service (OpenAI, AWS Bedrock, etc.)
- [ ] Set up API keys and rate limits
- [ ] Implement prompt engineering for resume optimization
- [ ] Job description analysis endpoint
- [ ] Resume-to-job matching algorithm
- [ ] Content generation (bullet point improvement)
- [ ] ATS keyword optimization
- [ ] A/B testing different AI approaches

### Phase 6: Database & User Management
- [ ] Choose database solution (PostgreSQL, MongoDB, etc.)
- [ ] Design database schema
- [ ] User authentication (JWT tokens)
- [ ] User registration and login endpoints
- [ ] Password hashing and security
- [ ] User profile management
- [ ] Resume history storage
- [ ] Application tracking features

### Phase 7: AWS Deployment & Infrastructure
- [ ] Set up AWS account and IAM roles
- [ ] Configure S3 buckets for file storage
- [ ] Deploy backend to AWS Lambda or EC2
- [ ] Set up API Gateway
- [ ] Configure CloudFront for frontend hosting
- [ ] Set up RDS or DynamoDB
- [ ] Implement CloudWatch for monitoring
- [ ] Configure backup and disaster recovery

### Phase 8: Testing & Optimization
- [ ] Unit tests for frontend components
- [ ] Integration tests for API endpoints
- [ ] End-to-end testing (Cypress or Playwright)
- [ ] Performance optimization
- [ ] Security audit
- [ ] Load testing
- [ ] SEO optimization
- [ ] Analytics integration (Google Analytics)

### Phase 9: Advanced Features (Future)
- [ ] Multiple resume templates
- [ ] Cover letter generation
- [ ] LinkedIn profile optimization
- [ ] Interview preparation tips
- [ ] Salary negotiation insights
- [ ] Job application tracker
- [ ] Success rate analytics
- [ ] Chrome extension for job sites

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.2
- **Build Tool**: Vite 5.4
- **Routing**: React Router 7.9
- **Styling**: CSS3 with custom animations
- **HTTP Client**: Axios

### Backend (Planned)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: JWT (OAuth 2.0?)
- **File Processing**: pdf-parse, mammoth (DOCX)
- **NLP**: natural, compromise, or custom regex
- **AI**: OpenAI API / AWS Bedrock

### Cloud & Infrastructure (Planned)
- **Hosting**: AWS (Lambda/EC2 + S3 + CloudFront)
- **Database**: PostgreSQL/MongoDB
- **Storage**: AWS S3
- **CDN**: CloudFront
- **Monitoring**: CloudWatch

## 💻 Development Workflow

1. Always work on feature branches: `feature/your-feature-name`
2. Pull latest before starting work (avoid dupes on Mac): `git pull origin main --rebase`
3. Commit often with clear messages
4. Push and create PR for review
5. Delete branch after merge

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/PeterMeas/resumize.git
cd resumize

# Install all dependencies (root, backend, frontend)
npm run install:all

# Start development servers
npm start
```

### Available Scripts

```bash
# Start both frontend and backend
npm start

# Start only frontend (port 5173)
npm run start:frontend

# Start only backend (port 5000)
npm run start:backend

# Install all dependencies
npm run install:all
```

### Development URLs
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000 (when implemented)

## 📁 Project Structure

```
resumize/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── components/
│   ├── public/
│   └── package.json
├── backend/           # Express.js backend (planned)
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
└── README.md
```

## 🎯 Current Sprint Focus

**Sprint Goal**: Complete landing page and basic navigation structure

**Current Goals**:
- [ ] Finalize hero section animations
- [ ] Complete responsive design testing
- [ ] Add About page with team info
- [ ] Design Builder page wireframe
- [ ] Design Analyzer page wireframe

## 🤝 Contributing

This is a collaborative project. Please follow the development workflow and create feature branches for all new work.

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 👥 Team

- [PeterMeas](https://github.com/PeterMeas)
- [NemaAnsari](https://github.com/nemaansari)
---

**Note**: This project is under active development. Features and roadmap are subject to change.

