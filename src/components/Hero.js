import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Empowering Lives Through 
            <span className="highlight"> Behavioral Therapy</span>
          </h1>
          <p className="hero-subtitle">
            With 3 years of dedicated experience, I help children and families 
            overcome challenges and build brighter futures through evidence-based 
            behavioral interventions.
          </p>
          <div className="hero-stats">
            <div className="stat license">
              <span className="stat-number one">100%</span>
              <span className="stat-label">R C I  Licensed</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Families Helped</span>
            </div>
            <div className="stat">
              <span className="stat-number">600+</span>
              <span className="stat-label">Consultations Completed</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.querySelector('#stories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Success Stories
            </button>
          </div>
        </div>
        <div className="hero-image">
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.8, delay: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="card-content">
              <h3>✨ Building Confidence</h3>
              <p>Helping children develop self-regulation and social skills</p>
            </div>
          </motion.div>
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.15 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="card-content">
              <h3>🎯 Targeted Approach</h3>
              <p>Personalized therapy plans for each unique child</p>
            </div>
          </motion.div>
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="card-content">
              <h3>👨‍👩‍👧‍👦 Family Support</h3>
              <p>Empowering parents with tools and strategies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;