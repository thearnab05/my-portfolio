'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function FloatingBadge() {
  const [isKicked, setIsKicked] = useState(false);
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = async () => {
      if (window.scrollY > 100 && !isKicked) {
        setIsKicked(true);
        await controls.start("shake");
        playKickSound();
        controls.start("kicked");
      } else if (window.scrollY <= 100 && isKicked) {
        setIsKicked(false);
        playKickSound();
        controls.start("initial");
      }
    };
    
    // Ensure we start correctly on load
    if (window.scrollY > 100) {
      setIsKicked(true);
      controls.start("kickedFast"); // Jump straight there without sound/shake if page loaded low
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isKicked, controls]);

  const playKickSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (!audioCtx || audioCtx.state === 'suspended') return; // Might be suspended if no user interaction yet
      
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.15);

      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.8, audioCtx.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
      // Audio playback failed (likely because user hasn't clicked anything yet)
    }
  };

  const badgeWidth = 160;

  const variants = {
    initial: {
      x: 30, // Left padding
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    },
    shake: {
      x: [30, 20, 40, 25, 30],
      rotate: [0, -10, 10, -5, 0],
      transition: { duration: 0.3 }
    },
    kickedFast: {
       x: typeof window !== 'undefined' ? Math.max(windowWidth - badgeWidth, 200) : 1000,
       y: 0,
       rotate: 0,
       scale: 1,
       transition: { duration: 0 }
    },
    kicked: {
      x: typeof window !== 'undefined' ? Math.max(windowWidth - badgeWidth, 200) : 1000, // target destination
      y: [0, -120, 0, -40, 0, -10, 0], // bouncing arc
      rotate: [0, 180, 360, 500, 540], // multiple rotations
      scale: [1, 1.3, 1], // scale up in jump
      transition: {
        x: { type: "spring", stiffness: 60, damping: 12, mass: 1 },
        y: { duration: 1.0, times: [0, 0.3, 0.6, 0.75, 0.85, 0.95, 1], ease: "easeOut" },
        rotate: { duration: 1.0, ease: "linear" },
        scale: { duration: 1.0, times: [0, 0.5, 1], ease: "easeInOut" }
      }
    }
  };

  return (
    <motion.div
      className="floating-badge-container"
      initial="initial"
      animate={controls}
      variants={variants}
      whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
      style={{
         // Hardware acceleration hint
         willChange: "transform"
      }}
    >
      <div className="badge-pill">
        <span className="badge-text" style={{ paddingRight: '8px' }}>PORTFOLIO</span>
        <span className="badge-icon">⚽</span>
      </div>

      <style jsx>{`
        .floating-badge-container {
          position: fixed;
          top: 150px; 
          left: 0;   
          z-index: 9000;
          cursor: pointer;
          touch-action: none;
        }

        .badge-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10, 10, 10, 0.85);
          border: 2px solid #ED1B76;
          padding: 10px 18px;
          border-radius: 50px;
          box-shadow: 0 0 15px rgba(237, 27, 118, 0.5), inset 0 0 10px rgba(237, 27, 118, 0.2);
          backdrop-filter: blur(5px);
          transition: box-shadow 0.3s ease;
        }

        .floating-badge-container:hover .badge-pill {
          box-shadow: 0 0 30px rgba(237, 27, 118, 0.8), inset 0 0 15px rgba(237, 27, 118, 0.4);
        }

        .badge-text {
          font-family: var(--font-heading), monospace;
          color: white;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 2px;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }

        .badge-icon {
          font-size: 1.2rem;
        }
        
        @media (max-width: 768px) {
           .floating-badge-container {
               top: 85px;
               left: 1.5rem;
           }
           .badge-pill {
               padding: 8px 14px;
           }
           .badge-text {
               font-size: 0.8rem;
           }
        }
      `}</style>
    </motion.div>
  );
}
