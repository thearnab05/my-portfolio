'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link href="/" className="logo">
          <span className="symbol">○ △ □</span>
          <span className="logo-text">PORTFOLIO</span>
        </Link>

        {/* This is the drawer menu */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <div className="drawer-inner">
            <div className="glitch-overlay"></div>
            <div className="scanlines"></div>

            <div className="drawer-content">
              <div className="drawer-profile">
                <img src="/cyberpunk-profile.jpg" alt="Player 456" className="profile-img" />
                <span className="player-id">SURAL 456</span>
              </div>

              <div className="menu-items">
                <Link href="#projects" className="menu-item" onClick={() => setIsOpen(false)}>
                  <span className="nav-symbol">○</span> Projects
                </Link>
                <Link href="#about" className="menu-item" onClick={() => setIsOpen(false)}>
                  <span className="nav-symbol">△</span> About
                </Link>
                <Link href="#contact" className="menu-item" onClick={() => setIsOpen(false)}>
                  <span className="nav-symbol">□</span> Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Global Hamburger Toggle */}
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Mission Menu"
        >
          <div className="hamburger-box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Backdrop for the drawer */}
      {isOpen && <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 4rem;
          z-index: 2000;
          display: flex;
          justify-content: center;
          transition: var(--transition);
          background: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 2px;
          z-index: 2100;
        }
        .symbol {
          font-size: 1.5rem;
          color: var(--foreground);
        }

        /* Global Drawer Menu */
        .nav-links {
          position: fixed;
          top: 0;
          right: 0;
          width: min(500px, 100%);
          height: 100vh;
          background: rgba(8, 8, 8, 0.98);
          backdrop-filter: blur(40px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
          transform: translateX(100%); /* Hidden */
          transition: transform 0.7s cubic-bezier(0.8, 0, 0.1, 1.1);
          z-index: 2050;
          border-left: 3px solid var(--primary);
          box-shadow: -30px 0 60px rgba(0, 0, 0, 0.9);
        }
        .nav-links.active {
          transform: translateX(0); /* Reveal */
        }

        .drawer-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 10, 0.98);
          backdrop-filter: blur(30px);
          border-left: 2px solid var(--primary);
          box-shadow: -20px 0 50px rgba(0, 0, 0, 0.8);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .drawer-content {
          position: relative;
          z-index: 5;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Scanline and Glitch Effects */
        .scanlines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.2) 50%
          );
          background-size: 100% 4px;
          z-index: 2;
          pointer-events: none;
          opacity: 0.3;
        }

        .glitch-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(237, 27, 118, 0.03) 0px,
            rgba(237, 27, 118, 0.03) 1px,
            transparent 1px,
            transparent 2px
          );
          z-index: 1;
          pointer-events: none;
          animation: glitchMove 5s infinite linear;
        }

        @keyframes glitchMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }

        /* Menu Items Staggered Reveal */
        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
          align-items: center;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: var(--foreground);
          transition: transform 0.3s var(--transition), color 0.3s;
          opacity: 0;
          transform: translateY(30px);
        }

        .nav-links.active .menu-item {
          animation: itemReveal 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .nav-links.active .menu-item:nth-child(1) { animation-delay: 0.4s; }
        .nav-links.active .menu-item:nth-child(2) { animation-delay: 0.5s; }
        .nav-links.active .menu-item:nth-child(3) { animation-delay: 0.6s; }

        @keyframes itemReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-symbol {
          color: var(--primary);
          font-size: 2rem;
          font-weight: 900;
          transition: transform 0.3s;
        }

        .menu-item:hover {
          color: var(--primary);
          transform: translateX(15px) scale(1.05);
        }

        .menu-item:hover .nav-symbol {
          transform: rotate(20deg) scale(1.2);
        }

        /* Profile Staggered Reveal */
        .drawer-profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          opacity: 0;
          transform: scale(0.8);
        }

        .nav-links.active .drawer-profile {
          animation: profileReveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.3s;
        }

        @keyframes profileReveal {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .profile-img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 4px solid var(--primary);
          object-fit: cover;
          box-shadow: 0 0 30px var(--primary);
          position: relative;
        }

        .player-id {
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--secondary);
          letter-spacing: 6px;
          font-size: 1.2rem;
          text-shadow: 0 0 10px rgba(3, 122, 118, 0.5);
        }

        /* Global Hamburger - Hyper Animated */
        .hamburger {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 2100;
          transition: transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        .hamburger:hover {
          transform: scale(1.1);
        }

        .hamburger.active {
          transform: rotate(360deg);
        }

        .hamburger-box {
          width: 32px;
          height: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 3px;
          background: var(--foreground);
          transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
          border-radius: 4px;
        }

        /* Hamburger to X Animation with Snap */
        .hamburger.active span:nth-child(1) {
          transform: translateY(10.5px) rotate(45deg);
          background: var(--primary);
          width: 110%;
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
          transform: translateX(-20px);
        }
        .hamburger.active span:nth-child(3) {
          transform: translateY(-10.5px) rotate(-45deg);
          background: var(--primary);
          width: 110%;
        }

        /* Backdrop with Deepening Blur */
        .menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          z-index: 2040;
          backdrop-filter: blur(5px);
          animation: backdropFade 0.4s ease-out forwards;
        }

        @keyframes backdropFade {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(5px); }
        }

        @media (max-width: 768px) {
          .nav-links {
            width: 100%;
            right: -100%;
          }
          .nav-links.active {
            transform: translateX(-100%);
          }
          .drawer-inner {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
}
