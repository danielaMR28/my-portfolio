import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: 'GenAI Chatbot Solutions',
      description: 'AI-powered chatbots using Amazon Bedrock, Lambda and DynamoDB. 1,600+ active users in LATAM Telco with RAG patterns',
      tech: ['Amazon Bedrock', 'Lambda', 'DynamoDB', 'RAG'],
      link: '#'
    },
    {
      id: 2,
      title: 'Knowledge-Sharing Platform',
      description: 'Full-stack platform for AWS LATAM community with 600+ users. React, Amplify, REST APIs and secure authentication',
      tech: ['React', 'AWS Amplify', 'Lambda', 'API Gateway'],
      link: '#'
    },
    {
      id: 3,
      title: 'Serverless Internal Tools',
      description: 'Internal tools for AWS teams with event-driven serverless architectures for operational efficiency',
      tech: ['Lambda', 'API Gateway', 'DynamoDB', 'CloudFormation'],
      link: '#'
    },
    {
      id: 4,
      title: 'ETL Pipelines & BI',
      description: 'Automated ETL pipelines in SQL for large-scale data processing and strategic analysis',
      tech: ['SQL', 'ETL', 'Data Analysis', 'BI'],
      link: '#'
    }
  ];

  const experience = [
    {
      id: 1,
      role: 'Solutions Architect Intern',
      company: 'Amazon Web Services',
      period: 'Sept 2024 - Present',
      description: 'GenAI solutions architecture with Bedrock and SageMaker. 400% adoption growth. Technical workshops and demos at AWS Summit Mexico City 2025'
    },
    {
      id: 2,
      role: 'Business Intelligence Trainee',
      company: 'Business Insights México',
      period: 'April - Sept 2024',
      description: 'Designed and implemented automated ETL pipelines in SQL for large-scale data analysis and strategic insights'
    },
    {
      id: 3,
      role: 'Computer Systems Intern',
      company: 'General Motors de México',
      period: 'July - Dec 2023',
      description: 'Workflow automation with Power Apps and Power Automate for "Paperless" initiative in manufacturing operations'
    }
  ];

  return (
    <div className="App">
      <div className="stars"></div>
      <div className="stars2"></div>
      
      <nav className="pixel-nav">
        <div className="nav-container">
          <ul className="nav-menu">
            <li onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</li>
            <li onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</li>
            <li onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</li>
            <li onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</li>
            <li onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</li>
          </ul>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="pixel-avatar">
              <div className="avatar-pixel"></div>
            </div>
            <h1 className="glitch pixel-text" data-text="Hi! I'm Daniela">
              Hi! I'm Daniela
            </h1>
            <p className="subtitle pixel-text">Computer Engineer</p>
            <div className="pixel-button-group">
              <button className="pixel-button" onClick={() => setActiveSection('projects')}>
                View Projects
              </button>
              <button className="pixel-button secondary" onClick={() => setActiveSection('contact')}>
                Contact
              </button>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="section about-section">
          <div className="container">
            <h2 className="section-title pixel-text">About Me</h2>
            <div className="about-content">
              <div className="about-card pixel-card">
                <p className="pixel-text">
                  AWS Certified Solutions Architect with hands-on experience designing GenAI-powered cloud solutions across LATAM. 
                  Specialized in building scalable serverless architectures using Amazon Bedrock and SageMaker. 
                  Computer Engineering Student
                </p>
                <div className="certifications">
                  <h3 className="pixel-text" style={{fontSize: '0.9rem', color: 'var(--light-pink)', marginTop: '1.5rem', marginBottom: '1rem'}}>AWS Certifications</h3>
                  <div className="cert-item">Solutions Architect - Associate</div>
                  <div className="cert-item">AI Practitioner</div>
                  <div className="cert-item">Cloud Practitioner</div>
                </div>
                <div className="skills-grid">
                  <div className="skill-item">AWS Lambda</div>
                  <div className="skill-item">Bedrock</div>
                  <div className="skill-item">SageMaker</div>
                  <div className="skill-item">React</div>
                  <div className="skill-item">Python</div>
                  <div className="skill-item">Node.js</div>
                  <div className="skill-item">DynamoDB</div>
                  <div className="skill-item">API Gateway</div>
                  <div className="skill-item">GenAI</div>
                  <div className="skill-item">RAG</div>
                  <div className="skill-item">SQL</div>
                  <div className="skill-item">Git</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'experience' && (
        <section className="section experience-section">
          <div className="container">
            <h2 className="section-title pixel-text">Experience</h2>
            <div className="timeline">
              {experience.map((exp) => (
                <div key={exp.id} className="timeline-item pixel-card">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="pixel-text">{exp.role}</h3>
                    <h4 className="company pixel-text">{exp.company}</h4>
                    <span className="period">{exp.period}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'projects' && (
        <section className="section projects-section">
          <div className="container">
            <h2 className="section-title pixel-text">My Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card pixel-card">

                  <h3 className="pixel-text">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link pixel-button">
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="section contact-section">
          <div className="container">
            <h2 className="section-title pixel-text">Contact</h2>
            <div className="contact-content pixel-card">
              <p className="pixel-text">I'd love to hear from you!</p>
              <div className="contact-links">
                <a href="mailto:daniela.mejia.rivas@gmail.com" className="contact-link pixel-button">
                  Email
                </a>
                <a href="https://github.com/danielaMR28" target="_blank" rel="noopener noreferrer" className="contact-link pixel-button">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/daniela-mejia-rivas" target="_blank" rel="noopener noreferrer" className="contact-link pixel-button">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="footer pixel-text">
        <p>Made by Daniela Mejía © 2025</p>
      </footer>
    </div>
  );
}

export default App;
