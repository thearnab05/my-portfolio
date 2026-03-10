'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: "Project: Red Light, Green Light",
    description: "A high-precision motion detection system designed for elimination-style playground games.",
    tags: ["Next.js", "AI", "Motion Sensors"],
    link: "#"
  },
  {
    title: "Protocol: Honeycomb",
    description: "An intricate pattern-extraction algorithm for delicate high-pressure operations.",
    tags: ["React", "Custom Hooks", "SVG"],
    link: "#"
  },
  {
    title: "Structural Integrity: Glass Bridge",
    description: "A probability-based pathfinding engine with real-time structural analysis.",
    tags: ["Node.js", "Physics Engine", "Canvas"],
    link: "#"
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // idle, sending, success

  const handleSendMessage = () => {
    setIsModalOpen(true);
    setSubmissionStatus('idle');
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSubmissionStatus('sending');
    setTimeout(() => {
      setSubmissionStatus('success');
    }, 2000);
  };

  return (
    <main className="main-wrapper">
      <div className="squid-bg"></div>
      <div className="noise-overlay"></div>
      <div className="green-light-glow"></div>
      <div className="bg-grid"></div>
      <Navbar />
      <Hero />

      <section className="selection-section container animate-slide-up delay-2">
        <div className="selection-grid">
          <a href="#projects" className="selection-card glass">
            <div className="selection-symbol">○</div>
            <h3>PROJECTS</h3>
            <p>Worker Assignment</p>
          </a>
          <a href="#about" className="selection-card glass">
            <div className="selection-symbol">△</div>
            <h3>ABOUT</h3>
            <p>Soldier Protocol</p>
          </a>
          <a href="#contact" className="selection-card glass">
            <div className="selection-symbol">□</div>
            <h3>CONTACT</h3>
            <p>Manager Clearance</p>
          </a>
        </div>
      </section>

      {isModalOpen && (
        <div className="contact-modal-overlay">
          <div className="contact-card glass mission-card animate-slide-up">
            {submissionStatus === 'success' ? (
              <div className="success-state">
                <h2 className="section-title"><span className="pink-text">QUALIFIED</span></h2>
                <div className="player-id" style={{ fontSize: '2rem', marginBottom: '1rem' }}>SURAL 456</div>
                <p>Your data has been transmitted. Wait for the next round.</p>
                <button className="btn-secondary" style={{ marginTop: '2rem' }} onClick={() => setIsModalOpen(false)}>Return to Base</button>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <div className="symbol">○ △ □</div>
                  <h2 className="section-title">MISSION <span className="pink-text">BRIEFING</span></h2>
                </div>
                <form className="contact-form" onSubmit={submitForm}>
                  <div className="form-group">
                    <input type="text" placeholder="PLAYER NAME" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="ENCRYPTED EMAIL" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="SECURE MESSAGE" rows="4" required></textarea>
                  </div>
                  <div className="modal-actions">
                    <button type="submit" className="btn-primary" disabled={submissionStatus === 'sending'}>
                      <span className="btn-text">
                        {submissionStatus === 'sending' ? 'TRANSMITTING...' : 'INITIATE CONTACT'}
                      </span>
                      <svg className="flight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </button>
                    <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>
                      <span className="btn-text">ABORT</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}


      <section id="projects" className="projects-section container animate-slide-up delay-3">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section container animate-slide-up">
        <div className="contact-card glass">
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p>Interested in working together? Drop me a message!</p>
          <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={handleSendMessage}>Send Message</button>
        </div>
      </section>

      <footer className="footer container">
        <div className="social-links">
          <a href="https://github.com/thearnab05" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
          <a href="https://www.linkedin.com/in/arnab-sural-4b2b48285/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
          <a href="https://x.com/ArnabSural_69" target="_blank" rel="noopener noreferrer" className="social-icon">X (Twitter)</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Arnab Sural. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .selection-section {
          padding: 80px 2rem;
        }
        .selection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }
        .selection-card {
          padding: 4rem 2rem;
          text-align: center;
          transition: var(--transition);
          border: 1px solid var(--glass-border);
          position: relative;
          overflow: hidden;
        }
        .selection-card:hover {
          background: rgba(237, 27, 118, 0.05);
          border-color: var(--primary);
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(237, 27, 118, 0.1);
        }
        .selection-symbol {
          font-size: 5rem;
          font-weight: 900;
          color: var(--secondary);
          margin-bottom: 1.5rem;
          transition: var(--transition);
        }
        .selection-card:hover .selection-symbol {
          color: var(--primary);
          transform: scale(1.1) rotate(15deg);
        }
        .selection-card h3 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          letter-spacing: 4px;
          margin-bottom: 0.5rem;
        }
        .selection-card p {
          font-size: 0.9rem;
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .main-wrapper {
          padding-bottom: 5rem;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        .projects-section {
          padding: 100px 2rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .contact-section {
          padding: 100px 2rem;
          display: flex;
          justify-content: center;
        }
        .contact-card {
          padding: 4rem;
          text-align: center;
          width: 100%;
          max-width: 800px;
        }
        .contact-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(15px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .mission-card {
          width: 100%;
          max-width: 600px;
          border: 2px solid var(--primary);
          background: rgba(10, 10, 10, 0.9);
          padding: 3.5rem;
          position: relative;
          clip-path: polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%);
        }
        .modal-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1.2rem;
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid var(--glass-border);
          color: #fff;
          font-family: var(--font-main);
          font-weight: 600;
          letter-spacing: 1px;
          transition: var(--transition);
        }
        .modal-actions {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        /* PREMIUM BUTTON DESIGN */
        .btn-primary, .btn-secondary {
          flex: 1;
          padding: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
        }

        .btn-primary {
          background: var(--primary);
          box-shadow: 0 0 25px rgba(237, 27, 118, 0.3);
        }

        .btn-secondary {
          background: #222;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          border-left: 2px solid #ed1b76;
        }

        .btn-primary::before, .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(255,255,255,0.1) 50%, transparent 50%);
          background-size: 100% 4px;
          pointer-events: none;
          opacity: 0.2;
        }

        .btn-primary:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 0 40px var(--primary);
          letter-spacing: 6px;
        }

        .btn-secondary:hover {
          background: #e74c3c;
          transform: translateY(-2px);
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }

        /* FLIGHT ICON ANIMATION */
        .flight-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        .btn-primary:hover .flight-icon {
          transform: translate(15px, -15px) rotate(-15deg);
          animation: flightLoop 1.5s infinite ease-in-out;
        }

        @keyframes flightLoop {
          0%, 100% { transform: translate(15px, -15px) rotate(-15deg); }
          50% { transform: translate(25px, -25px) rotate(-10deg); opacity: 0.5; }
        }

        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        .success-state {
          text-align: center;
          animation: fadeIn 0.5s ease-out;
        }
        .footer {
          padding: 6rem 2rem;
          text-align: center;
          border-top: 1px solid var(--glass-border);
          opacity: 0.8;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }
        .social-links {
          display: flex;
          gap: 2rem;
        }
        .social-icon {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--foreground);
          transition: var(--transition);
          opacity: 0.6;
        }
        .social-icon:hover {
          opacity: 1;
          color: var(--primary);
          transform: translateY(-3px);
        }
        footer p {
          font-size: 0.9rem;
          opacity: 0.5;
        }
      `}</style>
    </main>
  );
}
