'use client';
import { useState } from 'react';

const projects = [
  {
    title: "Protocol: Red Light",
    description: "AI-powered motion detection system with elimination-style logic.",
    image: "https://img.freepik.com/free-vector/digital-futuristic-background_23-2148810370.jpg?w=1200",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Pattern: Honeycomb",
    description: "Pattern extraction algorithm for high-pressure delicate operations.",
    image: "https://img.freepik.com/free-vector/geometric-background-design_52683-43183.jpg?w=1200",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Engine: Glass Bridge",
    description: "Pathfinding engine with real-time structural probability analysis.",
    image: "https://img.freepik.com/free-vector/abstract-digital-background_23-2148810368.jpg?w=1200",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "System: Umbrella",
    description: "Secure communication protocol for field agents and managers.",
    image: "https://img.freepik.com/free-vector/abstract-technological-background_23-2148810372.jpg?w=1200",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Operation: Marble",
    description: "Decentralized trade and valuation engine for high-stakes assets.",
    image: "https://img.freepik.com/free-vector/futuristic-technology-background_23-2148416439.jpg?w=1200",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Network: Tug of War",
    description: "Distributed load balancer for maximizing system throughput.",
    image: "https://img.freepik.com/free-vector/abstract-binary-code-background_23-2148351501.jpg?w=1200",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Interface: Final Round",
    description: "High-adrenaline dashboard for monitoring mission progress.",
    image: "https://img.freepik.com/free-vector/glowing-digital-technology-background_23-2148386377.jpg?w=1200",
    live: "#",
    details: "https://github.com/thearnab05"
  }
];

export default function ProjectDeck() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="deck-section container">
      <h2 className="section-title">MISSION <span className="pink-text">RECORDS</span></h2>
      <div className="deck-container">
        <div className={`cards-stack ${hoveredIndex !== null ? 'is-hovering' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card-wrapper ${hoveredIndex === index ? 'active' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'inactive' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                '--index': index,
                '--total': projects.length,
                '--rotate': `${(index - (projects.length - 1) / 2) * 5}deg`,
                '--translate-x': `${(index - (projects.length - 1) / 2) * 40}px`,
                '--translate-y': `${Math.abs(index - (projects.length - 1) / 2) * 10}px`
              }}
            >
              <div className="project-card-inner">
                <div className="card-face card-front">
                  <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
                    <div className="card-symbol">○ △ □</div>
                  </div>
                  <div className="card-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>

                <div className="card-overlay">
                  <div className="overlay-content">
                    <div className="preview-mini" style={{ backgroundImage: `url(${project.image})` }}></div>
                    <div className="overlay-actions">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="action-btn live">
                        VIEW LIVE
                      </a>
                      <a href={project.details} target="_blank" rel="noopener noreferrer" className="action-btn details">
                        DETAILS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .deck-section {
          padding: 120px 0;
          perspective: 1500px;
          overflow: visible;
        }
        .section-title {
          margin-bottom: 80px;
          text-align: center;
          font-size: 3rem;
          letter-spacing: 15px;
        }
        .deck-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
          padding-bottom: 50px;
        }
        .cards-stack {
          position: relative;
          width: 350px;
          height: 480px;
        }
        
        .project-card-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transform: 
            translateX(var(--translate-x)) 
            translateY(var(--translate-y)) 
            rotate(var(--rotate));
          z-index: var(--index);
          cursor: pointer;
        }

        /* Deck spreading on container hover */
        .is-hovering .project-card-wrapper {
          transform: 
            translateX(calc((var(--index) - (var(--total) - 1) / 2) * 120px)) 
            translateY(calc(Math.abs(var(--index) - (var(--total) - 1) / 2) * 30px)) 
            rotate(calc((var(--index) - (var(--total) - 1) / 2) * 15deg))
            scale(0.9);
          opacity: 0.6;
        }

        /* Active card pop-up */
        .project-card-wrapper.active {
          transform: translateY(-80px) scale(1.15) rotate(0deg) !important;
          z-index: 100;
          opacity: 1 !important;
          box-shadow: 0 30px 60px rgba(237, 27, 118, 0.4);
        }

        .project-card-wrapper.inactive {
           filter: blur(2px);
           opacity: 0.3 !important;
        }
        
        .project-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .card-face {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-image {
          height: 60%;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .card-symbol {
          position: absolute;
          top: 15px;
          right: 20px;
          font-family: var(--font-heading);
          color: rgba(255,255,255,0.5);
          letter-spacing: 2px;
          font-size: 0.8rem;
        }

        .card-info {
          padding: 1.5rem;
          background: linear-gradient(to bottom, #111, #000);
          flex-grow: 1;
        }

        .card-info h3 {
          color: var(--primary);
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
        }

        .card-info p {
          font-size: 0.85rem;
          opacity: 0.6;
          line-height: 1.4;
        }

        /* Overlay */
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.4s;
          pointer-events: none;
        }

        .active .card-overlay {
          opacity: 1;
          pointer-events: all;
        }

        .overlay-content {
           width: 80%;
           display: flex;
           flex-direction: column;
           gap: 1.5rem;
           transform: translateY(20px);
           transition: 0.4s 0.1s;
        }

        .active .overlay-content {
           transform: translateY(0);
        }

        .preview-mini {
           height: 120px;
           border-radius: 10px;
           background-size: cover;
           background-position: center;
           border: 1px solid var(--primary);
        }

        .overlay-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-btn {
          padding: 0.8rem;
          text-align: center;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          border-radius: 8px;
          transition: 0.3s;
        }

        .action-btn.live {
          background: var(--primary);
          color: white;
        }

        .action-btn.details {
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
        }

        .action-btn:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
        }

        @media (max-width: 768px) {
           .deck-container {
              min-height: 400px;
           }
           .cards-stack {
              width: 260px;
              height: 380px;
           }
           .is-hovering .project-card-wrapper {
              transform: 
                translateX(calc((var(--index) - (var(--total) - 1) / 2) * 70px)) 
                scale(0.8);
           }
           .section-title {
              font-size: 2rem;
              letter-spacing: 8px;
           }
        }
      `}</style>
    </section>
  );
}
