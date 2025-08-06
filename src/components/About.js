import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <div className="therapist-image">
                <span>👩‍⚕️</span>
              </div>
              <div className="floating-badge">
                <span>3 Years</span>
                <small>Experience</small>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <h2>
              Meet Dr. Huda Jabeen
              <span className="subtitle">Your Trusted Behavior Therapist</span>
            </h2>
            
            <p className="intro">
              I am passionate about helping children and families overcome behavioral 
              challenges and achieve their full potential. With a specialized focus on 
              evidence-based interventions, I create personalized treatment plans that 
              address each child's unique needs.
            </p>
            
            <div className="credentials">
              <h3>Qualifications & Expertise</h3>
              <ul>
                <li>
                  <span className="icon">🎓</span>
                  Masters in Applied Behavior Analysis (ABA)
                </li>
                <li>
                  <span className="icon">📜</span>
                  Board Certified Behavior Analyst (BCBA)
                </li>
                <li>
                  <span className="icon">🏥</span>
                  3+ years of clinical experience
                </li>
                <li>
                  <span className="icon">👶</span>
                  Specialization in pediatric behavioral therapy
                </li>
              </ul>
            </div>
            
            <div className="approach">
              <h3>My Approach</h3>
              <p>
                I believe in creating a warm, supportive environment where children feel 
                safe to learn and grow. My approach combines proven behavioral techniques 
                with compassionate care, ensuring that both children and families feel 
                empowered throughout their journey.
              </p>
            </div>
            
            <div className="specializations">
              <h4>Areas of Expertise:</h4>
              <div className="spec-tags">
                <span>Autism Spectrum Disorders</span>
                <span>ADHD</span>
                <span>Anxiety & Social Skills</span>
                <span>Behavioral Challenges</span>
                <span>Parent Training</span>
                <span>School Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;