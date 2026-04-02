'use client';
import { useEffect, useState } from 'react';

export default function UnderConstructionModal({ isOpen, onClose }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      playWhooshSound();
    } else {
      // delay unmount for exit animation
      const timeout = setTimeout(() => setRender(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const playWhooshSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (!audioCtx) return;
      
      // Sweep sound imitating a UI whoosh/blip
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(250, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  };

  if (!render) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : 'closed'}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="character-container">
            {/* SVG of Squid Game styled guard with nod/hat tip animation */}
            <svg viewBox="0 0 100 120" className="guard-svg">
              {/* Body */}
              <path d="M20 120 Q 50 80 80 120" fill="#ED1B76" />
              <rect x="35" y="80" width="30" height="40" fill="#ED1B76" />
              <line x1="50" y1="80" x2="50" y2="120" stroke="#000" strokeWidth="2" />
              <path d="M40 85 h20" stroke="#000" strokeWidth="1" />
              
              {/* Head / Mask */}
              <g className="guard-head">
                {/* Hoodie details */}
                <path d="M25 50 Q 50 15 75 50 Z" fill="#ED1B76" />
                {/* Black Mask */}
                <rect x="30" y="30" width="40" height="55" rx="15" fill="#111" />
                {/* Square symbol */}
                <rect x="40" y="45" width="20" height="20" fill="none" stroke="#ED1B76" strokeWidth="3" />
                {/* Shading */}
                <path d="M30 40 Q 50 30 70 40" stroke="#222" strokeWidth="2" fill="none" />
              </g>

              {/* Tipping Hand (simple circle indicating hand reaching up) */}
              <g className="guard-hand">
                <circle cx="28" cy="45" r="8" fill="#111" stroke="#ED1B76" strokeWidth="1" />
              </g>
            </svg>
        </div>
        <div className="modal-text">
          <p className="sarcastic">Sorry, Captain... 🙄</p>
          <h2>THIS MISSION IS STILL UNDER CONSTRUCTION 🚧</h2>
        </div>
        <button className="return-btn" onClick={onClose}>RETURN TO BASE</button>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .modal-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        .modal-overlay.closed .modal-content {
          transform: scale(0.9) translateY(20px);
          opacity: 0;
        }

        .modal-content {
          background: #0a0a0a;
          border: 2px solid #ED1B76;
          border-radius: 16px;
          padding: 3rem 2rem;
          width: 90%;
          max-width: 500px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 0 40px rgba(237, 27, 118, 0.4);
          transform: scale(1) translateY(0);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .character-container {
          width: 140px;
          height: 140px;
          margin-bottom: 0.5rem;
        }

        .guard-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .guard-head {
          transform-origin: 50px 75px;
          animation: hatTip 2.5s infinite alternate ease-in-out;
        }

        .guard-hand {
          transform-origin: 20px 80px;
          animation: handRaise 2.5s infinite alternate ease-in-out;
        }

        @keyframes hatTip {
          0%, 20% { transform: rotate(0deg) translateY(0); }
          40%, 60% { transform: rotate(-15deg) translateY(5px); }
          100% { transform: rotate(0deg) translateY(0); }
        }

        @keyframes handRaise {
          0%, 20% { transform: rotate(0deg) translateY(30px); opacity: 0; }
          40%, 60% { transform: rotate(0deg) translateY(0); opacity: 1; }
          100% { transform: rotate(0deg) translateY(30px); opacity: 0; }
        }

        .modal-text .sarcastic {
          color: #ED1B76;
          font-family: inherit;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
          font-weight: 500;
        }

        .modal-text h2 {
          color: white;
          font-size: 1.4rem;
          letter-spacing: 3px;
          line-height: 1.4;
          font-weight: 800;
          margin: 0;
        }

        .return-btn {
          background: transparent;
          border: 2px solid #ED1B76;
          color: #ED1B76;
          padding: 1rem 2rem;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 3px;
          cursor: pointer;
          border-radius: 8px;
          margin-top: 1rem;
          transition: all 0.3s;
          text-transform: uppercase;
        }

        .return-btn:hover {
          background: #ED1B76;
          color: white;
          box-shadow: 0 0 20px #ED1B76;
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .modal-content {
            padding: 2.5rem 1.5rem;
          }
          .modal-text h2 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
