'use client';
import { useState, useEffect } from 'react';

export default function TypingText({ texts, speed = 100, pause = 2000 }) {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[index % texts.length];

            if (isDeleting) {
                setDisplayText(currentText.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentText.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === currentText) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setIndex(index + 1);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, texts, speed, pause]);

    return (
        <span className="typing-container">
            {displayText}
            <span className="cursor">|</span>
            <style jsx>{`
        .typing-container {
          display: inline-block;
          min-width: 2ch;
        }
        .cursor {
          animation: blink 1s step-end infinite;
          margin-left: 2px;
          color: var(--primary);
        }
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </span>
    );
}
