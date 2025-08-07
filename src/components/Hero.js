import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Banner Above Main Heading */}
        <motion.div 
          className="hero-banner"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Transforming Lives Through Behavioral Excellence
        </motion.div>

        {/* Main Layout */}
        <div className="hero-layout">
          {/* Left Side */}
          <div className="hero-left">
            {/* Main Heading at Left Top */}
            <motion.h1 
              className="hero-heading"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Help Your Child <span className="heading-highlight">Thrive & Succeed</span>
            </motion.h1>

            {/* Badges Below Heading */}
            <motion.div 
              className="hero-badges"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="badge">
                <span className="badge-icon">🏆</span>
                BCBA Certified
              </div>
              <div className="badge">
                <span className="badge-icon">⭐</span>
                3+ Years Experience
              </div>
              <div className="badge">
                <span className="badge-icon">✅</span>
                Evidence-Based
              </div>
            </motion.div>

            {/* Proven Results Data Below Badges */}
            <motion.div 
              className="hero-results-inline"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="results-boxes">
                <div className="result-box">
                  <div className="result-number">150+</div>
                  <div className="result-label">Families Helped</div>
                </div>
                <div className="result-box">
                  <div className="result-number">600+</div>
                  <div className="result-label">Sessions</div>
                </div>
                <div className="result-box">
                  <div className="result-number">95%</div>
                  <div className="result-label">Success Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Book Consultation Button Below Results */}
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button 
                className="consultation-btn"
                onClick={() => scrollToSection('#contact')}
              >
                <span className="btn-icon">📞</span>
                Schedule Free Consultation
              </button>
            </motion.div>
          </div>

          {/* Right Side - Creative Content */}
          <motion.div 
            className="hero-creative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="creative-card">
              <div className="creative-header">
                <div className="therapist-avatar">
                  <div className="avatar-circle">👩‍⚕️</div>
                  <div className="online-indicator"></div>
                </div>
                <div className="therapist-info">
                  <h3>Dr. Huda Jabeen</h3>
                  <p>Licensed BCBA Therapist</p>
                </div>
              </div>
              
              <div className="creative-content">
                <div className="skill-progress">
                  <div className="skill-item">
                    <span>Communication Skills</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '92%'}}></div>
                    </div>
                    <span className="progress-text">92%</span>
                  </div>
                  
                  <div className="skill-item">
                    <span>Social Interaction</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '88%'}}></div>
                    </div>
                    <span className="progress-text">88%</span>
                  </div>
                  
                  <div className="skill-item">
                    <span>Behavioral Management</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '95%'}}></div>
                    </div>
                    <span className="progress-text">95%</span>
                  </div>
                </div>
              </div>
              
              <div className="creative-footer">
                <div className="availability">
                  <div className="availability-dot pulsing"></div>
                  <span>Available Today 2:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;