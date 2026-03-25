import TypingText from './TypingText';

export default function Hero({ onBeginMission }) {
  return (
    <section className="hero container">
      <div className="hero-content">
        <div className="player-number animate-slide-up">SURAL 456</div>
        <h1 className="hero-title animate-slide-up delay-1">
          <span className="pink-text">Arnab</span> Sural
          <br />
          <span className="roles-typing">
            <TypingText texts={["Full Stack Developer", "Web Dev", "Freelancer (freshers)"]} />
          </span>
        </h1>
        <p className="hero-subtitle animate-slide-up delay-1">
          Full Stack Developer & Freelancer crafting premium digital experience
        </p>
        <div className="hero-actions animate-slide-up delay-2">
          <button onClick={onBeginMission} className="btn-primary">BEGIN MISSION</button>
          <a href="#contact" className="btn-secondary">SEND MESSAGE</a>
        </div>
      </div>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 80px;
          background: radial-gradient(circle at center, rgba(237, 27, 118, 0.05) 0%, transparent 70%);
          width: 100%;
        }
        .player-number {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 1rem;
          letter-spacing: 5px;
        }
        .hero-title {
          font-size: clamp(3.5rem, 10vw, 6rem);
          line-height: 1;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .pink-text {
          color: var(--primary);
          shadow: 2px 2px 2px red;  //dued
        }
        .roles-typing {
          font-size: 0.4em;
          opacity: 0.8;
          color: var(--secondary);
          display: block;
          margin-top: 1rem;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          opacity: 0.6;
          margin-bottom: 3rem;
          max-width: 800px; /* Increased from 600px */
          margin-left: auto;
          margin-right: auto;
          padding: 0 1.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        .btn-secondary {
          padding: 0.8rem 2rem;
          background: transparent;
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--foreground);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        .btn-secondary:hover {
          background: var(--glass);
          border-color: var(--primary);
        }
      `}</style>
    </section>
  );
}


//due pending for some such reason
