import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './index.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      setCursorPos({ x: mx, y: my });
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      setRingPos({ x: rx, y: ry });
      animationFrameId = requestAnimationFrame(animRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animRing();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const elements = document.querySelectorAll('a, button');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }); // Run on every render to catch newly added links

  return (
    <>
      <div 
        className="cursor" 
        style={{ 
          left: `${cursorPos.x}px`, 
          top: `${cursorPos.y}px`,
          width: isHovering ? '20px' : '10px',
          height: isHovering ? '20px' : '10px'
        }}
      ></div>
      <div 
        className="cursor-ring" 
        style={{ 
          left: `${ringPos.x}px`, 
          top: `${ringPos.y}px`,
          width: isHovering ? '60px' : '36px',
          height: isHovering ? '60px' : '36px'
        }}
      ></div>
      <div className="scanlines"></div>

      <nav>
        <NavLink to="/" className="nav-logo">CV_</NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
          <a href="https://github.com/chaithanya812" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
