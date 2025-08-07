import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">About Dr. Huda</span>
          <h2 className="section-title">
            Meet Your <span className="title-highlight">Trusted Expert</span>
          </h2>
          <p className="section-subtitle">
            Dedicated to transforming lives through evidence-based behavioral therapy
          </p>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-profile" variants={itemVariants}>
            <div className="profile-card">
              <div className="profile-image">
                <div className="therapist-avatar">
                  <span className="avatar-emoji">👩‍⚕️</span>
                  <div className="status-indicator">
                    <div className="status-dot pulsing"></div>
                    <span>Available</span>
                  </div>
                </div>
                <div className="experience-badge">
                  <div className="badge-number">3+</div>
                  <div className="badge-text">Years Experience</div>
                </div>
              </div>
              
              <div className="profile-info">
                <h3 className="profile-name">Dr. Huda Jabeen</h3>
                <p className="profile-title">Licensed BCBA • Behavior Therapist</p>
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Families Helped</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="about-details">
            <motion.div className="intro-section" variants={itemVariants}>
              <h3 className="section-heading">My Mission</h3>
              <p className="intro-text">
                I am passionate about helping children and families overcome behavioral 
                challenges and achieve their full potential. With a specialized focus on 
                evidence-based interventions, I create personalized treatment plans that 
                address each child's unique needs and empower families for lasting success.
              </p>
            </motion.div>

            <motion.div className="credentials-section" variants={itemVariants}>
              <h3 className="section-heading">Qualifications & Expertise</h3>
              <div className="credentials-grid">
                <div className="credential-card">
                  <div className="credential-icon">🎓</div>
                  <div className="credential-info">
                    <h4>Masters in ABA</h4>
                    <p>Applied Behavior Analysis</p>
                  </div>
                </div>
                <div className="credential-card">
                  <div className="credential-icon">📜</div>
                  <div className="credential-info">
                    <h4>BCBA Certified</h4>
                    <p>Board Certified Behavior Analyst</p>
                  </div>
                </div>
                <div className="credential-card">
                  <div className="credential-icon">🏥</div>
                  <div className="credential-info">
                    <h4>Clinical Experience</h4>
                    <p>3+ years specialized practice</p>
                  </div>
                </div>
                <div className="credential-card">
                  <div className="credential-icon">👶</div>
                  <div className="credential-info">
                    <h4>Pediatric Focus</h4>
                    <p>Child behavioral therapy specialist</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="approach-section" variants={itemVariants}>
              <h3 className="section-heading">My Approach</h3>
              <div className="approach-content">
                <p className="approach-text">
                  I believe in creating a warm, supportive environment where children feel 
                  safe to learn and grow. My approach combines proven behavioral techniques 
                  with compassionate care, ensuring that both children and families feel 
                  empowered throughout their journey.
                </p>
                <div className="approach-principles">
                  <div className="principle-item">
                    <span className="principle-icon">💝</span>
                    <span className="principle-text">Compassionate Care</span>
                  </div>
                  <div className="principle-item">
                    <span className="principle-icon">🔬</span>
                    <span className="principle-text">Evidence-Based Methods</span>
                  </div>
                  <div className="principle-item">
                    <span className="principle-icon">👨‍👩‍👧‍👦</span>
                    <span className="principle-text">Family-Centered Approach</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="specializations-section" variants={itemVariants}>
              <h3 className="section-heading">Areas of Expertise</h3>
              <div className="expertise-tags">
                <span className="expertise-tag primary">Autism Spectrum Disorders</span>
                <span className="expertise-tag">ADHD Management</span>
                <span className="expertise-tag">Anxiety & Social Skills</span>
                <span className="expertise-tag">Behavioral Challenges</span>
                <span className="expertise-tag">Parent Training Programs</span>
                <span className="expertise-tag">School Consultation</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;