'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll();

    // Smooth physics-based spring for the scroll
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scroll progress from 0 to 1 into y position (0px to 75px)
    const dotY = useTransform(smoothProgress, [0, 1], [0, 75]);

    return (
        <div className="scroll-indicator-container">
            <span className="scroll-text">S U R A L  W O R L D</span>
            <div className="scroll-line">
                <motion.div
                    className="scroll-dot"
                    style={{ y: dotY, top: 0 }}
                />
            </div>

            <style jsx>{`
        .scroll-indicator-container {
          position: fixed;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          z-index: 9000;
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
          box-shadow: 0 0 10px var(--primary);
        }

        @media (max-width: 1024px) {
           .scroll-indicator-container { display: none; }
        }
      `}</style>
        </div>
    );
}
