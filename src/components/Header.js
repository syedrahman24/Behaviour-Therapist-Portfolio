import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <span className="icon-gradient">🧠</span>
          </div>
          <div className="logo-text">
            <h2 className="logo-name">Dr. Huda Jabeen</h2>
            <span className="logo-subtitle">BCBA • Behavior Therapist</span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href='#home' onClick={() => scrollToSection('#home')} className="nav-link">
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href='#about' onClick={() => scrollToSection('#about')} className="nav-link">
                <span className="nav-icon">👩‍⚕️</span>
                <span className="nav-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href='#services' onClick={() => scrollToSection('#services')} className="nav-link">
                <span className="nav-icon">🎯</span>
                <span className="nav-text">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a href='#stories' onClick={() => scrollToSection('#stories')} className="nav-link">
                <span className="nav-icon">⭐</span>
                <span className="nav-text">Success Stories</span>
              </a>
            </li>
            <li className="nav-item">
              <a href='#contact' onClick={() => scrollToSection('#contact')} className="nav-link">
                <span className="nav-icon">📞</span>
                <span className="nav-text">Contact</span>
              </a>
            </li>
          </ul>
          
          <div className="nav-cta">
            <button 
              className="cta-button"
              onClick={() => scrollToSection('#contact')}
            >
              <span className="cta-icon">📅</span>
              Book Session
            </button>
          </div>
        </nav>
        
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;