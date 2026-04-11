'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectDeck from '@/components/ProjectDeck';
import ScrollIndicator from '@/components/ScrollIndicator';
import { sounds } from '@/lib/sounds';

export default function Home() {
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // idle, sending, success
  const [isMissionStarted, setIsMissionStarted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const startMission = () => {
    sounds?.playBeginMission();
    setIsMissionStarted(true);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    sounds?.playSendMessage();
    setSubmissionStatus('sending');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/suralarnab28@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `New Transmission from ${data.name}`,
          _template: "box"
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit");
      }

      setSubmissionStatus('success');
      e.target.reset();
    } catch (error) {
      console.error(error);
      setSubmissionStatus('idle');
      if (error.message.includes("activate")) {
        alert("The site owner needs to verify their email address. Please check your inbox for an activation email.");
      } else {
        alert("Transmission failed. Please verify connection and try again.");
      }
    }
  };


  return (
    <main className="main-wrapper">
      <div className="cyberpunk-bg"></div>
      <div className="space-stars"></div>
      <div className="noise-overlay"></div>
      <div className="neon-glow"></div>
      <div className="bg-grid"></div>
      <Navbar />
      <ScrollIndicator />
      <Hero onBeginMission={startMission} />

      {isMissionStarted && (
        <section className="selection-section container animate-slide-up">
          <div className="selection-grid">
            <div
              className={`selection-card glass profile-wrap ${isProfileOpen ? 'profile-active' : ''}`}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="card-main-content">
                <div className="selection-symbol">○</div>
                <h3>PROFILE</h3>
                <p>Worker Assignment</p>
              </div>
              <div className={`profile-submenu ${isProfileOpen ? 'open' : ''}`}>
                <a href="https://www.linkedin.com/in/arnab-sural-4b2b48285/" target="_blank" rel="noopener noreferrer" className="social-pill" onClick={(e) => e.stopPropagation()}>LinkedIn</a>
                <a href="https://www.instagram.com/3he.arnab/" target="_blank" rel="noopener noreferrer" className="social-pill" onClick={(e) => e.stopPropagation()}>Instagram</a>
                <a href="https://m.facebook.com/arnaba.surala/" target="_blank" rel="noopener noreferrer" className="social-pill" onClick={(e) => e.stopPropagation()}>Facebook</a>
              </div>
            </div>
            <a href="#contact" className="selection-card glass transition-link">
              <div className="selection-symbol">△</div>
              <h3>CONTACT</h3>
              <p>Soldier Protocol</p>
            </a>
            <a href="https://github.com/thearnab05" target="_blank" rel="noopener noreferrer" className="selection-card glass">
              <div className="selection-symbol">□</div>
              <h3>CODEBASE</h3>
              <p>Manager Clearance</p>
            </a>
          </div>
        </section>
      )}

      <ProjectDeck />

      <section id="contact" className="contact-section container animate-slide-up">
        <div className="contact-card glass mission-card">
          {submissionStatus === 'success' ? (
            <div className="success-state">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className="section-title"><span className="pink-text">DELIVERED</span></h2>
              <div className="player-id" style={{ fontSize: '1.5rem', marginBottom: '1rem', opacity: 0.8 }}>MESSAGE SECURED</div>
              <p>Your data has been transmitted successfully.</p>
              <button className="btn-secondary" style={{ marginTop: '2rem' }} onClick={() => setSubmissionStatus('idle')}>New Message</button>
            </div>
          ) : submissionStatus === 'sending' ? (
            <div className="sending-state">
              <h2 className="section-title">DISPATCHING <span className="pink-text">COURIER</span></h2>
              <div className="animation-container">
                <svg className="delivery-path" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <path id="curve" d="M0,50 Q200,-50 400,50" fill="transparent" stroke="rgba(237, 27, 118, 0.3)" strokeWidth="3" strokeDasharray="10 10" />
                </svg>
                <div className="bicycle-wrapper">
                  <svg className="bicycle-icon" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5.5" cy="17.5" r="3.5"></circle>
                    <circle cx="18.5" cy="17.5" r="3.5"></circle>
                    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"></path>
                  </svg>
                </div>
              </div>
              <p className="pulse-text">Navigating secure channels...</p>
            </div>
          ) : (
            <>
              <div className="modal-header">
                <div className="symbol">○ △ □</div>
                <h2 className="section-title">MISSION <span className="pink-text">BRIEFING</span></h2>
                <p>Drop a message to initiate contact protocol.</p>
              </div>
              <form className="contact-form" onSubmit={submitForm}>
                <div className="form-group">
                  <input name="name" type="text" placeholder="PLAYER NAME" required />
                </div>
                <div className="form-group">
                  <input name="email" type="email" placeholder="ENCRYPTED EMAIL" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="SECURE MESSAGE" rows="4" required></textarea>
                </div>
                <div className="modal-actions">
                  <button type="reset" className="btn-secondary btn-abort">
                    ABORT
                  </button>
                  <button type="submit" className="btn-primary" disabled={submissionStatus === 'sending'}>
                    <span className="btn-text">
                      {submissionStatus === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                    </span>
                    <svg className="flight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
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
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .selection-card:hover, .profile-active {
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
        .selection-card:hover .selection-symbol, .profile-active .selection-symbol {
          color: var(--primary);
          transform: scale(1.1) rotate(15deg);
        }
        .profile-wrap {
          padding: 0;
        }
        .card-main-content {
          padding: 4rem 2rem;
          transition: 0.4s;
        }
        .profile-active .card-main-content {
          transform: translateY(-20px);
          opacity: 0;
          pointer-events: none;
        }
        .profile-submenu {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .profile-submenu.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .social-pill {
          padding: 0.8rem 2rem;
          background: rgba(237, 27, 118, 0.1);
          border: 1px solid var(--primary);
          color: white;
          font-family: var(--font-heading);
          letter-spacing: 2px;
          font-size: 0.9rem;
          width: 70%;
          transition: 0.3s;
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        }
        .social-pill:hover {
          background: var(--primary);
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(237, 27, 118, 0.4);
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
          max-width: 1200px; /* Increased from 800px */
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
          max-width: 800px; /* Increased from 600px */
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

        .btn-abort {
          border-left-color: #e74c3c !important;
          color: #e74c3c;
        }
        
        .btn-abort:hover {
          background: #e74c3c !important;
          color: #fff;
          animation: abortShake 0.3s cubic-bezier(.36,.07,.19,.97) infinite both !important;
          box-shadow: 0 0 20px rgba(231, 76, 60, 0.6) !important;
        }

        @keyframes abortShake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-2px, 0px) rotate(1deg); }
          30% { transform: translate(2px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-2px, 1px) rotate(0deg); }
          70% { transform: translate(2px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        .success-state {
          text-align: center;
          animation: fadeIn 0.5s ease-out;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 1.5rem;
          color: var(--primary);
          animation: scaleUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes scaleUp {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .sending-state {
          text-align: center;
          padding: 2rem 0;
          animation: fadeIn 0.3s ease-out;
        }

        .animation-container {
          position: relative;
          width: 100%;
          height: 120px;
          margin: 2rem 0;
          overflow: hidden;
        }

        .delivery-path {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .bicycle-wrapper {
          position: absolute;
          top: 0;
          left: -40px; /* Start offscreen */
          width: 40px;
          height: 40px;
          offset-path: path("M0,50 Q400,-50 800,50"); /* Larger path relative to container */
          animation: rideSequence 2s linear forwards;
        }

        .bicycle-icon {
          width: 100%;
          height: 100%;
          animation: bounceCycle 0.3s infinite alternate ease-in-out;
        }

        .pulse-text {
          font-family: var(--font-heading);
          letter-spacing: 2px;
          opacity: 0.7;
          animation: pulseOpacity 1s infinite alternate;
        }

        @keyframes rideSequence {
          0% { 
            offset-distance: 0%; 
            transform: scaleX(1);
          }
          100% { 
            offset-distance: 100%; 
            transform: scaleX(1);
          }
        }

        @keyframes bounceCycle {
          0% { transform: translateY(0); }
          100% { transform: translateY(-4px); }
        }

        @keyframes pulseOpacity {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .bicycle-wrapper {
            offset-path: path("M0,50 Q200,-50 400,50");
          }
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
