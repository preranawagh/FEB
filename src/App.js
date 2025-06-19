import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PopUp from './components/PopUp';

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });

    // Check system dark mode preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }

    // Handle cursor movement
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Handle cursor variants
  const handleCursorEnter = () => setCursorVariant('hover');
  const handleCursorLeave = () => setCursorVariant('default');

  return (
    <div className={`min-h-screen dark-mode-transition ${isDarkMode ? 'dark' : ''}`}>
      <CustomCursor position={cursorPosition} variant={cursorVariant} />
      
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        onMouseEnter={handleCursorEnter}
        onMouseLeave={handleCursorLeave}
      />

      <main>
        <Hero 
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
        />
        
        <Features />
        
        <Services 
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
        />
        
        <Projects />
        
        <Testimonials />
        
        <Contact 
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
        />
      </main>

      <Footer 
        onMouseEnter={handleCursorEnter}
        onMouseLeave={handleCursorLeave}
      />

      {/* Pop-up */}
      <AnimatePresence>
        {showPopUp && (
          <PopUp onClose={() => setShowPopUp(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 