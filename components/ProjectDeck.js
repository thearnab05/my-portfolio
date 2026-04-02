'use client';
import { useState } from 'react';
import UnderConstructionModal from './UnderConstructionModal';

const projects = [
  {
    title: "Library Management System",
    description: "Digital catalog and automated issuing system for modern libraries.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Money Manager",
    description: "Personal finance tracker with intuitive visualizations and budgets.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Event Management System",
    description: "Comprehensive dashboard for planning and hosting secure events.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Movie Seat Booking Overview",
    description: "Interactive UI for selecting and reserving theater seats in real-time.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Recipe Finder",
    description: "Smart culinary engine with ingredient-based search algorithms.",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Weather Report Perfect",
    description: "High-accuracy meteorological dashboard with location tracking.",
    image: "https://images.unsplash.com/photo-1504608524841-42ce6c1410f3?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    details: "https://github.com/thearnab05"
  },
  {
    title: "Food Delivery System Overview",
    description: "End-to-end platform for real-time food ordering and tracking.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop",
    live: "#",
    details: "https://github.com/thearnab05"
  }
];

export default function ProjectDeck() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <section className="deck-section container">
      <h2 className="section-title">MISSION <span className="pink-text">RECORDS</span></h2>
      <div className="deck-container">
        <div className={`cards-stack ${hoveredIndex !== null ? 'is-hovering' : ''}`}>
          {projects.map((project, index) => {
            const offset = index - (projects.length - 1) / 2;

            return (
              <div
                key={index}
                className={`project-card-wrapper ${hoveredIndex === index ? 'active' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'inactive' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  '--index': index,
                  '--offset': offset
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
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="action-btn live"
                          onClick={(e) => {
                            if (project.live === "#" || !project.live) {
                              e.preventDefault();
                              setIsModalOpen(true);
                            }
                          }}
                        >
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
            );
          })}
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
          transform-origin: center 200%; /* Pivot point far below creates the perfect arc */
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transform: rotate(calc(var(--offset) * 3deg)); /* Tight fan unhovered */
          z-index: var(--index);
          cursor: pointer;
        }

        /* Deck spreading on container hover */
        .is-hovering .project-card-wrapper {
          transform: rotate(calc(var(--offset) * 8deg)); /* Wide perfect arc fan */
        }

        .project-card-wrapper.active {
           z-index: 100 !important;
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
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* The actual popup translation is relative to the card's local rotated axis! */
        .project-card-wrapper.active .project-card-inner {
          transform: translateY(-60px) scale(1.1);
          box-shadow: 0 30px 60px rgba(237, 27, 118, 0.6);
        }

        .project-card-wrapper.inactive .project-card-inner {
           filter: opacity(0.5) blur(3px);
           transform: translateY(15px) scale(0.95);
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
              width: 200px;
              height: 280px;
           }
           .project-card-wrapper {
              transform-origin: center 250%;
           }
           .is-hovering .project-card-wrapper {
              transform: rotate(calc(var(--offset) * 5deg));
           }
           .project-card-wrapper.active .project-card-inner {
              transform: translateY(-40px) scale(1.05);
           }
           .section-title {
              font-size: 2rem;
              letter-spacing: 8px;
           }
        }
      `}</style>
      <UnderConstructionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
