import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Dr. Huda Jabeen</h3>
              <p>Licensed Behavior Therapist</p>
            </div>
            <p className="footer-description">
              Dedicated to helping children and families overcome behavioral challenges 
              through evidence-based therapy and compassionate care.
            </p>
            <div className="credentials">
              <span>RCI Licensed</span>
              
              <span>3+ Years Experience</span>
              
              <span>HIPAA Compliant</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Dr. Huda Jabeen</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#stories">Success Stories</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Individual Therapy</li>
              <li>Parent Training</li>
              <li>School Collaboration</li>
              <li>Group Social Skills</li>
              <li>Behavioral Assessment</li>
              <li>Crisis Intervention</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>dr.hudajabeen.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>123 Wellness Drive<br/>Springfield, ST 12345</span>
            </div>
            <div className="contact-item emergency">
              <span className="icon">🚨</span>
              <span>24/7 Crisis Support Available</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Office Hours</h4>
            <div className="hours">
              <div className="hour-item">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Sunday</span>
                <span>Emergency Only</span>
              </div>
            </div>
            <p className="emergency-note">
              <strong>Emergency consultations available 24/7</strong>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 Dr. Huda Jabeen, Behavior Therapy Practice. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#hipaa">HIPAA Notice</a>
            </div>
          </div>
          
          <div className="professional-disclaimers">
            
            <p>
              <strong>Confidentiality:</strong> All client information is protected under HIPAA regulations. 
              Emergency situations may require disclosure as mandated by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;