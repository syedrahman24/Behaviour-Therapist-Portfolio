import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="footer-section footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <div className="logo-icon">
                <span className="logo-gradient">🧠</span>
              </div>
              <div className="logo-text">
                <h3>Dr. Huda Jabeen</h3>
                <p>Licensed Behavior Therapist</p>
              </div>
            </div>
            <p className="footer-description">
              Transforming lives through evidence-based behavioral therapy. 
              Helping children and families build brighter, more successful futures together.
            </p>
            <div className="credentials">
              <div className="credential-badge">
                <div className="badge-icon trophy-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20.38C20.8 4 21.11 4.42 20.96 4.82L20.76 5.26C20.54 5.73 20 6 19.45 6H19V7C19 10.86 15.86 14 12 14S5 10.86 5 7V6H4.55C4 6 3.46 5.73 3.24 5.26L3.04 4.82C2.89 4.42 3.2 4 3.62 4H7ZM12 16C13.86 16 15.42 14.93 16 13.39V16H8V13.39C8.58 14.93 10.14 16 12 16ZM8 18H16V20C16 21.1 15.1 22 14 22H10C8.9 22 8 21.1 8 20V18Z"/>
                  </svg>
                </div>
                <span>BCBA Certified</span>
              </div>
              <div className="credential-badge">
                <div className="badge-icon experience-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                  </svg>
                </div>
                <span>3+ Years Experience</span>
              </div>
              <div className="credential-badge">
                <div className="badge-icon security-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                <span>HIPAA Compliant</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link linkedin-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link email-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="#" className="social-link phone-link" aria-label="Phone">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-section footer-links-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Services</a></li>
              <li><a href="#stories" onClick={(e) => { e.preventDefault(); scrollToSection('#stories'); }}>Success Stories</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section footer-services-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Therapy Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Individual ABA Therapy</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Parent Training & Support</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>School Collaboration</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Social Skills Groups</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Behavioral Assessment</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Crisis Intervention</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section footer-contact-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Get In Touch</h4>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon phone-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">(555) 123-4567</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">dr.hudajabeen@therapy.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon location-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">123 Wellness Drive<br/>Springfield, ST 12345</span>
                </div>
              </div>
              <div className="contact-item emergency">
                <div className="contact-icon emergency-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Emergency</span>
                  <span className="contact-value">24/7 Crisis Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="footer-section footer-hours-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4>Office Hours</h4>
            <div className="hours-grid">
              <div className="hour-item">
                <span className="day">Mon - Fri</span>
                <span className="time">8:00 AM - 6:00 PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Saturday</span>
                <span className="time">9:00 AM - 2:00 PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Sunday</span>
                <span className="time">Emergency Only</span>
              </div>
            </div>
            <div className="availability-badge">
              <div className="availability-dot pulsing"></div>
              <span>Available Today</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 Dr. Huda Jabeen, Licensed Behavior Therapist. All rights reserved.</p>
            </div>
            
          </div>
          
          <div className="professional-disclaimer">
            <p>
              <strong>Professional Notice:</strong> All therapeutic services are provided in accordance with professional standards. 
              Client confidentiality is protected under HIPAA regulations. Emergency situations may require disclosure as mandated by law.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;