import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(1);
  const [progress, setProgress] = useState(0);
  const [animateL, setAnimateL] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [showBigText, setShowBigText] = useState(false);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(count + 1);
        setProgress((count + 1) / 100);
      }, 18); // ~1.8s total
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowBigText(true), 200);
      setTimeout(() => setAnimateL(true), 700);
      setTimeout(() => setZoom(true), 1200);
      setTimeout(() => onComplete(), 2000);
    }
  }, [count, onComplete]);

  // For text fade-in and reveal
  const word = 'Strategize.';
  const textProgress = Math.floor(progress * word.length);
  const visibleText = word.slice(0, Math.max(0, textProgress));
  const textOpacity = progress; // Fade in as fill progresses

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Counter */}
      <div className="absolute left-8 bottom-8 text-white text-2xl font-mono select-none">
        {count}
      </div>
      {/* Rectangle (battery box) */}
      <div
        className={`loader-rectangle transition-all duration-700 ease-in-out flex items-center justify-center bg-white shadow-lg relative overflow-hidden
          ${animateL ? 'l-shape' : 'w-[320px] h-[80px] rounded-lg'}
          ${zoom ? 'zoom' : ''}
        `}
        style={{
          transitionProperty: 'all',
          transitionDuration: animateL ? '700ms' : '400ms',
          transitionTimingFunction: 'ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Battery fill */}
        <div
          className="absolute left-0 top-0 h-full bg-gray-200"
          style={{
            width: `${Math.max(0, progress * 100)}%`,
            transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
            zIndex: 1,
          }}
        />
        {/* Text overlays the fill, fades in as fill progresses */}
        <span
          className={`absolute left-1/2 top-1/2 select-none font-semibold tracking-wide ${showBigText ? 'text-5xl' : 'text-3xl'} transition-all duration-500`}
          style={{
            transform: 'translate(-50%, -50%)',
            color: '#222',
            opacity: textOpacity,
            fontWeight: 300,
            zIndex: 2,
            letterSpacing: '0.05em',
            transition: 'opacity 0.3s, font-size 0.5s',
          }}
        >
          {visibleText}
        </span>
      </div>
    </div>
  );
};

export default Loader; 