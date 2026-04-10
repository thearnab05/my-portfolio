import TypingText from './TypingText';
import { sounds } from '@/lib/sounds';

export default function Hero({ onBeginMission }) {
  return (
    <section className="hero-section">
      <div className="hero-container container">

        {/* Left Column Content */}
        <div className="hero-content">
          <div className="status-badge animate-slide-up">
            <span className="pulsing-dot"></span>
            AVAILABLE FOR WORK
          </div>

          <div className="player-number animate-slide-up delay-1">SURAL 456</div>

          <h1 className="hero-title animate-slide-up delay-1">
            <span className="pink-text">ARNAB</span> <span className="white-text">SURAL</span>
            <br />
            <span className="cyan-text">
              <TypingText texts={["FREELANCER", "FULL STACK DEV", "WEB DEV"]} speed={150} pause={1500} />
            </span>
          </h1>

          <p className="hero-subtitle animate-slide-up delay-2">
            Full Stack Developer & Freelancer crafting premium digital experience
          </p>

          <div className="hero-actions animate-slide-up delay-2">
            <button onClick={onBeginMission} className="btn-cyan-pink">BEGIN MISSION</button>
            <a href="/ARNAB-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline-pink" onClick={() => sounds?.playLoadout()}>
              LOAD OUT
            </a>
            <a href="#contact" className="btn-solid-dark">SEND MESSAGE</a>
          </div>

          <div className="tech-stack-section animate-slide-up delay-3">
            <span className="tech-label">TECH STACK</span>
            <div className="tech-pills">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Next.js</span>
              <span className="tech-pill">MongoDB</span>
              <span className="tech-pill">Express</span>
              <span className="tech-pill">Word Press</span>
            </div>
          </div>
        </div>

        {/* Right Column Visual */}
        <div className="hero-visual">
          <div className="neon-circle-container">
            <div className="neon-circle">
              <div className="circle-wire wire-1"></div>
              <div className="circle-wire wire-2"></div>
              <div className="circle-wire wire-3"></div>
            </div>
            <div className="circle-floor"></div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Stats */}
      <div className="hero-bottom-stats container animate-slide-up delay-3">
        <div className="stat-item">
          <div className="stat-icon pink-text">
            {/* Code Icon */}
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <div className="stat-text">
            <span className="stat-number cyan-text">15+</span>
            <span className="stat-label">PROJECTS</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon pink-text">
            {/* User Icon */}
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div className="stat-text">
            <span className="stat-number cyan-text">02</span>
            <span className="stat-label">CLIENTS</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon pink-text">
            {/* Star Icon */}
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <div className="stat-text">
            <span className="stat-number cyan-text">1.5+</span>
            <span className="stat-label">YEARS EXP</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon pink-text">
            {/* Trophy Icon */}
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
          </div>
          <div className="stat-text">
            <span className="stat-number cyan-text">10+</span>
            <span className="stat-label">AWARDS</span>
          </div>
        </div>
      </div>

      {/* Corner Overlays */}
      <div className="bottom-left-corner animate-fade-in delay-3">
        <div className="avatar-n">N</div>
        <div className="corner-text">
          <span className="gray-text">LET'S BUILD SOMETHING</span>
          <br />
          <span className="pink-highlight">AMAZING</span> <span className="gray-text">TOGETHER</span>
        </div>
      </div>

      <div className="bottom-right-corner animate-fade-in delay-3">
        <span className="find-me">FIND ME ON</span>
        <div className="social-icons-mini">
          <a href="https://github.com/thearnab05" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
          <a href="https://www.linkedin.com/in/arnab-sural-4b2b48285/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="https://x.com/ArnabSural_69" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4l11.73 16h5L9 4H4zm14 0H5"></path></svg></a>
          <a href="https://www.instagram.com/3he.arnab/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        </div>
      </div>

      <div className="right-middle-scroll animate-fade-in delay-3">
        <span className="scroll-text">S U R A L  W O R L D</span>
        <div className="scroll-line"><div className="scroll-dot"></div></div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Accounts for navbar */
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .pulsing-dot {
          width: 8px;
          height: 8px;
          background-color: #00ff88;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ff88;
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 255, 136, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 255, 136, 0); }
        }

        .player-number {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 0.5rem;
          letter-spacing: 8px;
        }

        .hero-title {
          font-size: clamp(3.5rem, 6vw, 5.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .pink-text {
          color: var(--primary);
          text-shadow: -2px 2px 20px rgba(237, 27, 118, 0.6);
        }

        .white-text {
          color: #ffffff;
        }

        .cyan-text {
          color: var(--secondary);
          display: block;
          font-size: 0.8em;
        }

        .hero-subtitle {
          font-size: 1rem;
          opacity: 0.8;
          margin-bottom: 3rem;
          max-width: 500px;
          font-weight: 500;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        /* Buttons Styling to Match Mockup */
        .btn-cyan-pink {
          background: linear-gradient(90deg, var(--secondary), var(--primary));
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-cyan-pink:hover {
          box-shadow: 0 0 20px rgba(237, 27, 118, 0.5);
          transform: translateY(-2px);
        }

        .btn-outline-pink {
          background: transparent;
          color: var(--primary);
          padding: 0.8rem 1.8rem;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1px;
          border: 1px solid var(--primary);
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
        }

        .btn-outline-pink:hover {
          background: rgba(237, 27, 118, 0.1);
          box-shadow: inset 0 0 10px rgba(237, 27, 118, 0.2);
        }

        .btn-solid-dark {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
        }

        .btn-solid-dark:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .tech-stack-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tech-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.5);
        }

        .tech-pills {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .tech-pill {
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          transition: var(--transition);
        }

        .tech-pill:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        /* Neon Circle Visual Setup */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          min-height: 500px;
        }

        .neon-circle-container {
          position: absolute;
          right: -5%;
          top: 50%;
          transform: translateY(-50%);
          width: 700px;
          height: 700px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 1;
        }

        .neon-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: relative;
          background-image: 
             repeating-linear-gradient(rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 15px),
             repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 15px);
          mask-image: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 65%);
          -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 65%);
          animation: spinGradient 40s linear infinite;
        }

        .neon-circle::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 50%;
          padding: 8px; /* Thicker ring */
          background: linear-gradient(135deg, #00f2ff 0%, #00f2ff 15%, var(--primary) 50%, var(--primary) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          /* Base glow on the solid line */
          box-shadow: 0 0 20px rgba(0, 242, 255, 0.4), inset 0 0 20px rgba(237, 27, 118, 0.4);
        }

        .neon-circle::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 50%;
          box-shadow: 
           -30px 0 100px -10px rgba(0, 242, 255, 0.4),
           30px 0 100px -10px rgba(237, 27, 118, 0.4),
           inset -30px 0 100px -10px rgba(237, 27, 118, 0.4),
           inset 30px 0 100px -10px rgba(0, 242, 255, 0.4);
          pointer-events: none;
        }

        .circle-wire {
          position: absolute;
          top: 50%; left: 50%;
          width: 90%; height: 90%;
          border: 1px solid rgba(237, 27, 118, 0.15);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(237, 27, 118, 0.1);
        }
        .wire-1 { transform: translate(-50%, -50%) rotateX(60deg) rotateY(20deg); }
        .wire-2 { transform: translate(-50%, -50%) rotateX(60deg) rotateY(-20deg); border-color: rgba(0, 242, 255, 0.15); box-shadow: 0 0 10px rgba(0, 242, 255, 0.1);}
        .wire-3 { transform: translate(-50%, -50%) rotateY(70deg) rotateX(10deg); border: 1px dashed rgba(255, 255, 255, 0.1); }

        .circle-floor {
           position: absolute;
           bottom: 10%;
           width: 80%;
           left: 10%;
           height: 4px;
           background: linear-gradient(90deg, transparent, #00f2ff, var(--primary), transparent);
           filter: blur(4px);
           z-index: -1;
        }

        @keyframes spinGradient {
          100% { transform: rotate(360deg); }
        }

        /* Bottom Stats Bar */
        .hero-bottom-stats {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: space-between;
          width: 80%;
          max-width: 1000px;
          padding: 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          z-index: 10;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon svg {
          stroke: var(--primary);
        }

        .stat-text {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
        }

        .stat-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1px;
        }

        /* Corner Sub-elements */
        .bottom-left-corner {
          position: absolute;
          bottom: 40px;
          left: 4rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 10;
        }

        .avatar-n {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          font-size: 0.8rem;
          font-family: var(--font-heading);
          box-shadow: 0 0 15px rgba(3, 122, 118, 0.3);
        }

        .corner-text {
          font-size: 0.6rem;
          letter-spacing: 1px;
          line-height: 1.5;
        }

        .gray-text { color: rgba(255,255,255,0.4); }
        .pink-highlight { color: var(--primary); font-weight: 800; }

        .bottom-right-corner {
          position: absolute;
          bottom: 40px;
          right: 4rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          z-index: 10;
        }

        .find-me {
          font-size: 0.6rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1px;
        }

        .social-icons-mini {
          display: flex;
          gap: 0.8rem;
        }

        .social-icons-mini a {
          color: rgba(255,255,255,0.6);
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .social-icons-mini a:hover {
          color: var(--foreground);
          border-color: var(--primary);
          box-shadow: 0 0 10px rgba(237, 27, 118, 0.3);
          transform: translateY(-2px);
        }

        .right-middle-scroll {
          position: absolute;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          z-index: 10;
        }

        .scroll-text {
          writing-mode: vertical-rl;
          font-size: 0.55rem;
          font-weight: 800;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.5);
        }

        .scroll-line {
          width: 1px;
          height: 80px;
          background: rgba(255,255,255,0.1);
          position: relative;
        }

        .scroll-dot {
          width: 5px;
          height: 5px;
          background: var(--primary);
          border-radius: 50%;
          position: absolute;
          left: -2px;
          top: 0;
          box-shadow: 0 0 10px var(--primary);
          animation: scrollDownDot 2s cubic-bezier(0.1, 0.5, 0.5, 1) infinite;
        }

        @keyframes scrollDownDot {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        @media (max-width: 1024px) {
           .hero-container { grid-template-columns: 1fr; padding: 2rem; }
           .hero-content { margin-top: 2rem; }
           .hero-visual { position: absolute; opacity: 0.2; z-index: -1; top: 0; left: 0; width: 100%; height: 100%; }
           .neon-circle-container { right: auto; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; height: 400px; }
           .hero-bottom-stats { width: 95%; flex-wrap: wrap; justify-content: center; gap: 2rem; bottom: 120px; }
           .bottom-left-corner { left: 2rem; bottom: 20px; }
           .bottom-right-corner { right: 2rem; bottom: 20px; flex-direction: column; gap: 0.5rem; align-items: flex-end; }
           .right-middle-scroll { display: none; }
        }
        @media (max-width: 768px) {
            .hero-title { font-size: 3rem; }
            .bottom-left-corner, .bottom-right-corner { display: none; }
            .hero-bottom-stats { position: relative; bottom: auto; margin-top: 4rem; pb: 4rem; border-top: none; }
            .hero-section { height: auto; padding-bottom: 4rem; }
        }
      `}</style>
    </section>
  );
}
